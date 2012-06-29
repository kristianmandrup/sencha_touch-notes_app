
Ext.define('FriendlyRent.view.property.edit.location.Page', {
  extend: 'Ext.Panel',
  alias: 'widget.property_edit_location_page',
  config: {
    layout: 'vbox',
    items: [
      {
        xtype: 'property_edit_topbar'
      }, {
        xtype: 'property_edit_location_content'
      }, {
        xtype: 'property_edit_navbar'
      }
    ]
  }
});
