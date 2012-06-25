Ext.define('FriendlyRent.view.settings.map.Options', {
  extend: 'Ext.Panel',
  alias: 'widget.settings.map.options',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'Allow sharing my location'
        },
        // http://www.daftlogic.com/sandbox-google-maps-remember-last-location.htm
        {
            html: 'Remember my last map position' 
        }
    ]
  }
});
