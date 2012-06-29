SIESTA
-------

Running tests in several browsers using Selenium

You can automate the launching of your test suite in several browsers, using Selenium. Unlike PhantomJS, it requires the precense of actual browsers in the operation system.

On Linux:

> __SIESTA__/bin/selenium http://yourproject/tests/index.html [OPTIONS]

Here, the __SIESTA__ placeholder is the path to your Siesta package. The launch script bin/selenium accepts the URL to your html wrapper for Siesta harness (index.html) and several optional options.

Options should start with double minus, e.g: --host 8081:

browser browsername - can be one of "firefoxproxy / googlechrome / iexploreproxy / safariproxy / opera"'. This option can be repeated several times. Default value is *, meaning all available browsers. By default, all browsers will run the test suites simultaneously, you can disable this using sequential configuration option.
host localhost - host for selenium server.
port 4444 - port for selenium server. If server can not be found on the specified host/port, this command will try to launch it.
filter filter_value - a text of regexp to filter the urls of tests
verbose - will enable various diagnostic messages
sequential - will enable the sequential execution mode - only one browser will be active at a time.

--report-file-prefix=report_.json

will save the reports to: report_firefoxproxy.json, report_iexploreproxy.json, etc


firefoxproxy / googlechrome / iexploreproxy / safariproxy / opera

__SIESTA__/bin/selenium http://yourproject/tests/index.html --browser googlechrome --browser safariproxy --report-file-prefix=report_.json

Ext JS MVC application with Siesta.
-----------------------------------

When setting up the test suite for an MVC application, put the test harness file (called index.html in the Getting Started Guide) in the same folder as your "app.html" file. This way you won't have to change any URLs for your proxies (which are probably configured relative to "app.html").

Make use of loaderPath option which will set up the Ext.Loader for all of your tests.

Also check the waitForAppReady option - it will be useful if you have a group of tests which should start after the launch of application.

See the /examples/025-extjs-mvc in the Siesta package for a sample setup.

======

Rails & Spine.JS - Jasmine Testing Part 1
http://metaskills.net/2012/01/16/rails-and-spine-js-jasmine-testing-part-1/

Rails & Spine.JS - Jasmine Testing Part 2
http://metaskills.net/2012/01/17/rails-and-spine-js-jasmine-testing-part-2/


Better CoffeeScript Testing With Mocha
http://net.tutsplus.com/tutorials/javascript-ajax/better-coffeescript-testing-with-mocha/

Fast Site Testing with ExpectThat using CoffeeScript, Zombie, Mocha, and Node
http://css.dzone.com/articles/expectthat-coffeescript-zombie

http://bloggemdano.blogspot.dk/2012/02/expectthat-with-coffeescript-zombie.html

Use Guard ;)

 coffee --output lib/ specs/
 mocha 'lib/example.spec.js' --reporter spec

ExpectThat
https://github.com/dmohl/expectThat

Once installed, add require('expectThat.mocha'); to the top of the spec files and run mocha as you normally would. i.e.

mocha '<spec file>' --reporter spec

ZombieJS
http://zombie.labnotes.org/

Insanely fast, headless full-stack testing using Node.js

---

http://jonathangrimes.com/2011/10/jasmine-extjs-mvc-a-love-story/
[6/28/12 3:22:20 PM] Kristian Mandrup: Jasmine & ExtJS’ MVC: A Love Story


http://www.universalmind.com/mindshare/entry/top-10-reasons-to-use-the-sencha-html5-framework

Endelig fandt jeg guldet!

http://www.bryntum.com/products/siesta/

http://www.sencha.com/blog/introducing-siesta-a-testing-tool-for-ext-js/

Introducing Siesta: A Testing Tool for Ext JS

http://www.bryntum.com/products/siesta/webcasts/

SenchaCon 2010: Behavior Driven Testing with Jasmine
https://vimeo.com/18100173

