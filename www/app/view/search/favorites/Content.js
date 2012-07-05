
Ext.define('FriendlyRent.view.search.favorites.Content', {
  extend: 'Ext.List',
  alias: 'widget.search_favorites_content',
  requires: ['FriendlyRent.store.Favorites'],
  config: {
    store: 'Favorites',
    itemId: 'favorites_list',
    loadingText: 'Loading favorites...',
    emptyText: '<div class="favorites-list empty-text">No favorites found.</div>',
    itemTpl: Ext.XTemplate.from("property", {
      typeDesc: function(item) {
        return "" + item.rooms + " room " + item.type + ", " + item.furnished + " furnished";
      },
      costDesc: function(cost) {
        return "" + cost + " DKK";
      },
      periodDesc: function(period) {
        if (period) {
          return "" + period.start_date + " to " + period.end_date;
        } else {
          return "";
        }
      }
    }),
    onItemDisclosure: function(record, btn, index) {
      return console.log('Disclose Favorite', record, index);
    }
  }
});
