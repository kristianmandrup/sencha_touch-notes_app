Ext.define('FriendlyRent.view.search.agents.Content', {
  extend: 'Ext.dataview.List',
  alias: 'widget.search.agents.content',  
  config: {
    store: "Agents",
    itemId:"agentsList",
    loadingText: "Loading Agents...",
    emptyText: '<div class="agents-list empty-text">No agents found.</div>',
    onItemDisclosure: true,
    grouped: true,
    itemTpl: '<div class="list-item agent"><span class="criteria">{criteria}</span><span class="trash">Delete</span></div>'
  }
});