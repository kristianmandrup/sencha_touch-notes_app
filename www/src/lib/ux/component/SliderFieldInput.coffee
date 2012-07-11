Ext.define  'Ext.field.SliderInput'
  extend:   'Ext.field.Field'
  xtype:    'slider.input'
  requires: [
    'Ext.slider.Slider'
  ]
  alternateClassName: 'Ext.form.SliderInput'
  config:
    cls:            Ext.baseCSSPrefix + 'slider-field-input'
    tabIndex:       -1
    helperPosition: 'right'
  proxyConfig:
    value:      0
    minValue:   0
    maxValue:   100
    increment:  1
  constructor: (config) ->
    config ?= {}
    config.value = config.values if config.hasOwnProperty('values')
    if this.config.valueMap and this.config.autoValues is true
        this.config.value = this.config.defaultValue || 0
        this.config.minValue = 0
        this.config.maxValue = this.config.valueMap.length -1
    this.callParent [config]
  
  initialize: ->
    this.callParent()    
    this.getComponent().on(
      scope:      this
      change:     'onSliderChange'
      dragstart:  'onSliderDragStart'
      drag:       'onSliderDrag'
      dragend:    'onSliderDragEnd'
    )
  valueMapper: (value, scope) ->
    valueMap = this.config.valueMap    
    return valueMap[value] if (valueMap)
    value

  getElementConfig: ->
    self = this
    originalConfig = self.callParent()
    originalConfig.children[1].children = [
      {
        reference: 'helper'
        tag: 'div'
        cls: Ext.baseCSSPrefix + 'slider-helper'
        children: [
          {
            reference:  'helperInput'
            tag:        'input'
            type:       'number'
            cls: Ext.baseCSSPrefix + 'slider-helper-input'
          }
        ]
      }
    ]
    originalConfig
  
  setHelperValue: (value) ->
    valueMapper = this.config.valueMapper
    value = if valueMapper then valueMapper(value) else value
    this.helperInput.dom.value = value
  
  applyComponent: (config) ->
    self = this
    self.helper.setStyle('float', self.config.helperPosition)
    changeValue = (e) ->
      keycode = e.which || window.event.keyCode
      return true if( [8, 9, 13, 37, 38, 39, 40, 46].indexOf(Number(keycode)) != -1 )
      helperInputValue = Number(self.helperInput.getValue())
      
      if(helperInputValue < self.config.minValue || isNaN(helperInputValue))      
        helperInputValue = self.config.minValue
      else if(helperInputValue > self.config.maxValue)
        helperInputValue = self.config.maxValue;
        this.value = helperInputValue;
        self.setValue(helperInputValue);
    self.helperInput.dom.onkeydown = (e) ->
      keycode = e.which || window.event.keyCode
      return true if( [8, 9, 13, 37, 38, 39, 40, 46, 190].indexOf(Number(keycode)) != -1 )
      return false if( keycode > 57 || keycode < 48 )
    self.helperInput.dom.onchange = changeValue
    self.helperInput.dom.onclick = changeValue
    self.helperInput.dom.onkeyup = changeValue
    self.setHelperValue(self.config.value)
    Ext.factory(config, Ext.slider.Slider)

  onSliderChange: (me, thumb, newValue, oldValue) ->
    this.setHelperValue(newValue)
    this.fireEvent('change', this, thumb, newValue, oldValue)

  onSliderDragStart: (me, thumb, newValue, oldValue) ->
    this.fireEvent('dragstart', this, thumb, newValue, oldValue)

  onSliderDrag: (me, thumb, newValue, oldValue) ->
    this.setHelperValue(newValue)
    this.fireEvent('drag', this, thumb, newValue, oldValue)

  onSliderDragEnd: (me, thumb, newValue, oldValue) ->
    this.fireEvent('dragend', this, thumb, newValue, oldValue)

  setValues: (value) ->
    this.setValue(value)

  getValues: ->
    this.getValue()

  reset: ->
    config = this.config
    initialValue = if (this.config.hasOwnProperty('values')) then config.values else config.value
    this.setValue(initialValue)

  doSetDisabled: (disabled) ->
    this.callParent(arguments)
    this.getComponent().setDisabled(disabled)
