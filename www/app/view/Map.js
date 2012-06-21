Ext.define("FriendlyRent.view.Map", {
  extend: 'Ext.navigation.View',
  config: {
    fullscreen: true,
    title: 'Map',
    iconCls: 'maps',
    html: 'map here...',
    items: [
        {
            xtype: 'titlebar',
            docked: 'top',
            title: 'Map'
        },
        {
            xtype: 'map',
            useCurrentLocation: true
        },
        {
            xtype: 'bottombar',
            docked: 'bottom'
        }
    ]
  }
});
