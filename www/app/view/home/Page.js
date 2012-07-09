
Ext.define('FriendlyRent.view.home.Page', {
  extend: 'Ext.Panel',
  alias: 'widget.home_page',
  requires: ['FriendlyRent.view.home.Logo', 'FriendlyRent.view.home.Navigation', 'FriendlyRent.view.home.Flags'],
  config: {
    layout: 'vbox',
    itemId: 'home',
    id: 'home_page',
    items: [
      {
        html: '<img src="resources/images/login.png"/>',
        style: 'text-align:right; padding: 4px'
      }, {
        xtype: 'home_navigation'
      }, {
        xtype: 'spacer',
        height: 20
      }, {
        xtype: 'home_flags'
      }
    ]
  }
});
