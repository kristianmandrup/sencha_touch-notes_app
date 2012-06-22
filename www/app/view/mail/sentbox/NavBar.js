Ext.define("FriendlyRent.view.mail.sentbox.NavBar", {
  extend: 'Ext.tab.Panel',
  alias: "registration.mail.sentbox.navbar",
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
            xtype: 'sentboxBtn'
        }
    ]
  }
});
