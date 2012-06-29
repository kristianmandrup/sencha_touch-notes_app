Ext.define('FriendlyRent.view.settings.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.settings.page',
  config: {
    layout: 'vbox',
    iconCls: 'settings',
    iconMask: true    
  },
  items: [
    {
        xtype 'settings.topbar'
    },
    {
        xtype 'settings.content'  
    },
    {
        xtype 'settings.navbar'
    }
  }
});
