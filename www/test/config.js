(function() {
  var File;

  phantom = require('phantom');

  var fs = require('fs');
  var vm = require('vm');
  var includeInThisContext = function(path) {
      var code = fs.readFileSync(path);
      vm.runInThisContext(code, path);
  }.bind(this);
  includeInThisContext(__dirname + '/../sdk/microloader/development.js');

  File = require('pathfinder').File;

  global.chai = require('chai');

  global.assert = chai.assert;

  global.expect = chai.expect;

  global.test = it;

  global.sinon = require('sinon');

  global.async = require('async');

  global.cb = true;

}).call(this);
