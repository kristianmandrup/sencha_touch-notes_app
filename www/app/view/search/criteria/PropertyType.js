
Ext.define('FriendlyRent.view.search.criteria.PropertyType', {
  extend: 'Ext.field.SliderText',
  alias: 'widget.search.criteria.property_type',
  config: {
    label: 'Property type',
    autoValues: true,
    valueMap: ['Any', 'Room', 'Apartment', 'House', 'Independent house', 'House boat']
  }
});
