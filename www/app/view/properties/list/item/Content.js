Ext.define('FriendlyRent.view.properties.list.item.Content', {
  extend: 'Ext.List',
  alias: 'widget.properties.list.item.content',
  config: {
      xtype: 'list',
      itemTpl: '{title}',      
      data: [
        { title: 'Beautiful title' },
        { title: '6500 DKK/month' },
        { title: '2 rooms apartment' },
        { title: 'Furnished' },
        { title: '55 m2' },
        { title: 'Valby, Copenhagen, DK' },        
        { title: '12/5/2012 - 12/5/2013' }
    ]
  }
});
