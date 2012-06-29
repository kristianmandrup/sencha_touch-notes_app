
Ext.define('FriendlyRent.view.mail.messages.Page', {
  extend: 'Ext.Panel',
  alias: 'widget.mail_messages_page',
  config: {
    layout: 'vbox',
    items: [
      {
        xtype: 'mail_messages_topbar'
      }, {
        xtype: 'mail_messages_description_content'
      }, {
        xtype: 'mail_messages_navbar'
      }
    ]
  }
});
