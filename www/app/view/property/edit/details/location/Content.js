Ext.define('FriendlyRent.view.property.details.location.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.property.details.location.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Location'
        },
        {
            html: 'Map here...'
        }
    ]
  }
});