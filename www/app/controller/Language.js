
Ext.define('Sencha.controller.Language', {
  extend: 'Ext.app.Controller',
  setLanguage: function(cb, records) {
    var record;
    record = records[0];
    return window.location.search = Ext.urlEncode({
      "lang": record.get("code")
    });
  }
});

({
  parseLanguage: function() {
    var params, record, url;
    params = Ext.urlDecode(window.location.search.substring(1));
    if (params.lang) {
      url = Ext.util.Format.format('ext/locale/ext-lang-{0}.js', params.lang);
      Ext.Ajax.request({
        url: url,
        success: this.onSuccess,
        failure: this.onFailure,
        scope: this
      });
      record = store.findRecord('code', params.lang, null, null, null, true);
    }
    return combo.setValue(record.data.language)(record ? this.setup() : void 0);
  },
  onFailure: function() {
    Ext.Msg.alert('Failure', 'Failed to load locale file.');
    return this.setup();
  },
  onSuccess: function(response) {
    eval(response.responseText);
    return this.setup();
  },
  setup: function() {
    return Ext.create('Ext.FormPanel', {
      renderTo: 'datefield',
      frame: true,
      title: 'Date picker',
      width: 380,
      defaultType: 'datefield',
      items: [
        {
          fieldLabel: 'Date',
          name: 'date'
        }
      ]
    });
  }
});
