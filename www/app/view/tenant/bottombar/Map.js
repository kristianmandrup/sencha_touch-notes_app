Ext.define("FriendlyRent.view.bottombar.Map", {
    extend: 'Ext.tab.Panel',
    alias: "widget.bottombar.map",
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
              title: 'List',
              iconCls: 'list'
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