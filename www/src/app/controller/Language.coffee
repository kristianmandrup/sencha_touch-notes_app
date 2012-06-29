# http://docs.sencha.com/ext-js/4-0/#!/guide/localization

Ext.define 	'Sencha.controller.Language'
  extend: 'Ext.app.Controller'
  formatStr: "ext/locale/ext-lang-{0}.js"
  setLanguage: (cb, records) ->
    record = records[0]
    window.location.search = Ext.urlEncode "lang": record.get("code")

	parseLanguage: ->    
		params = Ext.urlDecode window.location.search.substring(1)
		params.lang ? setLanguage(language) : this.setup()

	setLanguage: (params) ->
		url = Ext.util.Format.format this.formatStr, params.lang
	  Ext.Ajax.request
	    url: url
	    success: this.onSuccess
	    failure: this.onFailure
	    scope: this
		# check if there's really a language with passed code
		record = store.findRecord 'code', params.lang, null, null, null, true
		# if language was found in store, assign it as current value in combobox
		combo.setValue(record.data.language) if record				

	onFailure: ->
    Ext.Msg.alert 'Failure', 'Failed to load locale file.'
    this.setup()

	onSuccess: (response) ->
    eval response.responseText
    this.setup()

	setup: ->
	    Ext.create 'Ext.FormPanel'
        renderTo: 'datefield'
        frame: true
        title: 'Date picker'
        width: 380
        defaultType: 'datefield'
        items: [
        	{
            	fieldLabel: 'Date'
            	name: 'date'
        	}
        ]
