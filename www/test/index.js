//If your code is written in a cross-platform manner, you can also run your tests in NodeJS. 
// For that, first of all, install Siesta in the "node_modules" folder of your project. 
// Then, in the harness, detect the platform and choose a correct harness class, like this:

var Harness

if (typeof process != 'undefined' && process.pid) {
    Harness = require('siesta');
} else {
    Harness = Siesta.Harness.Browser.ExtJS
}

// And finally, launch the harness file in NodeJS:

// > node tests/index.js

var isDev   = window.location.href.match(/localhost/);

Harness.configure({
    title       : 'Awesome Test Suite',

    preload     : [
        isDev ? '../ext-4.0.6/ext-all-debug.js' : '../ext-4.0.6/ext-all.js',
        isDev ? '../yourproject-all-debug.js' : '../yourproject-all.js'
    ]
});


Harness.start(
    '010_sanity.t.js',
    {
        autoCheckGlobals : true,
        preload : [
        	'../ext-4.0.6/ext-all.js',
        ]    	
    }

    {
        group       : 'Rendering tests',

        items       : [
            'rendering/grid.t.js',
            'rendering/tree.t.js'
        ]
    }    
);