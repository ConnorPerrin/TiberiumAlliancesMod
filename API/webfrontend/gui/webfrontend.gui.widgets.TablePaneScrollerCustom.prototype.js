function getHorizontalScrollBarVisible anonymous() {
    this.getHorizontalScrollBarVisible.$$install && this.getHorizontalScrollBarVisible.$$install();
    return this.getHorizontalScrollBarVisible.apply(this, arguments);
}

function setHorizontalScrollBarVisible anonymous() {
    this.setHorizontalScrollBarVisible.$$install && this.setHorizontalScrollBarVisible.$$install.call(this);
    return this.setHorizontalScrollBarVisible.apply(this, arguments);
}

function resetHorizontalScrollBarVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initHorizontalScrollBarVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeHorizontalScrollBarVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeHorizontalScrollBarVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleHorizontalScrollBarVisible anonymous() {
    return this.setHorizontalScrollBarVisible(!this.getHorizontalScrollBarVisible())
}

function isHorizontalScrollBarVisible anonymous() {
    return this.getHorizontalScrollBarVisible()
}

function getVerticalScrollBarVisible anonymous(value) {
    if (this.$$runtime_verticalScrollBarVisible !== undefined) return this.$$runtime_verticalScrollBarVisible;
    if (this.$$user_verticalScrollBarVisible !== undefined) return this.$$user_verticalScrollBarVisible;
    else return this.$$init_verticalScrollBarVisible;
}

function setVerticalScrollBarVisible anonymous() {
    this.setVerticalScrollBarVisible.$$install && this.setVerticalScrollBarVisible.$$install.call(this);
    return this.setVerticalScrollBarVisible.apply(this, arguments);
}

function resetVerticalScrollBarVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initVerticalScrollBarVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeVerticalScrollBarVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeVerticalScrollBarVisible() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleVerticalScrollBarVisible anonymous() {
    return this.setVerticalScrollBarVisible(!this.getVerticalScrollBarVisible())
}

function isVerticalScrollBarVisible anonymous() {
    return this.getVerticalScrollBarVisible()
}

function getTablePaneModel anonymous(value) {
    if (this.$$runtime_tablePaneModel !== undefined) return this.$$runtime_tablePaneModel;
    if (this.$$user_tablePaneModel !== undefined) return this.$$user_tablePaneModel;
    else throw new Error("Property tablePaneModel of an instance of qx.ui.table.pane.Scroller is not (yet) ready!");
}

function setTablePaneModel anonymous(value) {
    this.$$setTablePaneModelImpl.apply(this, arguments);
    return value;
}

function resetTablePaneModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initTablePaneModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeTablePaneModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTablePaneModel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getLiveResize anonymous() {
    this.getLiveResize.$$install && this.getLiveResize.$$install();
    return this.getLiveResize.apply(this, arguments);
}

function setLiveResize anonymous() {
    this.setLiveResize.$$install && this.setLiveResize.$$install.call(this);
    return this.setLiveResize.apply(this, arguments);
}

function resetLiveResize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeLiveResize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeLiveResize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleLiveResize anonymous() {
    return this.setLiveResize(!this.getLiveResize())
}

