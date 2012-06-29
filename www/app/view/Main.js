Ext.define('Sencha.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    requires: [
        'Sencha.view.Home',
        'Sencha.view.Search',
        'Sencha.view.NewProperty',
        'Sencha.view.About',
        'Sencha.view.Settings',
        'Sencha.view.Action',
        'Sencha.view.More',
    ],
    
    config: {
        layout: {
            pack: 'center'
        },
        showNavBarItemIds: ['maps', 'refresh'],
        items: [
          {
            html: 'Hello',
            layout: 'fit'
          },
                        {
                          docked: 'top',
                          // ui:     'light',
                          items: [
                              {
                                  iconCls: 'search',
                                  iconMask: true,

                                  // xtype: 'button',
                                  align: 'right'
                              },
                              {
                                  iconCls: 'home',
                                  iconMask: true,
                                  align: 'right'
                              }
                          ]
                        },

          {
            docked: 'bottom',
            xtype: 'toolbar',
            cls:    'nav-bar',
            layout: {
                pack: 'center'
            },            
            items: [
                {
                    iconCls: 'maps',
                    iconMask: true,
                    text: 'Map',
                    id: 'mymap',
                    handler: function() {
                      console.log('Add more card!');
                      FriendlyRent.navigation.push(
                        // {
                        //     title: 'Second',
                        //     html: 'Second view!'                            
                        // }                        
                        { xtype: 'morecard' }
                      );
                      

                      // console.log(FriendlyRent.navigation.getNavigationBar().getItems().items[2].iconCls = 'home');

                      // FriendlyRent.navigation.pushTitle('Hello World');
                      // this.getMain().getNavigationBar().titleComponent.setWidth(100); 

                      // FriendlyRent.navigation.setNavigationBar(
                      //   {
                      //     docked: 'top',
                      //     // ui:     'light',
                      //     items: [
                      //         {
                      //             iconCls: 'search',
                      //             iconMask: true,

                      //             // xtype: 'button',
                      //             align: 'right'
                      //         },
                      //         {
                      //             iconCls: 'home',
                      //             iconMask: true,
                      //             align: 'right'
                      //         }
                      //     ]
                      //   }
                      // );                      
                    }
                },
                {
                    iconCls: 'refresh',
                    iconMask: true,
                    text: 'Refresh',
                    id: 'myrefresh'
                }
            ]            
          }
          // { xtype: 'actioncard' },
          // { xtype: 'morecard' }

          // { xtype: 'homecard' },
          // { xtype: 'searchcard' },
          // { xtype: 'actioncard' },
          // { xtype: 'settingscard' },
          // { xtype: 'morecard' }
        ]
    }
});
