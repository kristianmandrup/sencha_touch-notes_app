Ext.define  'FriendlyRent.mail.property.messages.NavBar'
  extend:   'FriendlyRent.NavBar'
  alias:    'widget.mail_property_messages_navbar'
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
    ]
