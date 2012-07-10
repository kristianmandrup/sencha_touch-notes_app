Ext.define  'FriendlyRent.view.property.details.cost.onetime'
  extend:   'Ext.DataView'
  alias:    'widget.property_details_cost_onetime'
  requires: [
  ]
  config:
    store:
      itemTpl: Ext.XTemplate.from("property_onetime_costs", new PropertyHelper.ontimeCosts)
      fields: ['deposit', 'prepaid']
      data: [
        {deposit: 14200,  prepaid: 7100}
      ]