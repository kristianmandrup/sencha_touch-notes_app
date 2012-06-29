Ext.define  'FriendlyRent.store.Users'
    extend: 'Ext.data.Store'
    requires: [
        'Ext.data.proxy.LocalStorage'
    ]
    config:
        model: 'FriendlyRent.model.User'
        proxy:
            type:   'localstorage'
            id:     'users-store'
        sorters: [
            { property: 'dateCreated', direction: 'DESC'}
        ]
