Ext.define('model.Photo', {
    extend: 'Ext.data.Model',
    
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id',            type: 'int'},
            {name: 'dateCreated',   type: 'date', dateFormat: 'c' },

            {name: 'name',          type: 'string'},
            {name: 'description',   type: 'string'},
            // base 64 encoded image
            {name: 'image',         type: 'string'}
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    }
});
