Ext.define  'FriendlyRent.view.property.details.Cost'
  extend:   'Ext.Panel'
  alias:    'widget.property_details_cost'
  requires: [
    'FriendlyRent.view.property.details.cost.OneTime'
    'FriendlyRent.view.property.details.cost.Monthly'
  ]
  config:
    items: [
      {
        html:  'Monthly payments'
      }
      {
        xtype:  'property_details_cost_monthly'
      }
      {
        html:  'One time payments'
      }
      {
        xtype:  'property_details_cost_one_time'
      }
