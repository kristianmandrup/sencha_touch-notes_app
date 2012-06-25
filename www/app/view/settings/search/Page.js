Ext.define('FriendlyRent.view.settings.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.settings.page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'settings.topbar'
    },
    {
        xtype 'search.content'  
    },
    {
        xtype 'settings.navbar'
    }
  }
});
