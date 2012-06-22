Ext.define('FriendlyRent.view.property.details.period.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.property.details.period.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Rent period'
        },
        {
            html: 'Input Start and End'
        }
    ]
  }
});