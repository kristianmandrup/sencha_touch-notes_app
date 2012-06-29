Ext.define  'FriendlyRent.view.registration.landlord.register.NavBar'
  extend:   'FriendlyRent.NavBar'
  alias:    'registration.landlord_register_navbar'
  config:
    items: [
      {
          text: I18n.t('new')
      }
      {
          text: I18n.t('why_us')
      }
      {
          text: I18n.t('register')
      }
    ]
