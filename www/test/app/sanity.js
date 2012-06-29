StartTest(function(t) {
    t.diag("Sanity");

    t.ok(Ext, 'ExtJS is here');
    t.ok(Ext.Window, '.. indeed');


    t.ok(Your.Project, 'My project is here');
    t.ok(Your.Project.Util, '.. indeed');

	t.ok(value1 > value2, 'Value1 is greater than value2')

	t.isGreater(value1, value2, 'Value1 is greater than value2')

	t.todo('Scheduled for 4.1.x release', function (todo) {

	    var treePanel    = new Ext.tree.Panel();

	    todo.is(treePanel.getView().store, treePanel.store, "NodeStore and TreeStore have been merged and there's only 1 store now");
	});

	t.chain(
	    function (next) {
	        t.type(userNameField, 'username', next);
	    },
	    function (next) {
	        t.type(passwordField, 'secret', next);
	    },
	    function (next) {
	        t.click(loginButton, next);
	    },
	    function () {
	        // done
	    }
	});

	t.chain({
	    action  : 'type',
	    target  : userNameField, 
	    text    : 'username'
	},{
	    action  : 'type',
	    target  : passwordField, 
	    text    : 'secret'
	},{
	    action  : 'click',
	    target  : loginButton 
	});

    t.done();   // Optional, marks the correct exit point from the test


})  