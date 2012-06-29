
Ext.define('FriendlyRent.view.registration.landlord.why_us.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.registration_landlord_why_us_content',
  requires: ['Ext.Video'],
  config: {
    layout: 'vbox',
    items: [
      {
        html: '<img src="http://0.0.0.0:4567/resources/images/FriendlyRentTrans.png"/>'
      }
    ]
  }
});
