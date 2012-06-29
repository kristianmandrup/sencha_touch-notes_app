Ext.define('Sencha.view.More', {
    extend: 'Ext.Panel',
    xtype: 'morecard',
    requires: [
        'Sencha.view.Home'
    ],

    config: {
        layout: {
            pack: 'center'
        },
        title:  'More',        

        navBarItems: [
          {
              iconCls: 'maps',
              iconMask: true,
              text: 'Map',
              align: 'right',
          },
          {
              iconCls: 'refresh',
              iconMask: true,
              text: 'Refresh',
              align: 'right',
          }
        ],        

                navBarItemIds: ['maps', 'refresh'],
        items: [
          {
            docked: 'top',
            xtype: 'toolbar',
            cls:    'nav-bar',
            items: [
                {xtype: 'spacer'},
                {
                    iconCls: 'maps',
                    iconMask: true,
                    text: 'Lort'
                },
                {
                    iconCls: 'refresh',
                    iconMask: true,
                    text: 'Pis'
                }
            ]
          },
          {
            html: 'More',
            layout: 'fit'
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
                    iconCls: 'home',
                    iconMask: true,
                    text: 'Home',
                    handler: function() {
                      Ext.Viewport.add({
                          xtype: 'homecard'
                      });
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
                      //             iconCls: 'info',
                      //             iconMask: true,
                      //             align: 'right'
                      //         }
                      //     ]
                      //   }
                      // );
                    }
                },
                {
                    iconCls: 'info',
                    iconMask: true,
                    text: 'Info'
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
