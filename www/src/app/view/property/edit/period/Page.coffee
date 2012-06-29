Ext.define  'FriendlyRent.view.property.edit.period.Page'
  extend:   'Ext.Panel'
  alias:    'widget.property_edit_period_page'
  config:
    layout: 'vbox'
  items: [
    {
        xtype: 'property_edit_topbar'
    }
    {
        xtype: 'property_edit_period_content'  
    }
    {
        xtype: 'property_edit_navbar'
    }
  ]
