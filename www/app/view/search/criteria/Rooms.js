
Ext.define('FriendlyRent.view.search.criteria.Rooms', {
  extend: 'Ext.field.SliderInput',
  alias: 'widget.search_criteria_rooms',
  config: {
    value: 1,
    minValue: 1,
    maxValue: 8,
    label: 'Rooms'
  }
});
