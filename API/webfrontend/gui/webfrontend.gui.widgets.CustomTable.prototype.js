function getInitiallyHiddenColumns anonymous(value) {
    if (this.$$runtime_initiallyHiddenColumns !== undefined) return this.$$runtime_initiallyHiddenColumns;
    if (this.$$user_initiallyHiddenColumns !== undefined) return this.$$user_initiallyHiddenColumns;
    else return this.$$init_initiallyHiddenColumns;
}

function setInitiallyHiddenColumns anonymous() {
    this.setInitiallyHiddenColumns.$$install && this.setInitiallyHiddenColumns.$$install.call(this);
    return this.setInitiallyHiddenColumns.apply(this, arguments);
}

function resetInitiallyHiddenColumns() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeInitiallyHiddenColumns() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeInitiallyHiddenColumns() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSelectionModel anonymous(value) {
    if (this.$$runtime_selectionModel !== undefined) return this.$$runtime_selectionModel;
    if (this.$$user_selectionModel !== undefined) return this.$$user_selectionModel;
    else throw new Error("Property selectionModel of an instance of qx.ui.table.Table is not (yet) ready!");
}

function setSelectionModel anonymous(value) {
    this.$$setSelectionModelImpl.apply(this, arguments);
    return value;
}

function resetSelectionModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initSelectionModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeSelectionModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSelectionModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getTableModel anonymous(value) {
    if (this.$$runtime_tableModel !== undefined) return this.$$runtime_tableModel;
    if (this.$$user_tableModel !== undefined) return this.$$user_tableModel;
    else throw new Error("Property tableModel of an instance of qx.ui.table.Table is not (yet) ready!");
}

function setTableModel anonymous(value) {
    this.$$setTableModelImpl.apply(this, arguments);
    return value;
}

function resetTableModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initTableModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeTableModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTableModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getRowHeight anonymous(value) {
    if (this.$$runtime_rowHeight !== undefined) return this.$$runtime_rowHeight;
    if (this.$$user_rowHeight !== undefined) return this.$$user_rowHeight;
    else if (this.$$theme_rowHeight !== undefined) return this.$$theme_rowHeight;
    else return this.$$init_rowHeight;
}

function setRowHeight anonymous(value) {
    this.$$setRowHeightImpl.apply(this, arguments);
    return value;
}

function resetRowHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initRowHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeRowHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRowHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedRowHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedRowHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getForceLineHeight anonymous() {
    this.getForceLineHeight.$$install && this.getForceLineHeight.$$install();
    return this.getForceLineHeight.apply(this, arguments);
}

function setForceLineHeight anonymous() {
    this.setForceLineHeight.$$install && this.setForceLineHeight.$$install.call(this);
    return this.setForceLineHeight.apply(this, arguments);
}

function resetForceLineHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeForceLineHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeForceLineHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleForceLineHeight anonymous() {
    return this.setForceLineHeight(!this.getForceLineHeight())
}

function isForceLineHeight anonymous() {
    return this.getForceLineHeight()
}

function getHeaderCellsVisible anonymous() {
    this.getHeaderCellsVisible.$$install && this.getHeaderCellsVisible.$$install();
    return this.getHeaderCellsVisible.apply(this, arguments);
}

function setHeaderCellsVisible anonymous() {
    this.setHeaderCellsVisible.$$install && this.setHeaderCellsVisible.$$install.call(this);
    return this.setHeaderCellsVisible.apply(this, arguments);
}

function resetHeaderCellsVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initHeaderCellsVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeHeaderCellsVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeHeaderCellsVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedHeaderCellsVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedHeaderCellsVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function toggleHeaderCellsVisible anonymous() {
    return this.setHeaderCellsVisible(!this.getHeaderCellsVisible())
}

function isHeaderCellsVisible anonymous() {
    return this.getHeaderCellsVisible()
}

function getHeaderCellHeight anonymous(value) {
    if (this.$$runtime_headerCellHeight !== undefined) return this.$$runtime_headerCellHeight;
    if (this.$$user_headerCellHeight !== undefined) return this.$$user_headerCellHeight;
    else if (this.$$theme_headerCellHeight !== undefined) return this.$$theme_headerCellHeight;
    else return this.$$init_headerCellHeight;
}

function setHeaderCellHeight anonymous(value) {
    this.$$setHeaderCellHeightImpl.apply(this, arguments);
    return value;
}

function resetHeaderCellHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initHeaderCellHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeHeaderCellHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeHeaderCellHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedHeaderCellHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedHeaderCellHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function getStatusBarVisible anonymous(value) {
    if (this.$$runtime_statusBarVisible !== undefined) return this.$$runtime_statusBarVisible;
    if (this.$$user_statusBarVisible !== undefined) return this.$$user_statusBarVisible;
    else return this.$$init_statusBarVisible;
}

function setStatusBarVisible anonymous(value) {
    this.$$setStatusBarVisibleImpl.apply(this, arguments);
    return value;
}

function resetStatusBarVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initStatusBarVisible anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_statusBarVisible !== undefined) {
        old = this.$$runtime_statusBarVisible;
    } else if (this.$$user_statusBarVisible !== undefined) {
        old = this.$$user_statusBarVisible;
    } else if (this.$$useinit_statusBarVisible) {
        old = this.$$init_statusBarVisible;
    }
    var computed;
    if (this.$$runtime_statusBarVisible !== undefined) {
        computed = this.$$runtime_statusBarVisible;
    } else if (this.$$user_statusBarVisible !== undefined) {
        computed = this.$$user_statusBarVisible;
    } else if (this.$$useinit_statusBarVisible) {
        computed = this.$$init_statusBarVisible;
    } else {
        computed = this.$$init_statusBarVisible;
        this.$$useinit_statusBarVisible = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyStatusBarVisible(computed, old, "statusBarVisible", "init");

    function fire() {
        var tracker = {};
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}

function setRuntimeStatusBarVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeStatusBarVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleStatusBarVisible anonymous() {
    return this.setStatusBarVisible(!this.getStatusBarVisible())
}

function isStatusBarVisible anonymous() {
    return this.getStatusBarVisible()
}

function getAdditionalStatusBarText anonymous() {
    this.getAdditionalStatusBarText.$$install && this.getAdditionalStatusBarText.$$install();
    return this.getAdditionalStatusBarText.apply(this, arguments);
}

function setAdditionalStatusBarText anonymous() {
    this.setAdditionalStatusBarText.$$install && this.setAdditionalStatusBarText.$$install.call(this);
    return this.setAdditionalStatusBarText.apply(this, arguments);
}

function resetAdditionalStatusBarText() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAdditionalStatusBarText() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAdditionalStatusBarText() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAdditionalStatusBarText() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getColumnVisibilityButtonVisible anonymous(value) {
    if (this.$$runtime_columnVisibilityButtonVisible !== undefined) return this.$$runtime_columnVisibilityButtonVisible;
    if (this.$$user_columnVisibilityButtonVisible !== undefined) return this.$$user_columnVisibilityButtonVisible;
    else if (this.$$theme_columnVisibilityButtonVisible !== undefined) return this.$$theme_columnVisibilityButtonVisible;
    else return this.$$init_columnVisibilityButtonVisible;
}

function setColumnVisibilityButtonVisible anonymous(value) {
    this.$$setColumnVisibilityButtonVisibleImpl.apply(this, arguments);
    return value;
}

function resetColumnVisibilityButtonVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initColumnVisibilityButtonVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeColumnVisibilityButtonVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeColumnVisibilityButtonVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setThemedColumnVisibilityButtonVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, f, arguments)
}

function resetThemedColumnVisibilityButtonVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, v)
}

function toggleColumnVisibilityButtonVisible anonymous() {
    return this.setColumnVisibilityButtonVisible(!this.getColumnVisibilityButtonVisible())
}

function isColumnVisibilityButtonVisible anonymous() {
    return this.getColumnVisibilityButtonVisible()
}

function getMetaColumnCounts anonymous() {
    this.getMetaColumnCounts.$$install && this.getMetaColumnCounts.$$install();
    return this.getMetaColumnCounts.apply(this, arguments);
}

function setMetaColumnCounts anonymous(value) {
    this.$$setMetaColumnCountsImpl.apply(this, arguments);
    return value;
}

function resetMetaColumnCounts() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initMetaColumnCounts() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeMetaColumnCounts() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeMetaColumnCounts() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getFocusCellOnPointerMove anonymous() {
    this.getFocusCellOnPointerMove.$$install && this.getFocusCellOnPointerMove.$$install();
    return this.getFocusCellOnPointerMove.apply(this, arguments);
}

function setFocusCellOnPointerMove anonymous() {
    this.setFocusCellOnPointerMove.$$install && this.setFocusCellOnPointerMove.$$install.call(this);
    return this.setFocusCellOnPointerMove.apply(this, arguments);
}

function resetFocusCellOnPointerMove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initFocusCellOnPointerMove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeFocusCellOnPointerMove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeFocusCellOnPointerMove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleFocusCellOnPointerMove anonymous() {
    return this.setFocusCellOnPointerMove(!this.getFocusCellOnPointerMove())
}

function isFocusCellOnPointerMove anonymous() {
    return this.getFocusCellOnPointerMove()
}

function getRowFocusChangeModifiesSelection anonymous() {
    this.getRowFocusChangeModifiesSelection.$$install && this.getRowFocusChangeModifiesSelection.$$install();
    return this.getRowFocusChangeModifiesSelection.apply(this, arguments);
}

function setRowFocusChangeModifiesSelection anonymous() {
    this.setRowFocusChangeModifiesSelection.$$install && this.setRowFocusChangeModifiesSelection.$$install.call(this);
    return this.setRowFocusChangeModifiesSelection.apply(this, arguments);
}

function resetRowFocusChangeModifiesSelection() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeRowFocusChangeModifiesSelection() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeRowFocusChangeModifiesSelection() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleRowFocusChangeModifiesSelection anonymous() {
    return this.setRowFocusChangeModifiesSelection(!this.getRowFocusChangeModifiesSelection())
}

function isRowFocusChangeModifiesSelection anonymous() {
    return this.getRowFocusChangeModifiesSelection()
}

function getShowCellFocusIndicator anonymous() {
    this.getShowCellFocusIndicator.$$install && this.getShowCellFocusIndicator.$$install();
    return this.getShowCellFocusIndicator.apply(this, arguments);
}

function setShowCellFocusIndicator anonymous() {
    this.setShowCellFocusIndicator.$$install && this.setShowCellFocusIndicator.$$install.call(this);
    return this.setShowCellFocusIndicator.apply(this, arguments);
}

function resetShowCellFocusIndicator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initShowCellFocusIndicator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeShowCellFocusIndicator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeShowCellFocusIndicator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleShowCellFocusIndicator anonymous() {
    return this.setShowCellFocusIndicator(!this.getShowCellFocusIndicator())
}

function isShowCellFocusIndicator anonymous() {
    return this.getShowCellFocusIndicator()
}

function getContextMenuFromDataCellsOnly anonymous() {
    this.getContextMenuFromDataCellsOnly.$$install && this.getContextMenuFromDataCellsOnly.$$install();
    return this.getContextMenuFromDataCellsOnly.apply(this, arguments);
}

function setContextMenuFromDataCellsOnly anonymous() {
    this.setContextMenuFromDataCellsOnly.$$install && this.setContextMenuFromDataCellsOnly.$$install.call(this);
    return this.setContextMenuFromDataCellsOnly.apply(this, arguments);
}

function resetContextMenuFromDataCellsOnly() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initContextMenuFromDataCellsOnly() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeContextMenuFromDataCellsOnly() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeContextMenuFromDataCellsOnly() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleContextMenuFromDataCellsOnly anonymous() {
    return this.setContextMenuFromDataCellsOnly(!this.getContextMenuFromDataCellsOnly())
}

function isContextMenuFromDataCellsOnly anonymous() {
    return this.getContextMenuFromDataCellsOnly()
}

function getKeepFirstVisibleRowComplete anonymous() {
    this.getKeepFirstVisibleRowComplete.$$install && this.getKeepFirstVisibleRowComplete.$$install();
    return this.getKeepFirstVisibleRowComplete.apply(this, arguments);
}

function setKeepFirstVisibleRowComplete anonymous() {
    this.setKeepFirstVisibleRowComplete.$$install && this.setKeepFirstVisibleRowComplete.$$install.call(this);
    return this.setKeepFirstVisibleRowComplete.apply(this, arguments);
}

