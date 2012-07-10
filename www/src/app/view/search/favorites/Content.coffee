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
    itemTpl:      Ext.XTemplater.getRegisteredTemplate('favorite')
    # onItemDisclosure: (record, btn, index) ->
      # console.log('Disclose Favorite', record, index)
  initialize: ->
    this.callParent()
    Ext.Function.defer this.setFavorites, 200
    # this.getComponent('favoritesBtn').setDisabled(true)
    # this.getComponent('favoritesBtn').addCls('active-icon')    
    # Ext.getCmp('favorites_navBtn').setDisabled(true) # addCls('active-icon')
  setFavorites: ->
    # Ext.ComponentQuery.query('#favorites_navBtn').setDisabled(true)
    $('#favorites_navBtn').addClass('active-icon')
    $('.favorite-stars').rateit
      max: 3
