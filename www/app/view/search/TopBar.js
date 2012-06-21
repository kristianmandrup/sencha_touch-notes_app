Ext.define("FriendlyRent.view.search.TopBar", {
  extend: 'Ext.Panel',
  alias: "widget.search.topbar",
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
          xtype: 'listBtn'
      },
      {
          xtype: 'mapBtn'         
      }
    ]    
  }
});