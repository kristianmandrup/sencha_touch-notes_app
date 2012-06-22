Ext.define('FriendlyRent.view.search.agents.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.search.agents.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Agents'
        },
        {
            html: 'List of agents'
        }
    ]
  }
});