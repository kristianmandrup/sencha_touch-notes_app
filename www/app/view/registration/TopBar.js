Ext.define("FriendlyRent.view.registration.landlord.TopBar", {
  extend: 'Ext.Panel',
  alias: "widget.registration.landlord.topbar",
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