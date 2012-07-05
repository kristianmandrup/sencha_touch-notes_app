Ext.define  'FriendlyRent.store.Agents'
  extend:   'Ext.data.Store'
  requires: [
    'Ext.data.proxy.LocalStorage'
    'FriendlyRent.model.search.Agent'
  ]
  config:
    model:  'FriendlyRent.model.search.Agent'
    data : [
        {
          criteria:  'Copenhagen 5km radius, 2 room apartment'
        }
        {
          criteria:  'Copenhagen 10km radius, 2-3 room apartment'
        }
    ]
    proxy:
      type:   'localstorage'
      id:     'agent-store'
    sorters: [
        { property: 'dateCreated', direction: 'DESC'}
    ]
    grouper:
      sortProperty: "dateCreated"
      direction: "DESC"
      groupFn: (record) ->
        if (record and record.data.dateCreated) then record.data.dateCreated.toDateString else ''
