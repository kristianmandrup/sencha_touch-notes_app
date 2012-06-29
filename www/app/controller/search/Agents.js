
Ext.define('FriendlyRent.controller.search.Agents', {
  extend: 'Ext.app.Controller',
  loadStores: function() {
    return Ext.getStore('Agents').load();
  },
  launch: function() {
    this.callParent(arguments);
    console.log("launch Agents");
    return loadStores;
  },
  init: function() {
    this.callParent(arguments);
    return console.log("init Agents");
  }
});
