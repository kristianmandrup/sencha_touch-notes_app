Ext.define('FriendlyRent.view.home.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.home.page',
  requires: ['FriendlyRent.view.home.TopBar', 'FriendlyRent.view.home.NavBar']
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'home.topbar'
    },
    {
        xtype 'properties.map.content'  
    },
    {
        xtype 'home.navbar'
    }
  }
});
