Ext.define('FriendlyRent.view.registration.tenant.why_us.Page', {
  extend: 'Ext.Panel',
  alias:  'widget.registration.tenant.why_us.page',
  config: {
    layout: 'vbox'
  },
  items: [
    {
        xtype 'registration.tenant.topbar'
    },
    {
        xtype 'registration.tenant.why_us.content'  
    },
    {
        xtype 'registration.tenant.why_us.navbar'
    }
  }
});
