Ext.define 'App.view.HelloWorld',
    extend: 'Ext.Container'
    config:
        fullscreen: true
        html: 'Hello World! #7'

Ext.define 'App.controller.HelloWorld',
    extend: 'Ext.app.Controller'
    views: [
        'HelloWorld'
    ]
    init: ->
        @getView('HelloWorld').create()

Ext.application
    name: 'App'
    controllers: [
        'HelloWorld'
    ]