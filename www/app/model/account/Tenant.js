
Ext.define('account.Tenant', {
  extend: 'Account',
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
        name: 'contact_requests_made',
        type: 'int'
      }
    ],
    belongsTo: 'User',
    hasOne: {
      name: 'mail_account',
      model: 'mail.Account'
    },
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
