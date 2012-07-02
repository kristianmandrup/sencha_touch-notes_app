Ext.define  'property.Details'
  extend: 'Ext.data.Model'
  config:
    idProperty: 'id'
    fields: [
      {name: 'id', type: 'int'}

      {name: 'title',         type: 'auto'}
      {name: 'type',          type: 'auto'}
      {name: 'rooms',         type: 'int'}
      {name: 'size',          type: 'int'}
      {name: 'furnished',     type: 'string'}
      {name: 'description',   type: 'string'}
      {name: 'year_built',    type: 'int'}
    ],
    validations: [
      { type: 'presence', field: 'id' }
      { type: 'presence', field: 'title' }
      { type: 'presence', field: 'type' }
      { type: 'presence', field: 'rooms' }
      { type: 'presence', field: 'furnished' }
      { type: 'presence', field: 'size' }
    ]
