Ext.define  'FriendlyRent.view.search.Content'
  extend:   'Ext.Panel'
  alias:    'widget.search_content'
  requires: [
    'FriendlyRent.view.search.criteria.Location'
    'FriendlyRent.view.search.criteria.Radius'
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
    ]
