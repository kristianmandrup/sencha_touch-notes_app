Ext.define("FriendlyRent.view.mail.account.NavBar", {
  extend: 'Ext.tab.Panel',
  alias: "registration.mail.account.navbar",
  config: {
    tabBarPosition: 'bottom',
    layout: {
      pack: 'center',
    },
    items: [
        {
            xtype: 'mailMenuBtn'
        },
        {
            xtype: 'accountBtn'
        }
    ]
  }
});
