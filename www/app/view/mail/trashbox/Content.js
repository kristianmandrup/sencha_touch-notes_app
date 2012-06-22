Ext.define('FriendlyRent.view.mail.trashbox.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.mail.trashbox.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Trashbox'
        },
        {
            html: 'trashed mail'
        }
    ]
  }
});