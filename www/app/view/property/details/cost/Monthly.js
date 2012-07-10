
Ext.define('FriendlyRent.view.property.details.cost.monthly', {
  extend: 'Ext.DataView',
  alias: 'widget.property_details_cost_monthly',
  requires: [],
  config: {
    store: {
      itemTpl: Ext.XTemplate.from("property_monthly_costs", new PropertyHelper.montlyCosts),
      fields: ['rent', 'utilities', 'media', 'total'],
      data: [
        {
          rent: 5500,
          utilities: 1100,
          media: 500,
          total: 7100
        }
      ]
    }
  }
});
