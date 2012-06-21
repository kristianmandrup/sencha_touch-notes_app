Ext.define('FriendlyRent.model.Address', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'account',

        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},

            {name: 'floor_adr',         type: 'auto'},
            {name: 'number',            type: 'auto'},
            {name: 'street',            type: 'auto'},
            {name: 'city',              type: 'auto'},
            {name: 'regiop',            type: 'auto'},
            {name: 'zip',               type: 'auto'},
            {name: 'country',           type: 'auto'}

        ],
        validations: [
            { type: 'presence', field: 'id' }
        ]
    },
});
