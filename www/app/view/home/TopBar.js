Ext.define("FriendlyRent.view.home.TopBar", {
    extend: 'Ext.tab.Panel',
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
              xtype: 'logo.image'
          },
          {
              xtype: 'loginBtn'         
          },
          {
              xtype: 'listBtn'         
          }
      ]    
    }
});
