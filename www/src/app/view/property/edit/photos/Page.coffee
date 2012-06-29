Ext.define  'FriendlyRent.view.property.edit.photos.Page'
  extend: 'Ext.Panel'
  alias:  'widget.property_edit_photos_page'
  config:
    layout: 'vbox'
  items: [
    {
        xtype: 'property_edit_topbar'
    }
    {
        xtype: 'property_edit_photos.content'  
    }
    {
        xtype: 'property_edit_navbar'
    }
  ]
