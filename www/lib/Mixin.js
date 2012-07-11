var Mixin, module,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Mixin = (function() {

  function Mixin() {}

  Mixin.prototype.augment = function(t) {
    var m, n;
    for (n in this) {
      m = this[n];
      if (!(n === 'augment' || !(this[n].prototype != null))) {
        t[n] = m;
      }
    }
    return t.setup();
  };

  Mixin.prototype.eject = function(mixin) {
    var m, n, o, p, _results;
    _results = [];
    for (n in this) {
      m = this[n];
      _results.push(__indexOf.call((function() {
        var _ref, _results1;
        _ref = mixin.prototype;
        _results1 = [];
        for (o in _ref) {
          p = _ref[o];
          _results1.push(p);
        }
        return _results1;
      })(), m) >= 0 ? delete this[n] : void 0);
    }
    return _results;
  };

  Mixin.prototype.setup = function() {};

  return Mixin;

})();

module = function(name) {
  return global[name] = global[name] || {};
};

_.mixin(_.string.exports());
