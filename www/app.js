Ext.application({
    name: "FriendlyRent",

    requires: [
        'Ext.MessageBox', 'FriendlyRent.view.Navigation'
    ],

    // models: ["Note"],
    // stores: ["Notes"],
    // controllers: ["Notes"],
    views: ["Main", "BottomBar", "TopBar", "Map", "Navigation"],
    // "NotesList", "NoteEditor", "Navigation",

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        console.log('launch');
        this.launched = true;        
        this.mainLaunch();
        // Ext.fly('appLoadingIndicator').destroy();
        // Ext.Viewport.add(Ext.create('FriendlyRent.view.Main'));        

    },

    mainLaunch: function() {
        console.log('mainLaunch');
        // if (!device || !this.launched) { return; }

        console.log('Launched!');

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        
        // // Initialize the main view
        // var notesListView = {
        //     xtype: "noteslistview"
        // };
        // var noteEditorView = {
        //     xtype: "noteeditorview"
        // };

        var navigation = Ext.create('FriendlyRent.view.Navigation');

        // Ext.Viewport.add([notesListView, noteEditorView]);

        Ext.Viewport.add(navigation);

        navigation.push({
            xtype: 'main'
        });

        // Ext.Viewport.add(Ext.create('FriendlyRent.view.Main'));        
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
