Ext.define("FriendlyRent.view.properties.list.NavBar", {
  extend: 'Ext.tab.Panel',
  alias: "widget.properties.list.navbar",
  config: {
    tabBarPosition: 'bottom',
    defaults: {
      html: 'text',
      styleHtmlContent: true
    },
    layout: {
      pack: 'center',
    },
    items: [
        {
            xtype: 'homeMenuBtn'
        },
        {
            xtype: 'searchBtn'         
        },
        {
            xtype: 'newBtn'
        },
        {
            xtype: 'aboutBtn'
        },
        {
            xtype: 'settingsBtn'
        }
    ]    
  }
});