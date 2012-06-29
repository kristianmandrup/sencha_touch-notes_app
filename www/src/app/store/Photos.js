Ext.define  'FriendlyRent.store.Photos'
    extend: 'Ext.data.Store'
    requires: [
        'Ext.data.proxy.LocalStorage'
    ]
    config:
        model: 'FriendlyRent.model.Photo'
        proxy:
            type:   'localstorage'
            id:     'photos-store'
        sorters: [
            { property: 'dateCreated', direction: 'DESC'}
        ]
