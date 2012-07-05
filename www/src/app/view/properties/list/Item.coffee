# http://www.sencha.com/blog/dive-into-dataview-with-sencha-touch-2-beta-2/
Ext.define  'FriendlyRent.view.properties.list.Item'
  extend:   'Ext.dataview.component.DataItem'
  alias:    'widget.properties_list_item'
  requires: [
    'FriendlyRent.view.properties.list.item.image'
    'FriendlyRent.view.properties.list.item.content'
  ]
  config:
    # Inside the config object, add a new config called image 
    # and set it to true (this will be transformed into a Ext.Img component)
    image: true
    name: # this will be transformed into an Ext.Component component
      cls: 'x-name'
      flex: 1
    layout:
      type: 'hbox'
      align: 'center'
    dataMap:
      getImage:
        setSrc: 'image' # this will essentially do this: this.getImage().setSrc(record.get('image'));
      getName:
        setHtml: 'name'

  applyImage: (config) ->
    Ext.factory config, Ext.Img, this.getImage()
 
  updateImage: (newImage, oldImage) ->    
    this.add(newImage) if (newImage)
    this.remove(oldImage) if (oldImage)

  updateRecord: (newRecord, oldRecord) ->
    this.callParent(arguments)