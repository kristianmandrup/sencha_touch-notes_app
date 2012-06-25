Ext.define('FriendlyRent.view.registration.login.Facebook', {
  extend: 'Ext.Panel',
  alias: 'widget.registration.login.facebook',  
  config: {
    items: [
        {
            html: '<div class="fb-login-button"></div>'
        }
    ]
  }
});