
Ext.define('FriendlyRent.view.search.Page', {
  extend: 'Ext.Panel',
  alias: 'widget.search_page',
  requires: ['FriendlyRent.view.search.TopBar', 'FriendlyRent.view.search.Content', 'FriendlyRent.view.search.NavBar'],
  config: {
    items: [
      {
        xtype: 'search_topbar',
        cls: 'nav-bar'
      }, {
        xtype: 'search_content'
      }, {
        xtype: 'search_navbar',
        cls: 'nav-bar'
      }
    ]
  }
});
