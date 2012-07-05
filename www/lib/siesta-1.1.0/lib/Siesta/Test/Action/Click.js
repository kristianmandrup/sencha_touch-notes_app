/*

Siesta 1.1.0-beta-1
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**

@class Siesta.Test.Action.Click
@extends Siesta.Test.Action
@mixin Siesta.Test.Action.Role.HasTarget

This action can be included in the `t.chain` call with "click" shortcut:

    t.chain(
        {
            action      : 'click',
            target      : someDOMElement
        }
    )

This action will perform a {@link Siesta.Test.Browser#click click} on the provided {@link #target}. 
Target can be a DOM element or, in case you are using the Siesta.Test.ExtJS class - an instance of Ext.Component 

*/
Class('Siesta.Test.Action.Click', {
    
    isa         : Siesta.Test.Action,
    
    does        : Siesta.Test.Action.Role.HasTarget,
        
    has : {
        requiredTestMethod  : 'click'
    },

    
    methods : {
        
        process : function () {
            var next = this.next;
            var target = this.getTarget();
            this.test.click(target, function() { next(target); })
        }
    }
});


Siesta.Test.ActionRegistry.registerAction('click', Siesta.Test.Action.Click)
Siesta.Test.ActionRegistry.registerAction('tap', Siesta.Test.Action.Click)