Ext.define  'FriendlyRent.store.Photos'
  extend: 'Ext.data.Store'
  requires: [
    'Ext.data.proxy.LocalStorage'
  ]
  config:
    model: 'FriendlyRent.model.Photo'
    proxy:
      type:   'localstorage'
      id:     'photo-store'
    sorters: [
      { property: 'dateCreated', direction: 'DESC'}
    ]
    grouper:
      sortProperty: "dateCreated"
      direction: "DESC"
      groupFn: (record) ->
        if (record and record.data.dateCreated) then record.data.dateCreated.toDateString else ''
