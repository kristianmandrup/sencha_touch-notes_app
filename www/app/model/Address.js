
Ext.define('FriendlyRent.model.Address', {
  extend: 'Ext.data.Model',
  config: {
    identifier: 'account',
    idProperty: 'id',
    fields: [
      {
        name: 'id',
        type: 'int'
      }, {
        name: 'floor_adr',
        type: 'string'
      }, {
        name: 'number',
        type: 'string'
      }, {
        name: 'street',
        type: 'string'
      }, {
        name: 'city',
        type: 'string'
      }, {
        name: 'region',
        type: 'string'
      }, {
        name: 'zip',
        type: 'int'
      }, {
        name: 'country',
        type: 'string'
      }
    ],
    validations: [
      {
        type: 'presence',
        field: 'id'
      }
    ]
  }
});
