Ext.define('FriendlyRent.model.User', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'user',

        idProperty: 'id',
        fields: [
            {name: 'id',                type: 'int'},
            {name: 'dateCreated',       type: 'date', dateFormat: 'c' },
            {name: 'email',             type: 'email'},
            {name: 'password',          type: 'auto'},

            {name: 'landlord_account',  type: 'landlord_account'},
            {name: 'tenant_account',    type: 'tenant_account'}

            // {name: 'address',          type: 'address'},
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    }
});