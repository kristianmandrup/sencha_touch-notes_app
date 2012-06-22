Ext.define("FriendlyRent.view.registration.tenant.why_us.NavBar", {
  extend: 'Ext.tab.Panel',
  alias: "registration.tenant.why_us.navbar",
  config: {
    tabBarPosition: 'bottom',
    layout: {
      pack: 'center',
    },
    items: [
        {
            xtype: 'tenantMenuBtn'
        },
        {
            xtype: 'whyUsBtn'
        }
    ]
  }
});
