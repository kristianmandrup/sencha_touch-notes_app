/*

Siesta 1.1.0-beta-1
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**
 * 
@class Siesta.Test.ExtJS
@extends Siesta.Test.Browser
@mixin Siesta.Test.ExtJSCore
@mixin Siesta.Test.ExtJS.Observable
@mixin Siesta.Test.ExtJS.FormField
@mixin Siesta.Test.ExtJS.Component
@mixin Siesta.Test.ExtJS.Element 
@mixin Siesta.Test.ExtJS.Store 
@mixin Siesta.Test.ExtJS.DataView
@mixin Siesta.Test.ExtJS.Grid

A base class for testing browser and ExtJS applications. It inherit from {@link Siesta.Test.Browser} 
and adds various ExtJS specific assertions.

 * **IMPORTANT** : In various places where the {@link Siesta.Test.Browser} accepts the DOM element as the argument (for example, `type/click/drag` etc), 
this class will allow you to specify one of the following:

- an instance of `Ext.Component`
- a string, containing Ext.ComponentQuery selector
- a string, containing {@link Siesta.Test.ExtJSCore#compositeQuery compositeQuery} selector
- a DOM element

When needed, the `getEl` method of the component will be used to convert the component to DOM element. 

This file is a reference only, for a getting start guide and manual, please refer to <a href="#!/guide/siesta_getting_started">Getting Started Guide</a>.

*/
Class('Siesta.Test.ExtJS', {
    
    isa         : Siesta.Test.Browser,
        
    does        :  [ 
        Siesta.Test.ExtJSCore, 
        Siesta.Test.ExtJS.Component, 
        Siesta.Test.ExtJS.Element, 
        Siesta.Test.ExtJS.FormField, 
        Siesta.Test.ExtJS.Observable, 
        Siesta.Test.ExtJS.Store, 
        Siesta.Test.ExtJS.Grid,
        Siesta.Test.ExtJS.DataView
    ],
    
    methods : {
        
        getExtBundlePath : function() {
            var path;

            this.harness.mainPreset.eachResource(function (resource) {
                var desc = resource.asDescriptor();
        
                if (desc.url.match(/ext(?:js)?-\d\.\d+\.\d+.*?\/ext-all(?:-debug)?\.js/)) {
                    path = desc.url;
                    return false;
                }
            });

            return path;
        },


        getExtBundleFolder : function() {
            var folder;

            this.harness.mainPreset.eachResource(function (resource) {
                var desc = resource.asDescriptor();
                
                var regex = /(.*ext(?:js)?-\d\.\d+\.\d+.*?)\/ext-all(?:-debug)?\.js/;
                var match = regex.exec(desc.url);
                
                if (match) {
                   folder = match[1];
                }
            });

            return folder;
        },

        /**
        * This method will simulate a mouse move to an Ext JS component, xy-coordinate or an element (the center of it)
        * @param {Ext.Component/String/HTMLElement/Array} target Either an Ext.Component, a Component Query selector, an element, or [x,y] as the target point
        * @param {Function} callback (optional) To run this method async, provide a callback method to be called after the operation is completed.
        * @param {Object} scope (optional) the scope for the callback
        */
        moveMouseTo : function(target, callback, scope) {
            target = this.normalizeElement(target);

            this.SUPER(target, callback, scope);
        }
    }
})
