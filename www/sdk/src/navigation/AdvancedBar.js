Ext.define('Ext.navigation.AdvancedBar', {
    extend: 'Ext.navigation.Bar',
    alternateClassName: 'Ext.AdvancedNavigationBar',
    xtype: 'advnavigationbar',

    config: {
    	// defaultBackButtonText: I18n.t('back'),
    },

    /**
     * @private
     */
    updateView: function(newView) {
        var me = this,
            backButton = me.getBackButton(),
            innerItems, i, backButtonText, item, title;

        me.getItems();

        if (newView) {
            //update the back button stack with the current inner items of the view
            innerItems = newView.getInnerItems();

            dockedItems = newView.getDockedItems();

			for (i = 0; i < dockedItems.length; i++) {
				item = dockedItems[i];
				console.log(item);
			}

            for (i = 0; i < innerItems.length; i++) {
                item = innerItems[i];
                title = (item.getTitle) ? item.getTitle() : item.config.title;

                me.backButtonStack.push(title || '&nbsp;');
            }

            me.setTitle(me.getTitleText());

            backButtonText = me.getBackButtonText();
            if (backButtonText) {
                backButton.setText(backButtonText);
                backButton.show();
            }
        }
    },
    /**
     * @private
     */
    onViewAdd: function(view, item) {
        var me = this,
            backButtonStack = me.backButtonStack,
            hasPrevious, title;

        me.endAnimation();

        title = (item.getTitle) ? item.getTitle() : item.config.title;

        backButtonStack.push(title || '&nbsp;');
        hasPrevious = backButtonStack.length > 1;

        me.doChangeView(view, hasPrevious, false);
    },

    /**
     * @private
     */
    onViewRemove: function(view) {
        var me = this,
            backButtonStack = me.backButtonStack,
            hasPrevious;

        me.endAnimation();
        backButtonStack.pop();
        hasPrevious = backButtonStack.length > 1;

        me.doChangeView(view, hasPrevious, true);
    },    
});
