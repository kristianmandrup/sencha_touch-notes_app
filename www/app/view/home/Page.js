Ext.define('FriendlyRent.view.home.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.home.page',
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
