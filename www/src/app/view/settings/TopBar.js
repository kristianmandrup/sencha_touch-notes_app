Ext.define("FriendlyRent.view.settings.TopBar", {
  extend: 'Ext.Panel',
  alias: "widget.settings.topbar",
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
            xtype: 'logo.backBtn'
        }
    ]    
  }
});