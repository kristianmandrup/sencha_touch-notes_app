Ext.define("FriendlyRent.view.home.TopBar", {
    extend: 'Ext.tab.Panel',
    alias: "widget.home_topbar",
    xtype: 'hometopbar',
    config: {
      tabBarPosition: 'top',
      layout: {
        pack: 'center'
      },        
      items: [
        {
          iconCls: 'search',
          title: 'Search'
          // badgeText: '20'
        }

          // {
          //     xtype: 'logo.image'
          // },
          // {
          //     xtype: 'loginBtn'         
          // },
          // {
          //     xtype: 'listBtn'         
          // }
      ]    
    }
});
