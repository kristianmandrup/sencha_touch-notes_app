Ext.define  'FriendlyRent.view.whu_us.how_much.Page'
  extend:   'Ext.Panel'
  alias:    'widget.howmuch_page'
  config:
    layout: 'vbox'
  items: [
    {
        xtype 'whyus_topbar'
    }
    {
        xtype 'howmuch_content'  
    }
    {
        xtype 'whyus_navbar'
    }
  ]