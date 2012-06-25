Ext.define('FriendlyRent.view.start.Page', {
  extend: 'Ext.Panel',
  alias: 'widget.start.page',  
  config: {
    layout: 'vbar',
    items: [
        {
            xtype: 'start.image'
        },
        {
            xtype: 'start.languages'
        }
    ]
  }
});