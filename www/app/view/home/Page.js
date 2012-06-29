Ext.define('FriendlyRent.view.home.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.home_page',
  xtype: 'homepage',

  // requires: [
  //   'FriendlyRent.view.home.Topbar'
  // ],

  config: {
    defaults: {
      styleHtmlContent: true,
    },

    iconCls: 'search',
    html: 'placeholder text',
    styleHtmlContent: true,
    items: [{
        docked: 'top',
        xtype: 'toolbar',
        title: 'Search'
    }]
  }
});

