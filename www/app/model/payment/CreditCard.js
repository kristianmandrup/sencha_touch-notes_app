Ext.define('payment.CreditCard', {
    extend: 'Ext.data.Model',
    
    config: {
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