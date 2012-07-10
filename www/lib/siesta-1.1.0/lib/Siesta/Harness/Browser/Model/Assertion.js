/*

Siesta 1.1.0-beta-1
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
var config = {
    idProperty  : 'index',

    fields      : [
        'index', 
        'summaryFailure',
        { name : 'passed', type : 'boolean', defaultValue : false  },
        { name : 'isTodo', type : 'boolean', defaultValue : false  },
        { name : 'isWaitFor', type : 'boolean', defaultValue : false  },
        { name : 'completed', type : 'boolean', defaultValue : false  },
        'description',
        'annotation',
        'type',
        'sourceLine',
    
        // For logging simulated events (will also have a type as for diagnostic messages)
        { name : 'isSimulatedEvent', type : 'boolean', defaultValue : false },
        'eventType'
    ]
}

Ext.define('Siesta.Harness.Browser.Model.Assertion', Ext.apply({
    extend      : 'Ext.data.Model'
}, Ext.getVersion('touch') ? { config : config } : config ))