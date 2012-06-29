
Ext.define('FriendlyRent.view.property.edit.contact_info.Page', {
  extend: 'Ext.Panel',
  alias: 'widget.property_edit_contact_info_page',
  config: {
    layout: 'vbox',
    items: [
      {
        xtype: 'property_edit_topbar'
      }, {
        xtype: 'property_edit_contact_info_content'
      }, {
        xtype: 'property_edit_navbar'
      }
    ]
  }
});
