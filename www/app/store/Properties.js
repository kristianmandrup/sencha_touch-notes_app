Ext.define("FriendlyRent.store.Properties", {
    extend: "Ext.data.Store",

    requires: 'Ext.data.proxy.LocalStorage',
    config: {
        model: "FriendlyRent.model.Property",
        proxy: {
            type:   'localstorage',
            id:     'friendlyrent-store'
        },        
        sorters: [{ property: 'dateCreated', direction: 'DESC'}],
        grouper: {
            sortProperty: "dateCreated",
            direction: "DESC",
            groupFn: function (record) {

                if (record && record.data.dateCreated) {
                    return record.data.dateCreated.toDateString();
                } else {
                    return '';
                }
            }
        }        
    }
});