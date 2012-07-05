
Ext.define('FriendlyRent.controller.Search', {
  extend: 'Ext.app.Controller',
  requires: ['FriendlyRent.view.search.Page', 'FriendlyRent.view.search.favorites.Page', 'FriendlyRent.view.search.agents.Page', 'FriendlyRent.view.search.history.Page'],
  config: {
    refs: {
      searchButton: 'button[action=search]',
      favoritesButton: 'button[action=favorites]',
      agentsButton: 'button[action=agents]',
      historyButton: 'button[action=history]'
    },
    control: {
      searchButton: {
        tap: 'onTapSearch'
      },
      favoritesButton: {
        tap: 'onTapFavorites'
      },
      agentsButton: {
        tap: 'onTapAgents'
      },
      historyButton: {
        tap: 'onTapHistory'
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
  onTapFavorites: function() {
    var favorites_page;
    console.log('Go to Favorites');
    favorites_page = Ext.create('FriendlyRent.view.search.favorites.Page');
    Ext.Viewport.removeAt(0);
    return Ext.Viewport.add(favorites_page);
  },
  onTapAgents: function() {
    var agents_page;
    console.log('Go to Agents');
    agents_page = Ext.create('FriendlyRent.view.search.agents.Page');
    Ext.Viewport.removeAt(0);
    return Ext.Viewport.add(agents_page);
  },
  onTapHistory: function() {
    var history_page;
    console.log('Go to History');
    history_page = Ext.create('FriendlyRent.view.search.history.Page');
    Ext.Viewport.removeAt(0);
    return Ext.Viewport.add(history_page);
  }
});
