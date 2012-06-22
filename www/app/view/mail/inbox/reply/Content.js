Ext.define('FriendlyRent.view.mail.inbox.reply.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.mail.inbox.reply.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Reply mail'
        },
        {
            html: 'write your reply message...'
        }
    ]
  }
});