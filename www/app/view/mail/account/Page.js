Ext.define('FriendlyRent.view.mail.account.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.mail.account.page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'mail.topbar'
    },
    {
        xtype 'mail.account.content'  
    },
    {
        xtype 'mail.account.navbar'
    }
  }
});