function isLiveResize anonymous() {
    return this.getLiveResize()
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

function getSelectBeforeFocus anonymous() {
    this.getSelectBeforeFocus.$$install && this.getSelectBeforeFocus.$$install();
    return this.getSelectBeforeFocus.apply(this, arguments);
}

function setSelectBeforeFocus anonymous() {
    this.setSelectBeforeFocus.$$install && this.setSelectBeforeFocus.$$install.call(this);
    return this.setSelectBeforeFocus.apply(this, arguments);
}

function resetSelectBeforeFocus() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeSelectBeforeFocus() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSelectBeforeFocus() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleSelectBeforeFocus anonymous() {
    return this.setSelectBeforeFocus(!this.getSelectBeforeFocus())
}

function isSelectBeforeFocus anonymous() {
    return this.getSelectBeforeFocus()
}

function getShowCellFocusIndicator anonymous(value) {
    if (this.$$runtime_showCellFocusIndicator !== undefined) return this.$$runtime_showCellFocusIndicator;
    if (this.$$user_showCellFocusIndicator !== undefined) return this.$$user_showCellFocusIndicator;
    else return this.$$init_showCellFocusIndicator;
}

function setShowCellFocusIndicator anonymous() {
    this.setShowCellFocusIndicator.$$install && this.setShowCellFocusIndicator.$$install.call(this);
    return this.setShowCellFocusIndicator.apply(this, arguments);
}

function resetShowCellFocusIndicator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initShowCellFocusIndicator anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showCellFocusIndicator !== undefined) {
        old = this.$$runtime_showCellFocusIndicator;
    } else if (this.$$user_showCellFocusIndicator !== undefined) {
        old = this.$$user_showCellFocusIndicator;
    } else if (this.$$useinit_showCellFocusIndicator) {
        old = this.$$init_showCellFocusIndicator;
    }
    var computed;
    if (this.$$runtime_showCellFocusIndicator !== undefined) {
        computed = this.$$runtime_showCellFocusIndicator;
    } else if (this.$$user_showCellFocusIndicator !== undefined) {
        computed = this.$$user_showCellFocusIndicator;
    } else if (this.$$useinit_showCellFocusIndicator) {
        computed = this.$$init_showCellFocusIndicator;
    } else {
        computed = this.$$init_showCellFocusIndicator;
        this.$$useinit_showCellFocusIndicator = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyShowCellFocusIndicator(computed, old, "showCellFocusIndicator", "init");

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

function getScrollTimeout anonymous() {
    this.getScrollTimeout.$$install && this.getScrollTimeout.$$install();
    return this.getScrollTimeout.apply(this, arguments);
}

function setScrollTimeout anonymous() {
    this.setScrollTimeout.$$install && this.setScrollTimeout.$$install.call(this);
    return this.setScrollTimeout.apply(this, arguments);
}

function resetScrollTimeout() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initScrollTimeout anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_scrollTimeout !== undefined) {
        old = this.$$runtime_scrollTimeout;
    } else if (this.$$user_scrollTimeout !== undefined) {
        old = this.$$user_scrollTimeout;
    } else if (this.$$useinit_scrollTimeout) {
        old = this.$$init_scrollTimeout;
    }
    var computed;
    if (this.$$runtime_scrollTimeout !== undefined) {
        computed = this.$$runtime_scrollTimeout;
    } else if (this.$$user_scrollTimeout !== undefined) {
        computed = this.$$user_scrollTimeout;
    } else if (this.$$useinit_scrollTimeout) {
        computed = this.$$init_scrollTimeout;
    } else {
        computed = this.$$init_scrollTimeout;
        this.$$useinit_scrollTimeout = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyScrollTimeout(computed, old, "scrollTimeout", "init");

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

function setRuntimeScrollTimeout() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeScrollTimeout() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
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

function setRuntimeMinCellEditHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeMinCellEditHeight() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getPaneInsetRight() {
    var n = this.getTopRightWidget(),
        i = n && n.isVisible() && n.getBounds() ? n.getBounds().width + n.getMarginLeft() + n.getMarginRight() : 0,
        t = this.__Qi,
        r = this.getVerticalScrollBarVisible() ? this.getVerticalScrollBarWidth() + t.getMarginLeft() + t.getMarginRight() : 0;
    return Math.max(i, r)
}

function setPaneWidth(n) {
    this.isVerticalScrollBarVisible() && (n += this.getPaneInsetRight());
    this.setWidth(n)
}

function _createChildControlImpl(n) {
    var i;
    switch (n) {
        case v:
            i = this.getTable().getNewTablePaneHeader()(this);
            break;
        case g:
            i = this.getTable().getNewTablePane()(this);
            break;
        case e:
            i = new qx.ui.table.pane.FocusIndicator(this);
            i.setUserBounds(0, 0, 0, 0);
            i.setZIndex(1e3);
            i.addListener(y, this._onPointerupFocusIndicator, this);
            this._paneClipper.add(i);
            i.show();
            i.setDecorator(null);
            break;
        case t:
            i = new qx.ui.core.Widget;
            i.setUserBounds(0, 0, 0, 0);
            i.setZIndex(1e3);
            this._paneClipper.add(i);
            break;
        case w:
            i = this._createScrollBar(si).set({
                alignY: ot
            });
            i.addListener(f, this._onScrollX, this);
            this.__Qg != null ? (i.setMinHeight(qx.ui.core.scroll.AbstractScrollArea.DEFAULT_SCROLLBAR_WIDTH), this.__Qg.add(i, {
                bottom: 0,
                right: 0,
                left: 0
            })) : this._add(i, {
                row: 2,
                column: 0
            });
            break;
        case c:
            i = this._createScrollBar(gt);
            i.addListener(f, this._onScrollY, this);
            this.__Qg != null ? this.__Qg.add(i, {
                right: 0,
                bottom: 0,
                top: 0
            }) : this._add(i, {
                row: 1,
                column: 1
            })
    }
    return i || qx.ui.core.Widget.prototype._createChildControlImpl.call(this, n)
}

function _applyHorizontalScrollBarVisible(n) {
    n === null ? this.__Qh.setVisibility(wt) : this.__Qh.setVisibility(n ? a : o)
}

function _applyVerticalScrollBarVisible(n) {
    this.__Qi.setVisibility(n ? a : o)
}

function _applyTablePaneModel(n, t) {
    t != null && t.removeListener(p, this._onPaneModelChanged, this);
    n.addListener(p, this._onPaneModelChanged, this)
}

function _applyShowCellFocusIndicator(n) {
    n ? (this.__Qj.setDecorator(l), this._updateFocusIndicator()) : this.__Qj && this.__Qj.setDecorator(null)
}

function getScrollY() {
    return this.__Qi.getPosition()
}

function setScrollY(n, t) {
    this.__Qi.scrollTo(n);
    t && this._updateContent()
}

function getScrollX() {
    return this.__Qh.getPosition()
}

function setScrollX(n) {
    this.__Qh.scrollTo(n)
}

function getTable() {
    return this.__Qc
}

function _createPaneClipper() {
    return new qx.ui.table.pane.Clipper
}

function _createHeaderClipper() {
    return new qx.ui.table.pane.Clipper
}

function onColVisibilityChanged() {
    this.updateHorScrollBarMaximum();
    this._updateFocusIndicator()
}

function setColumnWidth(n, t) {
    this.__Qd.setColumnWidth(n, t);
    this.__Qe.setColumnWidth(n, t);
    var i = this.getTablePaneModel(),
        r = i.getX(n);
    r != -1 && (this.updateHorScrollBarMaximum(), this._updateFocusIndicator())
}

function onColOrderChanged() {
    this.__Qd.onColOrderChanged();
    this.__Qe.onColOrderChanged();
    this.updateHorScrollBarMaximum()
}

function onTableModelDataChanged(n, t, i, r) {
    this.__Qe.onTableModelDataChanged(n, t, i, r);
    var u = this.getTable().getTableModel().getRowCount(),
        f = this.__Qc.getTableColumnModel().getOverallColumnCount();
    u != this.__PA && (this.updateVerScrollBarMaximum(), this.getFocusedRow() === null && u > 0 && f > 0 ? this.setFocusedCell(this.getFocusedColumn() || 0, 0) : this.getFocusedRow() >= u && (u == 0 ? this.setFocusedCell(null, null) : this.setFocusedCell(this.getFocusedColumn(), u - 1)), this.__PA = u)
}

function onSelectionChanged() {
    this.__Qe.onSelectionChanged()
}

function onFocusChanged() {
    this.__Qe.onFocusChanged()
}

function onTableModelMetaDataChanged() {
    this.__Qd.onTableModelMetaDataChanged();
    this.__Qe.onTableModelMetaDataChanged()
}

function _onPaneModelChanged() {
    this.__Qd.onPaneModelChanged();
    this.__Qe.onPaneModelChanged()
}

function _onResizePane() {
    this.updateHorScrollBarMaximum();
    this.updateVerScrollBarMaximum();
    this._updateContent();
    this.__Qd._updateContent();
    this.__Qc._updateScrollBarVisibility()
}

function updateHorScrollBarMaximum() {
    var t = this._paneClipper.getInnerSize(),
        i, n, r, u;
    t && (i = this.getTablePaneModel().getTotalWidth(), n = this.__Qh, t.width < i ? (r = Math.max(0, i - t.width), n.setMaximum(r), n.setKnobFactor(t.width / i), u = n.getPosition(), n.setPosition(Math.min(u, r))) : (n.setMaximum(0), n.setKnobFactor(1), n.setPosition(0)))
}

function updateVerScrollBarMaximum() {
    var t = this._paneClipper.getInnerSize(),
        f, i, u, e;
    if (t) {
        f = this.getTable().getTableModel();
        i = f.getRowCount();
        this.getTable().getKeepFirstVisibleRowComplete() && (i += 1);
        var o = this.getTable().getRowHeight(),
            r = i * o,
            n = this.__Qi;
        t.height < r ? (u = Math.max(0, r - t.height), n.setMaximum(u), n.setKnobFactor(t.height / r), e = n.getPosition(), n.setPosition(Math.min(e, u))) : (n.setMaximum(0), n.setKnobFactor(1), n.setPosition(0))
    }
}

function onKeepFirstVisibleRowCompleteChanged() {
    this.updateVerScrollBarMaximum();
    this._updateContent()
}

function _onAppear() {
    this._startInterval(this.getScrollTimeout())
}

function _onDisappear() {
    this._stopInterval()
}

function _onScrollX(n) {
    var t = n.getData();
    this.fireDataEvent(rt, t, n.getOldData());
    this._headerClipper.scrollToX(t);
    this._paneClipper.scrollToX(t)
}

function _onScrollY(n) {
    var i, r, t;
    this.__QA || (i = this.__Qi, this.__QA = !0, r = this.getTable().getRowHeight(), t = n.getData() - n.getOldData(), Math.abs(t) > 1 && Math.abs(t) < r && (t = t < 0 ? n.getOldData() - r : n.getOldData() + r, t >= 0 && t <= i.getMaximum() && i.setPosition(t)), this.__QA = !1, this.fireDataEvent(ni, i.getPosition(), n.getOldData()), this._postponedUpdateContent())
}

function _onRoll(n) {
    var r = this.getTable(),
        t, i;
    n.getPointerType() != at && r.getEnabled() && (t = n.getDelta(), t.y > 0 && t.y < 1 ? t.y = 1 : t.y < 0 && t.y > -1 && (t.y = -1), this.__Qi.scrollBy(parseInt(t.y, 10)), i = t.y != 0 && !this.__QB(this.__Qi, t.y), t.x > 0 && t.x < 1 ? t.x = 1 : t.x < 0 && t.x > -1 && (t.x = -1), this.__Qh.scrollBy(parseInt(t.x, 10)), this.__Qv && this.getFocusCellOnPointerMove() && this._focusCellAtPagePos(this.__Qv, this.__Qw), i = i || t.x != 0 && !this.__QB(this.__Qh, t.x), i ? n.stop() : n.stopMomentum())
}

function _onPointermoveHeader(n) {
    var f = this.getTable(),
        o, s, i, u;
    if (f.getEnabled()) {
        var r = !1,
            e = null,
            t = n.getDocumentLeft(),
            h = n.getDocumentTop();
        this.__Qv = t;
        this.__Qw = h;
        this.__Qp != null ? (this.__QC(t), r = !0, n.stopPropagation()) : this._moveColumn != null ? (this.__QD(t), n.stopPropagation()) : (o = this._getResizeColumnForPageX(t), o != -1 ? r = !0 : (s = f.getTableModel(), i = this._getColumnForPageX(t), i != null && s.isColumnSortable(i) && (e = i)));
        u = r ? k : null;
        this.getApplicationRoot().setGlobalCursor(u);
        this.setCursor(u);
        this.__Qd.setPointerOverColumn(e)
    }
}

function _onPointermovePane(n) {
    var c = this.getTable(),
        e, l, s, r, a, h;
    if (c.getEnabled()) {
        if (!this.__YK) {
            qx.ui.table.pane.Scroller.prototype._onPointermovePane.call(this, n);
            return
        }
        var i = n.getDocumentLeft(),
            o = n.getDocumentTop(),
            u = this._getRowForPagePos(i, o),
            t = this._getColumnForPageX(i),
            f = qx.ui.tooltip.Manager.getInstance();
        if (t != null && u != null) {
            if (e = this.__YL.indexOf(t) != -1, l = this.__YQ, this.__YQ = null, e && this.__YM && this.__YM[t] != null) {
                for (s = webfrontend.gui.Util.getRelMouseXTableCol({
                        getViewportLeft: function() {
                            return i
                        }
                    }, c), r = 0, a = this.__YM[t].length; r < a; r++)
                    if (s >= this.__YM[t][r][0] && s < this.__YM[t][r][1]) {
                        this.__YQ = r;
                        break
                    } this.__YQ == null && (e = !1)
            }(t != this.__YO || u != this.__YP || l != this.__YQ) && (this.__YO = t, this.__YP = u, e ? (h = this.__YT.call(this.__YU, t, u, this.__YQ), h != null ? (f.resetCurrent(), this.getPaneClipper().setBlockToolTip(!1), this.__YN.setLabel(h), f.setCurrent(this.__YN), this.__YN.placeToPoint({
                left: i,
                top: o
            })) : (this.getPaneClipper().setBlockToolTip(!0), f.resetCurrent())) : (this.getPaneClipper().setBlockToolTip(!0), f.resetCurrent()))
        } else this.__YO = null, this.__YP = null, this.getPaneClipper().setBlockToolTip(!0), f.resetCurrent();
        u != null && this._getColumnForPageX(i) != null && this.getFocusCellOnPointerMove() && this._focusCellAtPagePos(i, o);
        this.getHeader().setPointerOverColumn(null)
    }
}

function _onPointerdownHeader(n) {
    var t, i, r;
    this.getTable().getEnabled() && (t = n.getDocumentLeft(), i = this._getResizeColumnForPageX(t), i != -1 ? (this._startResizeHeader(i, t), n.stop()) : (r = this._getColumnForPageX(t), r != null && (this._startMoveHeader(r, t), n.stop())))
}

function _startResizeHeader(n, t) {
    this.__YV = n;
    qx.ui.table.pane.Scroller.prototype._startResizeHeader.call(this, n, t)
}

function _startMoveHeader(n, t) {
    this._moveColumn = n;
    this.__Qo = t;
    this.__Qn = this.getTablePaneModel().getColumnLeft(n);
    this._headerClipper.capture()
}

function _onPointerdownPane(n) {
    var t = n.getDocumentLeft(),
        i = n.getDocumentTop(),
        r = this._getRowForPagePos(t, i),
        u = this._getColumnForPageX(t),
        f = this.getTable();
    f.isEditing() && (this.__YR = r, this.__YS = u);
    qx.ui.table.pane.Scroller.prototype._onPointerdownPane.call(this, n)
}

function _onPointerupFocusIndicator(n) {
    !this.__Qs || this.__Qt || this.isEditing() || this.__Qj.getRow() != this.__Qs.row || this.__Qj.getColumn() != this.__Qs.col ? this.isEditing() || this._onPointerdownPane(n) : (this.fireEvent(h, qx.ui.table.pane.CellEvent, [this, n, this.__Qs.row, this.__Qs.col], !0), this.__Qt = !0)
}

function _onChangeCaptureHeader() {
    this.__Qp != null && this._stopResizeHeader();
    this._moveColumn != null && this._stopMoveHeader()
}

function _stopResizeHeader() {
    var n = this.getTable().getTableColumnModel();
    this.getLiveResize() || (this._hideResizeLine(), n.setColumnWidth(this.__Qp, this.__Qr, !0));
    this.__Qp = null;
    this._headerClipper.releaseCapture();
    this.getApplicationRoot().setGlobalCursor(null);
    this.setCursor(null)
}

function _stopMoveHeader() {
    var n = this.getTable().getTableColumnModel(),
        u = this.getTablePaneModel(),
        t, i;
    if (this.__Qd.hideColumnMoveFeedback(), this._lastMoveTargetScroller && this._lastMoveTargetScroller.hideColumnMoveFeedback(), this._lastMoveTargetX != null && (t = u.getFirstColumnX() + u.getX(this._moveColumn), i = this._lastMoveTargetX, i != t && i != t + 1)) {
        var o = n.getVisibleColumnAtX(t),
            f = n.getVisibleColumnAtX(i),
            e = n.getOverallX(o),
            r = f != null ? n.getOverallX(f) : n.getOverallColumnCount();
        r > e && r--;
        n.moveColumn(e, r);
        this._updateFocusIndicator()
    }
    this._moveColumn = null;
    this._lastMoveTargetX = null;
    this._headerClipper.releaseCapture()
}

function _onPointerupHeader(t) {
    var i, r;
    if (!this.__YI) {
        qx.ui.table.pane.Scroller.prototype._onPointerupHeader.call(this, t);
        return
    }(i = this.getTable(), i.getEnabled()) && (this.__YV != null && (r = {
        column: this.__YV
    }, this.fireDataEvent(n, r), this.__YV = null), qx.ui.table.pane.Scroller.prototype._onPointerupHeader.call(this, t))
}

function _onTapHeader(n) {
    var u, t, f, r, s;
    if (!this.__YJ) {
        qx.ui.table.pane.Scroller.prototype._onTapHeader.call(this, n);
        return
    }
    if (this.getIgnoreClick()) {
        this.setIgnoreClick(!1);
        return
    }
    if (u = this.getTable(), u.getEnabled()) {
        var i = u.getTableModel(),
            e = n.getDocumentLeft(),
            h = this._getResizeColumnForPageX(e);
        h == -1 && (t = this._getColumnForPageX(e), t != null && i.isColumnSortable(t) && (f = i.getSortColumnIndex(), t != f && i.setSortColumnIndex(t), r = i.isSortAscending(), f == t && (r = !r), s = {
            column: t,
            ascending: r,
            clickEvent: n
        }, this.fireDataEvent(o, s, null, !0) && (i.sortByColumn(t, r), this.getResetSelectionOnHeaderClick() && u.getSelectionModel().resetSelection())));
        n.stop()
    }
}

function _onTapPane(n) {
    var i = this.getTable(),
        f;
    if (i.getEnabled()) {
        var r = n.getDocumentLeft(),
            e = n.getDocumentTop(),
            t = this._getRowForPagePos(r, e),
            u = this._getColumnForPageX(r);
        t != null && u != null ? (f = this.getSelectBeforeFocus(), f && i.getSelectionManager().handleTap(t, n), this.getFocusCellOnPointerMove() || this._focusCellAtPagePos(r, e), f || i.getSelectionManager().handleTap(t, n), (this.__Qj.isHidden() || this.__Qs && !this.__Qt && !this.isEditing() && t == this.__Qs.row && u == this.__Qs.col) && (this.fireEvent(h, qx.ui.table.pane.CellEvent, [this, n, t, u], !0), this.__Qt = !0)) : t == null && this.getResetSelectionOnTapBelowRows() && i.getSelectionModel().resetSelection()
    }
}

function _onContextMenu(n) {
    var r = n.getDocumentLeft(),
        f = n.getDocumentTop(),
        i = this._getRowForPagePos(r, f),
        u = this._getColumnForPageX(r),
        t;
    i === null && this.getContextMenuFromDataCellsOnly() || (!this.getShowCellFocusIndicator() || i === null || this.__Qs && i == this.__Qs.row && u == this.__Qs.col) && (this.fireEvent(ei, qx.ui.table.pane.CellEvent, [this, n, i, u], !0), t = this.getTable().getContextMenu(), t && (t.getChildren().length > 0 ? t.openAtPointer(n) : t.exclude(), n.preventDefault()))
}

function _onContextMenuOpen() {}

function _onDbltapPane(n) {
    var i = n.getDocumentLeft(),
        r = n.getDocumentTop(),
        u = this._getColumnForPageX(i),
        t;
    u !== null && (this._focusCellAtPagePos(i, r), this.startEditing(), t = this._getRowForPagePos(i, r), t != -1 && t != null && this.fireEvent(et, qx.ui.table.pane.CellEvent, [this, n, t], !0))
}

function _onPointerout() {
    var n = this.getTable();
    n.getEnabled() && (this.__Qp == null && (this.setCursor(null), this.getApplicationRoot().setGlobalCursor(null)), this.__Qd.setPointerOverColumn(null), this.getFocusCellOnPointerMove() && this.__Qc.setFocusedCell())
}

function _showResizeLine(n) {
    var i = this._showChildControl(t),
        r = i.getWidth(),
        u = this._paneClipper.getBounds();
    i.setUserBounds(n - Math.round(r / 2), 0, r, u.height)
}

function _hideResizeLine() {
    this._excludeChildControl(t)
}

function showColumnMoveFeedback(n) {
    for (var s, e, r = this.getTablePaneModel(), c = this.getTable().getTableColumnModel(), u = this.__Qe.getContentLocation().left, l = r.getColumnCount(), o = 0, t = 0, f = u, i = 0; i < l; i++) {
        if (s = r.getColumnAtX(i), e = c.getColumnWidth(s), n < f + e / 2) break;
        f += e;
        o = i + 1;
        t = f - u
    }
    var a = this._paneClipper.getContentLocation().left,
        v = this._paneClipper.getBounds().width,
        h = a - u;
    return t = qx.lang.Number.limit(t, h + 2, h + v - 1), this._showResizeLine(t), r.getFirstColumnX() + o
}

function hideColumnMoveFeedback() {
    this._hideResizeLine()
}

function _focusCellAtPagePos(n, t) {
    var i = this._getRowForPagePos(n, t),
        r;
    i != -1 && i != null && (r = this._getColumnForPageX(n), this.__Qc.setFocusedCell(r, i))
}

function setFocusedCell(n, t) {
    this.isEditing() || (this.__Qe.setFocusedCell(n, t, this.__Ql), this.__Pw = n, this.__Px = t, this._updateFocusIndicator())
}

function getFocusedColumn() {
    return this.__Pw
}

function getFocusedRow() {
    return this.__Px
}

function scrollCellVisible(n, t) {
    var e = this.getTablePaneModel(),
        h = e.getX(n),
        i, f, s;
    if (h != -1) {
        if (i = this._paneClipper.getInnerSize(), !i) return;
        var c = this.getTable().getTableColumnModel(),
            r = e.getColumnLeft(n),
            l = c.getColumnWidth(n),
            u = this.getTable().getRowHeight(),
            o = t * u,
            a = this.getScrollX(),
            v = this.getScrollY(),
            y = Math.min(r, r + l - i.width),
            p = r;
        this.setScrollX(Math.max(y, Math.min(p, a)));
        f = o + u - i.height;
        this.getTable().getKeepFirstVisibleRowComplete() && (f += u);
        s = o;
        this.setScrollY(Math.max(f, Math.min(s, v)), !0)
    }
}

function isEditing() {
    return this._cellEditor != null
}

function startEditing() {
    this.resetLastEdit();
    qx.ui.table.pane.Scroller.prototype.startEditing.call(this)
}

function stopEditing() {
    this.getShowCellFocusIndicator() || this.__Qj.setDecorator(null);
    this.flushEditor(!0)
}

function flushEditor(n) {
    if (this.isEditing()) {
        var t = this.__Qx.getCellEditorValue(this._cellEditor),
            i = this.getTable().getTableModel().getValue(this.__Pw, this.__Px);
        this.getTable().getTableModel().setValue(this.__Pw, this.__Px, t);
        this.__Qc.focus();
        n && this.cancelEditing();
        this.__Qc.fireDataEvent(ct, {
            row: this.__Px,
            col: this.__Pw,
            oldValue: i,
            value: t
        })
    }
}

function cancelEditing() {
    this.isEditing() && (this._cellEditor instanceof qx.ui.window.Window || (this.__Qj.removeState(d), this.__Qj.setKeepActive(!0), this.__Qz !== null && (this.__Qj.removeListenerById(this.__Qz), this.__Qz = null), this._updateFocusIndicator()), this._cellEditor.destroy(), this._cellEditor = null, this.__Qx = null)
}

function _onCellEditorModalWindowClose() {
    this.stopEditing()
}

function _getColumnForPageX(n) {
    for (var i, f, e = this.getTable().getTableColumnModel(), r = this.getTablePaneModel(), o = r.getColumnCount(), u = this.__Qe.getContentLocation().left, t = 0; t < o; t++)
        if (i = r.getColumnAtX(t), f = e.getColumnWidth(i), u += f, n < u) return i;
    return null
}

function _getResizeColumnForPageX(n) {
    var u = this.__Qd.getContentLocation() || this.__Qe.getContentLocation(),
        t, r, o;
    if (u) {
        var i = u.left,
            s = this.getTable().getTableColumnModel(),
            f = this.getTablePaneModel(),
            h = f.getColumnCount(),
            e = qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;
        for (t = 0; t < h; t++)
            if (r = f.getColumnAtX(t), o = s.getColumnWidth(r), i += o, n >= i - e && n <= i + e) return r
    }
    return -1
}

function _getRowForPagePos(n, t) {
    var i = this.__Qe.getContentLocation(),
        r, u, f;
    if (n < i.left || n > i.right) return null;
    if (t >= i.top && t <= i.bottom) {
        r = this.getTable().getRowHeight();
        u = this.__Qi.getPosition();
        this.getTable().getKeepFirstVisibleRowComplete() && (u = Math.floor(u / r) * r);
        var o = u + t - i.top,
            e = Math.floor(o / r),
            s = this.getTable().getTableModel(),
            h = s.getRowCount();
        return e < h ? e : null
    }
    return (f = this.__Qd.getContentLocation(), t >= f.top && t <= f.bottom && n <= f.right) ? -1 : null
}

function setTopRightWidget(n) {
    var t = this.__Qy;
    t != null && this.__Qf.remove(t);
    n != null && this.__Qf.add(n);
    this.__Qy = n
}

function getTopRightWidget() {
    return this.__Qy
}

function getHeader() {
    return this.__Qd
}

function getTablePane() {
    return this.__Qe
}

function getVerticalScrollBarWidth() {
    var n = this.__Qi;
    return n.isVisible() ? n.getSizeHint().width || 0 : 0
}

function getNeededScrollBars(n, t) {
    var u = this.__Qi,
        h = u.getSizeHint().width + u.getMarginLeft() + u.getMarginRight(),
        f = this.__Qh,
        c = f.getSizeHint().height + f.getMarginTop() + f.getMarginBottom(),
        i = this._paneClipper.getInnerSize(),
        e = i ? i.width : 0,
        r, v, y;
    this.getVerticalScrollBarVisible() && (e += h);
    r = i ? i.height : 0;
    this.getHorizontalScrollBarVisible() && (r += c);
    var p = this.getTable().getTableModel(),
        w = p.getRowCount(),
        l = this.getTablePaneModel().getTotalWidth(),
        a = this.getTable().getRowHeight() * w,
        o = !1,
        s = !1;
    return l > e ? (o = !0, a > r - c && (s = !0)) : a > r && (s = !0, !t && l > e - h && (o = !0)), v = qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR, y = qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR, (n || o ? v : 0) | (t || !s ? 0 : y)
}

function getPaneClipper() {
    return this._paneClipper
}

function getScrollAreaContainer() {
    return this.getPaneClipper()
}

function _applyScrollTimeout(n) {
    this._startInterval(n)
}

function _startInterval(n) {
    this.__eu.setInterval(n);
    this.__eu.start()
}

function _stopInterval() {
    this.__eu.stop()
}

function _postponedUpdateContent() {
    this._updateContent()
}

function _oninterval() {
    if (!t.__B) return n.apply(this, arguments);
    try {
        return n.apply(this, arguments)
    } catch (i) {
        t.handleError(new qx.core.GlobalError(i, arguments))
    }
}

function _updateContent() {
    var t = this._paneClipper.getInnerSize();
    if (t) {
        var o = t.height,
            s = this.__Qh.getPosition(),
            i = this.__Qi.getPosition(),
            n = this.getTable().getRowHeight(),
            r = Math.floor(i / n),
            h = this.__Qe.getFirstVisibleRow();
        this.__Qe.setFirstVisibleRow(r);
        var u = Math.ceil(o / n),
            f = 0,
            e = this.getTable().getKeepFirstVisibleRowComplete();
        e || (u++, f = i % n);
        this.__Qe.setVisibleRowCount(u);
        r != h && this._updateFocusIndicator();
        this._paneClipper.scrollToX(s);
        e || this._paneClipper.scrollToY(f)
    }
}

function _updateFocusIndicator(n) {
    var t = this.getTable();
    t.getEnabled() && this.__Qj.moveToCell(this.__Pw, this.__Px, n)
}

function _createScrollBar(t) {
    return qx.core.Environment.get(n) ? new qx.ui.core.scroll.NativeScrollBar(t) : new qx.ui.core.scroll.ScrollBar(t)
}

function setToolTipFunction(n) {
    this.__YT = n.func;
    this.__YU = n.ctx
}

function updateToolTip(n) {
    var t, i, r;
    if (this.__YL.indexOf(this.__YO) != -1) {
        if (n = n || !1, t = this.__YT.call(this.__YU, this.__YO, this.__YP, this.__YQ), n) {
            i = this.__YN.getChildControl(f);
            r = i.getChildControl(u);
            r._applyValue(t, null);
            return
        }
        this.__YN.setLabel(t)
    }
}

function getToolTipVisible() {
    return this.__YK && this.__YN.isVisible()
}

function getToolTipStatus() {
    return {
        visible: this.__YK && this.__YN.isVisible(),
        col: this.__YO,
        row: this.__YP
    }
}

function getLastEdit() {
    return {
        col: this.__YS,
        row: this.__YR
    }
}

function resetLastEdit() {
    this.__YS = this.__YR = null
}

function setLastEdit(n) {
    this.__YS = n.col;
    this.__YR = n.row
}

function startEditing() {
    this.resetLastEdit();
    qx.ui.table.pane.Scroller.prototype.startEditing.call(this)
}

function _startResizeHeader(n, t) {
    this.__YV = n;
    qx.ui.table.pane.Scroller.prototype._startResizeHeader.call(this, n, t)
}

function _onPointerupHeader(t) {
    var i, r;
    if (!this.__YI) {
        qx.ui.table.pane.Scroller.prototype._onPointerupHeader.call(this, t);
        return
    }(i = this.getTable(), i.getEnabled()) && (this.__YV != null && (r = {
        column: this.__YV
    }, this.fireDataEvent(n, r), this.__YV = null), qx.ui.table.pane.Scroller.prototype._onPointerupHeader.call(this, t))
}

function _onTapHeader(n) {
    var u, t, f, r, s;
    if (!this.__YJ) {
        qx.ui.table.pane.Scroller.prototype._onTapHeader.call(this, n);
        return
    }
    if (this.getIgnoreClick()) {
        this.setIgnoreClick(!1);
        return
    }
    if (u = this.getTable(), u.getEnabled()) {
        var i = u.getTableModel(),
            e = n.getDocumentLeft(),
            h = this._getResizeColumnForPageX(e);
        h == -1 && (t = this._getColumnForPageX(e), t != null && i.isColumnSortable(t) && (f = i.getSortColumnIndex(), t != f && i.setSortColumnIndex(t), r = i.isSortAscending(), f == t && (r = !r), s = {
            column: t,
            ascending: r,
            clickEvent: n
        }, this.fireDataEvent(o, s, null, !0) && (i.sortByColumn(t, r), this.getResetSelectionOnHeaderClick() && u.getSelectionModel().resetSelection())));
        n.stop()
    }
}

function _onPointermovePane(n) {
    var c = this.getTable(),
        e, l, s, r, a, h;
    if (c.getEnabled()) {
        if (!this.__YK) {
            qx.ui.table.pane.Scroller.prototype._onPointermovePane.call(this, n);
            return
        }
        var i = n.getDocumentLeft(),
            o = n.getDocumentTop(),
            u = this._getRowForPagePos(i, o),
            t = this._getColumnForPageX(i),
            f = qx.ui.tooltip.Manager.getInstance();
        if (t != null && u != null) {
            if (e = this.__YL.indexOf(t) != -1, l = this.__YQ, this.__YQ = null, e && this.__YM && this.__YM[t] != null) {
                for (s = webfrontend.gui.Util.getRelMouseXTableCol({
                        getViewportLeft: function() {
                            return i
                        }
                    }, c), r = 0, a = this.__YM[t].length; r < a; r++)
                    if (s >= this.__YM[t][r][0] && s < this.__YM[t][r][1]) {
                        this.__YQ = r;
                        break
                    } this.__YQ == null && (e = !1)
            }(t != this.__YO || u != this.__YP || l != this.__YQ) && (this.__YO = t, this.__YP = u, e ? (h = this.__YT.call(this.__YU, t, u, this.__YQ), h != null ? (f.resetCurrent(), this.getPaneClipper().setBlockToolTip(!1), this.__YN.setLabel(h), f.setCurrent(this.__YN), this.__YN.placeToPoint({
                left: i,
                top: o
            })) : (this.getPaneClipper().setBlockToolTip(!0), f.resetCurrent())) : (this.getPaneClipper().setBlockToolTip(!0), f.resetCurrent()))
        } else this.__YO = null, this.__YP = null, this.getPaneClipper().setBlockToolTip(!0), f.resetCurrent();
        u != null && this._getColumnForPageX(i) != null && this.getFocusCellOnPointerMove() && this._focusCellAtPagePos(i, o);
        this.getHeader().setPointerOverColumn(null)
    }
}

function _onPointerdownPane(n) {
    var t = n.getDocumentLeft(),
        i = n.getDocumentTop(),
        r = this._getRowForPagePos(t, i),
        u = this._getColumnForPageX(t),
        f = this.getTable();
    f.isEditing() && (this.__YR = r, this.__YS = u);
    qx.ui.table.pane.Scroller.prototype._onPointerdownPane.call(this, n)
}

function initShowCellFocusIndicator anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_showCellFocusIndicator !== undefined) {
        old = this.$$runtime_showCellFocusIndicator;
    } else if (this.$$user_showCellFocusIndicator !== undefined) {
        old = this.$$user_showCellFocusIndicator;
    } else if (this.$$useinit_showCellFocusIndicator) {
        old = this.$$init_showCellFocusIndicator;
    }
    var computed;
    if (this.$$runtime_showCellFocusIndicator !== undefined) {
        computed = this.$$runtime_showCellFocusIndicator;
    } else if (this.$$user_showCellFocusIndicator !== undefined) {
        computed = this.$$user_showCellFocusIndicator;
    } else if (this.$$useinit_showCellFocusIndicator) {
        computed = this.$$init_showCellFocusIndicator;
    } else {
        computed = this.$$init_showCellFocusIndicator;
        this.$$useinit_showCellFocusIndicator = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyShowCellFocusIndicator(computed, old, "showCellFocusIndicator", "init");

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

function initScrollTimeout anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_scrollTimeout !== undefined) {
        old = this.$$runtime_scrollTimeout;
    } else if (this.$$user_scrollTimeout !== undefined) {
        old = this.$$user_scrollTimeout;
    } else if (this.$$useinit_scrollTimeout) {
        old = this.$$init_scrollTimeout;
    }
    var computed;
    if (this.$$runtime_scrollTimeout !== undefined) {
        computed = this.$$runtime_scrollTimeout;
    } else if (this.$$user_scrollTimeout !== undefined) {
        computed = this.$$user_scrollTimeout;
    } else if (this.$$useinit_scrollTimeout) {
        computed = this.$$init_scrollTimeout;
    } else {
        computed = this.$$init_scrollTimeout;
        this.$$useinit_scrollTimeout = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyScrollTimeout(computed, old, "scrollTimeout", "init");

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