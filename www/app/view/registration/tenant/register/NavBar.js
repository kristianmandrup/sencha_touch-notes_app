
Ext.define('FriendlyRent.view.registration.landlord.register.NavBar', {
  extend: 'FriendlyRent.NavBar',
  alias: 'widget.reg_tenant_navbar',
  config: {
    items: [
      {
        xtype: 'btn_whyus'
      }, {
        xtype: 'btn_register'
      }
    ]
  }
});
