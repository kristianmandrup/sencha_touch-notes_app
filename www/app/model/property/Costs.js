
Ext.define('property.Costs', {
  extend: 'Ext.data.Model',
  config: {
    idProperty: 'id',
    fields: [
      {
        name: 'id',
        type: 'int'
      }, {
        name: 'dateCreated',
        type: 'date',
        dateFormat: 'c'
      }, {
        name: 'rent',
        type: 'int'
      }, {
        name: 'utilities',
        type: 'int'
      }, {
        name: 'tvLicense',
        type: 'int'
      }, {
        name: 'internet',
        type: 'int'
      }, {
        name: 'other',
        type: 'int'
      }, {
        name: 'totalRent',
        type: 'int'
      }, {
        name: 'deposit',
        type: 'int'
      }, {
        name: 'prepaid_rent',
        type: 'int'
      }
    ],
    validations: [
      {
        type: 'presence',
        field: 'id'
      }, {
        type: 'presence',
        field: 'dateCreated'
      }, {
        type: 'presence',
        field: 'rent'
      }
    ]
  },
  constructor: function() {
    return calculateTotalRent();
  },
  changeRent: function() {
    return calculateTotalRent();
  },
  changeUtilities: function() {
    return calculateTotalRent();
  },
  changeTvLicense: function() {
    return calculateTotalRent();
  },
  changeInternet: function() {
    return calculateTotalRent();
  },
  changeOther: function() {
    return calculateTotalRent();
  },
  calculateTotalRent: function() {
    var calculatedTotalRent;
    calculatedTotalRent = this.getRent() + this.getUtilities() + this.getTvLicense() + this.getInternet() + this.getOther();
    this.set('totalRent', calculatedTotalRent);
    return calculatedTotalRent;
  },
  calculateTotalFirstPayment: function() {
    return this.getDeposit() + this.getPrepaidRent();
  }
});
