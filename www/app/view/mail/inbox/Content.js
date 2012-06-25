Ext.define('FriendlyRent.view.mail.inbox.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.mail.inbox.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: I18n.t('mail.inbox')
        },
        {
            html: 'received mail'
        }
    ]
  }
});