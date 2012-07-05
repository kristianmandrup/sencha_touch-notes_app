Ext.define  'FriendlyRent.model.Property'
    extend: 'Ext.data.Model'
    alias:  'property'
    config:
      idProperty: 'id'
      fields: [
        {name: 'id',                type: 'int'}
        {name: 'dateCreated',       type: 'date', dateFormat: 'c' }

        {name: 'title',             type: 'string'}
        {name: 'description',       type: 'string'}

        {name: 'image',             type: 'string'}
        {name: 'rating',            type: 'int'}

        {name: 'publish_on',        type: 'date'}
        {name: 'published',         type: 'boolean'}
      ],
      hasOne: [
        {name: 'costs',         model: 'property.Costs'}
        {name: 'rental_period', model: 'property.RentalPeriod'}
        {name: 'location',      model: 'property.Location'}
        {name: 'photo_gallery', model: 'photo.Gallery'}
      ]
      validations: [
        { type: 'presence', field: 'id' }
        # { type: 'presence', field: 'dateCreated' }
      ]
