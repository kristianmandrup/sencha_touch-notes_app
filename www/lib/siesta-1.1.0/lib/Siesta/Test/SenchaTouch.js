/*

Siesta 1.1.0-beta-1
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**
 * 
@class Siesta.Test.SenchaTouch
@extends Siesta.Test.Browser
@mixin Siesta.Test.ExtJSCore
@mixin Siesta.Test.ExtJS.Observable
@mixin Siesta.Test.ExtJS.FormField
@mixin Siesta.Test.ExtJS.Component
@mixin Siesta.Test.ExtJS.Element 
@mixin Siesta.Test.ExtJS.Store 

A base class for testing Sencha Touch applications. It inherits from {@link Siesta.Test.Browser} 
and adds various ST specific assertions.

 * **IMPORTANT** : In various places where the {@link Siesta.Test.Browser} accepts the DOM element as the argument (for example, `type/click/drag` etc), 
this class will allow you to specify one of the following:

- an instance of `Ext.Component`
- a string, containing Ext.ComponentQuery selector
- a string, containing {@link Siesta.Test.ExtJSCore#compositeQuery compositeQuery} selector
- a DOM element

When needed, the `getEl` method of the component will be used to convert the component to DOM element. 

This file is a reference only, for a getting start guide and manual, please refer to <a href="#!/guide/siesta_getting_started">Getting Started Guide</a>.

*/
Class('Siesta.Test.SenchaTouch', {
    
    isa         : Siesta.Test.Browser,
        
    does        :  [ 
        Siesta.Test.ExtJSCore, 
        Siesta.Test.ExtJS.Component, 
        Siesta.Test.ExtJS.Element, 
        Siesta.Test.ExtJS.Observable, 
        Siesta.Test.ExtJS.Store
    ],
    
    has         : {
        performSetup        : true,
        isSTSetupDone       : false
    },
    
    override : {
        
        isReady : function () {
            var result = this.SUPERARG(arguments);

            if (!result.ready) return result;

            if (this.performSetup && !this.isSTSetupDone) return {
                ready       : false,
                reason      : "Waiting for Ext.setup took too long - some dependency can't be loaded? Check the `Net` tab in Firebug"
            }
            
            return {
                ready       : true
            }
        },

        
        start : function () {
            var me      = this;
            var Ext     = this.getExt();
            
            if (!Ext) return
            
            if (this.performSetup) Ext.setup({
                onReady : function () {
                    me.isSTSetupDone    = true
                }
            })
            
            this.SUPERARG(arguments)
        }
    },
    
    methods : {
        
        /**
         * This method taps the passed target, which can be of several different types.
         * 
         * @param {Ext.Component/String/HTMLElement/Array} target Either an Ext.Component, a Component Query selector, an element, or [x,y] as the target
         * @param {Function} callback (optional) A function to call when the condition has been met.
         * @param {Object} scope (optional) The scope for the callback 
         */
        tap: function (target, callback, scope) {
            target = this.normalizeElement(target);

            this.click(target, callback, scope);
        },

        /**
         * This method double taps the passed target, which can be of several different types.
         * 
         * @param {Ext.Component/String/HTMLElement/Array} target Either an Ext.Component, a Component Query selector, an element, or [x,y] as the target
         * @param {Function} callback (optional) A function to call when the condition has been met.
         * @param {Object} scope (optional) The scope for the callback 
         */
        doubleTap: function (target, callback, scope) {
            target = this.normalizeElement(target);

            this.doubleClick(target, callback, scope);
        },

        /**
         * This method double taps the passed target, which can be of several different types.
         * 
         * @param {Ext.Component/String/HTMLElement/Array} target Either an Ext.Component, a Component Query selector, an element, or [x,y] as the target
         * @param {Function} callback (optional) A function to call when the condition has been met.
         * @param {Object} scope (optional) The scope for the callback 
         */
        longpress: function (target, callback, scope) {
            target = this.normalizeElement(target);
            var Ext = this.Ext();

            this.simulateEvent(target, 'mousedown');
            
            var amount = Ext.event.recognizer.LongPress.prototype.config.minDuration;
            this.waitFor(amount, callback, scope);
        },

        /**
        * This method will simulate a swipe operation between either two points or on a single DOM element.
        *   
        * @param {Ext.Component/String/HTMLElement/Array} target Either an Ext.Component, a Component Query selector, an element, or [x,y] as the drag end point
        * @param {String} direction Either 'left', 'right', 'up' or 'down'
        * @param {Function} callback (optional) To run this method async, provide a callback method to be called after the drag operation is completed.
        * @param {Object} scope (optional) the scope for the callback
        */
        swipe : function(target, direction, callback, scope) {
            target = this.normalizeElement(target);
            var Ext = this.Ext();
            
            var box = Ext.fly(target).getBox(),
                start,
                end,
                edgeOffsetRatio = 10;

            switch(direction) {
                case 'u':
                case 'up':
                    start = [box.x + box.width/2, (box.y + box.height*9/edgeOffsetRatio)];
                    end = [box.x + box.width/2, box.y + box.height/edgeOffsetRatio]; 
                break;

                case 'd':
                case 'down':
                    start = [box.x + box.width/2, (box.y + box.height/edgeOffsetRatio)]; 
                    end = [box.x + box.width/2, (box.y + box.height*9/edgeOffsetRatio)];
                break;

                case 'l':
                case 'left':
                    start = [box.x + (box.width /edgeOffsetRatio), (box.y + box.height/2)]; 
                    end = [box.x + (box.width * 9/edgeOffsetRatio), (box.y + box.height/2)];
                break;

                case 'r':
                case 'right':
                    start = [box.x + (box.width * 9/edgeOffsetRatio), (box.y + box.height/2)];
                    end = [box.x, (box.y + box.height/2)]; 
                break;

                default: 
                    throw 'Invalid swipe direction: ' + direction;
            }

            this.dragTo(start, end, callback, scope);
        },

        /**
        * This method will simulate a swipe operation between either two points or on a single DOM element.
        *   
        * @param {Ext.Component/String/HTMLElement/Array} source Either an Ext.Component, a Component Query selector, an element, or [x,y] as the drag start point
        * @param {Ext.Component/String/HTMLElement/Array} target Either an Ext.Component, a Component Query selector, an element, or [x,y] as the drag end point
        * @param {Function} callback (optional) To run this method async, provide a callback method to be called after the drag operation is completed.
        * @param {Object} scope (optional) the scope for the callback
        */
        swipeTo : function(source, target, callback, scope) {
            source = this.normalizeElement(source);
            target = this.normalizeElement(target);

            this.SUPER(source, target, callback, scope, options, dragOnly);
        },

        /**
        * This method will do something
        *   
        * @param {Ext.Component/String/HTMLElement/Array} target Either an Ext.Component, a Component Query selector, an element, or [x,y] as the drag end point
        * @param {String} direction Either 'left', 'right', 'up' or 'down'
        * @param {Function} callback (optional) To run this method async, provide a callback method to be called after the drag operation is completed.
        * @param {Object} scope (optional) the scope for the callback
        */
        scrollUntil : function(target, direction, checkerFn, callback, scope) {
            var me = this,
                startDate = new Date(),
                dir = direction;

            // Invert direction, Scroll up => Swipe down
            switch(dir) {
                case 'u':
                case 'up':
                    direction = 'down';
                break;

                case 'd':
                case 'down':
                    direction = 'up';
                break;

                case 'l':
                case 'left':
                    direction = 'right';
                break;

                case 'r':
                case 'right':
                    direction = 'left';
                break;

                default: 
                    throw 'Invalid swipe direction: ' + direction;
            }

            var inner = function() {
                if (checkerFn.call(scope || me, target)) {
                    // We're done
                    callback.call(scope || me);
                } else {
                    me.swipe(target, direction, function() { 
                        var as = me.beginAsync(); 
                        
                        if (new Date() - startDate < this.waitForTimeout) {
                            setTimeout(function() { 
                                me.endAsync(as); 
                                inner(); 
                            }, 1000); 
                        } else {
                            t.fail('scrollUntil failed to achieve its mission');
                        }
                    });
                }
            };

            inner();
        },

        /**
        * This method will do something
        *   
        * @param {Ext.Component/String/HTMLElement/Array} scrollable Either an Ext.Component, a Component Query selector, an element, or [x,y] as the drag end point
        * @param {Ext.Component/String/HTMLElement/Array} target Either an Ext.Component, a Component Query selector, an element, or [x,y] as the drag end point
        * @param {String} direction Either 'left', 'right', 'up' or 'down'
        * @param {Function} callback (optional) To run this method async, provide a callback method to be called after the drag operation is completed.
        * @param {Object} scope (optional) the scope for the callback
        */
        scrollUntilElementVisible : function(scrollable, direction, target, callback, scope) {
            var me = this;
            
            this.scrollUntil(scrollable, direction, function() { return me.elementIsInView(target); }, callback, scope);
        },

        
        /**
         * Waits until the supplied x&y scroll property has the passed value. You can test for either x or y, or both.
         * 
         * @param {Ext.scroller.Scroller} scroller The scroller instance
         * @param {Object} position An object with an x, y, or x&y values. Ex. { x : 0 } or { x : 0, y : 200 }.
         * @param {Int} value
         * @param {Function} callback The callback to call
         * @param {Object} scope The scope for the callback
         * @param {Int} timeout The maximum amount of time to wait for the condition to be fulfilled. Defaults to the {@link Siesta.Test.ExtJS#waitForTimeout} value. 
         */
        waitForScrollerPosition: function(scroller, pos, callback, scope, timeout) {
            this.waitFor({
                method          : function() { 
                    return (!('x' in pos) || pos.x === scroller.position.x) && (!('y' in pos) || pos.y === scroller.position.y);
                }, 
                callback        : callback,
                scope           : scope, 
                timeout         : timeout,
                name            : 'waitForScrollerPosition',
                description     : ' scroller to reach position "' + Siesta.Util.Serializer.stringify(pos)
            });
        },

        /**
         * Returns the path to the Sencha Touch SDK folder, if it is part of the preloads in the index.js file
         * @method
         */
        getExtBundleFolder : function() {
            var folder;

            this.harness.mainPreset.eachResource(function (resource) {
                var desc = resource.asDescriptor();
                
                var regex = /(.*sencha-touch-\d\.\d+\.\d+.*?)\/sencha-touch-all(?:-debug)?\.js/;
                var match = regex.exec(desc.url);
                
                if (match) {
                   folder = match[1];
                }
            });

            return folder;
        },
    }
})
