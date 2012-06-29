Ext.define  'FriendlyRent.view.settings.account.mail.Options'
  extend:   'Ext.Panel'
  alias:    'widget.settings_mailaccount_options'
  config:
    layout: 'vbar'
    items: [
      {
        xtype:        'textfield'
        label:        'e-mail'
        name:         'email'
        maxLength:    40
        placeHolder:  'Enter your e-mail'
      }
      {
        html: 'Erase mail after 30 days'
      }
      {
        html: 'Unsubscribe from Friendlyrent' 
      }
    ]
