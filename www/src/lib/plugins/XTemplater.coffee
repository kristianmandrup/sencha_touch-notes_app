Ext.define 'Ext.XTemplater'
  extend: 'Ext.XTemplate'
  statics:
  	propertyTplFor: (tplName, configName) ->
  		Ext.XTemplate.from tplName, propertyHelper[configName]

  	createPropertyTpl: (name) ->			
  		tplName = "property_#{name}"
		  # console.log "create template for #{tplName}", propertyHelper
		  throw "ProperyHelper entry #{name} does not exist, please define it!" unless propertyHelper[name]
		  Ext.XTemplater.propertyTplFor tplName, propertyHelper[name]

  	# http://www.slideshare.net/senchainc/advanced-templates-5971877
  	applyRegisteredTemplate: (name, obj) ->
		  this.subs[name].apply obj

  	registerTemplate: (name, tpl) ->
  		this.subs ?= {}
  		this.subs[name] = tpl

  	getRegisteredTemplate: (name) ->
  		if not this.subs or this.subs[name].length then Ext.XTemplater.register()  		
  		this.subs[name]

  	postGroupString: (xindex, xount, groupCount, str) ->
		  if xindex == xcount or xindex % groupCount == 0 then str else ""

  	preGroupString: (xindex, groupCount, str) ->
		  if xindex == 1 or xindex % groupCount == 1 then str else ""

			# Using sub-templates
			# Ext.XTemplate.registerSubtemplate 'details', detailsTpl
			# {[this.applySubtemplate('details', values)]}

	  register: ->
	  	# console.log "register templates"
	  	self = this
	  	for name in ["monthlyCosts", "onetimeCosts", "mainInfo"]
	  		do (name) ->
	  			self.registerTemplate name, self.createPropertyTpl(name)

	  	self.registerTemplate "favorite", self.propertyTplFor("property_favorite", "mainInfo")