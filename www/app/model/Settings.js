
Ext.define('model.Settings', {
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
        name: 'languageCode',
        type: 'string'
      }, {
        name: 'currencyCodeISO',
        type: 'string'
      }
    ],
    hasOne: {
      name: 'settings_account',
      model: 'settings.Account'
    },
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
