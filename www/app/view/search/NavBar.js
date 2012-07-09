
Ext.define('FriendlyRent.view.search.NavBar', {
  extend: 'FriendlyRent.NavBar',
  alias: 'widget.search_navbar',
  config: {
    items: [
      {
        html: 'menu'
      }, {
        text: 'search',
        iconCls: 'search',
        action: 'search',
        iconMask: true
      }, {
        text: 'favorites',
        iconCls: 'favorites',
        action: 'favorites',
        id: 'favorites_navBtn',
        itemId: 'favoritesBtn',
        iconMask: true
      }, {
        text: 'agents',
        iconCls: 'user',
        action: 'agents',
        iconMask: true
      }, {
        text: 'history',
        iconCls: 'search',
        action: 'history',
        iconMask: true
      }
    ]
  }
});
