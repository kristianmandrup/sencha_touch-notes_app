Ext.define  'FriendlyRent.view.home.about.follow.Page'
  extend:   'Ext.Panel'
  alias:    'widget.follow_page'
  config:
    layout: 'vbox'
  items: [
    {
        xtype: 'whyus_topbar'
    }
    {
        xtype: 'follow_content'  
    }
    {
        xtype: 'whyus_navbar'
    }
  ]