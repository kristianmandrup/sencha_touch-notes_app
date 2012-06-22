Ext.define('FriendlyRent.view.search.history.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.search.history.Page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'search.topbar'
    },
    {
        xtype 'search.history.content'  
    },
    {
        xtype 'search.navbar'
    }
  }
});
