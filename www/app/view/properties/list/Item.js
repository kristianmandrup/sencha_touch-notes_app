Ext.define('FriendlyRent.view.properties.list.Item', {
  extend: 'Ext.Panel',
  alias: 'widget.properties.list.item',
  config: {
    layout: 'hbox',    
    items: [{
      [
        {
            xtype: 'properties.list.item.image',
            flex: 1,
        },
        {
            xtype: 'properties.list.item.content',
            flex: 1,
        }
      ]
    }]
  }
});