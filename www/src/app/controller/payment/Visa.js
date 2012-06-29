Ext.define("FriendlyRent.controller.payment.Visa", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
        },
        control: {
        }
    },

    loadStores: function() {
    },

    // Base Class functions.
    launch: function () {
        this.callParent(arguments);

        // loadStores;

        console.log("launch VISA payment");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init VISA payment");
    }
});

