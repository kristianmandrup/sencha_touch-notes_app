
Ext.define('FriendlyRent.view.search.criteria.RentalPeriod', {
  extend: 'Ext.field.SliderText',
  alias: 'widget.search_criteria_rental_period',
  config: {
    label: 'Rental period',
    autoValues: true,
    valueMap: ['1 week', '2 weeks', '1 month', '2 months', '3 months', '6 months', '9 months', '1 year', '18 months', '2 years']
  }
});
