
Ext.define('FriendlyRent.view.search.criteria.PropertyType', {
  extend: 'Ext.field.SliderText',
  alias: 'widget.search_criteria_property_type',
  config: {
    label: 'Property type',
    autoValues: true,
    valueMap: ['Any', 'Room', 'Apartment', 'House', 'Independent house', 'House boat']
  }
});
