Ext.define("FriendlyRent.view.search.criteria.Rooms", {
    extend: 'Ext.field.Slider',
    alias: "widget.search.criteria.rooms",
    config: { 
      minValue: 10,      
      maxValue: 300,
      values: [60, 100], // double slider (2 thumbs)
      increment: 10,
      label: 'Size'
    }
});
