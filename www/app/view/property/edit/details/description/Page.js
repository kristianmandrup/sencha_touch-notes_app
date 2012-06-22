Ext.define('FriendlyRent.view.property.edit.details.description.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.property.edit.details.description.page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'property.edit.details.topbar'
    },
    {
        xtype 'property.edit.details.description.content'  
    },
    {
        xtype 'property.edit.details.navbar'
    }
  }
});
