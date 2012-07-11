
Ext.define('FriendlyRent.helper.search.agent', {
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
  }
});
