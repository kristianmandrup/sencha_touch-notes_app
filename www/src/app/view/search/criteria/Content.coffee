Ext.define  'FriendlyRent.view.search.criteria.Content'
  extend: 'Ext.FormPanel'
  alias:  'widget.search_criteria_content'
  requires: ['FriendlyRent.view.search.criteria.FieldSet']
  config:
    items: [
      {
        xtype: 'search_criteria_fieldset'
      }
    ]
    
