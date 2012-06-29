When navigating back through the routes, you will end up back on the unhashed url, which doesn't map onto a route.

To solve this, in my default controller I've added an event listener that reveals the "home" page when the user navigates to the unhashed url:

launch: function() {
   this.getApplication().getHistory().on('change', function() {
      if (!String(window.location.hash).substr(1)) {
         this.showHome();
      };
   }, this);
}


http://docs.sencha.com/touch/2-0/#%21/guide/history_support
http://www.sencha.com/forum/showthread.php?196223-Routes-example

history.back();

on any Controller or Application object

this.redirectTo()