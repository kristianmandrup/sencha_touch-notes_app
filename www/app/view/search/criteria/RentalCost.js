
Ext.define('FriendlyRent.view.search.criteria.RentalCost', {
  extend: 'Ext.field.SliderInput',
  alias: 'widget.search_criteria_rentalcost',
  config: {
    increment: 500,
    value: 3000,
    minValue: 1500,
    maxValue: 20000,
    labelText: 'Rental cost',
    label: 'Rental cost'
  }
});
