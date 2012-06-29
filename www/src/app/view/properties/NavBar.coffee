Ext.define  'FriendlyRent.view.properties.NavBar'
  extend:   'FriendlyRent.NavBar'
  alias:    'widget.properties_navbar'
  config:
    items: [
      {
          xtype: 'btn_search_properties'
      }
      {
          xtype: 'btn_new_property'
      }
      {
          xtype: 'btn_about'
      }
      {
          xtype: 'btn_settings'
      }
    ]    
