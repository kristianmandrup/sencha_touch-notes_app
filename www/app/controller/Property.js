
Ext.define('FriendlyRent.controller.Property', {
  extend: 'Ext.app.Controller',
  loadStores: function() {
    return Ext.getStore('Properties').load();
  },
  launch: function() {
    this.callParent(arguments);
    console.log("launch Mail");
    return loadStores;
  },
  init: function() {
    this.callParent(arguments);
    return console.log("init Mail");
  }
});
