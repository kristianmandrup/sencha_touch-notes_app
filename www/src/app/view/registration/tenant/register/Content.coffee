Ext.define  'FriendlyRent.view.registration.tenant.register.Content'
  extend:   'Ext.Panel'
  alias:    'widget.reg_tenant_register_content'
  config:
    layout: 'vbar'
    items: [
      {
          html: 'Register Tenant'
      }
      {
          xtype: 'reg_login_facebook'
      }
      {
          xtype: 'reg_login_twitter'
      }
    ]
