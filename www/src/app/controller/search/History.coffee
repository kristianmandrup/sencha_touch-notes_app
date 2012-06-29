Ext.define  'FriendlyRent.controller.search.History'
  extend: 'Ext.app.Controller'
  # config:
    # refs:
    # control:
  loadStores: ->
    Ext.getStore('History').load()
  launch: ->
    this.callParent arguments
    console.log "launch History"
    loadStores        
  init: ->
    this.callParent arguments
    console.log "init History"