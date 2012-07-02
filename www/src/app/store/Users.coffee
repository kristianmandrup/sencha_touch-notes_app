Ext.define  'FriendlyRent.store.Users'
  extend: 'Ext.data.Store'
  requires: [
    'Ext.data.proxy.LocalStorage'
  ]
  config:
    model: 'FriendlyRent.model.User'
    proxy:
      type:   'localstorage'
      id:     'user-store'
    sorters: [
      { property: 'dateCreated', direction: 'DESC'}
    ]
    grouper:
      sortProperty: "dateCreated"
      direction: "DESC"
      groupFn: (record) ->
        if (record and record.data.dateCreated) then record.data.dateCreated.toDateString else ''
