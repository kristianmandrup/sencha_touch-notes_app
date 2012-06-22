Ext.define("FriendlyRent.view.mail.reply.NavBar", {
  extend: 'Ext.tab.Panel',
  alias: "mail.reply.navbar",
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
        },
        {
            xtype: 'replyBtn'
        }
    ]
  }
});
