Ext.define('account.Landlord', {
    extend: 'Ext.data.Model',
    
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'dateCreated',       type: 'date', dateFormat: 'c' },
            {name: 'contact_info',      type: 'contact_info'}
        ],
        belongsTo: 'User',
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    }
});