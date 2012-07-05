
Ext.define('FriendlyRent.view.properties.list.Item', {
  extend: 'Ext.dataview.component.DataItem',
  alias: 'widget.properties_list_item',
  requires: ['FriendlyRent.view.properties.list.item.image', 'FriendlyRent.view.properties.list.item.content'],
  config: {
    image: true,
    name: {
      cls: 'x-name',
      flex: 1
    },
    layout: {
      type: 'hbox',
      align: 'center'
    },
    dataMap: {
      getImage: {
        setSrc: 'image'
      },
      getName: {
        setHtml: 'name'
      }
    }
  },
  applyImage: function(config) {
    return Ext.factory(config, Ext.Img, this.getImage());
  },
  updateImage: function(newImage, oldImage) {
    if (newImage) {
      this.add(newImage);
    }
    if (oldImage) {
      return this.remove(oldImage);
    }
  },
  updateRecord: function(newRecord, oldRecord) {
    return this.callParent(arguments);
  }
});
