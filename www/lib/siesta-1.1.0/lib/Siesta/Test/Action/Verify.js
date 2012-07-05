/*

Siesta 1.1.0-beta-1
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
//Class('Siesta.Test.Action.Verify', {
//    
//    isa         : Siesta.Test.Action,
//    
//    has : {
//        verify  :        null,
//        
//        /**
//         * @cfg {Array} args
//         * 
//         * The array of arguments to pass to the assertion method. 
//         */
//        args : null
//    },
//
//    
//    methods : {
//        
//        process : function () {
//            var verify = this.verify;
//
//            if (this.test.typeOf(this.args) !== "Array") {
//                this.args = [this.args];
//            }
//
//            var args = this.args;
//
//            Joose.A.each(this.args, function(arg, i) {
//                if (this.test.typeOf(arg) === 'Function') {
//                    args[i] = args[i]();
//                }
//            }, this);
//
//            if (verify) {
//                this.test[verify].apply(this.test, this.args);
//            }        
//        }
//    }
//});
//
//Siesta.Test.ActionRegistry.registerAction('verify', Siesta.Test.Action.Verify);
