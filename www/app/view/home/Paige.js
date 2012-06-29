Ext.define('Sencha.view.home.Paige', {
    extend: 'Ext.TabPanel',
    alias:  'widget.homecard',
    //xtype: 'homecard',

    config: {
        iconCls: 'home',
        title: 'home',
        defaults: {
            styleHtmlContent: true
        },
        items: [{
            title: 'TabPanels',
            scrollable: 'vertical',
            html: '<p>The TabPanel provides a familiar tabbed interface that enables you to switch between different panels. It comes in two distinct flavours. When the tab bar is top-docked, each tab takes on the appearance of a button with a text label. But if you dock the tab bar to the bottom, then each tab button can be assigned an icon, as well as a text label. The icons are styled with an active and inactive state, which has a native look and feel.</p>'
        },{
            title: 'Toolbars',
            scrollable: 'vertical',
            html: '<p>Toolbars can be used as a title bar or as a container for buttons, or you can mix and match both of these functions.</p>'
        }]
    }
});
