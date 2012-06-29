
Ext.define('FriendlyRent.view.search.favorites.Content', {
  extend: 'Ext.dataview.List',
  alias: 'widget.search_favorites_content',
  config: {
    store: 'Favorites',
    itemId: 'favoritesList',
    loadingText: 'Loading favorites...',
    emptyText: '<div class="favorites-list empty-text">No favorites found.</div>',
    onItemDisclosure: true,
    grouped: true,
    itemTpl: '<div class="list-item favorite image">{image.src}</div><div class="list-item content">{title}</div>'
  }
});
