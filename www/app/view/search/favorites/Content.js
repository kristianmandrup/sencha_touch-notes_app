
Ext.define('FriendlyRent.view.search.favorites.Content', {
  extend: 'Ext.List',
  alias: 'widget.search_favorites_content',
  requires: ['FriendlyRent.store.Favorites'],
  config: {
    store: 'Favorites',
    itemId: 'favorites_list',
    loadingText: 'Loading favorites...',
    emptyText: '<div class="favorites-list empty-text">No favorites found.</div>',
    itemTpl: Ext.XTemplater.getTemplate('property_favorite')
  },
  initialize: function() {
    this.callParent();
    return Ext.Function.defer(this.setFavorites, 200);
  },
  setFavorites: function() {
    $('#favorites_navBtn').addClass('active-icon');
    return $('.favorite-stars').rateit({
      max: 3
    });
  }
});
