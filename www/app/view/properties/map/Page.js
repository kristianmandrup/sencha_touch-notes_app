Ext.define('FriendlyRent.view.properties.list.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.properties.list.Page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'properties.map.topbar'
    },
    {
        xtype 'properties.map.content'  
    },
    {
        xtype 'properties.navbar'
    }
  }
});
