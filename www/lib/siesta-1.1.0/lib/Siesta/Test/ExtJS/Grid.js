/*

Siesta 1.1.0-beta-1
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**
@class Siesta.Test.ExtJS.Grid

This is a mixin, with helper methods for testing functionality relating to ExtJS grids. This mixin is being consumed by {@link Siesta.Test.ExtJS}

*/
Role('Siesta.Test.ExtJS.Grid', {
    
    requires        : [ 'waitFor', 'pass', 'fail', 'typeOf' ],
    
    
    methods : {
        /**
         * Waits for the rows of a gridpanel or tree panel to render and then calls the supplied callback. Please note, that if the store of the grid has no records,
         * the condition for this waiter will never be fullfilled.
         * 
         * @param {Ext.panel.Table/String} panel The panel or a ComponentQuery matching a panel
         * @param {Function} callback A function to call when the condition has been met.
         * @param {Object} scope The scope for the callback
         * @param {Int} timeout The maximum amount of time to wait for the condition to be fulfilled. Defaults to the {@link Siesta.Test.ExtJS#waitForTimeout} value. 
         */
        waitForRowsVisible : function(panel, callback, scope, timeout) {
            var cmp = this.normalizeComponent(panel, true);
            
            if (!cmp && typeof panel === 'string') {
                // Make sure CQ returns a result first
                this.waitForCQ(panel, function(result) { this.waitForRowsVisible(result[0], callback, scope, timeout); }, this);
            } else {
                this.waitFor({
                    method          : function() { return !!cmp.getView().getNode(0) }, 
                    callback        : callback,
                    scope           : scope,
                    timeout         : timeout,
                    name            : 'waitForRowsVisible',
                    description     : ' rows to show for panel with id "' + panel.id + '"'
                });
            }
        },

        /**
         * Utility method which returns the first grid row element.
         * 
         * @param {Ext.panel.Table/String} panel The panel or a ComponentQuery matching a panel
         * @return {Ext.Element} The element of first row of grid.
         */
        getFirstRow : function(grid) {
            grid = this.normalizeComponent(grid);
            var Ext = this.getExt();
            return Ext.get(grid.getView().getNode(0));
        },

        /**
         * Utility method which returns the first grid cell element.
         * 
         * @param {Ext.panel.Table/String} panel The panel or a ComponentQuery matching a panel
         * 
         * @return {HTMLElement} The element of first cell of grid.
         */
        getFirstCell : function(panel) {
            panel = this.normalizeComponent(panel);
            return this.getCell(panel, 0, 0);
        },

        /**
         * Utility method which returns a grid row element.
         * 
         * @param {Ext.panel.Table/String} panel The panel or a ComponentQuery matching a panel
         * @param {Int} index The row index
         */
        getRow : function(grid, index) {
            grid = this.normalizeComponent(grid);
            var Ext = this.global.Ext;
            return Ext.get(grid.getView().getNode(index));
        },

        /**
         * Utility method which returns the cell at the supplied row and col position.
         * 
         * @param {Ext.panel.Table/String} panel The panel or a ComponentQuery matching a panel
         * @param {Int} row The row index
         * @param {Int} column The column index
         * 
         * @return {HTMLElement} The element of the grid cell at specified position.
         */
        getCell : function(grid, row, col) {
            grid = this.normalizeComponent(grid);
            return grid.getView().getCellByPosition({ row : row, column : col });
        },

        /**
         * Utility method which returns the last cell for the supplied row.
         * 
         * @param {Ext.panel.Table/String} panel The panel or a ComponentQuery matching a panel
         * @param {Int} row The row index
         * 
         * @return {HTMLElement} The element of the grid cell at specified position.
         */
        getLastCellInRow : function(grid, row) {
            grid = this.normalizeComponent(grid);
            return grid.getView().getCellByPosition({ row : row, column : grid.headerCt.getColumnCount() - 1});
        },

        /**
         * This assertion passes if the passed string is found in the passed grid's cell element.
         * 
         * @param {Ext.panel.Table/String} panel The panel or a ComponentQuery matching a panel
         * @param {Int} row The row index
         * @param {Int} column The column index
         * @param {String/RegExp} string The string to find or RegExp to match
         * @param {Description} description The description for the assertion
         */
        matchGridCellContent : function(grid, rowIndex, colIndex, string, description) {
            grid = this.normalizeComponent(grid);
            
            var view = grid.getView(),
                cell = view.getCellByPosition({ row : rowIndex, column : colIndex }).child('div');

            var isRegExp    = this.typeOf(string) == 'RegExp';
            var content     = cell.dom.innerHTML;
                
            if (isRegExp && string.test(content) || content.match(string)) {
                this.pass(description);
            } else {
                this.fail(description, {
                    assertionName   : 'matchGridCellContent',
                    
                    got         : cell.dom.innerHTML,
                    gotDesc     : 'Cell content',
                    
                    need        : string,
                    needDesc    : 'String matching',
                    
                    annotation  : 'Row index: ' + rowIndex + ', column index: ' + colIndex
                });
            }
        }
    }
});
