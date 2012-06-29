
Ext.define('FriendlyRent.view.home.Navigation', {
  extend: 'Ext.Panel',
  alias: 'widget.home_navigation',
  config: {
    layout: 'hbox',
    items: [
      {
        xtype: 'button',
        text: 'Danish'
      }, {
        xtype: 'button',
        text: 'English'
      }
    ]
  }
});
