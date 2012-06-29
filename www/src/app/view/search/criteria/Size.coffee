Ext.define	'FriendlyRent.view.search.criteria.Size'
  extend: 'Ext.field.Slider'
  alias: 	'widget.search.criteria.size'
  config:
  	values: 		[60, 100] 
    increment: 	10
    minValue: 	10     
    maxValue: 	300        
    label: 			'Size'
