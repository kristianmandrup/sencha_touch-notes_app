Ext.define  'model.Mail'
  extend: 'Ext.data.Model'  
  config:
    idProperty: 'id'
    fields: [
      {name: 'id',            type: 'int'}
      {name: 'dateCreated',   type: 'date', dateFormat: 'c' }
      {name: 'subject',       type: 'string'}
      {name: 'body',          type: 'string'}
      {name: 'type',          type: 'string'} # payment, services, contacts, legal
      # IMPORTANT: can't have a status like bookmarked or replied, as a message 
      # will appear in multiple accounts and for each account have a uniques status
    ]
    hasOne:  {name: 'sender',        model: 'User'}
    hasMany: {name: 'receivers',     model: 'User'}
    validations: [
      { type: 'presence', field: 'id' }
      { type: 'presence', field: 'dateCreated' }
      { type: 'presence', field: 'subject', message: 'Please enter a subject for this mail' }
    ]
