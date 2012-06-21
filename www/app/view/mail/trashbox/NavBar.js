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
              iconCls: 'home'         
          },
          {
              iconCls: 'compose' // type         
          },
          {
              iconCls: 'action' // inbox
          },
          {
              iconCls: 'action' // sentbox
          },
          {
              iconCls: 'action' // trashbox
          }
      ]    
    }
});
