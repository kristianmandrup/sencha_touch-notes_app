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
          title:        'Nice place'
          city:         'Frederiksberg'
          region:       'Cph'
          countryCode:  'DK'
          type:         'villa'
          furnished:    true
          cost:         '12500'
          image:        'prop1.jpg'
          size:         120
          floor:        0
          rooms:        4
          bedrooms:     3
          period:
            start_date: '1/8/2012'
            end_date:   '1/9/2012'          
        }
        {
          dateCreated:  '12/6/2012'
          title:        'Cool house'
          city:         'Nørrebro'
          region:       'Cph'
          countryCode:  'DK'
          type:         'apartment'
          furnished:    false
          cost:         '7600'
          image:        'prop2.jpg'
          size:         84
          floor:        1
          rooms:        3
          bedrooms:     2         
          period:
            start_date: '1/8/2012'
            end_date:   '1/10/2012'
        }
        {
          dateCreated:  '3/6/2012'
          title:        'Nice crib'
          city:         'Vesterbro'
          region:       'Cph'
          countryCode:  'DK'
          type:         'house'
          furnished:    '1/2'
          cost:         '10200'
          image:        'prop3.jpg'
          size:         100
          floor:        2
          rooms:        4
          bedrooms:     2
          period:
            start_date: '1/8/2012'
            end_date:   '1/10/2012'
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
