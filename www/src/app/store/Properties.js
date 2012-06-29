Ext.define  'FriendlyRent.store.Properties'
    extend: 'Ext.data.Store'
    requires: [
        'Ext.data.proxy.LocalStorage'
    ]
    config:
        model: 'FriendlyRent.model.Property'
        proxy:
            type:   'localstorage'
            id:     'properties-store'
        sorters: [
            { property: 'dateCreated', direction: 'DESC'}
        ]
