Ext.define('FriendlyRent.view.property.edit.costs.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.property_edit_costs_content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Rent'
        },
        {
            html: 'Utilities'
        }
    ]