Ext.define  'FriendlyRent.view.property.Content'
  extend:   'Ext.Panel'
  alias:    'widget.property_content'
  requires: [
    'FriendlyRent.view.property.Picture'
    'FriendlyRent.view.property.MainInfo'
    'FriendlyRent.view.property.details.Cost'    
  ]
  config:
    items: [
      {
        xtype:  'property_picture'
      }
      {
        xtype:  'property_main_info'
      }
      {
        xtype:  'property_costs'
      }     
      {
        xtype:  'property_description'
      }
    ]