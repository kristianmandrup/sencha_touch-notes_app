Ext.define 'FriendlyRent.helper.property.Detail'
  constructor: ->
    TemplateHelper::augment this
  description:
    desc: (desc) ->
      if _.isBlank(desc) then "No description" else desc      
  facilities:
    desc: (facilities) ->
      if not facilities.length then "No facilities" else desc      
  locationDetails:      
    desc: (locations) ->
      if not locations.length then "No locations" else desc      

  monthlyCosts:
    costDesc: (label, cost, currency = 'DKK') ->
      '<div class="label">#{label}</div><div class="cost">#{cost}</cost>'
    rentDesc: (cost) ->
      this.costDesc 'Rent', cost
    utilitiesDesc: (cost) ->
      this.costDesc 'Utilities', cost
    mediaDesc: (cost) ->
      this.costDesc 'Media', cost
    totalDesc: (cost) ->
      this.costDesc 'Total', cost
  onetimeCosts:
    costDesc: (label, cost, currency = 'DKK') ->
      '<div class="label">#{label}</div><div class="cost">#{cost}</cost>'
    depositDesc: (cost) ->
      this.costDesc 'Deposit', cost
    prepaidDesc: (cost) ->
      this.costDesc 'Prepaid', cost
  details:
    rulesDesc: (item) ->
      "#{this.petsDesc(item)} <br/> #{this.smokingDesc(item)}"
    petsDesc: (item) ->
      this.ruleDesc('pets', item.pets)
    smokingDesc: (item) ->
      this.ruleDesc('smoking', item.smoking)
    ruleDesc: (type, rule) ->
      line = "#{type} allowed"
      if not rule then "no #{line}" else line

propertyDetailHelper = new FriendlyRent.helper.property.Detail