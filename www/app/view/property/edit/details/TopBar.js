Ext.define("FriendlyRent.view.property.details.TopBar", {
  extend: 'Ext.Panel',
  alias: "widget.property.details.topbar",
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