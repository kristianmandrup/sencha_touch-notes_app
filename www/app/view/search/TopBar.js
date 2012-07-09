
Ext.define('FriendlyRent.view.search.TopBar', {
  extend: 'FriendlyRent.NavBar',
  alias: 'widget.search_topbar',
  config: {
    docked: 'top',
    items: [
      {
        ui: 'orange-back',
        text: 'back'
      }, {
        xtype: 'spacer'
      }, {
        iconCls: 'globe2',
        iconMask: true,
        text: 'map'
      }
    ]
  }
});
