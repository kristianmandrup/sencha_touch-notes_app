Ext.define('FriendlyRent.model.account.Tenant', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'tenant_account',

        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'dateCreated',                type: 'date', dateFormat: 'c' },
            {name: 'contact_requests_made',      type: 'int'}
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    }
});