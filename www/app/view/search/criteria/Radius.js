
Ext.define("FriendlyRent.view.search.criteria.Radius", {
  extend: 'Ext.field.SliderInput',
  alias: "widget.search.criteria.radius",
  config: {
    minValue: 1,
    value: 5,
    maxValue: 50,
    label: 'Radius'
  }
});
