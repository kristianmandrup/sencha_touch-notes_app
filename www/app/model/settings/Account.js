
Ext.define('settings.Account', {
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
      }
    ],
    hasOne: [
      {
        name: 'account',
        model: 'settings.Account'
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
        field: 'subject',
        message: 'Please enter a subject for this mail'
      }
    ]
  }
});
