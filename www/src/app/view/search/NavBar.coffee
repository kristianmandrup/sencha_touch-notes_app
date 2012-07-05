Ext.define  'FriendlyRent.view.search.NavBar'
  extend: 'FriendlyRent.NavBar'
  alias:  'widget.search_navbar'
  config:
    items: [
      {
        html: 'menu'     # I18n.t('search.menu')
      }
      {
        text:     'search' # I18n.t('search')
        iconCls:  'search'
        action:   'search'
        iconMask: true          
      }
      {
        text:     'favorites' # I18n.t('favorites')
        iconCls:  'favorites'
        action:   'favorites'
        iconMask: true
      }
      {
        text:     'agents' # I18n.t('agents')
        iconCls:  'user'
        action:   'agents'
        iconMask: true
      }
      {
        text:     'history' # I18n.t('history')
        iconCls:  'search'
        action:   'history'
        iconMask: true
      }
    ]    

