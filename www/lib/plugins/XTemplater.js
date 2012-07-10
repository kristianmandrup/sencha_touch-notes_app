
Ext.define('Ext.XTemplater', {
  extend: 'Ext.XTemplate',
  statics: {
    propertyTplFor: function(tplName, configName) {
      return Ext.XTemplate.from(tplName, propertyHelper[configName]);
    },
    createPropertyTpl: function(name) {
      var tplName;
      tplName = "property_" + name;
      if (!propertyHelper[name]) {
        throw "ProperyHelper entry " + name + " does not exist, please define it!";
      }
      return Ext.XTemplater.propertyTplFor(tplName, propertyHelper[name]);
    },
    applyRegisteredTemplate: function(name, obj) {
      return this.subs[name].apply(obj);
    },
    registerTemplate: function(name, tpl) {
      var _ref;
      if ((_ref = this.subs) == null) {
        this.subs = {};
      }
      return this.subs[name] = tpl;
    },
    getRegisteredTemplate: function(name) {
      if (!this.subs || this.subs[name].length) {
        Ext.XTemplater.register();
      }
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
      var name, self, _fn, _i, _len, _ref;
      self = this;
      _ref = ["monthlyCosts", "onetimeCosts", "mainInfo"];
      _fn = function(name) {
        return self.registerTemplate(name, self.createPropertyTpl(name));
      };
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        name = _ref[_i];
        _fn(name);
      }
      return self.registerTemplate("favorite", self.propertyTplFor("property_favorite", "mainInfo"));
    }
  }
});
