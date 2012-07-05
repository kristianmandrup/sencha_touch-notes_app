Ext.define  'FriendlyRent.view.properties.list.Page'
  extend:   'Ext.Panel'
  alias:    'widget.properties_list_page'
  config:
    items: [
      {
          xtype: 'properties_list_topbar'
      }
      {
          xtype: 'properties_list_content'  
      }
      {
          xtype: 'properties_navbar'
      }
    ]

