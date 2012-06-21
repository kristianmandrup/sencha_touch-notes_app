Ext.define('FriendlyRent.model.Preferences', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'preferences',

        idProperty: 'id',
        fields: [
            {name: 'id',            type: 'int'},
            {name: 'dateCreated',   type: 'date', dateFormat: 'c' },
            {name: 'subject',       type: 'auto'},
            {name: 'body',          type: 'auto'}
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' },
            { type: 'presence', field: 'subject', message: 'Please enter a subject for this mail' }
        ]
    },
});