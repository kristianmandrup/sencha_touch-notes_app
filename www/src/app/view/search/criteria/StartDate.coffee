Ext.define	'FriendlyRent.view.search.criteria.StartDate'
  extend: 	'Ext.field.SliderText'
  alias: 	'widget.search_criteria_start_date'
  config:
    label: 		'Starting (in)'
    autoValues: true
    valueMap: 	['ASAP', '1 week', '2 weeks', '1 month', '2 month']
