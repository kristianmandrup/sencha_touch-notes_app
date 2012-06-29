Ext.define('Sencha.view.Action', {
    extend: 'Ext.Panel',
    xtype: 'actioncard',
    requires: [
        'Sencha.view.buttonbar.Shapes',
        'Sencha.view.buttonbar.Colors',
        'Sencha.view.buttonbar.ShapeColors',
        'Sencha.view.buttonbar.IconStyles'
    ],

    config: {
        iconCls: 'action',
        title: 'Action',
        items: [{
            xtype: 'buttonshapes'
        },{
            xtype: 'buttoncolors'
        },{
            xtype: 'buttonshapecolors'
        },{
            xtype: 'buttoniconstyles'
        },{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Titlebars accomodate buttons and titles',
            items: [
                {
                    iconMask:true,
                    iconCls: 'star',
                    ui:      'plain',
                    align:   'right',
                    action:  'pingHomeBadge'
                },{
                    iconMask:true,
                    iconCls: 'delete',
                    ui:      'plain',
                    align:   'left',
                    action:  'clearHomeBadge'
                }
            ]
        }]
    }
});
