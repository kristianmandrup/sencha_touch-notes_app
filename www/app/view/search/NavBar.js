Ext.define("FriendlyRent.view.search.NavBar", {
    extend: 'Ext.Panel',
    alias: "widget.search.navbar",
    config: {
      tabBarPosition: 'bottom',
      defaults: {
        html: 'text',
        styleHtmlContent: true
      },
      layout: {
        pack: 'center'
      },
      items: [
          {
              xtype: 'searchMenuBtn'         
          },
          {
              xtype: 'searchBtn'
          },
          {
              xtype: 'propertyBtn'
          },
          {
              xtype: 'favoritesBtn'
          },
          {
              xtype: 'agentsBtn'
          },
          {
              xtype: 'historyBtn'
          }
      ]    
    }
});

