Ext.define('search.Criteria', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'criteria',

        idProperty: 'id',
        fields: [
            {name: 'id',                type: 'int'},
            {name: 'dateCreated',       type: 'date', dateFormat: 'c' },

            {name: 'location',          type: 'string'},
            {name: 'radius',            type: 'int'},

            // comma separated
            {name: 'propertyTypes',     type: 'string'},            

            {name: 'sizeMin',           type: 'int'},
            {name: 'sizeMax',           type: 'int'},

            {name: 'roomsMin',          type: 'int'},
            {name: 'roomsMax',          type: 'int'},

            {name: 'rentalCostMin',     type: 'int'},
            {name: 'rentalCostMax',     type: 'int'},

            {name: 'furnishment',       type: 'string'},
        ]
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
            { type: 'presence', field: 'location' }
        ]
    },
});