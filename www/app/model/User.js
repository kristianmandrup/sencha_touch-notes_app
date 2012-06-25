Ext.define('model.User', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'user',

        idProperty: 'id',
        fields: [
            {name: 'id',                type: 'int'},
            {name: 'dateCreated',       type: 'date', dateFormat: 'c' },
            {name: 'email',             type: 'email'},
            {name: 'password',          type: 'auto'},

            // {name: 'address',          type: 'address'},
        ],
        hasOne: [
            {name: 'landlord_account',  model: 'account.Landlord'}
        ]
            ,
            {name: 'tenant_account',    type: 'account.Tenant'}


        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    }
});