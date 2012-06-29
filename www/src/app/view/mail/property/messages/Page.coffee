Ext.define  'FriendlyRent.view.mail.property.messages.Page'
  extend:   'Ext.Panel'
  alias:    'widget.mail_property_messages_page'
  config:
    layout: 'vbox'
    items: [
      {
          xtype: 'mail_property_messages_topbar'
      }
      {
          xtype: 'mail_property_messages_description_content'  
      }
      {
          xtype: 'mail_property_messages_navbar'
      }
    ]