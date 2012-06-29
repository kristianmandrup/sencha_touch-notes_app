Ext.define('Sencha.view.About', {
    extend: 'Ext.Panel',
    xtype: 'aboutcard',

    config: {
      iconCls: 'info',
      title: 'About',
      action: 'about',
      html: 'Made from coffee',
      styleHtmlContent: true,
      tabBar: {
          docked: 'bottom',
          layout: {
              pack: 'center'
          }
      },
      items: [
        {
        //iconCls: 'home',
          title: 'Why us',
        },
        {
          title: 'FAQ',
        }
      ],
    }
});
