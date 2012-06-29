(function() {

  Ext.define('App.view.HelloWorld', {
    extend: 'Ext.Container',
    config: {
      fullscreen: true,
      html: 'Hello Worldazsfz! #7'
    }
  });

  Ext.define('App.controller.HelloWorld', {
    extend: 'Ext.app.Controller',
    views: ['HelloWorld'],
    init: function() {
      return this.getView('HelloWorld').create();
    }
  });

  Ext.application({
    name: 'App',
    controllers: ['HelloWorld']
  });

}).call(this);
