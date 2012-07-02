
Ext.define('model.Mail', {
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
        name: 'subject',
        type: 'string'
      }, {
        name: 'body',
        type: 'string'
      }, {
        name: 'type',
        type: 'string'
      }
    ],
    hasOne: {
      name: 'sender',
      type: 'account'
    },
    hasMany: {
      name: 'receivers',
      model: 'User'
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
