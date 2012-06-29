
Ext.define('FriendlyRent.view.properties.list.Page', {
  extend: 'Ext.Panel',
  alias: 'widget.properties.list.Page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
      xtype: 'search_topbar'
    }, {
      xtype: 'search_content'
    }, {
      xtype: 'search_navbar'
    }
  ]
});
