Ext.define('Ext.field.SliderText', {
  extend  : 'Ext.field.Field',
  xtype   : 'sliderfieldtext',
  requires: [
    'Ext.slider.Slider'
  ],
  alternateClassName: 'Ext.form.SliderText',

  config: {
    cls: Ext.baseCSSPrefix + 'slider-field-text',
    tabIndex: -1,
    helperPosition: 'right',
    valueMapper: function(value) {
      if (self.config.valueMap) {
        self.config.valueMap[value];
      } else {
        value;
      }
    }
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

    if (config.hasOwnProperty('valueMap')) {
      if (config.autoValues == true) {
        config.value = config.defaultValue || 0;
        config.minValue = 0;
        config.maxValue = config.valueMap.size -1;
        config.increment = 1;
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
    var valueMapper = self.config.valueMapper;
    var value = valueMapper ? valueMapper(value) : value;
    this.helperInput.dom.text = value;
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
