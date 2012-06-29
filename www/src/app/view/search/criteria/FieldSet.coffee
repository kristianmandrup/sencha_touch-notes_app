Ext.define  'FriendlyRent.view.search.criteria.Furnishment'
  extend: 'Ext.FieldSet'
  alias:  'widget.search_criteria_fieldset'
  requires: ['Ext.field.Search']
  config:        
    title: 'Search'
    instructions: 'Enter your search criteria to find properties'
    items: [
      {
          xtype: 'Ext.field.search'
      }
      {
          xtype: 'field.criteria.radius'  
      }
      {
          xtype: 'field.criteria.property_type'
      }
      {
          xtype: 'field.criteria.furnished'
      }
      {
          xtype: 'field.criteria.rooms'
      }
      {
          xtype: 'field.criteria.size'
      }
      {
          xtype: 'field.criteria.rental_period'
      }
    ]
