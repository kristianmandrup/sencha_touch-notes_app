Ext.define('property.rental_period.Costs', {
    extend: 'Ext.data.Model',
    
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id',                type: 'int'},
            {name: 'dateCreated',       type: 'date', dateFormat: 'c' },

            {name: 'rent',              type: 'int'}, 
            {name: 'utilities',         type: 'int'},
            {name: 'tvLicense',         type: 'int'},
            {name: 'internet',          type: 'int'},
            {name: 'other'              type: 'int'},
            {name: 'totalRent'          type: 'int'},

            {name: 'deposit',           type: 'int'},
            {name: 'prepaid_rent',      type: 'int'}
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' },
            { type: 'presence', field: 'rent' }
        ]
    },
    // ensure Total Rent is recalculated on any change
    changeRent: function() {
        calculateTotalRent();
    },
    changeUtilities: function() {
        calculateTotalRent();
    },
    changeTvLicense: function() {
        calculateTotalRent();
    },
    changeInternet: function() {
        calculateTotalRent();
    },
    changeOther: function() {
        calculateTotalRent();
    },
    // Total Rent
    calculateTotalRent: function() {
        var calculatedTotalRent = this.getRent() + this.getUtilities() + this.getTvLicense() + this.getInternet() + this.getOther();
        this.set('totalRent', calculatedTotalRent);
        calculatedTotalRent;
    },
    calculateTotalFirstPayment: function() {
        this.getDeposit() + this.getPrepaidRent();
    },
    // ensure Total Rent is set
    constructor: function() {
        calculateTotalRent();
    }    
});