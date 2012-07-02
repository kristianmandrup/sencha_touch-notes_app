Ext.define  'FriendlyRent.store.Landlords'
  extend: 'Ext.data.Store'
  requires: [
      'Ext.data.proxy.LocalStorage'
  ]
  config:
    model: 'FriendlyRent.model.Landlord'
    proxy:
      type:   'localstorage'
      id:     'landlord-store'
    sorters: [
      { property: 'dateCreated', direction: 'DESC'}
    ]