
Ext.define('FriendlyRent.controller.Home', {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      searchButton: 'button[action=search]',
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
  onTapSearch: function() {
    var search_page;
    console.log('Go to Search');
    search_page = Ext.create('FriendlyRent.view.search.Page');
    Ext.Viewport.removeAt(0);
    return Ext.Viewport.add(search_page);
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
