
Ext.define('FriendlyRent.view.registration.landlord.why_us.Page', {
  extend: 'Ext.Panel',
  alias: 'widget.reg_tenant_whyus_page',
  config: {
    layout: 'vbox',
    items: [
      {
        xtype: 'reg_tenant_topbar'
      }, {
        xtype: 'reg_tenant_content'
      }, {
        xtype: 'reg_tenant_navbar'
      }
    ]
  }
});
