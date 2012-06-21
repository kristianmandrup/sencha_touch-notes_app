Ext.define('FriendlyRent.model.ContactInfo', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'contact_info',

        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'dateCreated',       type: 'date', dateFormat: 'c' },
            {name: 'contact_hours',     type: 'auto'},
            {name: 'phone',             type: 'auto'},
            {name: 'alt_phone',         type: 'auto'}
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    },
});