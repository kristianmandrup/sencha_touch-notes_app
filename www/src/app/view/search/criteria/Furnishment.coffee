Ext.define 	'FriendlyRent.view.search.criteria.Furnishment'
    extend: 'Ext.field.SliderText'
    alias: 	'widget.search_criteria_furnishment'
    config:
      label: 'Furnished'
      autoValues: true
      valueMap: ['Any', 'None', 'Fully']
