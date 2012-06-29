
Ext.define('FriendlyRent.view.properties.map.quickview.Overlay', {
  extend: 'Ext.Panel',
  alias: 'widget.properties_map_quickview_overlay',
  config: {
    layout: 'vbar',
    items: [
      {
        xtype: 'property.image'
      }, {
        xtype: 'property.info'
      }
    ]
  }
});
