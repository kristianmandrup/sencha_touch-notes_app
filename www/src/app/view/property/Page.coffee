Ext.define	'FriendlyRent.view.property.Page'
  extend: 	'Ext.Panel'
  alias:  	'widget.property_page'
  config:
    layout: 'vbox'
  items: [
    {
        xtype 'property_topbar'
    }
    {
        xtype 'property_content'  
    }
    {
        xtype 'property_navbar'
    }
	]