function resetKeepFirstVisibleRowComplete() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initKeepFirstVisibleRowComplete() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeKeepFirstVisibleRowComplete() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeKeepFirstVisibleRowComplete() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleKeepFirstVisibleRowComplete anonymous() {
    return this.setKeepFirstVisibleRowComplete(!this.getKeepFirstVisibleRowComplete())
}

function isKeepFirstVisibleRowComplete anonymous() {
    return this.getKeepFirstVisibleRowComplete()
}

function getAlwaysUpdateCells anonymous(value) {
    if (this.$$runtime_alwaysUpdateCells !== undefined) return this.$$runtime_alwaysUpdateCells;
    if (this.$$user_alwaysUpdateCells !== undefined) return this.$$user_alwaysUpdateCells;
    else return this.$$init_alwaysUpdateCells;
}

function setAlwaysUpdateCells anonymous() {
    this.setAlwaysUpdateCells.$$install && this.setAlwaysUpdateCells.$$install.call(this);
    return this.setAlwaysUpdateCells.apply(this, arguments);
}

function resetAlwaysUpdateCells() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeAlwaysUpdateCells() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAlwaysUpdateCells() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleAlwaysUpdateCells anonymous() {
    return this.setAlwaysUpdateCells(!this.getAlwaysUpdateCells())
}

function isAlwaysUpdateCells anonymous() {
    return this.getAlwaysUpdateCells()
}

function getResetSelectionOnHeaderTap anonymous() {
    this.getResetSelectionOnHeaderTap.$$install && this.getResetSelectionOnHeaderTap.$$install();
    return this.getResetSelectionOnHeaderTap.apply(this, arguments);
}

function setResetSelectionOnHeaderTap anonymous() {
    this.setResetSelectionOnHeaderTap.$$install && this.setResetSelectionOnHeaderTap.$$install.call(this);
    return this.setResetSelectionOnHeaderTap.apply(this, arguments);
}

function resetResetSelectionOnHeaderTap() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initResetSelectionOnHeaderTap() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeResetSelectionOnHeaderTap() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeResetSelectionOnHeaderTap() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleResetSelectionOnHeaderTap anonymous() {
    return this.setResetSelectionOnHeaderTap(!this.getResetSelectionOnHeaderTap())
}

function isResetSelectionOnHeaderTap anonymous() {
    return this.getResetSelectionOnHeaderTap()
}

function getResetSelectionOnTapBelowRows anonymous() {
    this.getResetSelectionOnTapBelowRows.$$install && this.getResetSelectionOnTapBelowRows.$$install();
    return this.getResetSelectionOnTapBelowRows.apply(this, arguments);
}

function setResetSelectionOnTapBelowRows anonymous() {
    this.setResetSelectionOnTapBelowRows.$$install && this.setResetSelectionOnTapBelowRows.$$install.call(this);
    return this.setResetSelectionOnTapBelowRows.apply(this, arguments);
}

function resetResetSelectionOnTapBelowRows() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initResetSelectionOnTapBelowRows() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeResetSelectionOnTapBelowRows() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeResetSelectionOnTapBelowRows() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleResetSelectionOnTapBelowRows anonymous() {
    return this.setResetSelectionOnTapBelowRows(!this.getResetSelectionOnTapBelowRows())
}

function isResetSelectionOnTapBelowRows anonymous() {
    return this.getResetSelectionOnTapBelowRows()
}

function getMinCellEditHeight anonymous() {
    this.getMinCellEditHeight.$$install && this.getMinCellEditHeight.$$install();
    return this.getMinCellEditHeight.apply(this, arguments);
}

function setMinCellEditHeight anonymous() {
    this.setMinCellEditHeight.$$install && this.setMinCellEditHeight.$$install.call(this);
    return this.setMinCellEditHeight.apply(this, arguments);
}

function resetMinCellEditHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initMinCellEditHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeMinCellEditHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeMinCellEditHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getDataRowRenderer anonymous() {
    this.getDataRowRenderer.$$install && this.getDataRowRenderer.$$install();
    return this.getDataRowRenderer.apply(this, arguments);
}

function setDataRowRenderer anonymous(value) {
    this.$$setDataRowRendererImpl.apply(this, arguments);
    return value;
}

function resetDataRowRenderer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initDataRowRenderer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeDataRowRenderer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDataRowRenderer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getModalCellEditorPreOpenFunction anonymous() {
    this.getModalCellEditorPreOpenFunction.$$install && this.getModalCellEditorPreOpenFunction.$$install();
    return this.getModalCellEditorPreOpenFunction.apply(this, arguments);
}

function setModalCellEditorPreOpenFunction anonymous() {
    this.setModalCellEditorPreOpenFunction.$$install && this.setModalCellEditorPreOpenFunction.$$install.call(this);
    return this.setModalCellEditorPreOpenFunction.apply(this, arguments);
}

function resetModalCellEditorPreOpenFunction() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeModalCellEditorPreOpenFunction() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeModalCellEditorPreOpenFunction() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getExcludeScrollerScrollbarsIfNotNeeded anonymous() {
    this.getExcludeScrollerScrollbarsIfNotNeeded.$$install && this.getExcludeScrollerScrollbarsIfNotNeeded.$$install();
    return this.getExcludeScrollerScrollbarsIfNotNeeded.apply(this, arguments);
}

function setExcludeScrollerScrollbarsIfNotNeeded anonymous() {
    this.setExcludeScrollerScrollbarsIfNotNeeded.$$install && this.setExcludeScrollerScrollbarsIfNotNeeded.$$install.call(this);
    return this.setExcludeScrollerScrollbarsIfNotNeeded.apply(this, arguments);
}

function resetExcludeScrollerScrollbarsIfNotNeeded() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeExcludeScrollerScrollbarsIfNotNeeded() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeExcludeScrollerScrollbarsIfNotNeeded() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleExcludeScrollerScrollbarsIfNotNeeded anonymous() {
    return this.setExcludeScrollerScrollbarsIfNotNeeded(!this.getExcludeScrollerScrollbarsIfNotNeeded())
}

function isExcludeScrollerScrollbarsIfNotNeeded anonymous() {
    return this.getExcludeScrollerScrollbarsIfNotNeeded()
}

