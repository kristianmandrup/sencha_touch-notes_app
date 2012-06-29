
Ext.define('FriendlyRent.view.registration.tenant.TopBar', {
  extend: 'FriendlyRent.TopBar',
  alias: 'widget.reg_tenant_topbar',
  requires: ['Ext.Img'],
  config: {
    items: [
      {
        xtype: 'image',
        width: 48,
        height: 48,
        src: 'resources/images/friendly_rent_trans_48.png'
      }
    ]
  }
});
