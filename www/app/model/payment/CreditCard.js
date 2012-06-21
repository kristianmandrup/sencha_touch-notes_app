Ext.define('FriendlyRent.model.payment.CreditCard', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'credit_card',

        idProperty: 'id',
        fields: [
            {name: 'id',            type: 'int'},

            {name: 'number',        type: 'int'},
            {name: 'acc',           type: 'int'},

        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' }
        ]
    }
});