function getNewColumnMenu anonymous(value) {
    if (this.$$runtime_newColumnMenu !== undefined) return this.$$runtime_newColumnMenu;
    if (this.$$user_newColumnMenu !== undefined) return this.$$user_newColumnMenu;
    else return this.$$init_newColumnMenu;
}

function setNewColumnMenu anonymous() {
    this.setNewColumnMenu.$$install && this.setNewColumnMenu.$$install.call(this);
    return this.setNewColumnMenu.apply(this, arguments);
}

function resetNewColumnMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeNewColumnMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeNewColumnMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getNewSelectionManager anonymous(value) {
    if (this.$$runtime_newSelectionManager !== undefined) return this.$$runtime_newSelectionManager;
    if (this.$$user_newSelectionManager !== undefined) return this.$$user_newSelectionManager;
    else return this.$$init_newSelectionManager;
}

function setNewSelectionManager anonymous() {
    this.setNewSelectionManager.$$install && this.setNewSelectionManager.$$install.call(this);
    return this.setNewSelectionManager.apply(this, arguments);
}

function resetNewSelectionManager() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeNewSelectionManager() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeNewSelectionManager() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getNewSelectionModel anonymous(value) {
    if (this.$$runtime_newSelectionModel !== undefined) return this.$$runtime_newSelectionModel;
    if (this.$$user_newSelectionModel !== undefined) return this.$$user_newSelectionModel;
    else return this.$$init_newSelectionModel;
}

function setNewSelectionModel anonymous() {
    this.setNewSelectionModel.$$install && this.setNewSelectionModel.$$install.call(this);
    return this.setNewSelectionModel.apply(this, arguments);
}

function resetNewSelectionModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeNewSelectionModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeNewSelectionModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getNewTableColumnModel anonymous(value) {
    if (this.$$runtime_newTableColumnModel !== undefined) return this.$$runtime_newTableColumnModel;
    if (this.$$user_newTableColumnModel !== undefined) return this.$$user_newTableColumnModel;
    else return this.$$init_newTableColumnModel;
}

function setNewTableColumnModel anonymous() {
    this.setNewTableColumnModel.$$install && this.setNewTableColumnModel.$$install.call(this);
    return this.setNewTableColumnModel.apply(this, arguments);
}

function resetNewTableColumnModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeNewTableColumnModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeNewTableColumnModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getNewTablePane anonymous(value) {
    if (this.$$runtime_newTablePane !== undefined) return this.$$runtime_newTablePane;
    if (this.$$user_newTablePane !== undefined) return this.$$user_newTablePane;
    else return this.$$init_newTablePane;
}

function setNewTablePane anonymous() {
    this.setNewTablePane.$$install && this.setNewTablePane.$$install.call(this);
    return this.setNewTablePane.apply(this, arguments);
}

function resetNewTablePane() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeNewTablePane() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeNewTablePane() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getNewTablePaneHeader anonymous(value) {
    if (this.$$runtime_newTablePaneHeader !== undefined) return this.$$runtime_newTablePaneHeader;
    if (this.$$user_newTablePaneHeader !== undefined) return this.$$user_newTablePaneHeader;
    else return this.$$init_newTablePaneHeader;
}

function setNewTablePaneHeader anonymous() {
    this.setNewTablePaneHeader.$$install && this.setNewTablePaneHeader.$$install.call(this);
    return this.setNewTablePaneHeader.apply(this, arguments);
}

function resetNewTablePaneHeader() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeNewTablePaneHeader() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeNewTablePaneHeader() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getNewTablePaneScroller anonymous(value) {
    if (this.$$runtime_newTablePaneScroller !== undefined) return this.$$runtime_newTablePaneScroller;
    if (this.$$user_newTablePaneScroller !== undefined) return this.$$user_newTablePaneScroller;
    else return this.$$init_newTablePaneScroller;
}

function setNewTablePaneScroller anonymous(value) {
    this.$$setNewTablePaneScrollerImpl.apply(this, arguments);
    return value;
}

function resetNewTablePaneScroller() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeNewTablePaneScroller() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeNewTablePaneScroller() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getNewTablePaneModel anonymous(value) {
    if (this.$$runtime_newTablePaneModel !== undefined) return this.$$runtime_newTablePaneModel;
    if (this.$$user_newTablePaneModel !== undefined) return this.$$user_newTablePaneModel;
    else return this.$$init_newTablePaneModel;
}

function setNewTablePaneModel anonymous() {
    this.setNewTablePaneModel.$$install && this.setNewTablePaneModel.$$install.call(this);
    return this.setNewTablePaneModel.apply(this, arguments);
}

function resetNewTablePaneModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeNewTablePaneModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeNewTablePaneModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _createChildControlImpl(n) {
    var t, r;
    switch (n) {
        case u:
            t = new qx.ui.basic.Label;
            t.set({
                allowGrowX: !0
            });
            this._add(t);
            break;
        case i:
            t = this.getNewColumnMenu()();
            t.set({
                focusable: !1
            });
            r = t.factory(lt, {
                table: this
            });
            r.addListener(v, this._initColumnMenu, this)
    }
    return t || qx.ui.core.Widget.prototype._createChildControlImpl.call(this, n)
}

function _applySelectionModel(n, t) {
    this.__Pv.setSelectionModel(n);
    t != null && t.removeListener(a, this._onSelectionChanged, this);
    n.addListener(a, this._onSelectionChanged, this)
}

function _applyRowHeight() {
    for (var t = this._getPaneScrollerArr(), n = 0; n < t.length; n++) t[n].updateVerScrollBarMaximum()
}

function _applyHeaderCellsVisible(n) {
    for (var i = this._getPaneScrollerArr(), t = 0; t < i.length; t++) n ? i[t]._showChildControl(k) : i[t]._excludeChildControl(k);
    this.getColumnVisibilityButtonVisible() && this._applyColumnVisibilityButtonVisible(n)
}

function _applyHeaderCellHeight(n) {
    for (var i = this._getPaneScrollerArr(), t = 0; t < i.length; t++) i[t].getHeader().setHeight(n)
}

function _applyMinCellEditHeight(n) {
    for (var i = this._getPaneScrollerArr(), t = 0; t < i.length; t++) i[t].setMinCellEditHeight(n)
}

