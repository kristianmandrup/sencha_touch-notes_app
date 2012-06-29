Ext.define  'FriendlyRent.controller.Mail'
  extend: 'Ext.app.Controller'
  # config:
    # refs:
    # control:
  loadStores: ->
    Ext.getStore('Mails').load()
  launch: ->
    this.callParent arguments
    console.log "launch Mail"
    loadStores        
  init: ->
    this.callParent arguments
    console.log "init Mail"