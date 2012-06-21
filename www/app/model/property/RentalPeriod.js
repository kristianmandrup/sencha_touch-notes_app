Ext.define('FriendlyRent.model.property.RentalPeriod', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'rental_period',

        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'dateCreated',       type: 'date', dateFormat: 'c' },

            {name: 'rental_costs',      type: 'rental_costs'}

            {name: 'duration',          type: 'int'}, // seconds
            {name: 'start_date',        type: 'date', dateFormat: 'c' },
            {name: 'end_date'           type: 'date', dateFormat: 'c' },
            {name: 'asap',              type: 'bool'},

            {name: 'publish_at',        type: 'date', dateFormat: 'c' }
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' },
            { type: 'presence', field: 'rent' }
        ]
    },
});