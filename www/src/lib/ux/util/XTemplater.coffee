Ext.define 'Ux.util.XTemplater'
  extend: 'Ext.XTemplate'
  statics:
    propertyTplFor: (name, configName) ->
      tplName = "property_#{name}"
      try
        Ext.XTemplate.from tplName, propertyHelper[configName]
      catch e
        throw "Template named #{tplName} is not defined in DOM #{e.message}"

    createPropertyTpl: (name) ->
      throw "PropertyHelper entry #{name} does not exist, please define it!" unless propertyHelper[name]
      Ext.XTemplater.propertyTplFor name, propertyHelper[name]

    useTemplate: (name, obj) ->
      this.subs[name].apply obj

    useTemplates: (names..., options) ->
      res = ""
      for name in names
        do (name) ->
          name = "#{options['ns']}#{name}" if options['ns']
          res += this.subs[name].apply options['data'] || options
      res

    registerTemplate: (name, tpl) ->
      this.subs ?= {}
      this.subs[name] = tpl

    getTemplate: (name) ->
      if not this.subs or this.subs[name].length then Ext.XTemplater.register()     
      throw "Template named #{name} is not registered" unless this.subs[name]
      console.log 'getTemplate', this.subs[name]
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
      self.registerTemplates(
        property: "mainInfo"
        property_detail: ["monthlyCosts", "onetimeCosts"]
      )

      # console.log "templates registered"
      self.registerTemplate "property_favorite", self.propertyTplFor("favorite", "mainInfo")

    registerTemplates: (mappings...) ->
      for name, templates of mappings
        for template in templates
          tplName = [name, template].join('_')
          self.registerTemplate tplName, self.createPropertyTpl(tplName)


