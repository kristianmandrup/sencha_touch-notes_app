Ext.define  'FriendlyRent.view.search.history.Content'
  extend:   'Ext.Panel'
  alias:    'widget.search_history_content'
  config:
    layout: 'vbar'
    items: [
        {
            html: 'Search History'
        }
        {
            html: 'List of previous searches'
        }
    ]
