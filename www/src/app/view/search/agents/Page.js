Ext.define  'FriendlyRent.view.search.agents.Page'
  extend:   'Ext.Panel'
  alias:    'widget.search.agents.Page'
  config:
    layout: 'vbox'
  items: [
    {
        xtype 'search_topbar'
    }
    {
        xtype 'search_agents_content'  
    }
    {
        xtype 'search_navbar'
    }
  ]
