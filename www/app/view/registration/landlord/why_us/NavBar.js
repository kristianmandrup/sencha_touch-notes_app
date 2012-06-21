Ext.define("FriendlyRent.view.registration.landlord.why_us.NavBar", {
  extend: 'Ext.tab.Panel',
  alias: "registration.landlord.why_us.NavBar",
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
            xtype: 'newMenuBtn'
        },
        {
            xtype: 'whyUsBtn'
        }
    ]
  }
});
