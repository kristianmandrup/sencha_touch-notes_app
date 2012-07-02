
Ext.define('model.User', {
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
        name: 'email',
        type: 'email'
      }, {
        name: 'password',
        type: 'string'
      }
    ],
    hasOne: [
      {
        name: 'landlord_account',
        model: 'account.Landlord'
      }, {
        name: 'tenant_account',
        model: 'account.Tenant'
      }, {
        name: 'address',
        model: 'Address'
      }, {
        name: 'settings',
        model: 'Settings'
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
  }
});
