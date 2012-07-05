/*

Siesta 1.1.0-beta-1
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**
@class Siesta.Test.ExtJS.Store

This is a mixin, with helper methods for testing functionality relating to Ext.data.Store class. This mixin is being consumed by {@link Siesta.Test.ExtJS}

*/
Role('Siesta.Test.ExtJS.Store', {
    
    methods : {
        
        /**
         * Waits until all the passed stores have been loaded (fires the "load" event) and calls the provided callback.
         * 
         * This method accepts either variable number of arguments:
         *
         *      t.waitForStoresToLoad(store1, store2, function () { ... })
         * or array of stores:
         * 
         *      t.waitForStoresToLoad([ store1, store2 ], function () { ... })
         * 
         * @param {Ext.data.AbstractStore} store1 The store to load.
         * @param {Ext.data.AbstractStore} store2 The store to load.
         * @param {Ext.data.AbstractStore} storeN The store to load.
         * @param {Function} callback A function to call when the condition has been met.
         */        
        waitForStoresToLoad: function () {
            var Ext         = this.getExt();
            var args        = Ext.Array.flatten(Array.prototype.slice.call(arguments))
            var me          = this;
            
            var callback
            var storesNum;
            
            // First locate the callback
            Joose.A.each(args, function (arg, index) {
                if (me.typeOf(arg) == 'Function') {
                    callback = arg;
                    storesNum = index;
                    return false;
                }
            });

            var loaded      = 0;
            
            me.waitFor({
                method      : function() { return loaded == storesNum; },
                callback    : callback,
                name        : 'waitForStoresToLoad',
                description : storesNum + ' stores to load'
            });

            Joose.A.each(args, function (store) {
                if (!(store instanceof Ext.data.AbstractStore)) {
                    return false;
                }

                if (!store.getProxy()) {
                    storesNum--;
                    return;
                }

                store.on('load', function () {
                    loaded++;
                    store.getProxy().un('exception', exceptionFailure);
                }, null, { single : true });

                var exceptionFailure = function () {
                    me.fail("Failed to load the store", "Store [READ] URL: " + store.getProxy().url);
                };

                store.getProxy().on('exception', exceptionFailure);
            });
        },

        /**
         * This method is a wrapper around {@link #waitForStoresToLoad} method - it waits for the provided stores to fire the "load" event.
         * In addition to {@link #waitForStoresToLoad} this method also calls the `load` method of each passed store.
         * 
         * This method accepts either variable number of arguments:
         *
         *      t.loadStoresAndThen(store1, store2, function () { ... })
         * or array of stores:
         * 
         *      t.loadStoresAndThen([ store1, store2 ], function () { ... })
         * 
         * @param {Ext.data.AbstractStore} store1 The store to load.
         * @param {Ext.data.AbstractStore} store2 The store to load.
         * @param {Ext.data.AbstractStore} storeN The store to load.
         * @param {Function} callback A function to call when the condition has been met.
         */  
        loadStoresAndThen: function () {
            var Ext = this.getExt();
            this.waitForStoresToLoad.apply(this, arguments);
            
            var args                = Ext.Array.flatten(Array.prototype.slice.call(arguments))
            
            if (this.typeOf(args[ args.length - 1 ]) == 'Function') args.pop()

            Joose.A.each(args, function (store) {
                if (store.getProxy() && store.load) {
                    store.load();
                }
            });
        }
    }
});
