Ext.define('FriendlyRent.view.properties.list.item.Content', {
  extend: 'Ext.List',
  alias: 'widget.properties.list.item.content',
  config: {
    xtype: 'list',
    itemTpl: '{title} {sender}',      
    data: [
      { title: 'Beautiful place', sender: 'Griffenfeldsgade 11b' },
      { title: 'Come see it this weekend', sender: 'Griffenfeldsgade 11b' },
      { title: '2 rooms available!', sender: 'Griffenfeldsgade 11b' }
    ]
  }
});
