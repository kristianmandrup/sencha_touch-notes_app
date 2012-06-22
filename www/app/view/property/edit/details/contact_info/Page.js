Ext.define('FriendlyRent.view.property.edit.details.contact_info.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.property.edit.details.contact_info.page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'property.edit.details.topbar'
    },
    {
        xtype 'property.edit.details.contact_info.content'  
    },
    {
        xtype 'property.edit.details.navbar'
    }
  }
});
