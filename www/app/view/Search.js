Ext.define('Sencha.view.Search', {
    extend: 'Ext.Panel',
    xtype: 'searchcard',

    config: {
        iconCls: 'search',
        title: 'Search',
        html: 'placeholder text',
        styleHtmlContent: true,
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            items: [
                {xtype: 'spacer'},
                {
                    iconCls: 'maps',
                    iconMask: true,
                },
                {
                    iconCls: 'refresh',
                    iconMask: true
                }
            ]
        }]
    }
});
