
Ext.define('FriendlyRent.view.search.agents.Content', {
  extend: 'Ext.dataview.List',
  alias: 'widget.search_agents_content',
  requires: ['FriendlyRent.store.Agents'],
  config: {
    store: 'Agents',
    itemId: 'agentsList',
    loadingText: 'Loading Agents...',
    emptyText: '<div class="agents-list empty-text">No agents found.</div>',
    itemTpl: '<div class="list-item agent"><span class="criteria">{criteria}</span><span class="trash">Delete</span></div>'
  }
});
