
Ext.define('FriendlyRent.view.search.criteria.Page', {
  extend: 'Ext.FormPanel',
  alias: 'widget.search_criteria.page',
  requires: ['FriendlyRent.view.search.criteria.Content'],
  config: {
    items: [
      {
        xtype: 'search_criteria_topbar'
      }, {
        xtype: 'search_criteria_content'
      }, {
        xtype: 'search_criteria_navbar'
      }
    ]
  }
});
