Ext.define  'FriendlyRent.view.home.Navigation'
  extend:   'Ext.Panel'
  alias:    'widget.home_navigation'
  config:
    layout: 'hbox'
    items: [
      {
          xtype:  'button'
          text:   'Danish'
          # iconCls: 'danish'
      }
      {
          xtype:  'button'
          text:   'English'
          # iconCls: 'english'
      }
    ]