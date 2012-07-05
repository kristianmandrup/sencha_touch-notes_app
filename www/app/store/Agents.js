
Ext.define('FriendlyRent.store.Agents', {
  extend: 'Ext.data.Store',
  requires: ['Ext.data.proxy.LocalStorage', 'FriendlyRent.model.search.Agent'],
  config: {
    model: 'FriendlyRent.model.search.Agent',
    data: [
      {
        criteria: 'Copenhagen 5km radius, 2 room apartment'
      }, {
        criteria: 'Copenhagen 10km radius, 2-3 room apartment'
      }
    ],
    proxy: {
      type: 'localstorage',
      id: 'agent-store'
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
