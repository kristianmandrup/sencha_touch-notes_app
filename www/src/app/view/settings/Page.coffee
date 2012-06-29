Ext.define  'FriendlyRent.view.settings.Page'
  extend:   'Ext.Panel',
  alias:    'widget.settings_page'
  config:
    layout: 'vbox'
    iconCls: 'settings'
    iconMask: true
  items: [
    {
        xtype 'settings_topbar'
    }
    {
        xtype 'settings_content'  
    }
    {
        xtype 'settings_navbar'
    }
  ]