var propertyDetailHelper;

Ext.define('FriendlyRent.helper.property.Detail', {
  constructor: function() {
    return TemplateHelper.prototype.augment(this);
  },
  description: {
    desc: function(desc) {
      if (_.isBlank(desc)) {
        return "No description";
      } else {
        return desc;
      }
    }
  },
  facilities: {
    desc: function(facilities) {
      if (!facilities.length) {
        return "No facilities";
      } else {
        return desc;
      }
    }
  },
  locationDetails: {
    desc: function(locations) {
      if (!locations.length) {
        return "No locations";
      } else {
        return desc;
      }
    }
  },
  monthlyCosts: {
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
  },
  onetimeCosts: {
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
  },
  details: {
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
  }
});

propertyDetailHelper = new FriendlyRent.helper.property.Detail;
