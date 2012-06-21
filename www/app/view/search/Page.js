Ext.define('FriendlyRent.view.properties.list.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.properties.list.Page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'search.topbar'
    },
    {
        xtype 'search.content'  
    },
    {
        xtype 'search.navbar'
    }
  }
});
