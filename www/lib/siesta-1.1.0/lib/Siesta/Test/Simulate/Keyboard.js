/*

Siesta 1.1.0-beta-1
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**
@class Siesta.Test.Simulate.Keyboard

This is a mixin, providing the keyboard events simulation functionality.

  
*/

//        Copyright (c) 2011 John Resig, http://jquery.com/

//        Permission is hereby granted, free of charge, to any person obtaining
//        a copy of this software and associated documentation files (the
//        "Software"), to deal in the Software without restriction, including
//        without limitation the rights to use, copy, modify, merge, publish,
//        distribute, sublicense, and/or sell copies of the Software, and to
//        permit persons to whom the Software is furnished to do so, subject to
//        the following conditions:

//        The above copyright notice and this permission notice shall be
//        included in all copies or substantial portions of the Software.

//        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//        NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
//        LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
//        OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
//        WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


Role('Siesta.Test.Simulate.Keyboard', {
    
    requires        : [ 'simulateEvent', 'getSimulateEventsWith' ],

    methods: {
        // private
        createKeyboardEvent: function (type, options, el) {
            var evt;

            var e = $.extend({ bubbles: true, cancelable: true, view: this.global,
                ctrlKey: false, altKey: false, shiftKey: false, metaKey: false,
                keyCode: 0, charCode: 0
            }, options);

            var doc = this.global.document;

            // use W3C standard when available and allowed by "simulateEventsWith" option
            if (doc.createEvent && this.getSimulateEventsWith() == 'dispatchEvent') {
                try {
                    evt = doc.createEvent("KeyEvents");
                    evt.initKeyEvent(type, e.bubbles, e.cancelable, e.view, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.keyCode, e.charCode);
                } catch (err) {
                    evt = doc.createEvent("Events");
                    evt.initEvent(type, e.bubbles, e.cancelable);
                    $.extend(evt, { view: e.view,
                        ctrlKey: e.ctrlKey, altKey: e.altKey, shiftKey: e.shiftKey, metaKey: e.metaKey,
                        keyCode: e.keyCode, charCode: e.charCode
                    });
                }
            } else if (doc.createEventObject) {
                evt = doc.createEventObject();
                $.extend(evt, e);
            }
            if ($.browser.msie || $.browser.opera) {
                evt.keyCode = (e.charCode > 0) ? e.charCode : e.keyCode;
                evt.charCode = undefined;
            }
            return evt;
        },

        // private
        createTextEvent: function (type, options, el) {
            var doc = this.global.document;
            var event = null;

            // only for Webkit for now
            if (doc.createEvent && !$.browser.msie) {
                try {
                    event = doc.createEvent('TextEvent');

                    if (event && event.initTextEvent) {
                        event.initTextEvent('textInput', true, true, this.global, options.text, 0);
                        return event;
                    }
                }
                catch(e) {}
            }

            return null;
        },


        /**
        * This method will simulate text typing, on a specified DOM element. Simulation of certain advanced keys is supported.
        * You can include the name of such key in the square brackets into the 2nd argument. See {@link Siesta.Test.Simulate.KeyCodes} for a list 
        * of key names.
        * 
        * For example:
        * 

    t.type(el, 'Foo bar[ENTER]', function () {
        ...
    })
        *  
        * The following events will be fired, in order: `keydown`, `keypress`, `keyup`
        *   
        * @param {HTMLElement} el The element to type into
        * @param {String} text the text to type, possible containig the names of special keys in square brackets.
        * @param {Function} callback (optional) To run this method async, provide a callback method to be called after the type operation is completed.
        * @param {Object} scope (optional) the scope for the callback
        */
        type: function (el, text, callback, scope) {
            el              = this.normalizeElement(el);
            
            if (el.readOnly || el.disabled) {
                callback && callback.call(scope || me)
                
                return;
            }
            
            var me          = this

            // Extract normal chars, or special keys in brackets such as [TAB], [RIGHT] or [ENTER]			
            var keys        = (text + '').match(/\[([^\])]+\])|([^\[])/g) || [];
            
            var queue       = new Siesta.Util.Queue({
                
                deferer         : this.originalSetTimeout,
                deferClearer    : this.originalClearTimeout,
                
                interval        : this.actionDelay,
                callbackDelay   : this.afterActionDelay,
                
                observeTest     : this,
                
                processor       : function (data, index) {
                    me.keyPress(el, data.key)
                }
            })

            jQuery.each(keys, function (index, key) {
                queue.addStep({
                    key     : key.length == 1 ? key : key.substring(1, key.length - 1)
                })
            });
            
            var async       = this.beginAsync();
            
            queue.run(function () {
                me.endAsync(async)
                
                callback && callback.call(scope || me)
            })
        },

        /**
        * @param {HTMLElement} el
        * @param {String} key
        * @param {Object} options any extra options used to configure the DOM event
        * 
        * This method will simluate the key press, translated to the specified DOM element.
        * The following events will be fired, in order: `keydown`, `keypress`, `textInput`(webkit only currently), `keyup`  
        */
        keyPress: function (el, key, options) {
            el = this.normalizeElement(el);
            var KeyCodes = Siesta.Test.Simulate.KeyCodes().keys,
                keyCode,
                charCode;

            options = options || {};
            
            options.readableKey = key;
            keyCode = KeyCodes[key.toUpperCase()] || 0;

            if(this.isReadableKey(keyCode)) {
                charCode = key.charCodeAt(0);
            } else {
                charCode = 0;
            } 

            var me = this,
                originalLength = -1,
                isReadableKey = this.isReadableKey(keyCode),
                isTextInput = this.isTextInput(el);
            
            if (isTextInput) {
                originalLength = el.value.length;
            }
            
            me.simulateEvent(el, 'keydown', $.extend({ charCode : 0, keyCode : keyCode }, options), true);
            me.simulateEvent(el, 'keypress', $.extend({ charCode : charCode, keyCode : this.isReadableKey(keyCode) ? 0 : keyCode }, options), false);
            
            if (isTextInput) {
                if (isReadableKey) {
                    // TODO check first if textInput event is supported
                    me.simulateEvent(el, 'textInput', { text: options.readableKey }, true);
                
                    // If the entered char had no impact on the textfield - manually put it there
                    if (!Siesta.supports.canSimulateKeyCharacters || (originalLength === el.value.length)) {
                        el.value = el.value + options.readableKey;
                    }
                }
                
                // Manually delete one char off the end if backspace simulation is not supported by the browser
                if (keyCode === KeyCodes.BACKSPACE && !Siesta.supports.canSimulateBackspace && el.value.length > 0) {
                    el.value = el.value.substring(0, el.value.length - 1);
                }
            }
            
            if (keyCode === KeyCodes.ENTER && !Siesta.supports.enterOnAnchorTriggersClick) {
                me.simulateEvent(el, 'click');
            }
            me.simulateEvent(el, 'keyup', $.extend({ charCode : 0, keyCode : keyCode }, options), true);
        },

        isTextInput : function(node) {
            return node.nodeName.toLowerCase() === 'textarea' || 
                   (node.nodeName.toLowerCase() === 'input' && 
                        (node.type.toLowerCase() === 'password' || 
                         node.type.toLowerCase() === 'number' || 
                         node.type.toLowerCase() === 'text' || 
                         node.type.toLowerCase() === 'email'));
        },

        // private
        isReadableKey: function (keyCode) {
            var KC = Siesta.Test.Simulate.KeyCodes();

            return !KC.isNav(keyCode) && !KC.isSpecial(keyCode);
        }
    }
});


