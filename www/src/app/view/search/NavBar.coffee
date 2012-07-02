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
          iconMask: true          
      }
      {
          text:     'property' # I18n.t('property')
          iconCls:  'home'
          iconMask: true
      }
    ]    

