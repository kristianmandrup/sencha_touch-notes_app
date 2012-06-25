Ext.define("FriendlyRent.view.Main", {
    extend: 'Ext.Panel',
    alias: 'widget.main',

    requires: [
        'FriendlyRent.view.TopBar', 'FriendlyRent.view.BottomBar'
    ],

    config: {
        items: [
        // {
        //     xtype  : 'toolbar',
        //     title  : 'Gene Display',
        //     docked : 'top',
        //     items  : [
        //         {
        //             text : 'Results',
        //             ui   : 'back'
        //         },
        //         {
        //             text : 'Search',
        //             ui   : 'back'
        //         }
        //     ]
        // },            // ,
            // {
            //     xtype: 'map'
            // }
            // {
            //     xtype: 'bottombar',
            //     docked: 'bottom'
            // }
        ]
    }
});
