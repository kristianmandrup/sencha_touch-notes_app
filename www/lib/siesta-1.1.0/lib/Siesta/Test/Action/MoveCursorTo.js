/*

Siesta 1.1.0-beta-1
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**

@class Siesta.Test.Action.MoveCursorTo
@extends Siesta.Test.Action
@mixin Siesta.Test.Action.Role.HasTarget

This action can be included in the `t.chain` call with "click" shortcut:

    t.chain(
        {
            action      : 'moveCursorTo',
            target      : someDOMElement
        }
    )

This action will perform a {@link Siesta.Test.Simulate.Mouse#moveCursorTo moveCursorTo} on the provided {@link #target}. 
The target can be a DOM element or, an array of [x, y] coordinates. If you are using the Siesta.Test.ExtJS class - you can also pass any Ext.Component instances or a ComponentQuery, or a Siesta CompositeQuery.

*/
Class('Siesta.Test.Action.MoveCursorTo', {
    
    isa         : Siesta.Test.Action,
    
    does        : Siesta.Test.Action.Role.HasTarget,
        
    has : {
        requiredTestMethod  : 'moveMouseTo',
        target              : { required : true }
    },

    
    methods : {
        
        process : function () {
            var next = this.next;
            var target = this.getTarget();
            var targetEl = target;
            
            if (this.test.typeOf(target) == 'Array') {
                targetEl = this.test.normalizeTarget(target).el;
            }

            this.test.moveMouseTo(target, function() { next(targetEl); })
        }
    }
});


Siesta.Test.ActionRegistry.registerAction('moveCursorTo', Siesta.Test.Action.MoveCursorTo)
