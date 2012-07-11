Ext.define 'FriendlyRent.helper.search.criteria'
  constructor: ->
    TemplateHelper::augment this
  mainInfo: propertyHelper.mainInfo
  criteria: (criteria) ->
    "#{this.locationDesc(criteria)} #{this.sizeDesc(criteria)} #{this.typeDesc(criteria)} #{this.roomDesc(criteria)}"
  locationDesc: (criteria) ->
    if _.isBlank(criteria.location) then "anywhere" else this.mainInfo.locationDesc(criteria)
  roomsDesc: (criteria) ->
    if _.isBlank(criteria.rooms) then "any rooms" else this.mainInfo.roomDesc(criteria)
  sizeDesc: (criteria) ->
    if _.isBlank(criteria.size) then "any size" else this.mainInfo.sizeDesc(criteria)
  typeDesc: (criteria) ->
    if _.isBlank(criteria.type) then "any property type" else criteria.type
  periodDesc: (criteria) ->
    if _.isBlank(criteria.period) then "any period" else this.helper.periodRangeDesc(criteria)
  costDesc: (criteria) ->
    if _.isBlank(criteria.period) then "any cost" else this.helper.costRangeDesc(criteria)
  rulesDesc: (criteria) ->
    if _.isBlank(criteria.period) then "any rules" else this.mainInfo.rulesDesc(criteria)  
    # private
  furnishedDesc: (criteria) ->
    if _.isBlank(criteria.furnished) then "" else this.furnishDesc(criteria)

  helper:
    furnishDesc: (criteria) ->
      if (criteria.furnished) then "furnished" else "not furnished"

    periodRangeDesc: (criteria) ->
      [this.helper.startTimeDesc(criteria), this.helper.durationDesc(criteria)].join ' '

    costRangeDesc: (criteria) ->
      min = criteria.cost.min
      max = criteria.cost.max
      return "max #{max}" if _.isBlank(min)
      return "min #{min}" if _.isBlank(max)
      "#{min} - #{max} DKK"

    startTimeDesc: (criteria) ->
      start = criteria.period.start
      return "starting any time" if _.isBlank(criteria.period.start)
      return 'ASAP' if start == 'asap'
      "in #{this.timeDesc(criteria.period.start)}"

    durationDesc: (criteria) ->
      return "lasting any duration" if _.isBlank(criteria.period.duration)      
      "for at least #{this.timeDesc(criteria.period.duration)}"

    timeDesc: (time) ->
      unit = if time.match(/m$/) then 'month' else 'week'
      number = (Number) time.match(/\d/)
      unit = if number > 1 then "#{unit}s" else unit
      [number, unit].join ' '