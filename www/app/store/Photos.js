
Ext.define('FriendlyRent.store.Photos', {
  extend: 'Ext.data.Store',
  requires: ['Ext.data.proxy.LocalStorage'],
  config: {
    model: 'FriendlyRent.model.Photo',
    proxy: {
      type: 'localstorage',
      id: 'photo-store'
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
