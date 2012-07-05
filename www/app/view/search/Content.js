
Ext.define('FriendlyRent.view.search.Content', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.search_content',
  requires: ['FriendlyRent.view.search.criteria.Location', 'FriendlyRent.view.search.criteria.Radius', 'FriendlyRent.view.search.criteria.PropertyType', 'FriendlyRent.view.search.criteria.Furnishment', 'FriendlyRent.view.search.criteria.Size', 'FriendlyRent.view.search.criteria.RentalCost', 'FriendlyRent.view.search.criteria.RentalPeriod', 'FriendlyRent.view.search.criteria.StartDate'],
  config: {
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
        xtype: 'search_criteria_start_date',
        name: 'start_date'
      }, {
        xtype: 'button',
        ui: 'confirm',
        name: 'create_agent',
        text: 'Create agent'
      }
    ]
  }
});
