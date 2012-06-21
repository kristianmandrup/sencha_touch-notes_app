Ext.define('FriendlyRent.model.property.rental_period.Costs', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'rental_costs',

        idProperty: 'id',
        fields: [
            {name: 'id',                type: 'int'},
            {name: 'dateCreated',       type: 'date', dateFormat: 'c' },
            {name: 'rent',              type: 'int'}, 
            {name: 'utilities',         type: 'int'},
            {name: 'tv',                type: 'int'},
            {name: 'internet',          type: 'int'},
            {name: 'other'              type: 'int'},

            {name: 'deposit',           type: 'int'},
            {name: 'prepaid_rent',      type: 'int'}

duration, :start_date, :end_date

        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' },
            { type: 'presence', field: 'rent' }
        ]
    },
});