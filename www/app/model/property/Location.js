Ext.define('property.Location', {
    extend: 'Ext.data.Model',
    
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},

            {name: 'lat',      type: 'float'}
            {name: 'long',     type: 'float'},
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' },

            { type: 'presence', field: 'lat' },
            { type: 'presence', field: 'long' }
        ]
    },
});