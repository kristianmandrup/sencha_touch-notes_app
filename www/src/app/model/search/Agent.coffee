Ext.define  'FriendlyRent.model.search.Agent'
  extend:   'Ext.data.Model'    
  config:
    idProperty: 'id'
    fields: [
      {name: 'id',                type: 'int'}
      {name: 'dateCreated',       type: 'date', dateFormat: 'c' }
    ],
    hasOne: [
      {name: 'criteria', model: 'search.Criteria'}
    ]
    validations: [
      { type: 'presence', field: 'id' }
      { type: 'presence', field: 'dateCreated' }
    ]
