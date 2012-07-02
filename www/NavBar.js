
Ext.define('FriendlyRent.view.search.NavBar', {
  extend: 'FriendlyRent.NavBar',
  alias: 'widget.search_navbar',
  config: {
    items: [
      {
        html: 'menu'
      }, {
        text: 'search',
        iconCls: 'search',
        iconMask: true
      }, {
        text: 'property',
        iconCls: 'home',
        iconMask: true
      }
    ]
  }
});
