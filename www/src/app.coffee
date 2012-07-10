Ext.Loader.setPath
  'Ext.io':   'sdk/sencha-io-0.3.3/src/io'
  'Ext.cf':   'sdk/sencha-io-0.3.3/src/cf'
  'Ext':      'sdk/src'
  'Ux' :      'lib/Ux'
  # 'PathMenu': 'modules/PathMenu'
  # 'Share':    'modules/Share'
  # 'Photos':   'modules/Photos'

Ext.application
  name: 'FriendlyRent'
  requires: [    
  ]
  models: []
  stores: [
    "Favorites", "Agents"
  ]
  controllers: [
    "FriendlyRent.controller.Home"
    "FriendlyRent.controller.Search"

    # http://www.sencha.com/blog/sencha-io-photo-sharing-example-using-sencha-touch
    # include Ext.io.Controller to manage the sencha.io connection
    # 'Ext.io.Controller'
    # Controller for the main application
    # 'Application'
    # Controller of the module to manage photos
    # 'Photos.controller.Photos'
    # Controller of the module for sharing images between users
    # 'Share.controller.Share'
    # Controller for the path menu
    # 'PathMenu.controller.Menu'    
  ]

  views: [
    "FriendlyRent.view.home.Page"
    # "FriendlyRent.view.search.Page"
    # "FriendlyRent.view.search.favorites.Page"
  ]

  icon:
    '57':   'resources/icons/Icon.png'
    '72':   'resources/icons/Icon~ipad.png'
    '114':  'resources/icons/Icon@2x.png'
    '144':  'resources/icons/Icon~ipad@2x.png'

  isIconPrecomposed: true
  startupImage:
    '320x460':    'resources/startup/320x460.jpg'
    '640x920':    'resources/startup/640x920.png'
    '768x1004':   'resources/startup/768x1004.png'
    '748x1024':   'resources/startup/748x1024.png'
    '1536x2008':  'resources/startup/1536x2008.png'
    '1496x2048':  'resources/startup/1496x2048.png'

  # Add sencha.io app configuration.
  config:
    io:
      # Sencha.io      
      # app id string configured on http://developer.sencha.io/apps
      appId: 'Uk0e22q24n5ocdvb9i10fUS3IUU'
      # app secret
      appSecret: 'iKrtkvW8AZlE1oOj'
      # logging level. Should be one of "none", "debug", "info", "warn" or "error". Defaults to "error".
      # logLevel: 'error'
      logLevel: 'debug'
      # If you don't want to attempt to authenticate on startup set this to false. defaults to true
      authOnStartup: true
      # If you don't want to automatically trigger the login panel when your application starts then set manualLogin to true
      manualLogin: true

  initialize: ->
    console.log 'initialize app'    

  launch: ->
    console.log 'launch app'
    # home_page = Ext.create 'FriendlyRent.view.search.favorites.Page'    
    home_page = Ext.create 'FriendlyRent.view.home.Page'    
    Ext.Viewport.add home_page

  onUpdated: ->
    Ext.Msg.confirm(
      "Application Update",
      "This application has just successfully been updated to the latest version. Reload now?",
      (buttonId) ->
        if (buttonId == 'yes')
          window.location.reload()
    )