Ext.define  'FriendlyRent.view.registration.tenant.why_us.Page'
  extend:   'Ext.Panel'
  alias:    'widget.tenant_whyus_page'
  config:
    layout: 'vbox'
    items: [
      {
          xtype 'reg_tenant_topbar'
      }
      {
          xtype 'reg_tenant_whyus_content'  
      }
      {
          xtype 'reg_tenant_whyus_navbar'
      }
    ]
