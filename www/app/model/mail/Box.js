Ext.define('FriendlyRent.model.mail.Box', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'mailbox',

        idProperty: 'id',
        fields: [
            {name: 'id',            type: 'int'}            

            {name: 'messages',       type: 'array'},
            {name: 'bookmarks',      type: 'array'}
        ],
        validations: [
            { type: 'presence', field: 'id' }
        ]
    }
});