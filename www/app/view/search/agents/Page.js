Ext.define('FriendlyRent.view.search.agents.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.search.agents.Page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'search.topbar'
    },
    {
        xtype 'search.agents.content'  
    },
    {
        xtype 'search.navbar'
    }
  }
});
