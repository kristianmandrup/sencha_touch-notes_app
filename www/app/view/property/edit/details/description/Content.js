Ext.define('FriendlyRent.view.property.details.description.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.property.details.description.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Description'
        },
        {
            html: 'Auto-gen Description'
        }
    ]
  }
});