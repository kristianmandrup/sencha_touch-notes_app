
Ext.define('FriendlyRent.view.search.criteria.Size', {
  extend: 'Ext.field.SliderInput',
  alias: 'widget.search_criteria_size',
  config: {
    label: 'Size (min)',
    value: 100,
    increment: 10,
    minValue: 10,
    maxValue: 300
  }
});
