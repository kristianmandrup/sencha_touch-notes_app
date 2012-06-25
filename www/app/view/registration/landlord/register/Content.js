Ext.define('FriendlyRent.view.registration.landlord.register.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.registration.landlord.register.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Register Landlord'
        },
        {
            xtype: 'registration.login.facebook'
        },
        {
            xtype: 'registration.login.twitter'
        }
    ]
  }
});