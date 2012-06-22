Ext.define('FriendlyRent.view.mail.type.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.mail.type.page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'mail.topbar'
    },
    {
        xtype 'mail.type.content'  
    },
    {
        xtype 'mail.type.navbar'
    }
  }
});
