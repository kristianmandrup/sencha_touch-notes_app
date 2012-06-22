Ext.define('FriendlyRent.view.mail.inbox.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.mail.inbox.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Inbox'
        },
        {
            html: 'received mail'
        }
    ]
  }
});