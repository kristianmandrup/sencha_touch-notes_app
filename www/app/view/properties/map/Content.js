
Ext.define('FriendlyRent.view.properties.map.Content', {
  extend: 'Ext.Map',
  alias: 'widget.properties_map_content',
  config: {
    layout: 'fit',
    items: [
      {
        xtype: 'map',
        useCurrentLocation: true
      }
    ]
  }
});
