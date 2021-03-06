
Ext.define('FriendlyRent.controller.registration.Tenant', {
  extend: 'Ext.app.Controller',
  loadStores: function() {
    return Ext.getStore('Tenants').load();
  },
  launch: function() {
    this.callParent(arguments);
    console.log("launch Tenants");
    return loadStores;
  },
  init: function() {
    this.callParent(arguments);
    return console.log("init Tenants");
  }
});
