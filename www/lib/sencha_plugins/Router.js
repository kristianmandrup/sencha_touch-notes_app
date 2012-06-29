Ext.apply(Ext.Router, {

/**
 *  Alias a named route to an existing named route for laziness.
 *
 *  map.connect('messages', { controller: 'messages', action: 'index' });
 *  map.alias('message_center', 'messages');
 *
 *  @param {String} alias The name of the alias to create
 *  @param {String} existing The name of the existing route to map the alias to
 */

  alias: function(alias, existing) {
    var route = this.recognize(existing);
    if(route) {
      return this.connect(alias, route);
    }
    return undefined;
  },

/**
 *  Create resource routing which will automatically generate routes for resourceful "URLs"
 *
 *  map.resources('messages');
 *
 *  @param {String} name The name of the resource we are mapping
 */

  resources: function(name) {
    // we need : index, new, create, show, edit, update, destroy by default
    this.connect(name, { controller: name, action: 'index' });
    this.connect(name+'/new', { controller: name, action: 'new' });
    this.connect(name+'/create', { controller: name, action: 'create' });
    this.connect(name+'/:id', { controller: name, action: 'show' });
    this.connect(name+'/:id/edit', { controller: name, action: 'edit' });
    this.connect(name+'/:id/update', { controller: name, action: 'update' });
    this.connect(name+'/:id/destroy', { controller: name, action: 'destroy' });
  }
});