Ext.define('FriendlyRent.view.registration.tenant.register.Content', {
  extend: 'Ext.Panel',
  alias: 'widget.registration.tenant.register.content',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Register Tenant'
        },
        {
            html: 'Facebook'
        },
        {
            html: 'Twitter'
        }
    ]
  }
});