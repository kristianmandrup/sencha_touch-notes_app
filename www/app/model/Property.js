
Ext.define('model.Property', {
  extend: 'Ext.data.Model',
  config: {
    idProperty: 'id',
    fields: [
      {
        name: 'id',
        type: 'int'
      }, {
        name: 'dateCreated',
        type: 'date',
        dateFormat: 'c'
      }, {
        name: 'rental_period',
        type: 'rental_period'
      }, {
        name: 'photo_gallery',
        type: 'photo_gallery'
      }, {
        name: 'location',
        type: 'location'
      }, {
        name: 'publish_on',
        type: 'date'
      }, {
        name: 'published_on',
        type: 'date'
      }
    ],
    validations: [
      {
        type: 'presence',
        field: 'id'
      }, {
        type: 'presence',
        field: 'dateCreated'
      }
    ]
  }
});
