Ext.define('FriendlyRent.view.mail.inbox.reply.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.mail.inbox.reply.page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'mail.topbar'
    },
    {
        xtype 'mail.inbox.content'  
    },
    {
        xtype 'mail.inbox.navbar'
    }
  }
});
