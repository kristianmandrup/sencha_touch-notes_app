Ext.define  'FriendlyRent.view.home.Navigation'
  extend:   'Ext.Panel'
  alias:    'widget.home_navigation'
  config:
    layout: 'vbox'
    items: [
      {
          xtype:  'button'
          text:   'Search'
      }
      {
          xtype:  'button'
          text:   'New property'
      }
    ]