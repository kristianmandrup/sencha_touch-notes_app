Ext.define('FriendlyRent.view.mail.inbox.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.mail.inbox.page',
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
