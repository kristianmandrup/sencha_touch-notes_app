Ext.define('photo.Gallery', {
    extend: 'Ext.data.Model',
    
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'dateCreated',       type: 'date', dateFormat: 'c' },
            {name: 'photos',            type: 'array'}
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    },
});