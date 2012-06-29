Ext.define('FriendlyRent.view.property.edit.details.photo_upload.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.property.edit.details.photo_upload.page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'property.edit.details.topbar'
    },
    {
        xtype 'property.edit.details.photo_upload.content'  
    },
    {
        xtype 'property.edit.details.navbar'
    }
  }
});
