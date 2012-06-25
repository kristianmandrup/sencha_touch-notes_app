Ext.define('FriendlyRent.view.search.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.search.content',
  config: {
    layout: 'vbox',
    items: [{
      {
        xtype: 'search.criteria.location'
        name:  'location'
      },
      {
        xtype: 'search.criteria.radius'
        name:  'radius'
      },
      {
        xtype: 'search.criteria.property_type'
        name:  'property_type'
      },
      {
        xtype: 'search.criteria.furnishment'
        name:  'furnishment'
      },
      {
        xtype: 'search.criteria.size'
        name:  'size'
      },      
      {
        xtype: 'search.criteria.rental_cost'
        name:  'cost'
      },
      {
        xtype: 'search.criteria.rental_period'
        name:  'period'
      },
      {
        xtype: 'search.criteria.rules'
        name:  'rules'      
      },
      {
        xtype: 'button',
        name:  'create_agent',
        label: 'Create agent'
      }      
    }]
  }
});