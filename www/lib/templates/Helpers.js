console;

var PropertyHelper, TemplateHelper, propertyHelper,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

TemplateHelper = (function(_super) {

  __extends(TemplateHelper, _super);

  function TemplateHelper() {
    return TemplateHelper.__super__.constructor.apply(this, arguments);
  }

  return TemplateHelper;

})(Mixin);

PropertyHelper = (function() {

  function PropertyHelper() {
    TemplateHelper.prototype.augment(this);
  }

  PropertyHelper.prototype.mainInfo = {
    mainDesc: function(item) {
      return "" + (this.sizeDesc(item)) + " " + item.type + " " + (this.floorDesc(item));
    },
    secondaryDesc: function(item) {
      return "" + (this.roomDesc(item));
    },
    sizeDesc: function(item) {
      return "" + item.size + " m2";
    },
    roomDesc: function(item) {
      var room;
      room = item.rooms > 1 ? "rooms" : "room";
      return "" + item.rooms + "/" + item.bedrooms + " " + (this.furnishedDesc(item)) + " " + room;
    },
    floorDesc: function(item) {
      var adj;
      adj = (function() {
        switch (item.floor) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      })();
      if (item.floor > 0) {
        return "on " + item.floor + adj + " floor";
      } else {
        return "";
      }
    },
    furnishedDesc: function(item) {
      if (item.furnished) {
        return "furnished";
      } else {
        return "";
      }
    },
    costDesc: function(cost) {
      return "" + cost + " DKK";
    },
    locationDesc: function(item) {
      return "" + item.city + " (" + item.region + ", " + item.countryCode + ")";
    },
    periodDesc: function(period) {
      if (period) {
        return "" + period.start_date + " to " + period.end_date;
      } else {
        return "";
      }
    }
  };

  PropertyHelper.prototype.monthlyCosts = {
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

  PropertyHelper.prototype.onetimeCosts = {
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

  PropertyHelper.prototype.details = {
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

  return PropertyHelper;

})();

propertyHelper = new PropertyHelper;
