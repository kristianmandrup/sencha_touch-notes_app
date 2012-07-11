Ext.define 'FriendlyRent.helper.Property'
  constructor: ->
    TemplateHelper::augment this
  contact:
    contactReqDesc: (requests) ->
      "#{requests} have contacted the landlord"      
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

propertyHelper = new FriendlyRent.helper.Property