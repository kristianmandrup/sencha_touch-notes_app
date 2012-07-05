Ext.define  'FriendlyRent.view.search.favorites.Page'
  extend:   "Ext.Panel"
  alias:    'widget.search_favorites_page'
  requires: [
    'FriendlyRent.view.search.TopBar'
    'FriendlyRent.view.search.NavBar'
    'FriendlyRent.view.search.favorites.Content'
  ]
  config:
    layout:
      type: 'fit'
    items: [
      {
        xtype: 'search_topbar'
        cls: 'nav-bar'
      }
      {
        xtype: 'search_favorites_content'  
      }
      {
        xtype: 'search_navbar'
        cls: 'nav-bar'
      }
    ]
