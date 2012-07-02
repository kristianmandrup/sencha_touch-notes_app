Ext.define  'property.RentalPeriod'
  extend:   'Ext.data.Model'
  config:
    idProperty: 'id'
    fields: [
      {name: 'id', type: 'int'}
      {name: 'dateCreated',       type: 'date', dateFormat: 'c' }
  
      {name: 'duration',          type: 'int'} # seconds
      {name: 'start_date',        type: 'date', dateFormat: 'c' }
      {name: 'end_date',          type: 'date', dateFormat: 'c' }
      {name: 'asap',              type: 'bool'}
      {name: 'publish_at',        type: 'date', dateFormat: 'c' }
    ],
    hasOne: {name: 'rental_costs',  model: 'property.rental_period.costs'}
    validations: [
      { type: 'presence', field: 'id' }
      { type: 'presence', field: 'dateCreated' }
      { type: 'presence', field: 'rent' }
    ]
