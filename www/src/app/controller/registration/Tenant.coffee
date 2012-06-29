Ext.define  'FriendlyRent.controller.registration.Tenant'
  extend: 'Ext.app.Controller'
  # config:
    # refs:
    # control:
  loadStores: ->
    Ext.getStore('Tenants').load()
  launch: ->
    this.callParent arguments
    console.log "launch Tenants"
    loadStores        
  init: ->
    this.callParent arguments
    console.log "init Tenants"