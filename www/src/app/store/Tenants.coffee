Ext.define  'FriendlyRent.store.Tenants'
  extend: 'Ext.data.Store'
  requires: [
    'Ext.data.proxy.LocalStorage'
  ]
  config:
    model: 'FriendlyRent.model.Tenant'
    proxy:
      type:   'localstorage'
      id:     'tenant-store'
    sorters: [
      { property: 'dateCreated', direction: 'DESC'}
    ]
    grouper:
      sortProperty: "dateCreated"
      direction: "DESC"
      groupFn: (record) ->
        if (record and record.data.dateCreated) then record.data.dateCreated.toDateString else ''
