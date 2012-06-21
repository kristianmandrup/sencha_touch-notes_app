Ext.define("FriendlyRent.controller.mail.Inbox", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
        },
        control: {
        }
    },

    loadStores: function() {
        var mailStore = Ext.getStore("Mails");
        mailStore.load();
    },

    // Base Class functions.
    launch: function () {
        this.callParent(arguments);

        // loadStores;

        console.log("launch inbox");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init inbox");
    }
});

