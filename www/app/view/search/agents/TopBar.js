
Ext.define('FriendlyRent.view.search.TopBar', {
  extend: 'FriendlyRent.NavBar',
  alias: 'widget.search_topbar',
  config: {
    docked: 'top',
    items: [
      {
        xtype: 'spacer'
      }, {
        iconCls: 'sync',
        iconMask: true,
        text: 'refresh'
      }, {
        iconCls: 'list',
        iconMask: true,
        text: 'list'
      }, {
        iconCls: 'globe2',
        iconMask: true,
        text: 'map'
      }
    ]
  }
});
