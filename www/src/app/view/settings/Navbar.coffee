Ext.define  'FriendlyRent.view.settings.NavBar'
  extend:   'FriendlyRent.NavBar'
  alias:    'widget.settings_navbar'
  config:
    items: [
      {
          xtype: 'tenantMenuBtn'
      }
      {
          xtype: 'whyUsBtn'
      }
      {
          xtype: 'registerBtn'
      }
    ]
