Ext.define  'FriendlyRent.model.search.Criteria'
  extend: 'Ext.data.Model'    
  config:
    idProperty: 'id'
    fields: [
      {name: 'id',                type: 'int'}
      {name: 'dateCreated',       type: 'date', dateFormat: 'c' }

      {name: 'location',          type: 'string'}
      {name: 'radius',            type: 'int'}

      # comma separated
      {name: 'propertyTypes',     type: 'string'}

      {name: 'sizeMin',           type: 'int'}
      {name: 'sizeMax',           type: 'int'}

      {name: 'roomsMin',          type: 'int'}
      {name: 'roomsMax',          type: 'int'}

      {name: 'costMin',           type: 'int'}
      {name: 'costMax',           type: 'int'}

      {name: 'furnishment',       type: 'string'}
    ]
    validations: [
      { type: 'presence', field: 'id' }
      { type: 'presence', field: 'dateCreated' }
      # { type: 'presence', field: 'location' }
    ]
  asText: ->
    "${location} ${radius} km, ${rooms} ${propertyTypes}, ${cost}"
  location: ->
    this.getLocation()
  propertyTypes: ->
    this.getPropertyTypes()
  radius: ->
    "${this.getRadius()} km"
  rooms: ->
    if not this.getRoomsMax() then "${roomsMin}" else "${roomsMin} - ${roomsMax}"
  cost: ->
    if not this.getCostMax() then "${costMin}" else "${costMin} - ${costMax}"
