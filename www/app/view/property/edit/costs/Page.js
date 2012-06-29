
Ext.define('FriendlyRent.view.property.edit.costs.Page', {
  extend: 'Ext.Panel',
  alias: 'widget.property_edit_costs_page',
  config: {
    layout: 'vbox',
    items: [
      {
        xtype: 'property_edit_topbar'
      }, {
        xtype: 'property_edit_costs_content'
      }, {
        xtype: 'property_edit_navbar'
      }
    ]
  }
});
