Ext.define  'FriendlyRent.view.properties.list.Content'
  extend:   'Ext.List'
  alias:    'widget.properties_list_content'
  requires: [
    'FriendlyRent.store.Properties'
  ]
  # http://www.sencha.com/blog/dive-into-dataview-with-sencha-touch-2-beta-2/
  config:  
    store:        'Properties'    
    itemId:       'properties_list'
    loadingText:  'Loading properties...'
    emptyText:    '<div class="favorites-list empty-text">No properties found.</div>'
      # Ext.XTemplate.from("property", helperFunctions
    itemTpl:      Ext.XTemplate.from(
      "property"
      new PropertyHelper
    )
    onItemDisclosure: (record, btn, index) ->
      console.log('Disclose Property', record, index)
