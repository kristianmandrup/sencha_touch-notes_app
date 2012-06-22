Ext.define("FriendlyRent.view.registration.landlord.register.NavBar", {
  extend: 'Ext.tab.Panel',
  alias: "registration.landlord.register.navbar",
  config: {
    tabBarPosition: 'bottom',
    defaults: {
      html: 'text',
      styleHtmlContent: true
    },
    layout: {
      pack: 'center',
    },
    items: [
        {
            xtype: 'tenantMenuBtn'
        },
        {
            xtype: 'whyUsBtn'
        },
        {
            xtype: 'registerBtn'
        }
    ]
  }
});
