
Ext.Loader.setPath({
  'Ext.io': 'sdk/sencha-io-0.3.3/src/io',
  'Ext.cf': 'sdk/sencha-io-0.3.3/src/cf',
  'Ext': 'sdk/src',
  'Ux': 'lib/Ux'
});

Ext.application({
  name: 'FriendlyRent',
  requires: [],
  models: [],
  stores: ["Favorites", "Agents"],
  controllers: ["FriendlyRent.controller.Home", "FriendlyRent.controller.Search"],
  views: ["FriendlyRent.view.home.Page"],
  icon: {
    '57': 'resources/icons/Icon.png',
    '72': 'resources/icons/Icon~ipad.png',
    '114': 'resources/icons/Icon@2x.png',
    '144': 'resources/icons/Icon~ipad@2x.png'
  },
  isIconPrecomposed: true,
  startupImage: {
    '320x460': 'resources/startup/320x460.jpg',
    '640x920': 'resources/startup/640x920.png',
    '768x1004': 'resources/startup/768x1004.png',
    '748x1024': 'resources/startup/748x1024.png',
    '1536x2008': 'resources/startup/1536x2008.png',
    '1496x2048': 'resources/startup/1496x2048.png'
  },
  config: {
    io: {
      appId: 'Uk0e22q24n5ocdvb9i10fUS3IUU',
      appSecret: 'iKrtkvW8AZlE1oOj',
      logLevel: 'debug',
      authOnStartup: true,
      manualLogin: true
    }
  },
  initialize: function() {
    return console.log('initialize app');
  },
  launch: function() {
    var home_page;
    console.log('launch app');
    home_page = Ext.create('FriendlyRent.view.home.Page');
    return Ext.Viewport.add(home_page);
  },
  onUpdated: function() {
    return Ext.Msg.confirm("Application Update", "This application has just successfully been updated to the latest version. Reload now?", function(buttonId) {
      if (buttonId === 'yes') {
        return window.location.reload();
      }
    });
  }
});
