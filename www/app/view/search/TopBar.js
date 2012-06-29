
Ext.define('FriendlyRent.view.search.TopBar', {
  extend: 'FriendlyRent.NavBar',
  alias: 'widget.search_topbar',
  config: {
    items: [
      {
        text: I18n.t('list')
      }, {
        text: I18n.t('map')
      }
    ]
  }
});
