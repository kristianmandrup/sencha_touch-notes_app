Ext.define('FriendlyRent.view.properties.list.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.properties.list.Page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'properties.list.topbar'
    },
    {
        xtype 'properties.list.content'  
    },
    {
        xtype 'properties.navbar'
    }
  }
});
