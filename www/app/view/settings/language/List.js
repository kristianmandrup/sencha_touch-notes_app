Ext.define('FriendlyRent.view.settings.language.List', {
  extend: 'Ext.Panel',
  alias: 'widget.settings.language.list',  
  config: {
    layout: 'vbar',
    items: [
        {
            html: 'English'
        },
        {
            html: 'Danish' 
        }
    ]
  }
});
