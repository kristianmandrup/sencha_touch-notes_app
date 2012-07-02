
Ext.define('FriendlyRent.view.home.Navigation', {
  extend: 'Ext.Panel',
  alias: 'widget.home_navigation',
  config: {
    layout: {
      type: 'vbox',
      align: 'center'
    },
    items: [
      {
        xtype: 'home_logo'
      }, {
        xtype: 'spacer',
        height: 20
      }, {
        xtype: 'button',
        ui: 'orange',
        iconCls: 'search',
        itemId: 'searchBtn',
        id: 'searchBtn',
        action: 'search',
        iconMask: true,
        text: 'Search home',
        cls: 'main-button'
      }, {
        xtype: 'button',
        ui: 'purple',
        iconCls: 'home',
        itemId: 'newBtn',
        id: 'newBtn',
        action: 'newProperty',
        iconMask: true,
        text: 'New property',
        cls: 'main-button black'
      }
    ]
  }
});
