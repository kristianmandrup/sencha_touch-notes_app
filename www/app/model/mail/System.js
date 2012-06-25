Ext.define('mail.System', {
    extend: 'Ext.data.Model',
    
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id',            type: 'int'},
            {name: 'dateCreated',   type: 'date', dateFormat: 'c' }
        ],
        hasOne: [
            {name: 'inbox',         model: 'mail.Box'},
            {name: 'sentbox',       model: 'mail.Box'},
            {name: 'trashbox',      model: 'mail.box'}
        ],
        hasMany: [
            {name: 'replied',           model: 'Mail'},
            {name: 'received_reply',    model: 'Mail'}
        ],

        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    }
});