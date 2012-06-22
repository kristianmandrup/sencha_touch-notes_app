Ext.define('FriendlyRent.view.property.more.details.costs.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.property.more.details.costs.page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'property.edit.details.topbar'
    },
    {
        xtype 'property.edit.details.costs.content'  
    },
    {
        xtype 'property.edit.details.navbar'
    }
  }
});
