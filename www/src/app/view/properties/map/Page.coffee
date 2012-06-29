Ext.define  'FriendlyRent.view.properties.list.Page'
  extend:   'Ext.Panel'
  alias:    'widget.properties_map_Page'
  config:
    layout: 'vbox'
  items: [
    {
        xtype 'properties_map_topbar'
    }
    {
        xtype 'properties_map_content'  
    }
    {
        xtype 'properties_navbar'
    }
  ]
