Ext.define  'FriendlyRent.view.property.edit.NavBar'
  extend:   'FriendlyRent.NavBar'
  alias:    'property_edit_navbar'
  config:
    items: [
      {
          xtype: 'btn_location'
      }
      {
          xtype: 'btn_details'
      }
      {
          xtype: 'btn_period'
      }
      {
          xtype: 'btn_photos'
      }
      {
          xtype: 'btn_more'
      }        
    ]