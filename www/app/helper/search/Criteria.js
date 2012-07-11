
Ext.define('FriendlyRent.helper.search.criteria', {
  constructor: function() {
    return TemplateHelper.prototype.augment(this);
  },
  mainInfo: propertyHelper.mainInfo,
  criteria: function(criteria) {
    return "" + (this.locationDesc(criteria)) + " " + (this.sizeDesc(criteria)) + " " + (this.typeDesc(criteria)) + " " + (this.roomDesc(criteria));
  },
  locationDesc: function(criteria) {
    if (_.isBlank(criteria.location)) {
      return "anywhere";
    } else {
      return this.mainInfo.locationDesc(criteria);
    }
  },
  roomsDesc: function(criteria) {
    if (_.isBlank(criteria.rooms)) {
      return "any rooms";
    } else {
      return this.mainInfo.roomDesc(criteria);
    }
  },
  sizeDesc: function(criteria) {
    if (_.isBlank(criteria.size)) {
      return "any size";
    } else {
      return this.mainInfo.sizeDesc(criteria);
    }
  },
  typeDesc: function(criteria) {
    if (_.isBlank(criteria.type)) {
      return "any property type";
    } else {
      return criteria.type;
    }
  },
  periodDesc: function(criteria) {
    if (_.isBlank(criteria.period)) {
      return "any period";
    } else {
      return this.helper.periodRangeDesc(criteria);
    }
  },
  costDesc: function(criteria) {
    if (_.isBlank(criteria.period)) {
      return "any cost";
    } else {
      return this.helper.costRangeDesc(criteria);
    }
  },
  rulesDesc: function(criteria) {
    if (_.isBlank(criteria.period)) {
      return "any rules";
    } else {
      return this.mainInfo.rulesDesc(criteria);
    }
  },
  furnishedDesc: function(criteria) {
    if (_.isBlank(criteria.furnished)) {
      return "";
    } else {
      return this.furnishDesc(criteria);
    }
  },
  helper: {
    furnishDesc: function(criteria) {
      if (criteria.furnished) {
        return "furnished";
      } else {
        return "not furnished";
      }
    },
    periodRangeDesc: function(criteria) {
      return [this.helper.startTimeDesc(criteria), this.helper.durationDesc(criteria)].join(' ');
    },
    costRangeDesc: function(criteria) {
      var max, min;
      min = criteria.cost.min;
      max = criteria.cost.max;
      if (_.isBlank(min)) {
        return "max " + max;
      }
      if (_.isBlank(max)) {
        return "min " + min;
      }
      return "" + min + " - " + max + " DKK";
    },
    startTimeDesc: function(criteria) {
      var start;
      start = criteria.period.start;
      if (_.isBlank(criteria.period.start)) {
        return "starting any time";
      }
      if (start === 'asap') {
        return 'ASAP';
      }
      return "in " + (this.timeDesc(criteria.period.start));
    },
    durationDesc: function(criteria) {
      if (_.isBlank(criteria.period.duration)) {
        return "lasting any duration";
      }
      return "for at least " + (this.timeDesc(criteria.period.duration));
    },
    timeDesc: function(time) {
      var number, unit;
      unit = time.match(/m$/) ? 'month' : 'week';
      number = Number(time.match(/\d/));
      unit = number > 1 ? "" + unit + "s" : unit;
      return [number, unit].join(' ');
    }
  }
});
