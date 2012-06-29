Ext.define 'FriendlyRent.view.registration.landlord.why_us.Page'
  extend: 'Ext.Panel'
  alias:  'widget.registration_landlord_why_us_page'
  requires: [
    'FriendlyRent.view.registration.landlord.why_us.Content'
    'FriendlyRent.view.registration.TopBar'
  ]
  config:
    layout: 'vbox'
    items: [
      {
          xtype: 'registration_topbar'
      }
      {
          xtype: 'registration_landlord_why_us_content'  
      }
      {
          xtype: 'registration_landlord_why_us_navbar'
      }
    ]
