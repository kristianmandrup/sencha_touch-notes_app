
Ext.define('FriendlyRent.view.search.criteria.RentalPeriod', {
  extend: 'Ext.field.SliderInput',
  alias: 'widget.search_criteria_rentalperiod',
  config: {
    label: 'Rental period',
    autoValues: true,
    values: [0, 2],
    valueMap: ['ASAP', '14 days', '1 month', '2 months', '3 months', '6 months', '9 months', '1 year', '18 months', '2 years']
  }
});
