
Ext.define('FriendlyRent.view.registration.landlord.why_us.NavBar', {
  extend: 'FriendlyRent.NavBar',
  alias: 'registration.landlord.why_us.navbar',
  config: {
    items: [
      {
        text: I18n.t('new')
      }, {
        text: I18n.t('why_us')
      }
    ]
  }
});
