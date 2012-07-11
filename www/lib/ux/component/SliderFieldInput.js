
Ext.define('Ext.field.SliderInput', {
  extend: 'Ext.field.Field',
  xtype: 'slider.input',
  requires: ['Ext.slider.Slider'],
  alternateClassName: 'Ext.form.SliderInput',
  config: {
    cls: Ext.baseCSSPrefix + 'slider-field-input',
    tabIndex: -1,
    helperPosition: 'right'
  },
  proxyConfig: {
    value: 0,
    minValue: 0,
    maxValue: 100,
    increment: 1
  },
  constructor: function(config) {
    if (config == null) {
      config = {};
    }
    if (config.hasOwnProperty('values')) {
      config.value = config.values;
    }
    if (this.config.valueMap && this.config.autoValues === true) {
      this.config.value = this.config.defaultValue || 0;
      this.config.minValue = 0;
      this.config.maxValue = this.config.valueMap.length(-1);
    }
    return this.callParent([config]);
  },
  initialize: function() {
    this.callParent();
    return this.getComponent().on({
      scope: this,
      change: 'onSliderChange',
      dragstart: 'onSliderDragStart',
      drag: 'onSliderDrag',
      dragend: 'onSliderDragEnd'
    });
  },
  valueMapper: function(value, scope) {
    var valueMap;
    valueMap = this.config.valueMap;
    if (valueMap) {
      return valueMap[value];
    }
    return value;
  },
  getElementConfig: function() {
    var originalConfig, self;
    self = this;
    originalConfig = self.callParent();
    originalConfig.children[1].children = [
      {
        reference: 'helper',
        tag: 'div',
        cls: Ext.baseCSSPrefix + 'slider-helper',
        children: [
          {
            reference: 'helperInput',
            tag: 'input',
            type: 'number',
            cls: Ext.baseCSSPrefix + 'slider-helper-input'
          }
        ]
      }
    ];
    return originalConfig;
  },
  setHelperValue: function(value) {
    var valueMapper;
    valueMapper = this.config.valueMapper;
    value = valueMapper ? valueMapper(value) : value;
    return this.helperInput.dom.value = value;
  },
  applyComponent: function(config) {
    var changeValue, self;
    self = this;
    self.helper.setStyle('float', self.config.helperPosition);
    changeValue = function(e) {
      var helperInputValue, keycode;
      keycode = e.which || window.event.keyCode;
      if ([8, 9, 13, 37, 38, 39, 40, 46].indexOf(Number(keycode)) !== -1) {
        return true;
      }
      helperInputValue = Number(self.helperInput.getValue());
      if (helperInputValue < self.config.minValue || isNaN(helperInputValue)) {
        return helperInputValue = self.config.minValue;
      } else if (helperInputValue > self.config.maxValue) {
        helperInputValue = self.config.maxValue;
        this.value = helperInputValue;
        return self.setValue(helperInputValue);
      }
    };
    self.helperInput.dom.onkeydown = function(e) {
      var keycode;
      keycode = e.which || window.event.keyCode;
      if ([8, 9, 13, 37, 38, 39, 40, 46, 190].indexOf(Number(keycode)) !== -1) {
        return true;
      }
      if (keycode > 57 || keycode < 48) {
        return false;
      }
    };
    self.helperInput.dom.onchange = changeValue;
    self.helperInput.dom.onclick = changeValue;
    self.helperInput.dom.onkeyup = changeValue;
    self.setHelperValue(self.config.value);
    return Ext.factory(config, Ext.slider.Slider);
  },
  onSliderChange: function(me, thumb, newValue, oldValue) {
    this.setHelperValue(newValue);
    return this.fireEvent('change', this, thumb, newValue, oldValue);
  },
  onSliderDragStart: function(me, thumb, newValue, oldValue) {
    return this.fireEvent('dragstart', this, thumb, newValue, oldValue);
  },
  onSliderDrag: function(me, thumb, newValue, oldValue) {
    this.setHelperValue(newValue);
    return this.fireEvent('drag', this, thumb, newValue, oldValue);
  },
  onSliderDragEnd: function(me, thumb, newValue, oldValue) {
    return this.fireEvent('dragend', this, thumb, newValue, oldValue);
  },
  setValues: function(value) {
    return this.setValue(value);
  },
  getValues: function() {
    return this.getValue();
  },
  reset: function() {
    var config, initialValue;
    config = this.config;
    initialValue = this.config.hasOwnProperty('values') ? config.values : config.value;
    return this.setValue(initialValue);
  },
  doSetDisabled: function(disabled) {
    this.callParent(arguments);
    return this.getComponent().setDisabled(disabled);
  }
});
