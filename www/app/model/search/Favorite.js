Ext.define('search.Favorite', {
    extend: 'Ext.data.Model',
    
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id',                type: 'int'},
            {name: 'dateCreated',       type: 'date', dateFormat: 'c' },

            {name: 'rating',            type: 'int'},
            {name: 'propertyId',        type: 'int'}
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    },
});