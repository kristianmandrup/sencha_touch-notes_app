Ext.define('Sencha.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            navBar:         'tabbar',
            homeTabButton:  'button[title=home]',
            aboutTabButton: 'button[action=about]',
            clearButton:    'button[action=clearHomeBadge]',
            starButton:     'button[action=pingHomeBadge]'
        },
        control: {
            clearButton: {
                tap: 'clearHomeBadge'
            },
            homeTabButton: {
                tap: 'homeMenu'
            },
            aboutTabButton: {
                tap: 'aboutMenu'
            },
            starButton: {
                tap: 'incrementHomeBadge'
            }
        }
    },

    // @private
    aboutTabButton: function() { //function(activeItem, oldActiveItem) {
      var title = 'Hello world'
      this.getMain().getNavigationBar().pushTitle(title);
      this.getMain().getNavigationBar().titleComponent.setWidth(100); 

      var me = this,
          navigationBar = me.getNavigationBar(),
          stack = me.stack,
          layout = me.getLayout(),
          animation = layout.getAnimation() && layout.getAnimation().isAnimation && this.isPainted(),
          pushFn = (animation) ? 'pushAnimated' : 'push',
          popFn = (animation) ? 'popAnimated' : 'pop',
          title;

      if (!activeItem) {
          return;
      }

      title = activeItem.getInitialConfig().title;

      //if we are not popping a view, then add it to the stack
      if (!me.popping) {
          stack.push(activeItem);
          me.fireEvent('push', this, activeItem);
      } else {
          me.fireEvent('pop', this, activeItem);
      }
      me.callParent(arguments);
    },

    homeMenu: function() {
        console.log('home menu!');
        Ext.Viewport.add({
            xtype: 'homecard'
        });
    },

    aboutMenu: function() {
        console.log('About menu!');
        Ext.Viewport.add({
            xtype: 'aboutcard'
        });
    },

    incrementHomeBadge: function() {
        var hometab = this.getHomeTabButton(),
            badgenumber = parseInt(hometab.getBadgeText()),
            nextnumber = isNaN(badgenumber) ? 1 : badgenumber+1;

        hometab.setBadgeText(nextnumber);
    },

    clearHomeBadge: function() {
        this.getHomeTabButton().setBadgeText("");
    },

    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        console.log("launch Main controller");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init Main controller");
    }

});
