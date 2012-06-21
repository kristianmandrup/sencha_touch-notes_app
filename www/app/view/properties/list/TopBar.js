Ext.define("FriendlyRent.view.home.TopBar", {
  extend: 'Ext.Panel',
  alias: "widget.home.topbar",
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
            xtype: 'logo'
        },
        {
            xtype: 'loginBtn'         
        },
        {
            xtype: 'mapBtn'         
        }
    ]    
  }
});