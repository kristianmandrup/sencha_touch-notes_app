
Ext.define('FriendlyRent.view.registration.landlord.register.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.registration.landlord.register.content',
  config: {
    layout: 'vbar',
    items: [
      {
        html: 'Register Landlord'
      }, {
        xtype: 'registration_login_facebook'
      }, {
        xtype: 'registration_login_twitter'
      }
    ]
  }
});
