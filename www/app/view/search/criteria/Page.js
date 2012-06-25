Ext.define("FriendlyRent.view.search.criteria.Page", {
    extend: 'Ext.Panel',
    alias: "widget.search_criteria.page",
    requires: ['Ext.field.Search'],
    config: {
      layout: {      
    },
    items: [
        {
            xtype: "fieldset",
            title: 'Search',
            instructions: 'Enter your search criteria to find properties',
            items: [
                {
                    xtype 'Ext.field.search'
                },
                {
                    xtype 'field.criteria.radius'  
                },
                {
                    xtype 'field.criteria.property_type'
                },
                {
                    xtype 'field.criteria.furnished'
                },
                {
                    xtype 'field.criteria.rooms'
                },
                {
                    xtype 'field.criteria.size'
                },
                {
                    xtype 'field.criteria.rental_period'
                }
            ]
        }
    }
  }
});
