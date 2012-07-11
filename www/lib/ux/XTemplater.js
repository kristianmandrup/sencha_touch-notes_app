var __slice = [].slice;

Ext.define('Ext.XTemplater', {
  extend: 'Ext.XTemplate',
  statics: {
    propertyTplFor: function(name, configName) {
      var tplName;
      tplName = "property_" + name;
      try {
        return Ext.XTemplate.from(tplName, propertyHelper[configName]);
      } catch (e) {
        throw "Template named " + tplName + " is not defined in DOM " + e.message;
      }
    },
    createPropertyTpl: function(name) {
      if (!propertyHelper[name]) {
        throw "PropertyHelper entry " + name + " does not exist, please define it!";
      }
      return Ext.XTemplater.propertyTplFor(name, propertyHelper[name]);
    },
    useTemplate: function(name, obj) {
      return this.subs[name].apply(obj);
    },
    useTemplates: function() {
      var name, names, options, res, _fn, _i, _j, _len;
      names = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      res = "";
      _fn = function(name) {
        if (options['ns']) {
          name = "" + options['ns'] + name;
        }
        return res += this.subs[name].apply(options['data'] || options);
      };
      for (_j = 0, _len = names.length; _j < _len; _j++) {
        name = names[_j];
        _fn(name);
      }
      return res;
    },
    registerTemplate: function(name, tpl) {
      var _ref;
      if ((_ref = this.subs) == null) {
        this.subs = {};
      }
      return this.subs[name] = tpl;
    },
    getTemplate: function(name) {
      if (!this.subs || this.subs[name].length) {
        Ext.XTemplater.register();
      }
      if (!this.subs[name]) {
        throw "Template named " + name + " is not registered";
      }
      console.log('getTemplate', this.subs[name]);
      return this.subs[name];
    },
    postGroupString: function(xindex, xount, groupCount, str) {
      if (xindex === xcount || xindex % groupCount === 0) {
        return str;
      } else {
        return "";
      }
    },
    preGroupString: function(xindex, groupCount, str) {
      if (xindex === 1 || xindex % groupCount === 1) {
        return str;
      } else {
        return "";
      }
    },
    register: function() {
      var self;
      self = this;
      self.registerTemplates({
        property: "mainInfo",
        property_detail: ["monthlyCosts", "onetimeCosts"]
      });
      return self.registerTemplate("property_favorite", self.propertyTplFor("favorite", "mainInfo"));
    },
    registerTemplates: function() {
      var mappings, name, template, templates, tplName, _results;
      mappings = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      _results = [];
      for (name in mappings) {
        templates = mappings[name];
        _results.push((function() {
          var _i, _len, _results1;
          _results1 = [];
          for (_i = 0, _len = templates.length; _i < _len; _i++) {
            template = templates[_i];
            tplName = [name, template].join('_');
            _results1.push(self.registerTemplate(tplName, self.createPropertyTpl(tplName)));
          }
          return _results1;
        })());
      }
      return _results;
    }
  }
});
