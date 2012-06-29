Ext.define("FriendlyRent.controller.property.List", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
        },
        control: {
        }
    },

    loadStores: function() {
        var propertyStore = Ext.getStore("Properties");
        propertyStore.load();
    },

    // Base Class functions.
    launch: function () {
        this.callParent(arguments);

        // loadStores;

        console.log("launch Property List");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init Property List");
    }
});