function getEmptyTableModel() {
    return this.__PD || (this.__PD = new qx.ui.table.model.Simple, this.__PD.setColumns([]), this.__PD.setData([])), this.__PD
}

function _applyTableModel(n, t) {
    this.getTableColumnModel().init(n.getColumnCount(), this);
    t != null && (t.removeListener(b, this._onTableModelMetaDataChanged, this), t.removeListener(s, this._onTableModelDataChanged, this));
    n.addListener(b, this._onTableModelMetaDataChanged, this);
    n.addListener(s, this._onTableModelDataChanged, this);
    this._updateStatusBar();
    this._updateTableData(0, n.getRowCount(), 0, n.getColumnCount());
    this._onTableModelMetaDataChanged();
    t && n.init && typeof n.init == e && n.init(this)
}

function getTableColumnModel() {
    var n, r, i, t, u, f;
    if (!this.__PC)
        for (n = this.__PC = this.getNewTableColumnModel()(this), n.addListener(ti, this._onColVisibilityChanged, this), n.addListener(kt, this._onColWidthChanged, this), n.addListener(li, this._onColOrderChanged, this), r = this.getTableModel(), n.init(r.getColumnCount(), this), i = this._getPaneScrollerArr(), t = 0; t < i.length; t++) u = i[t], f = u.getTablePaneModel(), f.setTableColumnModel(n);
    return this.__PC
}

function _applyStatusBarVisible(n) {
    n ? this._showChildControl(u) : this._excludeChildControl(u);
    n && this._updateStatusBar()
}

function _applyAdditionalStatusBarText(n) {
    this.__Pz = n;
    this._updateStatusBar()
}

function _applyColumnVisibilityButtonVisible(n) {
    n ? this._showChildControl(i) : this._excludeChildControl(i)
}

function _applyMetaColumnCounts(n, t) {
    var c = n,
        f = this._getPaneScrollerArr(),
        s = {},
        p, u, a, w, l, v, y, h, o, b, r, e, k;
    if (n > t) {
        p = qx.event.Registration.getManager(f[0]);
        for (u in qx.ui.table.Table.__Py) s[u] = {}, s[u].capture = p.getListeners(f[0], u, !0), s[u].bubble = p.getListeners(f[0], u, !1)
    }
    for (this._cleanUpMetaColumns(c.length), a = 0, r = 0; r < f.length; r++) e = f[r], l = e.getTablePaneModel(), l.setFirstColumnX(a), l.setMaxColumnCount(c[r]), a += c[r];
    if (c.length > f.length)
        for (w = this.getTableColumnModel(), r = f.length; r < c.length; r++) {
            l = this.getNewTablePaneModel()(w);
            l.setFirstColumnX(a);
            l.setMaxColumnCount(c[r]);
            a += c[r];
            e = this.getNewTablePaneScroller()(this);
            e.setTablePaneModel(l);
            e.addListener(wt, this._onScrollY, this);
            for (u in qx.ui.table.Table.__Py) {
                if (!s[u]) break;
                if (s[u].capture && s[u].capture.length > 0)
                    for (v = s[u].capture, h = 0; h < v.length; h++) o = v[h].context, o ? o == f[0] && (o = e) : o = this, e.addListener(u, v[h].handler, o, !0);
                if (s[u].bubble && s[u].bubble.length > 0)
                    for (y = s[u].bubble, h = 0; h < y.length; h++) o = y[h].context, o ? o == f[0] && (o = e) : o = this, e.addListener(u, y[h].handler, o, !1)
            }
            b = r == c.length - 1 ? 1 : 0;
            this.__Pu.add(e, {
                flex: b
            });
            f = this._getPaneScrollerArr()
        }
    for (r = 0; r < f.length; r++) e = f[r], k = r == f.length - 1, e.getHeader().setHeight(this.getHeaderCellHeight()), e.setTopRightWidget(k ? this.getChildControl(i) : null);
    this.isColumnVisibilityButtonVisible() || this._excludeChildControl(i);
    this._updateScrollerWidths();
    this._updateScrollBarVisibility()
}

function _applyFocusCellOnPointerMove(n) {
    for (var i = this._getPaneScrollerArr(), t = 0; t < i.length; t++) i[t].setFocusCellOnPointerMove(n)
}

function _applyShowCellFocusIndicator(n) {
    for (var i = this._getPaneScrollerArr(), t = 0; t < i.length; t++) i[t].setShowCellFocusIndicator(n)
}

function _applyContextMenuFromDataCellsOnly(n) {
    for (var i = this._getPaneScrollerArr(), t = 0; t < i.length; t++) i[t].setContextMenuFromDataCellsOnly(n)
}

function _applyKeepFirstVisibleRowComplete() {
    for (var t = this._getPaneScrollerArr(), n = 0; n < t.length; n++) t[n].onKeepFirstVisibleRowCompleteChanged()
}

function _applyResetSelectionOnHeaderTap(n) {
    for (var i = this._getPaneScrollerArr(), t = 0; t < i.length; t++) i[t].setResetSelectionOnHeaderTap(n)
}

function _applyResetSelectionOnTapBelowRows(n) {
    for (var i = this._getPaneScrollerArr(), t = 0; t < i.length; t++) i[t].setResetSelectionOnTapBelowRows(n)
}

function getSelectionManager() {
    return this.__Pv
}

function _getPaneScrollerArr() {
    return this.__Pu.getChildren()
}

function getPaneScroller(n) {
    return this._getPaneScrollerArr()[n]
}

function _cleanUpMetaColumns(n) {
    var i = this._getPaneScrollerArr(),
        t;
    if (i != null)
        for (t = i.length - 1; t >= n; t--) i[t].destroy()
}

function _onChangeLocale() {
    this.updateContent();
    this._updateStatusBar()
}

function _onChangeTheme() {
    qx.ui.core.Widget.prototype._onChangeTheme.call(this);
    this.getDataRowRenderer().initThemeValues();
    this.updateContent();
    this._updateStatusBar()
}

function _onSelectionChanged() {
    for (var t = this._getPaneScrollerArr(), n = 0; n < t.length; n++) t[n].onSelectionChanged();
    this._updateStatusBar()
}

