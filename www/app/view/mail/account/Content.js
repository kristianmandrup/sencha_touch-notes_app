Ext.define('FriendlyRent.view.mail.account.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.mail.account.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Choose email account'
        },
        {
            html: 'Tenant or Landlord'
        }
    ]
  }
});