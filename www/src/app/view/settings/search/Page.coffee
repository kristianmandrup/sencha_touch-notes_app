Ext.define  'FriendlyRent.view.settings.search.Page'
  extend:   'Ext.Panel'
  alias:    'widget.settings_searchpage'
  requires: 'FriendlyRent.view.settings.search.Content'
  config:
    layout: 'vbox'
  items: [
    {
        xtype 'settings_topbar'
    }
    {
        xtype 'settings_search_content'  
    }
    {
        xtype 'settings_navbar'
    }
  ]