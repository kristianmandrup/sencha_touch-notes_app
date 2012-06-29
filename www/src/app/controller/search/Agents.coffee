Ext.define  'FriendlyRent.controller.search.Agents'
  extend: 'Ext.app.Controller'
  # config:
    # refs:
    # control:
  loadStores: ->
    Ext.getStore('Agents').load()
  launch: ->
    this.callParent arguments
    console.log "launch Agents"
    loadStores        
  init: ->
    this.callParent arguments
    console.log "init Agents"