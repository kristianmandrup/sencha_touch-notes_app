Ext.define("FriendlyRent.view.PropertyList", {
    extend: 'Ext.Panel',
    config: {
        items: [
            {
                xtype: 'topbar',
                docked: 'top'
            },
            {
                xtype: 'map',
                useCurrentLocation: true
            }
        ]
    },

    launch: function () {
        this.callParent(arguments);
        // add map bottombar
    }
});
