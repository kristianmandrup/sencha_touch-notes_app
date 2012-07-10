console

class TemplateHelper extends Mixin

class PropertyHelper
	constructor: ->
  	TemplateHelper::augment this
  mainInfo:
    mainDesc: (item) ->
      "#{this.sizeDesc(item)} #{item.type} #{this.floorDesc(item)}"
    secondaryDesc: (item) ->
      "#{this.roomDesc(item)}"
    sizeDesc: (item) ->
      "#{item.size} m2"
    roomDesc: (item) ->
      room = if item.rooms > 1 then "rooms" else "room"
      "#{item.rooms}/#{item.bedrooms} #{this.furnishedDesc(item)} #{room}"
    floorDesc: (item) ->
      adj = switch item.floor
        when 1 then "st"
        when 2 then "nd"
        when 3 then "rd"
        else "th"
      if item.floor > 0 then "on #{item.floor}#{adj} floor" else ""
    furnishedDesc: (item) ->
      if item.furnished then "furnished" else ""
    costDesc: (cost) ->
      "#{cost} DKK"
    locationDesc: (item) ->
      "#{item.city} (#{item.region}, #{item.countryCode})"
    periodDesc: (period) ->
      if period then "#{period.start_date} to #{period.end_date}" else ""
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

propertyHelper = new PropertyHelper