function _onTableModelMetaDataChanged() {
    for (var t = this._getPaneScrollerArr(), n = 0; n < t.length; n++) t[n].onTableModelMetaDataChanged();
    this._updateStatusBar()
}

function _onTableModelDataChanged(n) {
    var t = n.getData();
    this._updateTableData(t.firstRow, t.lastRow, t.firstColumn, t.lastColumn, t.removeStart, t.removeCount)
}

function _onContextMenuOpen() {}

function _updateTableData(n, t, i, r, u, f) {
    var s = this._getPaneScrollerArr(),
        e, o;
    for (f && (this.getSelectionModel().removeSelectionInterval(u, u + f - 1, !0), this.__Px >= u && this.__Px < u + f && this.setFocusedCell()), e = 0; e < s.length; e++) s[e].onTableModelDataChanged(n, t, i, r);
    o = this.getTableModel().getRowCount();
    o != this.__PA && (this.__PA = o, this._updateScrollBarVisibility(), this._updateStatusBar())
}

function _onScrollY(n) {
    var i, t;
    if (!this.__Pn) {
        for (this.__Pn = !0, i = this._getPaneScrollerArr(), t = 0; t < i.length; t++) i[t].setScrollY(n.getData());
        this.__Pn = !1
    }
}

function _onKeyPress(n) {
    qx.log.Logger.deprecatedMethodWarning(this._onKeyPress, d);
    qx.log.Logger.deprecateMethodOverriding(this, qx.ui.table.Table, g, d);
    this._onKeyDown(n)
}

function _onKeyDown(n) {
    var u, t;
    if (this.getEnabled()) {
        var u = this.__Px,
            i = !1,
            r = n.getKeyIdentifier();
        if (this.isEditing()) {
            if (n.getModifiers() == 0) switch (r) {
                case w:
                    this.stopEditing();
                    u = this.__Px;
                    this.moveFocusedCell(0, 1);
                    this.__Px != u && (i = this.startEditing());
                    break;
                case ut:
                    this.cancelEditing();
                    this.focus();
                    break;
                default:
                    i = !1
            }
        } else if (i = !0, n.isCtrlPressed()) switch (r) {
            case ft:
                t = this.getTableModel().getRowCount();
                t > 0 && this.getSelectionModel().setSelectionInterval(0, t - 1);
                break;
            default:
                i = !1
        } else switch (r) {
            case vi:
                this.__Pv.handleSelectKeyDown(this.__Px, n);
                break;
            case ni:
            case w:
                this.startEditing();
                i = !0;
                break;
            case gt:
                this.setFocusedCell(this.__Pw, 0, !0);
                break;
            case bt:
                t = this.getTableModel().getRowCount();
                this.setFocusedCell(this.__Pw, t - 1, !0);
                break;
            case ot:
                this.moveFocusedCell(-1, 0);
                break;
            case ai:
                this.moveFocusedCell(1, 0);
                break;
            case ht:
                this.moveFocusedCell(0, -1);
                break;
            case st:
                this.moveFocusedCell(0, 1);
                break;
            case o:
            case ei:
                var f = this.getPaneScroller(0),
                    s = f.getTablePane(),
                    h = this.getRowHeight(),
                    e = r == o ? -1 : 1;
                t = s.getVisibleRowCount() - 1;
                f.setScrollY(f.getScrollY() + e * t * h);
                this.moveFocusedCell(0, e * t);
                break;
            default:
                i = !1
        }
        u != this.__Px && this.getRowFocusChangeModifiesSelection() && this.__Pv.handleMoveKeyDown(this.__Px, n);
        i && (n.preventDefault(), n.stopPropagation())
    }
}

function _onFocusChanged() {
    for (var t = this._getPaneScrollerArr(), n = 0; n < t.length; n++) t[n].onFocusChanged()
}

function _onColVisibilityChanged(n) {
    for (var t, r = this._getPaneScrollerArr(), i = 0; i < r.length; i++) r[i].onColVisibilityChanged();
    t = n.getData();
    this.__PB != null && t.col != null && t.visible != null && this.__PB[t.col].setColumnVisible(t.visible);
    this._updateScrollerWidths();
    this._updateScrollBarVisibility()
}

function _onColWidthChanged(n) {
    for (var i, r = this._getPaneScrollerArr(), t = 0; t < r.length; t++) i = n.getData(), r[t].setColumnWidth(i.col, i.newWidth);
    this._updateScrollerWidths();
    this._updateScrollBarVisibility()
}

function _onColOrderChanged() {
    for (var t = this._getPaneScrollerArr(), n = 0; n < t.length; n++) t[n].onColOrderChanged();
    this._updateScrollerWidths();
    this._updateScrollBarVisibility()
}

function getTablePaneScrollerAtPageX(n) {
    var t = this._getMetaColumnAtPageX(n);
    return t != -1 ? this.getPaneScroller(t) : null
}

function setFocusedCell(n, t, i) {
    var u, r;
    if (!this.isEditing() && (n != this.__Pw || t != this.__Px)) {
        for (n === null && (n = 0), this.__Pw = n, this.__Px = t, u = this._getPaneScrollerArr(), r = 0; r < u.length; r++) u[r].setFocusedCell(n, t);
        n != null && i && this.scrollCellVisible(n, t)
    }
}

function resetSelection() {
    this.getSelectionModel().resetSelection()
}

function resetCellFocus() {
    this.setFocusedCell(null, null, !1)
}

function getFocusedColumn() {
    return this.__Pw
}

function getFocusedRow() {
    return this.__Px
}

function highlightFocusedRow(n) {
    this.getDataRowRenderer().setHighlightFocusRow(n)
}

function clearFocusedRowHighlight(n) {
    var i, r, t;
    if (!n || (i = n.getRelatedTarget(), !(i instanceof qx.ui.table.pane.Pane) && !(i instanceof qx.ui.table.pane.FocusIndicator)))
        for (this.resetCellFocus(), r = this._getPaneScrollerArr(), t = 0; t < r.length; t++) r[t].onFocusChanged()
}

function moveFocusedCell(n, t) {
    var i = this.__Pw,
        r = this.__Px,
        e;
    if (i != null && r != null) {
        if (n != 0) {
            var u = this.getTableColumnModel(),
                f = u.getVisibleX(i),
                o = u.getVisibleColumnCount();
            f = qx.lang.Number.limit(f + n, 0, o - 1);
            i = u.getVisibleColumnAtX(f)
        }
        t != 0 && (e = this.getTableModel(), r = qx.lang.Number.limit(r + t, 0, e.getRowCount() - 1));
        this.setFocusedCell(i, r, !0)
    }
}

