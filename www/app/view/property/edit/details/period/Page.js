Ext.define('FriendlyRent.view.property.edit.details.period.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.property.edit.details.period.page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'property.edit.details.topbar'
    },
    {
        xtype 'property.edit.details.period.content'  
    },
    {
        xtype 'property.edit.details.navbar'
    }
  }
});
