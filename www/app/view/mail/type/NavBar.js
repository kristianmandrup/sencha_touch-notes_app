Ext.define("FriendlyRent.view.mail.type.NavBar", {
  extend: 'Ext.tab.Panel',
  alias: "registration.mail.type.navbar",
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
            xtype: 'typeBtn'
        }
    ]
  }
});
