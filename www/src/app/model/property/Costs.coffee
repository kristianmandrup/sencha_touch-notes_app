Ext.define  'property.Costs'
  extend: 'Ext.data.Model'
  config:
    idProperty: 'id',
    fields: [
        {name: 'id',                type: 'int'}
        {name: 'dateCreated',       type: 'date', dateFormat: 'c' }

        {name: 'rent',              type: 'int'}
        {name: 'utilities',         type: 'int'}
        {name: 'tvLicense',         type: 'int'}
        {name: 'internet',          type: 'int'}
        {name: 'other',             type: 'int'}
        {name: 'totalRent',         type: 'int'}

        {name: 'deposit',           type: 'int'},
        {name: 'prepaid_rent',      type: 'int'}
    ]
    validations: [
        { type: 'presence', field: 'id' }
        { type: 'presence', field: 'dateCreated' }
        { type: 'presence', field: 'rent' }
    ]

  # ensure Total Rent is set
  constructor: ->
    calculateTotalRent()

  # ensure Total Rent is recalculated on any change
  changeRent: ->
    calculateTotalRent()
  changeUtilities: ->
    calculateTotalRent()
  changeTvLicense: ->
    calculateTotalRent()
  changeInternet: ->
    calculateTotalRent()
  changeOther: ->
    calculateTotalRent()

  # Total Rent
  calculateTotalRent: ->
    calculatedTotalRent = this.getRent() + this.getUtilities() + this.getTvLicense() + this.getInternet() + this.getOther()
    this.set('totalRent', calculatedTotalRent)
    calculatedTotalRent
  calculateTotalFirstPayment: ->
    this.getDeposit() + this.getPrepaidRent()
