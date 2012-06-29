
Ext.define('FriendlyRent.view.settings.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.settings_content',
  config: {
    layout: 'vbar',
    items: [
      {
        html: 'Settings'
      }, {
        html: 'Language'
      }, {
        html: 'Country'
      }, {
        html: 'Currency'
      }
    ]
  }
});
