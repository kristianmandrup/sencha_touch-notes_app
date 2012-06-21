Ext.define('FriendlyRent.model.account.Landlord', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'landlord_account',

        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'dateCreated',       type: 'date', dateFormat: 'c' },
            {name: 'contact_info',      type: 'contact_info'}
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    }
});