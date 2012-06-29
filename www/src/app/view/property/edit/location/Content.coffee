Ext.define  'FriendlyRent.view.property.edit.location.Content'
  extend:   'Ext.Panel'
  alias:    'widget.property_edit_location_content'
  config:
    layout: 'vbar'
    items: [
      {
          html: 'Location'
      }
      {
          html: 'Map here...'
      }
    ]