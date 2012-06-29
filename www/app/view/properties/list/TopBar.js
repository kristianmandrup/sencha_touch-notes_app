
Ext.define('FriendlyRent.view.properties.list.TopBar', {
  extend: 'FriendlyRent.TopBar',
  alias: 'widget.properties_list_topbar',
  config: {
    items: [
      {
        xtype: 'logo'
      }, {
        xtype: 'btn_login'
      }, {
        xtype: 'btn_map'
      }
    ]
  }
});
