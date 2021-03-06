/*

Siesta 1.1.0-beta-1
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**
@class Siesta.Test.Action.Role.HasTarget

This is a mixing, allowing the action to have "target" attribute, also aliased as "el"

*/
Role('Siesta.Test.Action.Role.HasTarget', {
    
        
    has : {
        /**
         * @cfg {Object/String/Function} target 
         * 
         * A target for action. The actual value varies depending from the action, but usually it will be a DOM element.
         * 
         * When provided as a string, it will be resolved to the first matching DOM element, using either the {@link Siesta.Test.ExtJSCore#compositeQuery compositeQuery}
         * (in case of using Siesta.Harness.Browser.ExtJS) or regular DOM query (in case of using Siesta.Harness.Browser).
         * 
         * **Important.** If the function is provided for this config, it will be called and returning value used as actual target. 
         * This is useful, since sometimes target for the action depends from the previous step and 
         * is not yet available during `t.chain` call. 
         * 
         * For example, you want to click on the button which opens a window and then click on something in the window. Compare:
         * 

    t.chain(
        // clicking on button opens the window
        {
            action      : 'click',
            target      : buttonComp        
        },
        // FRAGILE: `windowComp` could not be rendered yet - `buttonComp` is not yet clicked!
        {
            action      : 'click',
            target      : windowComp.el.down('.clickArea')  
        }
        
        // MORE ROBUST: taking the "el" right before this action starts
        {
            action      : 'click',
            target      : function () {
                return windowComp.el.down('.clickArea')
            } 
        }
    )
         * 
         * This config option can also be provided as "el" 
         */
        target              : { required : false }
        
        /**
         * @cfg {Object} el 
         * 
         * An alias for {@link #target} 
         */
    },

    
    methods : {
        
        BUILD : function (config) {
            // allow "el" as synonym for "target"
            if (config.el && !config.target) config.target = config.el
            
            return config
        },
        

        getTarget : function () {
            var test        = this.test;
            var target      = this.target || test.getElementAtCursor();

            if (test.typeOf(target) === 'Function')     return target.call(test, this);
            if (test.typeOf(target) === 'String')       return test.resolveTargetQuery(target, this)
                
            return target;
        }
    }
});
