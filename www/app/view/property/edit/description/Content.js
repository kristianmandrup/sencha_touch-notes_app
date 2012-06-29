
Ext.define('FriendlyRent.view.property.description.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.property_edit_description_content',
  config: {
    layout: 'vbar',
    items: [
      {
        html: 'Description'
      }, {
        html: 'Auto-gen Description'
      }
    ]
  }
});
