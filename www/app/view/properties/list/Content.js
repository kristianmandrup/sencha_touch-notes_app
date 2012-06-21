Ext.define('FriendlyRent.view.properties.list.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.properties.list.content',  
  config: {
    layout: 'vbar',
    items: [{
      [
        {
            xtype: 'properties.list.item'
        },
        {
            xtype: 'properties.list.item'
        }
        {
            xtype: 'properties.list.item'
        }
      ]
    }]
  }
});