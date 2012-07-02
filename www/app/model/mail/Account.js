
Ext.define('model.mail.Account', {
  extend: 'Ext.data.Model',
  config: {
    idProperty: 'id',
    fields: [
      {
        name: 'id',
        type: 'int'
      }
    ],
    hasMany: {
      name: 'messages',
      model: 'Mail'
    },
    validations: [
      {
        type: 'presence',
        field: 'id'
      }
    ]
  }
});
