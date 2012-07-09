Ext.define  'FriendlyRent.controller.Home'
  extend:   'Ext.app.Controller'
  requires: [
    'FriendlyRent.view.search.Page'
    'FriendlyRent.view.search.favorites.Page'
  ]  
  config:
    refs:
      searchButton:       'button[action=home_search]'
      newPropertyButton:  'button[action=newProperty]'
      danishButton:       '#danish_flag'
      englishButton:      '#english_flag'
    control:
      searchButton:
        tap: 'onTapSearch'
      newPropertyButton:
        tap: 'onTapNewProperty'
      danishButton:
        tap: 'onSelectDanishLang'
      englishButton:
        tap: 'onSelectEnglishLang'

  loadStores: ->
    console.log 'load stores'
  launch: ->
    this.callParent arguments
    # this.loadStores        

  onTapSearch: ->
    console.log 'Go to Favorites'
    # search_page = Ext.create 'FriendlyRent.view.search.Page'
    favorites_page = Ext.create 'FriendlyRent.view.search.favorites.Page'
    Ext.Viewport.removeAt(0)
    Ext.Viewport.add favorites_page
  onTapNewProperty: ->
    console.log 'Go to New Property'
  onSelectDanishLang: ->
    console.log 'Select Danish lang'
  onSelectEnglishLang: ->
    console.log 'Select English lang'
