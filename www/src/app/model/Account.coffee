Ext.define  'FriendlyRent.model.Account'
  extend: 'Ext.data.Model'
  config:
    idProperty: 'id'
    fields: [
        {name: 'id',                type: 'int'}
        {name: 'dateCreated',       type: 'date', dateFormat: 'c'
    ]
    belongsTo: 'User'
    hasOne:    {name: 'mail_account', model: 'mail.Account'}
    hasMany: [
        {name: 'favorites',         model: 'search.Favorite'}
    ]
    validations: [
      { type: 'presence', field: 'id' }
      { type: 'presence', field: 'dateCreated' }
    ]
