
Ext.define('FriendlyRent.view.properties.list.Content', {
  extend: 'Ext.List',
  alias: 'widget.properties_list_content',
  requires: ['FriendlyRent.store.Properties'],
  config: {
    store: 'Properties',
    itemId: 'properties_list',
    loadingText: 'Loading properties...',
    emptyText: '<div class="favorites-list empty-text">No properties found.</div>',
    itemTpl: Ext.XTemplate.from("property", new PropertyHelper),
    onItemDisclosure: function(record, btn, index) {
      return console.log('Disclose Property', record, index);
    }
  }
});
