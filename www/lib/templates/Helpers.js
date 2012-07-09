var PropertyHelper, TemplateHelper,
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

  PropertyHelper.prototype.mainDesc = function(item) {
    return "" + (this.sizeDesc(item)) + " " + item.type + " " + (this.floorDesc(item));
  };

  PropertyHelper.prototype.secondaryDesc = function(item) {
    return "" + (this.roomDesc(item));
  };

  PropertyHelper.prototype.sizeDesc = function(item) {
    return "" + item.size + " m2";
  };

  PropertyHelper.prototype.roomDesc = function(item) {
    var room;
    room = item.rooms > 1 ? "rooms" : "room";
    return "" + item.rooms + "/" + item.bedrooms + " " + (this.furnishedDesc(item)) + " " + room;
  };

  PropertyHelper.prototype.floorDesc = function(item) {
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
  };

  PropertyHelper.prototype.furnishedDesc = function(item) {
    if (item.furnished) {
      return "furnished";
    } else {
      return "";
    }
  };

  PropertyHelper.prototype.costDesc = function(cost) {
    return "" + cost + " DKK";
  };

  PropertyHelper.prototype.locationDesc = function(item) {
    return "" + item.city + " (" + item.region + ", " + item.countryCode + ")";
  };

  PropertyHelper.prototype.periodDesc = function(period) {
    if (period) {
      return "" + period.start_date + " to " + period.end_date;
    } else {
      return "";
    }
  };

  return PropertyHelper;

})();
