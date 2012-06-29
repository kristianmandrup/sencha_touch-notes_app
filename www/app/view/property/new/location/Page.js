Ext.define('FriendlyRent.view.property.new.location.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.property.new.location.page',
  config: {
    layout: 'vbox',
    iconCls: 'home',
    iconMask: true    
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
