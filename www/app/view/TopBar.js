Ext.define("FriendlyRent.view.TopBar", {
    extend: 'Ext.tab.Panel',
    alias: "widget.topbar",
    config: {
      tabBarPosition: 'top',
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
              title:   'Logo',
              iconCls: 'home',
              align:   'left'
          },
          {
              title: 'Search',
              iconCls: 'search',
              align:   'right'
          }
          // {
          //     xtype: 'spacer'
          // },
          // {
          //     title: 'Login'
          // },        
      ]    
    }
});