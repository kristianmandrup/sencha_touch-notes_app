
Ext.define('FriendlyRent.model.search.Criteria', {
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
        name: 'location',
        type: 'string'
      }, {
        name: 'radius',
        type: 'int'
      }, {
        name: 'propertyTypes',
        type: 'string'
      }, {
        name: 'sizeMin',
        type: 'int'
      }, {
        name: 'sizeMax',
        type: 'int'
      }, {
        name: 'roomsMin',
        type: 'int'
      }, {
        name: 'roomsMax',
        type: 'int'
      }, {
        name: 'costMin',
        type: 'int'
      }, {
        name: 'costMax',
        type: 'int'
      }, {
        name: 'furnishment',
        type: 'string'
      }
    ],
    validations: [
      {
        type: 'presence',
        field: 'id'
      }, {
        type: 'presence',
        field: 'dateCreated'
      }
    ]
  },
  asText: function() {
    return "${location} ${radius} km, ${rooms} ${propertyTypes}, ${cost}";
  },
  location: function() {
    return this.getLocation();
  },
  propertyTypes: function() {
    return this.getPropertyTypes();
  },
  radius: function() {
    return "${this.getRadius()} km";
  },
  rooms: function() {
    if (!this.getRoomsMax()) {
      return "${roomsMin}";
    } else {
      return "${roomsMin} - ${roomsMax}";
    }
  },
  cost: function() {
    if (!this.getCostMax()) {
      return "${costMin}";
    } else {
      return "${costMin} - ${costMax}";
    }
  }
});
