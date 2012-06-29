Ext.define 'FriendlyRent.view.why_us.Page'
  extend: 'Ext.Panel'
  alias:  'widget.whyus_page'
  config:
    iconCls:  'search'
    html:     'placeholder text'
    items: [
      {
        xtype: 'whyus_navbar'
      }
    ]