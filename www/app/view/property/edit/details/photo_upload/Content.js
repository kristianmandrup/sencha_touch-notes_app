Ext.define('FriendlyRent.view.property.details.photo_upload.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.property.details.photo_upload.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Take picture'
        },
        {
            html: 'Transfer pictures'
        }
    ]
  }
});