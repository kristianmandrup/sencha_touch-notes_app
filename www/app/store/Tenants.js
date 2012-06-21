Ext.define("FriendlyRent.store.Tenants", {
    extend: "Ext.data.Store",

    requires: 'Ext.data.proxy.remotestorage',
    config: {
        model: "FriendlyRent.model.account.Tenant",
        proxy: {
            type:   'storage',
            id:     'friendlyrent'
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