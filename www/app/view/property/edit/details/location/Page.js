Ext.define('FriendlyRent.view.property.edit.details.location.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.property.edit.details.location.page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'property.edit.details.topbar'
    },
    {
        xtype 'property.edit.details.location.content'  
    },
    {
        xtype 'property.edit.details.navbar'
    }
  }
});
