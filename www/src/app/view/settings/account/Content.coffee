Ext.define  'FriendlyRent.view.settings.Content'
  extend:   'Ext.FormPanel'
  alias:    'widget.settings_accountcontent'
  config:
    layout: 'vbar'
    items: [
        {
            xtype: 'settings_mailaccount_options'
        }
    ]
