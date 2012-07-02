
Ext.define('FriendlyRent.view.search.criteria.Radius', {
  extend: 'Ext.field.SliderInput',
  alias: 'widget.search_criteria_radius'
});

({
  config: {
    label: 'Radius',
    value: 5,
    minValue: 1,
    maxValue: 50
  }
});
