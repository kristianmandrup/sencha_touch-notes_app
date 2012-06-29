
Ext.define('FriendlyRent.view.mail.messages.List', {
  extend: 'Ext.List',
  alias: 'widget.mail_messages_list',
  config: {
    itemTpl: '<div class="mail subject">{subject}</div><div class="mail body">{body}</div>',
    data: [
      {
        subject: 'hello',
        body: 'I love your hair'
      }, {
        subject: 'hi',
        body: 'I miss you...'
      }
    ]
  }
});
