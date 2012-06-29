Ext.define  'FriendlyRent.store.Tenants'
  extend: 'Ext.data.Store'
  requires: [
      'Ext.data.proxy.LocalStorage'
  ]
  config:
    model: 'FriendlyRent.model.Tenant'
    proxy:
      type:   'localstorage'
      id:     'tenants-store'
    sorters: [
      { property: 'dateCreated', direction: 'DESC'}
    ]
