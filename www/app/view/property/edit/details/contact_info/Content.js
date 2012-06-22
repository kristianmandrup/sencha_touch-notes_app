Ext.define('FriendlyRent.view.property.details.contact_info.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.property.details.contact_info.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Contact info'
        },
        {
            html: 'Telephone'
        }
    ]
  }
});