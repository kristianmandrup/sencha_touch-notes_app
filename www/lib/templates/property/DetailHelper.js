var propertyDetailHelper;

XHelper.Property.Detail = (function() {

  function _Class() {
    TemplateHelper.prototype.augment(this);
  }

  _Class.prototype.monthlyCosts = {
    costDesc: function(label, cost, currency) {
      if (currency == null) {
        currency = 'DKK';
      }
      return '<div class="label">#{label}</div><div class="cost">#{cost}</cost>';
    },
    rentDesc: function(cost) {
      return this.costDesc('Rent', cost);
    },
    utilitiesDesc: function(cost) {
      return this.costDesc('Utilities', cost);
    },
    mediaDesc: function(cost) {
      return this.costDesc('Media', cost);
    },
    totalDesc: function(cost) {
      return this.costDesc('Total', cost);
    }
  };

  _Class.prototype.onetimeCosts = {
    costDesc: function(label, cost, currency) {
      if (currency == null) {
        currency = 'DKK';
      }
      return '<div class="label">#{label}</div><div class="cost">#{cost}</cost>';
    },
    depositDesc: function(cost) {
      return this.costDesc('Deposit', cost);
    },
    prepaidDesc: function(cost) {
      return this.costDesc('Prepaid', cost);
    }
  };

  _Class.prototype.details = {
    rulesDesc: function(item) {
      return "" + (this.petsDesc(item)) + " <br/> " + (this.smokingDesc(item));
    },
    petsDesc: function(item) {
      return this.ruleDesc('pets', item.pets);
    },
    smokingDesc: function(item) {
      return this.ruleDesc('smoking', item.smoking);
    },
    ruleDesc: function(type, rule) {
      var line;
      line = "" + type + " allowed";
      if (!rule) {
        return "no " + line;
      } else {
        return line;
      }
    }
  };

  return _Class;

})();

propertyDetailHelper = new XHelper.Property.Detail;
