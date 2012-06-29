Ext.define  'FriendlyRent.view.search.NavBar'
  extend: 'FriendlyRent.NavBar'
  alias:  'widget.search_navbar'
  config:
    items: [
      {
          text:     I18n.t('search.menu')
      }
      {
          text:     I18n.t('search')
          iconCls:  'search'
      }
      {
          text:     I18n.t('property')
          iconCls:  'home'
      }
      {
          text:     I18n.t('favorites')
          iconCls:  'favorites'
      }
      {
          text:     I18n.t('agents')
          iconCls:  'user'
      }
      {
          text:     I18n.t('history')
          iconCls:  'search'
      }
    ]    

