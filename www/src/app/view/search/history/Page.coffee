Ext.define  'FriendlyRent.view.search.history.Page'
  extend:   'Ext.Panel'
  alias:    'widget.search_history_page'
  config:
    layout: 'vbox'
    items: [
      {
          xtype 'search_topbar'
      }
      {
          xtype 'search_history_content'  
      }
      {
          xtype 'search_navbar'
      }
    }