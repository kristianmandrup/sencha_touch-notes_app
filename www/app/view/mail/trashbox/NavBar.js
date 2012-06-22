Ext.define("FriendlyRent.view.mail.trashbox.NavBar", {
  extend: 'Ext.tab.Panel',
  alias: "registration.mail.trashbox.navbar",
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
        },
        {
            xtype: 'trashboxBtn'
        }
    ]
  }
});
