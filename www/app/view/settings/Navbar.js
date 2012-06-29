
Ext.define('FriendlyRent.view.settings.NavBar', {
  extend: 'FriendlyRent.NavBar',
  alias: 'widget.settings_navbar',
  config: {
    layout: {
      pack: 'center'
    },
    items: [
      {
        xtype: 'tenantMenuBtn'
      }, {
        xtype: 'whyUsBtn'
      }, {
        xtype: 'registerBtn'
      }
    ]
  }
});
