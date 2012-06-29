Ext.define  'FriendlyRent.view.home.Page'
  extend:   'Ext.Panel'
  alias:    'widget.home_page'
  config:
    layout: 'vbox'
    items: [
      {
          xtype: 'home_logo'
      }
      {
          xtype: 'home_navigation'  
      }
      {
          xtype: 'home_flags'
      }
    ]