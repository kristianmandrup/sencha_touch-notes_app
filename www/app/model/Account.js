Ext.define('FriendlyRent.model.Account', {
    extend: 'Ext.data.Model',
    
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id',                type: 'int'},
            {name: 'dateCreated',       type: 'date', dateFormat: 'c' }
        ],
        hasMany: [
            {name: 'favorites',         model: 'search.Favorite'}
        ],
        hasOne: {name: 'mailSystem',    model: 'mail.System'},

        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    },
});