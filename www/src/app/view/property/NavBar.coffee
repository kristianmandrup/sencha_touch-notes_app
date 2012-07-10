Ext.define  'FriendlyRent.view.property.NavBar'
  extend:   'FriendlyRent.NavBar'
  alias:    'widget.property_navbar'
  config:
    items: [
      {
        text:     'property' # I18n.t('search')
        iconCls:  'home'
        action:   'property'
        id:       'property_navBtn'
        itemId:   'propertyBtn'
        iconMask: true
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
        id:       'favorites_navBtn'
        itemId:   'favoritesBtn'
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
