Ext.define('model.ContactInfo', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'contact_info',

        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'dateCreated',       type: 'date', dateFormat: 'c' },

            {name: 'contact_hours',     type: 'string'},
            {name: 'phone',             type: 'string'},
            {name: 'alt_phone',         type: 'string'}
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    },
});