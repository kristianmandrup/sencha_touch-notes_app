Ext.define  'FriendlyRent.view.settings.currency.List'
  extend:   'Ext.Panel'
  alias:    'widget.settings_currency_list'
  config:
    layout: 'vbar'
    items: [
      {
          html: 'Euro €'
      }
      {
          html: 'Pound £'
      }
      {
          html: 'Dollar $'
      }
      {
          html: 'Danish Kroner (DKK)' 
      }
      {
          html: 'Swedish Kroner (SEK)' 
      }
      {
          html: 'Norwegian Kroner (NOK)' 
      }
  ]
