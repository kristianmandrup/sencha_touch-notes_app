Ext.define('FriendlyRent.model.mail.System', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'mail_system',

        idProperty: 'id',
        fields: [
            {name: 'id',            type: 'int'},
            {name: 'dateCreated',   type: 'date', dateFormat: 'c' }

            {name: 'inbox',         type: 'mail_box'},
            {name: 'sentbox',       type: 'mail_box'},
            {name: 'trashbox',      type: 'mail_box'}

            {name: 'replied',           type: 'array'},
            {name: 'received_reply',    type: 'array'}

        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    }
});