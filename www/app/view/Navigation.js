Ext.define('FriendlyRent.view.Navigation', {
  extend: 'Ext.navigation.View',

  xtype: 'mainnav',

  requires: ['Ext.field.Search', 'Ext.TitleBar'],

  config: {
      fullscreen: true,

      navigationBar: {
          layout: {
            align: 'stretch'
          },          
          items: [
              {
                xtype: 'spacer'
              },
              {
                  xtype: 'searchfield',
                  placeHolder: 'Search...',
              }
              // ,
              // {
              //   xtype: 'spacer'
              // },
              // {
              //     title: 'Login',
              //     iconCls: 'user'
              // }
          ]
      },
      items: [
          {
              xtype: 'panel',
              html: 'test'
          },
          {
              xtype: 'list',
              fullscreen: true,

              store: {
                  fields: ['name', 'number'],
                  sorters: 'name',
                  data: [
                      {name: 'bla', number: 0},
                      {name: 'blo', number: 1},
                      {name: 'bliblo', number: 2},
                      {name: 'Bliblablo', number: 3},
                      {name: 'bliboasdas', number: 4},
                  ]
              },

              itemTpl: '{name}'
          }
      ]
  }
});