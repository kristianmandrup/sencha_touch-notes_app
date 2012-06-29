Ext.define('Sencha.view.Navigation', {
  extend: 'Ext.navigation.View',
  xtype: 'navigation',

  // Set Navigation title dynamically
  // http://davehiren.blogspot.dk/2012/03/sencha-touch-2-dynamically-set-title-of.html
  config: {
      fullscreen: true,
      // showNavBarItemIds: ['maps', 'refresh'],
// @private
    // doSetActiveItem: function(activeItem, oldActiveItem) {
    //   var me = this,
    //       navigationBar = me.getNavigationBar();

    //   if (!activeItem) {
    //       return;
    //   }
      
    //   if (navigationBar) {
    //       navigationBar.rightBox.removeAll();
    //       if ( activeItem.getRightButton ){
    //           console.log('Adding Right Button: ', activeItem.getRightButton());
    //           navigationBar.add(activeItem.getRightButton());
    //       }
    //   }
    //   me.callParent(arguments);
    // },  
    

      // navigationBar: {
      //     ui:     'dark',
      //     docked: 'top',
      //     items: [
      //     {
      //       docked: 'top',
      //       xtype: 'toolbar',
      //       cls:    'nav-bar',
      //       items: [
      //           // {xtype: 'spacer'},
      //           {
      //               iconCls: 'maps',
      //               iconMask: true,
      //               text: 'Map',
      //               align: 'right'
      //           },
      //           {
      //               iconCls: 'refresh',
      //               iconMask: true,
      //               text: 'Refresh',
      //               align: 'right'
      //           }
      //       ]
      //     }
      //     ]
      // }

      navigationBar: {
          // docked: 'top',
          // ui:     'light',
          // items: [
          //     {
          //         iconCls: 'maps',
          //         iconMask: true,

          //         // xtype: 'button',
          //         align: 'right',
          //         id: 'maps'
          //     },
          //     {
          //         iconCls: 'refresh',
          //         iconMask: true,
          //         align: 'right',
          //         id: 'refresh'
          //     }
          // ]
      }      
  }
});