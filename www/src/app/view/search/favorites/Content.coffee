Ext.define  'FriendlyRent.view.search.favorites.Content'
  extend:   'Ext.List'
  alias:    'widget.search_favorites_content'
  requires: [
    'FriendlyRent.store.Favorites'
    # 'FriendlyRent.view.properties.list.item'
  ]
  # http://www.sencha.com/blog/dive-into-dataview-with-sencha-touch-2-beta-2/
  config:  
    store:        'Favorites'    
    itemId:       'favorites_list'
    loadingText:  'Loading favorites...'
    emptyText:    '<div class="favorites-list empty-text">No favorites found.</div>'
      # Ext.XTemplate.from("property", helperFunctions
    itemTpl:      Ext.XTemplate.from(
      "property"
      typeDesc: (item) ->
        "#{item.rooms} room #{item.type}, #{item.furnished} furnished"
      costDesc: (cost) ->
        "#{cost} DKK"
      periodDesc: (period) ->
        if period then "#{period.start_date} to #{period.end_date}" else ""
    )
    onItemDisclosure: (record, btn, index) ->
      console.log('Disclose Favorite', record, index)
