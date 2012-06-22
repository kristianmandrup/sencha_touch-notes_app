Ext.define('FriendlyRent.view.mail.type.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.mail.type.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Mail type'
        },
        {
            html: 'Friendly rent, all, for properties'
        }
    ]
  }
});