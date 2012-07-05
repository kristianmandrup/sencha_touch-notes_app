Ext.define  'FriendlyRent.view.search.agents.Content'
  extend:   'Ext.dataview.List'
  alias:    'widget.search_agents_content'
  requires: [
    'FriendlyRent.store.Agents'
  ]
  config:
    store:            'Agents'
    itemId:           'agentsList'
    loadingText:      'Loading Agents...'
    emptyText:        '<div class="agents-list empty-text">No agents found.</div>'
    # onItemDisclosure: true
    # grouped:          true
    itemTpl:          '<div class="list-item agent"><span class="criteria">{criteria}</span><span class="trash">Delete</span></div>'
    #store:
      #fields: ['criteria']
      #data : [
       # {
        #  criteria:  'Copenhagen 5km radius, 2 room apartment'
        #}
        #{
        #  criteria:  'Copenhagen 10km radius, 2-3 room apartment'
        #}
      #]
