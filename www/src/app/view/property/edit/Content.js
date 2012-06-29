Ext.define  'FriendlyRent.view.property.edit.Content'
  extend:   'Ext.Panel'
  alias:    'widget.property_edit_content'
  config:
    layout: 'vbar'
    items: [
      {
        xtype: 'property_edit_image'
      }
      {
        xtype: 'property_edit_details'
      }
    ]