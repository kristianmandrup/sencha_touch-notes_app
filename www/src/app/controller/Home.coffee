Ext.define  'FriendlyRent.controller.Home'
  extend:   'Ext.app.Controller'
  config:
    refs:
      searchButton:       'button[action=search]'
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
  onTapSearch: ->
    console.log 'Go to Search'
    search_page = Ext.create 'FriendlyRent.view.search.Page'
    Ext.Viewport.removeAt(0)
    Ext.Viewport.add search_page
  onTapNewProperty: ->
    console.log 'Go to New Property'
  onSelectDanishLang: ->
    console.log 'Select Danish lang'
  onSelectEnglishLang: ->
    console.log 'Select English lang'
