
Ext.define('FriendlyRent.view.search.history.Page', {
  extend: 'Ext.Panel',
  alias: 'widget.search_history_page',
  requires: ['FriendlyRent.view.search.TopBar', 'FriendlyRent.view.search.history.Content', 'FriendlyRent.view.search.NavBar'],
  config: {
    items: [
      {
        xtype: 'search_topbar',
        cls: 'nav-bar'
      }, {
        xtype: 'search_history_content'
      }, {
        xtype: 'search_navbar',
        cls: 'nav-bar'
      }
    ]
  }
});
