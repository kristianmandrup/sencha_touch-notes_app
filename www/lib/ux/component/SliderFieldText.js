
Ext.define('Ext.field.SliderText', {
  extend: 'Ext.field.Field',
  xtype: 'slider.text',
  requires: ['Ext.slider.Slider'],
  alternateClassName: 'Ext.form.SliderText',
  config: {
    cls: Ext.baseCSSPrefix + 'slider-field-text',
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
            tag: 'div',
            cls: Ext.baseCSSPrefix + 'slider-helper-input'
          }
        ]
      }
    ];
    return originalConfig;
  },
  setHelperValue: function(value) {
    value = this.valueMapper(value);
    return this.helperInput.dom.innerText = value;
  },
  applyComponent: function(config) {
    var self;
    self = this;
    self.helper.setStyle('float', self.config.helperPosition);
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
