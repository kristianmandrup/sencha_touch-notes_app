Ext.define('Ext.field.SliderText', {
  extend  : 'Ext.field.Field',
  xtype   : 'slider.text',
  requires: [
    'Ext.slider.Slider'
  ],
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
    config = config || {};

    if (config.hasOwnProperty('values')) {
      config.value = config.values;
    }
    // console.log('setup values', this.config.valueMap);
    if (this.config.valueMap) {
      // console.log('has valuemap:', this.config.autoValues);
      if (this.config.autoValues == true) {
        // console.log('has autovalues');
        this.config.value = this.config.defaultValue || 0;
        this.config.minValue = 0;
        this.config.maxValue = this.config.valueMap.length -1;
        // console.log('default', this.config.value);
        // console.log('min', this.config.minValue);
        // console.log('max', this.config.maxValue);
      }
    }

    this.callParent([config]);
  },
  
  initialize: function() {
    this.callParent();
    
    this.getComponent().on({
      scope: this,
      change: 'onSliderChange',
      dragstart: 'onSliderDragStart',
      drag: 'onSliderDrag',
      dragend: 'onSliderDragEnd'
    });
  },

  getElementConfig: function() {
    var self = this;
    var originalConfig = self.callParent();

    originalConfig.children[1].children = [{
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
    }];

    return originalConfig;
  },
  
  setHelperValue: function(value) {
    var value = this.valueMapper(value)
    // console.log('value:', value);
    // console.log('helperInput', this.helperInput);
    this.helperInput.dom.innerText = value;
  },
  
  // @private
  applyComponent: function(config) {
    var self = this;
    self.helper.setStyle('float', self.config.helperPosition);
    self.setHelperValue(self.config.value);
    return Ext.factory(config, Ext.slider.Slider);
  },

  onSliderChange: function(me, thumb, newValue, oldValue) {
    this.setHelperValue(newValue);
    this.fireEvent('change', this, thumb, newValue, oldValue);
  },

  onSliderDragStart: function(me, thumb, newValue, oldValue) {
    this.fireEvent('dragstart', this, thumb, newValue, oldValue);
  },

  onSliderDrag: function(me, thumb, newValue, oldValue) {
    this.setHelperValue(newValue);
    this.fireEvent('drag', this, thumb, newValue, oldValue);
  },

  onSliderDragEnd: function(me, thumb, newValue, oldValue) {
    this.fireEvent('dragend', this, thumb, newValue, oldValue);
  },

  /**
   * Convience method. Calls {@link #setValue}
   */
  setValues: function(value) {
    this.setValue(value);
  },

  /**
   * Convience method. Calls {@link #getValue}
   */
  getValues: function() {
    return this.getValue();
  },

  valueMapper: function(value) {
    // console.log('Config', config)
    var valueMap = this.config.valueMap;
    // console.log('Text Valuemap', valueMap)
    if (valueMap) {
      // console.log('mapped value', value);
      return valueMap[value];
    } else {
      // console.log('orig value', value);
      return value;
    }
  },

  reset: function() {
    var config = this.config,
      initialValue = (this.config.hasOwnProperty('values')) ? config.values : config.value;

    this.setValue(initialValue);
  },

  doSetDisabled: function(disabled) {
    this.callParent(arguments);

    this.getComponent().setDisabled(disabled);
  }
});
