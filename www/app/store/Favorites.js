
Ext.define('FriendlyRent.store.Favorites', {
  extend: 'Ext.data.Store',
  requires: ['Ext.data.proxy.LocalStorage', 'FriendlyRent.model.Property'],
  config: {
    model: 'FriendlyRent.model.Property',
    data: [
      {
        dateCreated: '5/7/2012',
        title: 'Nice place',
        rental_period: {
          start_date: '1/8/2012',
          end_date: '1/9/2012'
        },
        location: 'Copenhagen',
        image: 'prop1.jpg'
      }, {
        dateCreated: '12/6/2012',
        title: 'Cool house',
        rental_period: {
          start_date: '1/8/2012',
          end_date: '1/10/2012'
        },
        location: 'Nørrebro',
        image: 'prop2.jpg'
      }, {
        dateCreated: '3/6/2012',
        title: 'Nice crib',
        rental_period: {
          start_date: '1/8/2012',
          end_date: '1/10/2012'
        },
        location: 'Vesterbro',
        image: 'prop3.jpg'
      }
    ],
    proxy: {
      type: 'localstorage',
      id: 'favorite-store'
    },
    sorters: [
      {
        property: 'dateCreated',
        direction: 'DESC'
      }
    ],
    grouper: {
      sortProperty: "dateCreated",
      direction: "DESC",
      groupFn: function(record) {
        if (record && record.data.dateCreated) {
          return record.data.dateCreated.toDateString;
        } else {
          return '';
        }
      }
    }
  }
});