function scrollCellVisible(n, t) {
    var r = this.getContentElement().getDomElement();
    r || this.addListenerOnce(v, function() {
        this.scrollCellVisible(n, t)
    }, this);
    var u = this.getTableColumnModel(),
        f = u.getVisibleX(n),
        i = this._getMetaColumnAtColumnX(f);
    i != -1 && this.getPaneScroller(i).scrollCellVisible(n, t)
}

function isEditing() {
    if (this.__Pw != null) {
        var n = this.getTableColumnModel().getVisibleX(this.__Pw),
            t = this._getMetaColumnAtColumnX(n);
        return this.getPaneScroller(t).isEditing()
    }
    return !1
}

function startEditing() {
    if (this.__Pw != null) {
        var n = this.getTableColumnModel().getVisibleX(this.__Pw),
            t = this._getMetaColumnAtColumnX(n);
        return this.getPaneScroller(t).startEditing()
    }
    return !1
}

function stopEditing() {
    if (this.__Pw != null) {
        var n = this.getTableColumnModel().getVisibleX(this.__Pw),
            t = this._getMetaColumnAtColumnX(n);
        this.getPaneScroller(t).stopEditing()
    }
}

function cancelEditing() {
    if (this.__Pw != null) {
        var n = this.getTableColumnModel().getVisibleX(this.__Pw),
            t = this._getMetaColumnAtColumnX(n);
        this.getPaneScroller(t).cancelEditing()
    }
}

function updateContent() {
    for (var t = this._getPaneScrollerArr(), n = 0; n < t.length; n++) t[n].getTablePane().updateContent(!0)
}

function blockHeaderElements() {
    for (var t = this._getPaneScrollerArr(), n = 0; n < t.length; n++) t[n].getHeader().getBlocker().blockContent(20);
    this.getChildControl(i).getBlocker().blockContent(20)
}

function unblockHeaderElements() {
    for (var t = this._getPaneScrollerArr(), n = 0; n < t.length; n++) t[n].getHeader().getBlocker().unblock();
    this.getChildControl(i).getBlocker().unblock()
}

function _getMetaColumnAtPageX(n) {
    for (var i, r = this._getPaneScrollerArr(), t = 0; t < r.length; t++)
        if (i = r[t].getContentLocation(), n >= i.left && n <= i.right) return t;
    return -1
}

function _getMetaColumnAtColumnX(n) {
    for (var i, r = this.getMetaColumnCounts(), u = 0, t = 0; t < r.length; t++)
        if (i = r[t], u += i, i == -1 || n < u) return t;
    return -1
}

function _updateStatusBar() {
    var r = this.getTableModel(),
        i, n, t;
    this.getStatusBarVisible() && (i = this.getSelectionModel().getSelectedCount(), n = r.getRowCount(), n >= 0 && (t = i == 0 ? this.trn(ui, ri, n, n) : this.trn(dt, oi, n, i, n)), this.__Pz && (t ? t += this.__Pz : t = this.__Pz), t && this.getChildControl(u).setValue(t))
}

function _updateScrollerWidths() {
    for (var i, r, u, t = this._getPaneScrollerArr(), n = 0; n < t.length; n++) i = n == t.length - 1, r = t[n].getTablePaneModel().getTotalWidth(), t[n].setPaneWidth(r), u = i ? 1 : 0, t[n].setLayoutProperties({
        flex: u
    })
}

function _updateScrollBarVisibility() {
    var i, e, n;
    if (this.getBounds()) {
        var o = qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR,
            s = qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR,
            t = this._getPaneScrollerArr(),
            r = !1,
            u = !1,
            f;
        if (f = this.getExcludeScrollerScrollbarsIfNotNeeded(), !f)
            for (n = 0; n < t.length; n++) i = n == t.length - 1, e = t[n].getNeededScrollBars(r, !i), e & o && (r = !0), i && e & s && (u = !0);
        for (n = 0; n < t.length; n++) i = n == t.length - 1, f ? (r = !!(t[n].getNeededScrollBars(!1, !i) & o), t[n].setHorizontalScrollBarVisible(r || null)) : t[n].setHorizontalScrollBarVisible(r), i && (u = !!(t[n].getNeededScrollBars(!1, !1) & s), this.__PE == null && (this.__PE = t[n].getVerticalScrollBarVisible(), this.__eu = qx.event.Timer.once(function() {
            this.__PE = null;
            this.__eu = null
        }, this, 0))), t[n].setVerticalScrollBarVisible(i && u), i && u != this.__PE && this.fireDataEvent(it, u)
    }
}

function _initColumnMenu() {
    var e = this.getTableModel(),
        s = this.getTableColumnModel(),
        t = this.getChildControl(i),
        f, r, n, o, u;
    for (t.empty(), f = t.getMenu(), r = {
            table: this,
            menu: f,
            columnButton: t
        }, this.fireDataEvent(ii, r), this.__PB = {}, n = 0, o = e.getColumnCount(); n < o; n++) u = t.factory(ct, {
        text: e.getColumnName(n),
        column: n,
        bVisible: s.isColumnVisible(n)
    }), qx.core.Assert.assertInterface(u, qx.ui.table.IColumnMenuItem), u.addListener(yt, this._createColumnVisibilityCheckBoxHandler(n), this), this.__PB[n] = u;
    r = {
        table: this,
        menu: f,
        columnButton: t
    };
    this.fireDataEvent(tt, r)
}

function _createColumnVisibilityCheckBoxHandler(n) {
    return function(t) {
        var i = this.getTableColumnModel();
        i.setColumnVisible(n, t.getData())
    }
}

function setColumnWidth(n, t) {
    this.getTableColumnModel().setColumnWidth(n, t)
}

function _onResize() {
    this.fireEvent(ci);
    this._updateScrollerWidths();
    this._updateScrollBarVisibility()
}

function addListener(n, t, i, r) {
    var e, u, f;
    if (this.self(arguments).__Py[n]) {
        for (e = [n], u = 0, f = this._getPaneScrollerArr(); u < f.length; u++) e.push(f[u].addListener.apply(f[u], arguments));
        return e.join(p)
    }
    return qx.ui.core.Widget.prototype.addListener.call(this, n, t, i, r)
}

