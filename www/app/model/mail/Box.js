Ext.define('mail.Box', {
    extend: 'Ext.data.Model',
    
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id',            type: 'int'}        
        ],
        hasMany: [
            {name: 'messages',      model: 'Mail'},
            {name: 'bookmarks',     model: 'Mail'}
        ]

        belongsTo: 'mail.System',
        validations: [
            { type: 'presence', field: 'id' }
        ]
    }
});