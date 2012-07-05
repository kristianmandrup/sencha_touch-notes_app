/*

Siesta 1.1.0-beta-1
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**

@class Siesta.Test.Action.Type
@extends Siesta.Test.Action
@mixin Siesta.Test.Action.Role.HasTarget

This action will {@link Siesta.Test.Browser#type type} provided {@link #text} in the provided {@link #target}. 
Target can be a DOM element or, in case you are using the Siesta.Test.ExtJS class - an instance of Ext.Component (field component for example). 

This action can be included in the `t.chain` call with "type" shortcut:

    t.chain(
        {
            action      : 'type',
            target      : someDOMElement,
            text        : 'Some text'
        }
    )


*/
Class('Siesta.Test.Action.Type', {
    
    isa         : Siesta.Test.Action,
    
    does        : Siesta.Test.Action.Role.HasTarget,
        
    has : {
        requiredTestMethod  : 'type',
        
        /**
         * @cfg {String} text
         * 
         * The text to type into the target
         */
        text                : ''
    },

    
    methods : {
        
        process : function () {
            var next = this.next;
            var target = this.getTarget();
            this.test.type(target, this.text, function() { next(target); })
        }
    }
});


Siesta.Test.ActionRegistry.registerAction('type', Siesta.Test.Action.Type)