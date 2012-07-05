/*

Siesta 1.1.0-beta-1
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**
 * 
@class Siesta.Test.ExtJSCore

A base mixin for testing ExtJS and SenchaTouch applications. 

Contains the functionality, common for both frameworks.

This file is a reference only, for a getting start guide and manual, please refer to <a href="#!/guide/siesta_getting_started">Getting Started Guide</a>.

*/
Role('Siesta.Test.ExtJSCore', {
    
    has : {
        waitForExtReady         : true,
        waitForAppReady         : false,
        loaderPath              : null,
        
        simulateEventsWith      : {
            is      : 'rw',
            init    : function () {
                var div = document.createElement('div')
                
                return div.attachEvent ? 'fireEvent' : 'dispatchEvent'
            }
        },
        
        isExtOnReadyDone        : false,
        isAppReadyDone          : false
    },

    override : {
        isReady : function() {
            var result = this.SUPERARG(arguments);

            if (!result.ready) return result;

            if (this.waitForExtReady && !this.isExtOnReadyDone) return {
                ready       : false,
                reason      : "Waiting for Ext.onReady took too long - some dependency can't be loaded? Check the `Net` tab in Firebug"
            }
            
            if (this.waitForAppReady && !this.isAppReadyDone) return {
                ready       : false,
                reason      : '"Waiting for MVC application launch took too long - no MVC application on test page? You may need to disable the `waitForAppReady` config option."'
            }
            
            return {
                ready       : true
            }
        }
    },

    methods : {
        
        initialize : function() {
            // Since this test is preloading Ext JS, we should let Siesta know what to 'expect'
            this.expectGlobals('Ext', 'id');
            this.SUPER();
        },
        
        
        start : function (alreadyFailedWithException) {
            var me      = this;
            var Ext     = this.getExt();
            
            if (!Ext) {
                // proceed to parent implementation disabling our "can start" checkers 
                this.waitForAppReady    = false
                this.waitForExtReady    = false
                
                this.SUPERARG(arguments)
                
                return
            }
            
            if (this.loaderPath) {
                Ext.Loader.setPath(this.loaderPath);
            }

            Ext.onReady(function () {
                me.isExtOnReadyDone     = true
            })
            
            // this flag will explain to Ext, that DOM ready event has already happened
            // Ext fails to set this flag if it was loaded dynamically, already after DOM ready
            // the test will start only after DOM ready anyway, so we just set this flag  
            Ext.isReady         = true

            var canWaitForApp   = Ext.ClassManager && Boolean(Ext.ClassManager.get('Ext.app.Application'))
                
            if (this.waitForAppReady && canWaitForApp) {
                Ext.util.Observable.observe(Ext.app.Application, {
                    launch      : function () {
                        me.isAppReadyDone   = true
                    },
                    
                    single      : true,
                    delay       : 100
                })
                
                return
            }
            
            this.SUPERARG(arguments)
        },

        /**
         * This method returns the `Ext` object from the scope of the test. When creating your own assertions for Ext JS code, you need
         * to make sure you are using this method to get the `Ext` instance. Otherwise, you'll be using the same "top-level" `Ext`
         * instance, used by the harness for its UI. 
         * 
         * For example:
         * 
         *      elementHasProvidedCssClass : function (el, cls, desc) {
         *          var Ext     = this.getExt();
         *          
         *          if (Ext.fly(el).hasCls(cls)) {
         *              this.pass(desc);
         *          } else {
         *              this.fail(desc);
         *          }
         *      }
         *   
         * @return {Object} The `Ext` object from the scope of test
         */
        getExt : function () {
            return this.global.Ext
        },
        
        
        /**
         * The alias for {@link #getExt}
         * @method
         */
        Ext : function () {
            return this.global.Ext
        },
        
        // Accepts Ext.Component or ComponentQuery
        normalizeComponent : function(component, allowEmpty) {
            var Ext = this.Ext();

            if (typeof component === 'string') {
                var result = Ext.ComponentQuery.query(component);
                
                if (!allowEmpty && result.length < 1)   this.warn('Your component query: ' + component + ' returned no components.');
                if (!allowEmpty && result.length > 1)   this.warn('Your component query: ' + component + ' returned more than 1 component.');
                
                component = result[ 0 ];
            }            

            return component;
        },

        // Accept Ext.Element and Ext.Component
        normalizeElement : function(el) {
            if (!el) return null
            
            var Ext = this.getExt();

            if (typeof el === 'string') {
                if (el.match(/=>/))
                    el      = this.resolveTargetQuery(el)
                else
                    el      = this.normalizeComponent(el);
            }

            if (el instanceof Ext.form.Field && el.inputEl) {
                el = el.inputEl;
            } else 
                if (el instanceof Ext.Component) {
                    var center = this.findCenter(el.getEl ? el.getEl() : (el.el || el.element));
                    
                    el = this.elementFromPoint(center[0], center[1]);
                }
                
            return el.dom ? el.dom : el;
        },

        
        /**
        * This method wraps the {@link Siesta.Test.Browser#type} method with additional check:
        * if the 1st passed parameter is an instance of `Ext.form.Field`, then the typing will occur
        * into its `inputEl` property. Please see {@link Siesta.Test.Browser#type} description
        * for the list of supported advanced key codes.
        * 
        * @param {Ext.form.Field/HTMLElement} el The element or Component to type into
        * @param {String} text the text to type.
        * @param {Function} callback (optional) To run this method async, provide a callback method to be called after the type operation is completed.
        * @param {Object} scope (optional) the scope for the callback
        */
        type: function (el, text, callback, scope) {
            el = this.normalizeElement(el || this.getElementAtCursor());

            this.SUPER(el, text, callback, scope);
        },

        /**
         * This method wraps the {@link Siesta.Test.Browser#click} method with additional check:
         * if the 1st passed parameter is an instance of `Ext.form.Field`, then click will occur
         * in the center of its `inputEl`. If its an instance of `Ext.Component` - in the center
         * of the component's element.
         * 
         * The following events will be fired, in order:  `mouseover`, `mousedown`, `mouseup`, `click`
         * 
         * See also {@link Siesta.Test.Browser#click}.
         *   
         * @param {Ext.Component/String/HTMLElement/Array} target Either an Ext.Component, a Component Query selector, an element, or [x,y] as the drag end point
         * @param {Function} callback (optional) A function to call when the condition has been met.
         * @param {Object} scope (optional) The scope for the callback 
         */
        click: function (target, callback, scope) {
            target = this.normalizeElement(target);

            this.SUPER(target, callback, scope);
        },

        /**
         * @deprecated
         * 
         * This method is deprecated in favor of {@link #dragTo} and {@link #dragBy} methods
        */
        drag: function (source, target, delta, callback, scope, options) {
            source = this.normalizeElement(source);
            target = this.normalizeElement(target);

            this.SUPER(source, target, delta, callback, scope, options);
        },

        /**
        * This method will simulate a drag and drop operation between either two points or two DOM elements.
        * The following events will be fired, in order:  `mouseover`, `mousedown`, `mousemove` (along the mouse path), `mouseup`
        *   
        * @param {Ext.Component/String/HTMLElement/Array} source Either an Ext.Component, a Component Query selector, an element, or [x,y] as the drag start point
        * @param {Ext.Component/String/HTMLElement/Array} target Either an Ext.Component, a Component Query selector, an element, or [x,y] as the drag end point
        * @param {Function} callback (optional) To run this method async, provide a callback method to be called after the drag operation is completed.
        * @param {Object} scope (optional) the scope for the callback
        * @param {Object} options any extra options used to configure the DOM event
        * @param {Boolean} dragOnly true to skip the mouseup and not finish the drop operation.
        */
        dragTo : function(source, target, callback, scope, options, dragOnly) {
            source = this.normalizeElement(source);
            target = this.normalizeElement(target);

            this.SUPER(source, target, callback, scope, options, dragOnly);
        },

        /**
        * This method will simulate a drag and drop operation from a point (or DOM element) and move by a delta.
        * The following events will be fired, in order:  `mouseover`, `mousedown`, `mousemove` (along the mouse path), `mouseup`
        *   
        * @param {Ext.Component/String/HTMLElement/Array} source Either an Ext.Component, a Component Query selector, an element, or [x,y] as the target point
        * @param {Array} delta The amount to drag from the source coordinate, expressed as [x,y]. E.g. [50, 10] will drag 50px to the right and 10px down.
        * @param {Function} callback (optional) To run this method async, provide a callback method to be called after the drag operation is completed.
        * @param {Object} scope (optional) the scope for the callback
        * @param {Object} options any extra options used to configure the DOM event
        * @param {Boolean} dragOnly true to skip the mouseup and not finish the drop operation.
        */
        dragBy : function(source, delta, callback, scope, options, dragOnly) {
            source = this.normalizeElement(source);

            this.SUPER(source, delta, callback, scope, options, dragOnly);
        },

         /**
         * This method allow assertions to fail silently for tests executed in versions of Ext JS up to a certain release. When you try to run this test on a newer
         * version of Ext JS and it fails, it will fail properly and force you to re-investigate. If it passes in the newer version, you should remove the 
         * use of this method.
         * 
         * See also {@link Siesta.Test#todo}
         *   
         * @param {String} frameworkVersion The Ext JS framework version, e.g. '4.0.7'
         * @param {Function} fn The method covering the broken functionality
         * @param {String} reason The reason or explanation of the bug
        */
        knownBugIn : function(frameworkVersion, fn, reason) {
            var Ext = this.getExt();
            
            if (Ext.versions.extjs.isGreaterThan(frameworkVersion)) {
                fn.call(this.global, this);
            } else {
                this.todo(reason, fn);
            }
        },
        
        
         /**
         * This method will load the specified classes with `Ext.require()` and call the provided callback. Additionally it will check that all classes have been loaded.
         * 
         * This method accepts either variable number of arguments:
         *
         *      t.requireOk('Some.Class1', 'Some.Class2', function () { ... })
         * or array of class names:
         * 
         *      t.requireOk([ 'Some.Class1', 'Some.Class2' ], function () { ... })
         * 
         * @param {String} className1 The name of the class to `require`
         * @param {String} className2 The name of the class to `require`
         * @param {String} classNameN The name of the class to `require`
         * @param {Function} fn The callback. Will be called even if the loading of some classes have failed.
        */
        requireOk : function () {
            var me                  = this
            var global              = this.global
            var Ext                 = this.getExt()
            var args                = Ext.Array.flatten(Array.prototype.slice.call(arguments))
            
            var callback
            
            if (this.typeOf(args[ args.length - 1 ]) == 'Function') callback = args.pop()
            
            
            // what to do when loading completed or timed-out
            var continuation    = function () {
                me.endAsync(async)
                
                Joose.A.each(args, function (className) {
                    var cls     = Ext.ClassManager.get(className)
                    
                    //                       normal class                         singleton
                    if (cls && (me.typeOf(cls) == 'Function' || me.typeOf(cls.self) == 'Function'))
                        me.pass("Class: " + className + " was loaded")
                    else
                        me.fail("Class: " + className + " was loaded")
                })
                
                callback && callback()
            }
            
            var timeout         = Ext.isIE ? 120000 : 30000,
                async           = this.beginAsync(timeout + 100)
            
            var hasTimedOut     = false
            
            var timeoutId       = global.setTimeout(function () {
                hasTimedOut     = true
                continuation()
            }, timeout)
            
            Ext.Loader.setConfig({ enabled : true });

            Ext.require(args, function () {
                global.clearTimeout(timeoutId)
                
                if (!hasTimedOut) continuation() 
            })
        },
        
        /**
         * This method is a simple wrapper around the {@link #chainClick} - it performs a component query for provided `selector` starting from the `root` container
         * and then clicks on all found components, in order:
         * 

    // click all buttons in the `panel`
    t.clickComponentQuery('button', panel, function () {})
    
         * 
         * The 2nd argument for this method can be omitted and method can be called with 2 arguments only. In this case a global component query will be performed:
         *

    // click all buttons in the application
    t.clickComponentQuery('button', function () {})
    
         * 
         * @param {String} selector The selector to perform a component query with
         * @param {Ext.Container} root The optional root container to start a query from.
         * @param {Function} callback The callback to call, after clicking all the found components
         */
        clickComponentQuery : function (selector, root, callback) {
            
            if (arguments.length == 2 && this.typeOf(arguments[ 1 ]) == 'Function') {
                callback    = root
                root        = this.Ext().ComponentQuery
            }
            
            if (arguments.length == 1) {
                root        = this.Ext().ComponentQuery
            }
            
            var result      = root.query(selector)
            
            this.chainClick(result, function () { callback && callback.call(this, result) })
        },
        
        
        /**
         * An alias for {@link #clickComponentQuery}.
         * 
         * @param {String} selector The selector to perform a component query with
         * @param {Ext.Container} root The optional root container to start a query from.
         * @param {Function} callback The callback to call, after clicking all the found components
         */
        clickCQ : function () {
            this.clickComponentQuery.apply(this, arguments)
        },

        /**
         * This method performs a combination of `Ext.ComponentQuery` and DOM query, allowing to easily find the DOM elements, 
         * matching a css selector, inside of some Ext.Component.
         * 
         * Both queries should be combined with the `=>` separator: 
         *      
         *      gridpanel[title=Accounts] => .x-grid-row
         *       
         * On the left side of such "composite" query should be a component query, on the right - DOM query (CSS selector)
         * 
         * This method will generate exception, if component query returns no results. In case when component query returns more than one
         * component, method will generate a warning and proceed with the 1st found component. The exception/warning can be suppressed with the "allowEmpty" argument.
         * 
         * E.g. the composite query `gridpanel[title=Accounts] => .x-grid-row` will give you the grid row elements inside a certain grid panel
         * 
         * @param {String} selector The CompositeQuery selector
         * @param {Ext.Component} root The optional root component to start the component query from. If omitted, global component query will be performed.
         * @param {Boolean} allowEmpty True to suppress the exception/warnings from this method. Default is `false`.
         * 
         * @return {HTMLElement[]} The array of DOM elements 
         */
        compositeQuery : function (selector, root, allowEmpty) {
            var Ext     = this.Ext();
            root        = root || Ext.ComponentQuery;

            // Ext JS specific
            // Try to find magic => selector for nested ComponentQuery and CSS selector
            var result = selector.split('=>');

            if (result.length < 1) throw "Invalid composite query selector: " + selector
            
            var cmp = root.query(result[0]);
                    
            if (!cmp.length)
                if (allowEmpty) 
                    return []
                else
                    throw 'ComponentQuery ' + result[0] + ' matched no Ext.Component';
            
            if (!allowEmpty && cmp.length > 1) this.warn('ComponentQuery ' + result[0] + ' matched more than 1 Ext.Component')
                    
            cmp = cmp[0];

            //                      Ext JS     vs Sencha Touch
            var cmpEl = cmp.getEl ? cmp.getEl() : cmp.element;

            return cmpEl.query(result[1]);
        },
        
        
        resolveTargetQuery : function (query, action) {
            var Ext         = this.Ext()
            
            // if there's no Ext loaded on the page, resolve query as DOM query?
            if (!Ext) return this.SUPER(query, action)
            
            if (query.match(/=>/)) {
                return this.compositeQuery(query)[ 0 ]
            } else {
                return Ext.ComponentQuery.query(query)[ 0 ]
            }
            
            var result      = this.compositeQuery(query);
        
            if (!result.length) throw 'Your selector ' + query + ' matched no DOM element';
            
            return result[ 0 ];
        }
    }
})
