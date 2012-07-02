
Ext.define('payment.CreditCard', {
  extend: 'Ext.data.Model',
  config: {
    idProperty: 'id',
    fields: [
      {
        name: 'id',
        type: 'int'
      }, {
        name: 'number',
        type: 'int'
      }, {
        name: 'acc',
        type: 'int'
      }, {
        name: 'full_name',
        type: 'string'
      }, {
        name: 'street',
        type: 'string'
      }, {
        name: 'city',
        type: 'string'
      }, {
        name: 'zip',
        type: 'string'
      }, {
        name: 'country',
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
  }
});
