
Ext.define('FriendlyRent.controller.search.History', {
  extend: 'Ext.app.Controller',
  loadStores: function() {
    return Ext.getStore('History').load();
  },
  launch: function() {
    this.callParent(arguments);
    console.log("launch History");
    return loadStores;
  },
  init: function() {
    this.callParent(arguments);
    return console.log("init History");
  }
});