function removeListener(n, t, i, r) {
    if (this.self(arguments).__Py[n])
        for (var u = 0, f = this._getPaneScrollerArr(); u < f.length; u++) f[u].removeListener.apply(f[u], arguments);
    else qx.ui.core.Widget.prototype.removeListener.call(this, n, t, i, r)
}

function removeListenerById(n) {
    var u = n.split(p),
        f = u.shift(),
        i, t, r;
    if (this.self(arguments).__Py[f]) {
        for (i = !0, t = 0, r = this._getPaneScrollerArr(); t < r.length; t++) i = r[t].removeListenerById.call(r[t], u[t]) && i;
        return i
    }
    return qx.ui.core.Widget.prototype.removeListenerById.call(this, n)
}

function destroy() {
    this.getChildControl(i).getMenu().destroy();
    qx.ui.core.Widget.prototype.destroy.call(this)
}

function getDragScrollThresholdX anonymous() {
    this.getDragScrollThresholdX.$$install && this.getDragScrollThresholdX.$$install();
    return this.getDragScrollThresholdX.apply(this, arguments);
}

function setDragScrollThresholdX anonymous() {
    this.setDragScrollThresholdX.$$install && this.setDragScrollThresholdX.$$install.call(this);
    return this.setDragScrollThresholdX.apply(this, arguments);
}

function resetDragScrollThresholdX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeDragScrollThresholdX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDragScrollThresholdX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getDragScrollThresholdY anonymous() {
    this.getDragScrollThresholdY.$$install && this.getDragScrollThresholdY.$$install();
    return this.getDragScrollThresholdY.apply(this, arguments);
}

function setDragScrollThresholdY anonymous() {
    this.setDragScrollThresholdY.$$install && this.setDragScrollThresholdY.$$install.call(this);
    return this.setDragScrollThresholdY.apply(this, arguments);
}

function resetDragScrollThresholdY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeDragScrollThresholdY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDragScrollThresholdY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getDragScrollSlowDownFactor anonymous() {
    this.getDragScrollSlowDownFactor.$$install && this.getDragScrollSlowDownFactor.$$install();
    return this.getDragScrollSlowDownFactor.apply(this, arguments);
}

function setDragScrollSlowDownFactor anonymous() {
    this.setDragScrollSlowDownFactor.$$install && this.setDragScrollSlowDownFactor.$$install.call(this);
    return this.setDragScrollSlowDownFactor.apply(this, arguments);
}

function resetDragScrollSlowDownFactor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeDragScrollSlowDownFactor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDragScrollSlowDownFactor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _findScrollableParent(n) {
    var t = n;
    if (t === null) return null;
    while (t.getLayoutParent())
        if (t = t.getLayoutParent(), this._isScrollable(t)) return t;
    return null
}

function _isScrollable(n) {
    return qx.Class.hasMixin(n.constructor, qx.ui.core.scroll.MScrollBarFactory)
}

function _getBounds(n) {
    var t = n.getContentLocation();
    return n.getScrollAreaContainer && (t = n.getScrollAreaContainer().getContentLocation()), t
}

function _getEdgeType(n, i, e) {
    return n.left * -1 <= i && n.left < 0 ? u : n.top * -1 <= e && n.top < 0 ? r : n.right <= i && n.right > 0 ? f : n.bottom <= e && n.bottom > 0 ? t : null
}

function _getAxis(t) {
    if (this.__rb.indexOf(t) !== -1) return n;
    if (this.__rc.indexOf(t) !== -1) return v;
    throw new Error(a + t + s);
}

function _getThresholdByEdgeType(n) {
    return this.__rb.indexOf(n) !== -1 ? this.getDragScrollThresholdX() : this.__rc.indexOf(n) !== -1 ? this.getDragScrollThresholdY() : void 0
}

function _isScrollbarVisible(n, t) {
    return n && n._isChildControlVisible ? n._isChildControlVisible(i + t) : !1
}

function _isScrollbarExceedingMaxPos(n, t, i) {
    var r = 0;
    return n ? (r = n.getPosition() + i, r > n.getMaximum() || r < 0) : !0
}

function _calculateThresholdExceedance(n, t) {
    var i = t - Math.abs(n);
    return n < 0 ? i * -1 : i
}

function _calculateScrollAmount(n, t) {
    return Math.floor(n / 100 * t * this.getDragScrollSlowDownFactor())
}

function _scrollBy(t, r, u) {
    var f = t.getChildControl(i + r, !0);
    if (f) {
        var e = f.getBounds(),
            s = r === n ? e.width : e.height,
            o = this._calculateScrollAmount(s, u);
        this._isScrollbarExceedingMaxPos(f, r, o) && this.__rd.stop();
        f.scrollBy(o)
    }
}

function updateLastMouseOverColumn() {
    var t, i, r;
    this.__QH != null && (t = this.__QN(this.__QH.left, this.__QH.top), t && t[0] >= 0 ? (i = t[0], r = t[1], this.fireDataEvent(n, {
        newRow: i,
        newColumn: r,
        oldRow: -1,
        oldColumn: -1
    }), this.__QI = {
        oldRow: i,
        oldColumn: r
    }) : (this.__QI = null, this.__QH = null))
}

function initStatusBarVisible anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_statusBarVisible !== undefined) {
        old = this.$$runtime_statusBarVisible;
    } else if (this.$$user_statusBarVisible !== undefined) {
        old = this.$$user_statusBarVisible;
    } else if (this.$$useinit_statusBarVisible) {
        old = this.$$init_statusBarVisible;
    }
    var computed;
    if (this.$$runtime_statusBarVisible !== undefined) {
        computed = this.$$runtime_statusBarVisible;
    } else if (this.$$user_statusBarVisible !== undefined) {
        computed = this.$$user_statusBarVisible;
    } else if (this.$$useinit_statusBarVisible) {
        computed = this.$$init_statusBarVisible;
    } else {
        computed = this.$$init_statusBarVisible;
        this.$$useinit_statusBarVisible = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyStatusBarVisible(computed, old, "statusBarVisible", "init");

    function fire() {
        var tracker = {};
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}