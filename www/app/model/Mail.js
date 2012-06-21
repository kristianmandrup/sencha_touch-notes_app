Ext.define('FriendlyRent.model.Mail', {
    extend: 'Ext.data.Model',
    
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id',            type: 'int'},
            {name: 'dateCreated',   type: 'date', dateFormat: 'c' },
            {name: 'subject',       type: 'auto'},
            {name: 'body',          type: 'auto'},
            {name: 'type',          type: 'auto'}, // # payment, services, contacts, legal

            {name: 'sender',        type: 'account'},
            {name: 'receivers',     type: 'array'}

            // IMPORTANT: can't have a status like bookmarked or replied, as a message 
            // will appear in multiple accounts and for each account have a uniques status
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' },
            { type: 'presence', field: 'subject', message: 'Please enter a subject for this mail' }            
        ]
    },
});