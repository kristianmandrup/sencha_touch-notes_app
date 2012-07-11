
Ext.define('FriendlyRent.SliderTooltip', {
  extend: 'Ext.Panel',
  alias: 'widget.slider_tooltip',
  config: {
    floating: true
  },
  height: 30,
  styleHtmlContent: true,
  style: "background-color: #FFF; text-align: center"
});

Ext.define('FriendlyRent.TooltipSlider', {
  extend: 'Ext.form.Slider',
  alias: 'widget.tooltip_slider',
  config: {
    listeners: {
      drag: function(theSlider, theThumb, ThumbValue) {
        sliderTooltip.setWidth(ThumbValue.length * 1.5);
        sliderTooltip.showBy(theThumb);
        return sliderTooltip.el.setHTML(ThumbValue);
      },
      dragend: function(theSlider, theThumb, ThumbValue) {
        return sliderTooltip.hide();
      },
      constructor: function() {
        var sliderTooltip;
        return sliderTooltip = Ext.create('FriendlyRent.SliderTooltip');
      }
    }
  }
});
