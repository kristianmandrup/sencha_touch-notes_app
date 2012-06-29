Ext.define  'FriendlyRent.controller.Property'
  extend: 'Ext.app.Controller'
  # config:
    # refs:
    # control:
  loadStores: ->
    Ext.getStore('Properties').load()
  launch: ->
    this.callParent arguments
    console.log "launch Mail"
    loadStores        
  init: ->
    this.callParent arguments
    console.log "init Mail"