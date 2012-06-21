Ext.define('FriendlyRent.model.Account', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'account',

        idProperty: 'id',
        fields: [
            {name: 'id',                type: 'int'},
            {name: 'dateCreated',       type: 'date', dateFormat: 'c' },
            {name: 'favorites',         type: 'favorites'},
            {name: 'mail_system',       type: 'mail_system'}
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    },
});