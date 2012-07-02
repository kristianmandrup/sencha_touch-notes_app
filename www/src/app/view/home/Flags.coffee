Ext.define  'FriendlyRent.view.home.Flags'
  extend:   'Ext.Panel'
  alias:    'widget.home_flags'
  config:
    layout: 
      type:   'hbox'
      pack: 'center'
      align: 'middle' 
    items: [
      {
        xtype:  'image'
        src:    'resources/images/EnglishFlag.png'
        id:     'english_flag'
        height: 32
        width:  32
      }
      {
        xtype:  'spacer'
        width:  12
      }
      {
        xtype:  'image'
        id:     'danish_flag'
        src:    'resources/images/DanishFlag.png'
        height: 32
        width:  32
      }
    ]