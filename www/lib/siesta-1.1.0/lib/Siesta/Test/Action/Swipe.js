/*

Siesta 1.1.0-beta-1
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**

@class Siesta.Test.Action.Swipe
@extends Siesta.Test.Action
@mixin Siesta.Test.Action.Role.HasTarget

This action can be included in the `t.chain` call with "swipe" shortcut:

    t.chain(
        {
            action      : 'swipe',
            target      : someDOMElement
        }
    )

This action will perform a {@link Siesta.Test.SenchaTouch#swipe swipe} on the provided {@link #target}. 
The target can be a Component Query, a Sencha Touch Component, a DOM element or [x,y] coordinates

*/
Class('Siesta.Test.Action.Swipe', {
    
    isa         : Siesta.Test.Action,
    
    does        : Siesta.Test.Action.Role.HasTarget,
        
    has : {
        requiredTestMethod          : 'swipe',
        /**
         * @cfg {String/Ext.Component/Array/HTMLElement/Function} target
         * 
         * The initial point of dragging operation. Can be provided as a Component Query, a Sencha Touch Component, a DOM element or [x,y] coordinates
         */
         
        /**
         * @cfg {String} direction Either 'left', 'right', 'up' or 'down'
         */
        direction                  : 'left'
    },

    
    methods : {
        
        process : function () {
            var next = this.next;
            var target = this.getTarget();
            
            this.test.swipe(target, this.direction, function() { next(target); })
        }
    }
});


Siesta.Test.ActionRegistry.registerAction('swipe', Siesta.Test.Action.Swipe)
