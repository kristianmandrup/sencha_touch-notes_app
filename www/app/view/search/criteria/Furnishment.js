Ext.define("FriendlyRent.view.search.criteria.Furnishment", {
    extend: 'Ext.field.SliderText',
    alias: "widget.search.criteria.furnishment",
    config: {      
      label: 'Furnished',
      autoValues: true,
      valueMap: ['Any', 'None', 'Fully']
    }
});
