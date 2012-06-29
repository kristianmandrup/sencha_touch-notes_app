Ext.define  'FriendlyRent.view.properties.list.Item'
  extend:   'Ext.Panel'
  alias:    'widget.properties_list_item'
  config:
    layout: 'hbox'
    items: [
      {
          xtype: 'properties_list_item_image'
      }
      {
          xtype: 'properties_list_item_content'
      }
    ]
