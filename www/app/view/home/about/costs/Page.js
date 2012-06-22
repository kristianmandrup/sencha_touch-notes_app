Ext.define('FriendlyRent.view.home.about.costs.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.home.about.costs.page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'home.about.topbar'
    },
    {
        xtype 'home.about.costs.content'  
    },
    {
        xtype 'home.about.navbar'
    }
  }
});
