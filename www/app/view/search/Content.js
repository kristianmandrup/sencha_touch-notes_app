
Ext.define('FriendlyRent.view.search.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.search.content',
  config: {
    layout: 'vbox',
    items: [
      {
        xtype: 'search_criteria_location',
        name: 'location'
      }, {
        xtype: 'search_criteria_radius',
        name: 'radius'
      }, {
        xtype: 'search_criteria_property_type',
        name: 'property_type'
      }, {
        xtype: 'search_criteria_furnishment',
        name: 'furnishment'
      }, {
        xtype: 'search_criteria_size',
        name: 'size'
      }, {
        xtype: 'search_criteria_rental_cost',
        name: 'cost'
      }, {
        xtype: 'search_criteria_rental_period',
        name: 'period'
      }, {
        xtype: 'search_criteria_rules',
        name: 'rules'
      }, {
        xtype: 'button',
        name: 'create_agent',
        label: I18n.t('agent.create')
      }
    ]
  }
});
