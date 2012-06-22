Ext.define('FriendlyRent.view.properties.map.Content', {
  extend: 'Ext.Map',
  alias: 'widget.properties.map.content',
  layout: 'fit',
  config: {
    items: [{
      xtype: 'map',
      useCurrentLocation: true
    }]
  }
});