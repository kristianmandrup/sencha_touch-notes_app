Ext.define("FriendlyRent.view.mail.TopBar", {
  extend: 'Ext.Panel',
  alias: "widget.mail.topbar",
  config: {
    tabBarPosition: 'top',
    defaults: {
      html: 'text',
      styleHtmlContent: true
    },
    layout: {
      pack: 'center',
    },
    items: [
        {
            xtype: 'backBtn'
        },
        {
            xtype: 'orderBtn'
        }
    ]    
  }
});