Ext.define  'FriendlyRent.view.search.Content'
  extend:   'Ext.Panel'
  alias:    'widget.search_content'
  requires: [
    'FriendlyRent.view.search.criteria.Location'
    'FriendlyRent.view.search.criteria.Radius'
    'FriendlyRent.view.search.criteria.PropertyType'
  ]
  config:
    layout: 'vbox'
    items: [
      {
        xtype: 'search_criteria_location'
        name:  'location'
      }
      {
        xtype: 'search_criteria_radius'
        name:  'radius'
      }
      {
        xtype: 'search_criteria_property_type'
        name:  'property_type'
      }      
    ]
