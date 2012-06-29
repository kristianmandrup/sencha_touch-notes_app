
Ext.define('FriendlyRent.view.search.criteria.Rules', {
  extend: 'Ext.Panel',
  alias: 'widget.search_criteria_rules',
  config: {
    name: 'location',
    label: 'Location',
    required: true
  },
  items: [
    {
      xtype: 'checkboxfield',
      name: 'pets',
      label: 'Pets'
    }, {
      xtype: 'checkboxfield',
      name: 'smoking',
      label: 'Smoking'
    }
  ]
});
