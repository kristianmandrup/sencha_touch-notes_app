
Ext.define('FriendlyRent.view.settings.language.List', {
  extend: 'Ext.Panel',
  alias: 'widget.settings_language_list',
  config: {
    layout: 'vbar',
    items: [
      {
        html: 'English'
      }, {
        html: 'Danish'
      }
    ]
  }
});
