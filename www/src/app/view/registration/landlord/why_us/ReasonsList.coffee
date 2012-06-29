Ext.define  'FriendlyRent.view.registration.landlord.why_us.ReasonsList'
  extend:   'Ext.Panel'
  alias:    'widget.registration_landlord_why_us_reasonslist'
  config:
    layout: 'vbox'
    style:  'padding-top: 10px'
    items: [
      {
        html: I18n.t('landlord.why_us.reason1')
      }
      {
        html: I18n.t('landlord.why_us.reason2')
      }
    ]
