Ext.define  'FriendlyRent.store.Mails'
  extend: 'Ext.data.Store'
  requires: [
      'Ext.data.proxy.LocalStorage'
  ]
  config:
    model:  'FriendlyRent.model.Mail'
    proxy:
        type:   'localstorage'
        id:     'mail-store'
    sorters: [
        {property: 'dateCreated', direction: 'DESC'}
    ]
    grouper:
      sortProperty: "dateCreated"
      direction: "DESC"
      groupFn: (record) ->
        (record && record.data.dateCreated) ? record.data.dateCreated.toDateString : ''
