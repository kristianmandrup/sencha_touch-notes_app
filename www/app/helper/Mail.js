var mailHelper;

Ext.define('FriendlyRent.helper.Mail', {
  constructor: function() {
    return TemplateHelper.prototype.augment(this);
  }
});

mailHelper = new FriendlyRent.helper.Mail;
