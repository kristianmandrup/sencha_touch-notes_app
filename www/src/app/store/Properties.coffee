Ext.define  'FriendlyRent.store.Properties'
  extend: 'Ext.data.Store'
  requires: [
    'Ext.data.proxy.LocalStorage'
  ]
  config:
    model: 'FriendlyRent.model.Property'
    proxy:
      type:   'localstorage'
      id:     'property-store'
    sorters: [
      { property: 'dateCreated', direction: 'DESC'}
    ]
    grouper:
      sortProperty: "dateCreated"
      direction: "DESC"
      groupFn: (record) ->
        if (record and record.data.dateCreated) then record.data.dateCreated.toDateString else ''
