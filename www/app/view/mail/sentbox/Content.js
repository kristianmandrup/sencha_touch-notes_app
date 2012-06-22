Ext.define('FriendlyRent.view.mail.sentbox.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.mail.sentbox.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Sentbox'
        },
        {
            html: 'sent mail'
        }
    ]
  }
});