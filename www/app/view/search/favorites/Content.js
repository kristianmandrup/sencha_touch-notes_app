Ext.define('FriendlyRent.view.search.favorites.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.search.favorites.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Favorites'
        },
        {
            html: 'List of favorites'
        }
    ]
  }
});