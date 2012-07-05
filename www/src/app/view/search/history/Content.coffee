Ext.define  'FriendlyRent.view.search.history.Content'
  extend:   'Ext.List'
  alias:    'widget.search_history_content'
  requires: [
    'FriendlyRent.store.History'
  ]
  config:
    itemTpl: '{criteria}'
    store:
      fields: ['criteria']
      data: [
        { criteria: 'Copenhagen 5km radius, 2-3 room apartment, max 5000 kr' }
        { criteria: 'Nørrebro 8km radius, 2 room apartment, max 4000 kr' }
        { criteria: 'Vesterbro 10km radius, 3 room apartment, max 6000 kr' }
      ]
