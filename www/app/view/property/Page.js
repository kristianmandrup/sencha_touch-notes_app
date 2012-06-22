Ext.define('FriendlyRent.view.property.edit.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.property.edit.page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'property.edit.topbar'
    },
    {
        xtype 'property.edit.content'  
    },
    {
        xtype 'property.edit.navbar'
    }
  }
});
