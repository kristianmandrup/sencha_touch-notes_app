
Ext.define('FriendlyRent.view.mail.properties.Page', {
  extend: 'Ext.Panel',
  alias: 'widget.mail_properties_page',
  config: {
    layout: 'vbox',
    items: [
      {
        xtype: 'mail_properties_topbar'
      }, {
        xtype: 'mail_properties_content'
      }, {
        xtype: 'mail_properties_navbar'
      }
    ]
  }
});
