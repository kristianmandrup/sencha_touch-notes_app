Ext.define 	'FriendlyRent.view.search.criteria.Radius'
  extend: 	'Ext.field.SliderInput'
  alias: 	'widget.search_criteria_radius'
  config:
  	label:		'Radius (km)'
  	minValue: 	1
  	maxValue: 	50
  	value:		10