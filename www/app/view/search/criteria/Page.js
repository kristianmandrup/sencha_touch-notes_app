Ext.define("FriendlyRent.view.search.criteria.Page", {
    extend: 'Ext.Panel',
    alias: "widget.search_criteria.page",
    config: {
      layout: {      
    },
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
    }
  }
});
