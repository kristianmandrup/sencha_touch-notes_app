Ext.define("FriendlyRent.view.home.NavBar", {
    extend: 'Ext.tab.Panel',
    alias: "widget.home.navbar",
    config: {
      tabBarPosition: 'bottom',

      layout: {
        pack: 'center'
      },

      items: [
        {
          iconCls: 'home',
          title: 'Home'
        },
        {
          iconCls: 'search',
          title: 'Search'
          // badgeText: '20'
        }
          // {
          //     xtype: 'homecard'
          // },
          // {
          //     xtype: 'searchcard'         
          // },
          // {
          //     xtype: 'newpropertycard'
          // },
          // {
          //     xtype: 'aboutcard'
          // },
          // {
          //     xtype: 'settingscard'
          // }
      ]    
    }
});