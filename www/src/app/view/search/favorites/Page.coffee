Ext.define  'FriendlyRent.view.search.favorites.Page'
  extend:   'FriendlyRent.view.properties.list.Page'
  alias:    'widget.search_favorites_page',
  config:
    layout: 'vbox'
    items: [
      {
          xtype 'search_topbar'
      }
      {
          xtype 'search_favorites_content'  
      }
      {
          xtype 'search_navbar'
      }
    ]

