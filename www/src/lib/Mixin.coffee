class Mixin

  # "Class method". Augment object or class `t` with new methods.
  augment: (t) ->
    (t[n] = m unless n == 'augment' or !this[n].prototype?) for n, m of this
    t.setup()

  # When an object is augmented with at least one mixin, call this method to
  # remove `mixin`.
  eject: (mixin) ->
    (delete this[n] if m in (p for o, p of mixin::)) for n, m of this

  # Implement in your mixin to act as a constructor for mixed-in properties
  setup: ->