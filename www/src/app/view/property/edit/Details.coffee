Ext.define  'FriendlyRent.view.property.edit.Details'
  extend:   'Ext.Panel'
  alias:    'widget.property_edit_details'
  config:    
    items: [
      {
        xtype: 'property_title_edit'
      }
      {
        xtype: 'property_costs_edit'
      }
    ]