// Shared by all Property Details pages: Simply set the current Item
Ext.define("FriendlyRent.view.property.details.NavBar", {
  extend: 'Ext.tab.Panel',
  alias: "registration.property.details.navbar",
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
            xtype: 'editMenuBtn'
        },
        {
            xtype: 'locationBtn'
        },
        {
            xtype: 'detailsBtn'
        },
        {
            xtype: 'periodBtn'
        },
        {
            xtype: 'photoBtn'
        },
        {
            xtype: 'moreBtn'
        }        
    ]
  }
});
