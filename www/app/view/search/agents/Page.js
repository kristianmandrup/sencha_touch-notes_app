
Ext.define('FriendlyRent.view.search.agents.Page', {
  extend: 'Ext.Panel',
  alias: 'widget.search_agents_page',
  requires: ['FriendlyRent.view.search.TopBar', 'FriendlyRent.view.search.NavBar', 'FriendlyRent.view.search.agents.Content'],
  config: {
    items: [
      {
        xtype: 'search_topbar',
        cls: 'nav-bar'
      }, {
        xtype: 'search_agents_content'
      }, {
        xtype: 'search_navbar',
        cls: 'nav-bar'
      }
    ]
  }
});
