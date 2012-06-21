Ext.define('FriendlyRent.view.search.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.search.content',
  config: {
    layout: 'vbox',
    items: [{
      {
        html: 'Search criteria'
      },
      {
        html: 'Create agent btn'
      }
    }]
  }
});