var propertyHelper;

Ext.define('FriendlyRent.helper.Property', {
  constructor: function() {
    return TemplateHelper.prototype.augment(this);
  },
  contact: {
    contactReqDesc: function(requests) {
      return "" + requests + " have contacted the landlord";
    }
  },
  mainInfo: {
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
  }
});

propertyHelper = new FriendlyRent.helper.Property;
