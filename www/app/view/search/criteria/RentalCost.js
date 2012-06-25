Ext.define("FriendlyRent.view.search.criteria.RentalCost", {
    extend: 'Ext.field.SliderInput',
    alias: "widget.search.criteria.rental_cost",
    config: {      
      minValue: 1500,
      value: 3000,
      maxValue: 20000,
      increment: 500,
      labelText: 'Rental cost',
      label: 'Rental cost',
    }
});
