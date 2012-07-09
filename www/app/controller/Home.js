
Ext.define('FriendlyRent.controller.Home', {
  extend: 'Ext.app.Controller',
  requires: ['FriendlyRent.view.search.Page', 'FriendlyRent.view.search.favorites.Page'],
  config: {
    refs: {
      searchButton: 'button[action=home_search]',
      newPropertyButton: 'button[action=newProperty]',
      danishButton: '#danish_flag',
      englishButton: '#english_flag'
    },
    control: {
      searchButton: {
        tap: 'onTapSearch'
      },
      newPropertyButton: {
        tap: 'onTapNewProperty'
      },
      danishButton: {
        tap: 'onSelectDanishLang'
      },
      englishButton: {
        tap: 'onSelectEnglishLang'
      }
    }
  },
  loadStores: function() {
    return console.log('load stores');
  },
  launch: function() {
    return this.callParent(arguments);
  },
  onTapSearch: function() {
    var favorites_page;
    console.log('Go to Favorites');
    favorites_page = Ext.create('FriendlyRent.view.search.favorites.Page');
    Ext.Viewport.removeAt(0);
    return Ext.Viewport.add(favorites_page);
  },
  onTapNewProperty: function() {
    return console.log('Go to New Property');
  },
  onSelectDanishLang: function() {
    return console.log('Select Danish lang');
  },
  onSelectEnglishLang: function() {
    return console.log('Select English lang');
  }
});
