
Ext.define('FriendlyRent.controller.Mail', {
  extend: 'Ext.app.Controller',
  loadStores: function() {
    return Ext.getStore('Mails').load();
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
