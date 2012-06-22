Ext.define('FriendlyRent.view.search.favorites.Page', {
  extend: 'FriendlyRent.view.properties.list.Page',

  alias:  'widget.search.favorites.Page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'search.topbar'
    },
    {
        xtype 'search.favorites.content'  
    },
    {
        xtype 'search.navbar'
    }
  }
});
