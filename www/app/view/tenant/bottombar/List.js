Ext.define("FriendlyRent.view.bottombar.List", {
    extend: 'Ext.tab.Panel',
    alias: "widget.bottombar.list",
    config: {
      tabBarPosition: 'bottom',
      defaults: {
        html: 'text',
        styleHtmlContent: true
      },
      layout: {
        pack: 'center',
        animation: {type: 'slide', duration: 500 }
      },
      items: [
          {
              title: 'Home',
              iconCls: 'home'         
          },
          {
              title: 'Map',
              iconCls: 'maps'
          },
          {
              title: 'Favorites',
              iconCls: 'favorites'
          },
          {
              title: 'Preferences',
              iconCls: 'settings'
          }
      ]    
    }
});