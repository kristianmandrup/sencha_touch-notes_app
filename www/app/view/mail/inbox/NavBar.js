Ext.define("FriendlyRent.view.mail.inbox.NavBar", {
  extend: 'Ext.tab.Panel',
  alias: "mail.inbox.navbar",
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
            xtype: 'inboxBtn'
        }
    ]
  }
});
