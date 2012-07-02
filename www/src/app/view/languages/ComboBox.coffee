# http://stackoverflow.com/questions/7318396/sencha-touch-i18n-basics

Ext.define      'FriendlyRent.view.languages.ComboBox'
    extends:    'Ext.form.field.ComboBox'
    config:
        renderTo:       'languages'
        store:          'FriendlyRent.store.Languages'
        displayField:   'language'
        queryMode:      'local'
        emptyText:      'Select a language...'
        hideLabel:      true
