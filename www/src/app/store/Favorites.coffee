Ext.define  'FriendlyRent.store.Favorites'
  extend: 'Ext.data.Store'
  requires: [
    'Ext.data.proxy.LocalStorage',
    'FriendlyRent.model.Property'
  ]
  config:
    # model: 'FriendlyRent.model.Property'
    data : [
        {
          dateCreated:  '5/7/2012'
          title:    'Nice place'
          location: 'Copenhagen'
          type: 'apartment'
          furnished: 'fully'
          cost: '2500'
          image: 'prop1.jpg'
          rooms: 2
          # period:
          #   start_date: '1/8/2012'
          #   end_date:   '1/9/2012'          
        }
        {
          dateCreated:  '12/6/2012'
          title:        'Cool house'
          location:     'Nørrebro'
          type: 'house'
          furnished: 'not'
          cost: '3200'
          image: 'prop2.jpg'
          rooms: 3          
          # period:
          #   start_date: '1/8/2012'
          #   end_date:   '1/10/2012'
        }
        {
          dateCreated:  '3/6/2012'
          title:    'Nice crib'
          location: 'Vesterbro'
          type: 'house'
          furnished: 'fully'
          cost: '4000'
          image: 'prop3.jpg'
          rooms: 4
          # period:
          #   start_date: '1/8/2012'
          #   end_date:   '1/10/2012'
        }
    ]
    proxy:
      type:   'localstorage'
      id:     'favorite-store'
    sorters: [
      { property: 'dateCreated', direction: 'DESC'}
    ]
    grouper:
      sortProperty: "dateCreated"
      direction: "DESC"
      groupFn: (record) ->
        if (record and record.data.dateCreated) then record.data.dateCreated.toDateString else ''
