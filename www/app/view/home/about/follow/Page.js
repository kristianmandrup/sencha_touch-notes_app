Ext.define('FriendlyRent.view.home.about.follow.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.home.about.follow.page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'home.about.topbar'
    },
    {
        xtype 'home.about.follow.content'  
    },
    {
        xtype 'home.about.navbar'
    }
  }
});
