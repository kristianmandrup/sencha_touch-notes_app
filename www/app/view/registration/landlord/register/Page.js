
Ext.define('FriendlyRent.view.registration.landlord.why_us.Page', {
  extend: 'Ext.Panel',
  alias: 'widget.registration.landlord.why_us.page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
      xtype: 'registration.landlord.topbar'
    }, {
      xtype: 'registration.landlord.register.content'
    }, {
      xtype: 'registration.landlord.register.navbar'
    }
  ]
});
