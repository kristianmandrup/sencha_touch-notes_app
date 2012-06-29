Ext.define  'FriendlyRent.view.home.about.faq.Page'
  extend:   'Ext.Panel'
  alias:    'widget.whyus_faqpage'
  config:
    layout:   'vbox'
    iconCls:  'info_plain2'
    iconMask: true    
    items: [
      {
          xtype: 'home.about.topbar'
      }
      {
          xtype: 'home.about.faq.content' 
      }
      {
          xtype: 'home.about.navbar'
      }
    ]