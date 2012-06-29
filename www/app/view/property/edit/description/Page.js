
Ext.define('FriendlyRent.view.property.edit.description.Page', {
  extend: 'Ext.Panel',
  alias: 'widget.property_edit_description_page',
  config: {
    layout: 'vbox',
    items: [
      {
        xtype: 'property_edit_topbar'
      }, {
        xtype: 'property_edit_description_content'
      }, {
        xtype: 'property_edit_navbar'
      }
    ]
  }
});
