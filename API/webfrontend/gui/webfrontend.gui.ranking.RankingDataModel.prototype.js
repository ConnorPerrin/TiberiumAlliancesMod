function getBlockSize anonymous() {
    this.getBlockSize.$$install && this.getBlockSize.$$install();
    return this.getBlockSize.apply(this, arguments);
}

function setBlockSize anonymous() {
    this.setBlockSize.$$install && this.setBlockSize.$$install.call(this);
    return this.setBlockSize.apply(this, arguments);
}

function resetBlockSize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeBlockSize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeBlockSize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getMaxCachedBlockCount anonymous() {
    this.getMaxCachedBlockCount.$$install && this.getMaxCachedBlockCount.$$install();
    return this.getMaxCachedBlockCount.apply(this, arguments);
}

function setMaxCachedBlockCount anonymous() {
    this.setMaxCachedBlockCount.$$install && this.setMaxCachedBlockCount.$$install.call(this);
    return this.setMaxCachedBlockCount.apply(this, arguments);
}

function resetMaxCachedBlockCount() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeMaxCachedBlockCount() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeMaxCachedBlockCount() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getClearCacheOnRemove anonymous() {
    this.getClearCacheOnRemove.$$install && this.getClearCacheOnRemove.$$install();
    return this.getClearCacheOnRemove.apply(this, arguments);
}

function setClearCacheOnRemove anonymous() {
    this.setClearCacheOnRemove.$$install && this.setClearCacheOnRemove.$$install.call(this);
    return this.setClearCacheOnRemove.apply(this, arguments);
}

function resetClearCacheOnRemove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeClearCacheOnRemove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeClearCacheOnRemove() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleClearCacheOnRemove anonymous() {
    return this.setClearCacheOnRemove(!this.getClearCacheOnRemove())
}

function isClearCacheOnRemove anonymous() {
    return this.getClearCacheOnRemove()
}

function getBlockConcurrentLoadRowCount anonymous(value) {
    if (this.$$runtime_blockConcurrentLoadRowCount !== undefined) return this.$$runtime_blockConcurrentLoadRowCount;
    if (this.$$user_blockConcurrentLoadRowCount !== undefined) return this.$$user_blockConcurrentLoadRowCount;
    else return this.$$init_blockConcurrentLoadRowCount;
}

function setBlockConcurrentLoadRowCount anonymous() {
    this.setBlockConcurrentLoadRowCount.$$install && this.setBlockConcurrentLoadRowCount.$$install.call(this);
    return this.setBlockConcurrentLoadRowCount.apply(this, arguments);
}

function resetBlockConcurrentLoadRowCount() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeBlockConcurrentLoadRowCount() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeBlockConcurrentLoadRowCount() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleBlockConcurrentLoadRowCount anonymous() {
    return this.setBlockConcurrentLoadRowCount(!this.getBlockConcurrentLoadRowCount())
}

function isBlockConcurrentLoadRowCount anonymous() {
    return this.getBlockConcurrentLoadRowCount()
}

function _getIgnoreCurrentRequest() {
    return this._ignoreCurrentRequest
}

function getRowCount() {
    return this._rowCount == -1 ? (this._loadRowCountRequestRunning && this.getBlockConcurrentLoadRowCount() || (this._loadRowCountRequestRunning = !0, this._loadRowCount()), this._rowCount == -1 ? 0 : this._rowCount) : this._rowCount
}

function _loadRowCount() {
    this.getLocked() || this.__Ue.RequestCount(this.__Uc, this.__Ud, this.getSearchName())
}

function _onRowCountLoaded(t) {
    this.getBlockConcurrentLoadRowCount() && (this._loadRowCountRequestRunning = !1);
    (t == null || t < 0) && (t = 0);
    this._rowCount = Number(t);
    var i = {
        firstRow: 0,
        lastRow: t - 1,
        firstColumn: 0,
        lastColumn: this.getColumnCount() - 1
    };
    this.fireDataEvent(n, i)
}

function reloadData() {
    if (this._firstLoadingBlock != -1) {
        var n = this._cancelCurrentRequest();
        n ? (this._firstLoadingBlock = -1, this._ignoreCurrentRequest = !1) : this._ignoreCurrentRequest = !0
    }
    this._clearCache = !0;
    this._firstRowToLoad = -1;
    this._lastRowToLoad = -1;
    this._loadRowCountRequestRunning = !0;
    this._loadRowCount()
}

function clearCache() {
    this._rowBlockCache = {};
    this._rowBlockCount = 0
}

function getCacheContent() {
    return {
        sortColumnIndex: this._sortColumnIndex,
        sortAscending: this._sortAscending,
        rowCount: this._rowCount,
        lruCounter: this._lruCounter,
        rowBlockCache: this._rowBlockCache,
        rowBlockCount: this._rowBlockCount
    }
}

function restoreCacheContent(t) {
    var i, r;
    this._firstLoadingBlock != -1 && (i = this._cancelCurrentRequest(), i ? (this._firstLoadingBlock = -1, this._ignoreCurrentRequest = !1) : this._ignoreCurrentRequest = !0);
    this._sortColumnIndex = t.sortColumnIndex;
    this._sortAscending = t.sortAscending;
    this._rowCount = t.rowCount;
    this._lruCounter = t.lruCounter;
    this._rowBlockCache = t.rowBlockCache;
    this._rowBlockCount = t.rowBlockCount;
    r = {
        firstRow: 0,
        lastRow: this._rowCount - 1,
        firstColumn: 0,
        lastColumn: this.getColumnCount() - 1
    };
    this.fireDataEvent(n, r)
}

function _cancelCurrentRequest() {
    return !1
}

function iterateCachedRows(n, t) {
    for (var f, s, u, i, h, e, o = this.getBlockSize(), c = Math.ceil(this.getRowCount() / o), r = 0; r <= c; r++)
        if (f = this._rowBlockCache[r], f != null)
            for (s = r * o, u = f.rowDataArr, i = 0; i < u.length; i++) h = u[i], e = n.call(t, s + i, h), e != null && (u[i] = e)
}

function prefetchRows(n, t) {
    var r = Math.min(50, this.getRowCount()),
        i;
    r > 0 && t - n + 1 < r && (i = r - (t - n + 1), n >= Math.floor(i / 2) ? (n -= Math.floor(i / 2), i -= Math.floor(i / 2)) : (i -= n, n = 0), t = Math.min(t + i, this.getRowCount() - 1));
    qx.ui.table.model.Remote.prototype.prefetchRows.call(this, n, t)
}

function _loadRowData(n, t) {
    if (this.getLocked()) {
        this._onRowDataLoaded(null);
        return
    }
    this.__Ue.RequestData(n, t, this.__Uh(), this.isSortAscending() ? ClientLib.Data.Ranking.ESortDirection.Ascending : ClientLib.Data.Ranking.ESortDirection.Descending, this.getSearchName())
}

function _onRowDataLoaded(t) {
    var i, u, r, f, s;
    if (this._clearCache && (this.clearCache(), this._clearCache = !1), t != null && !this._ignoreCurrentRequest) {
        if (i = this.getBlockSize(), u = Math.ceil(t.length / i), u == 1) this._setRowBlockData(this._firstLoadingBlock, t);
        else
            for (r = 0; r < u; r++) {
                var e = r * i,
                    o = [],
                    h = Math.min(i, t.length - e);
                for (f = 0; f < h; f++) o.push(t[e + f]);
                this._setRowBlockData(this._firstLoadingBlock + r, o)
            }
        s = {
            firstRow: this._firstLoadingBlock * i,
            lastRow: (this._firstLoadingBlock + u + 1) * i - 1,
            firstColumn: 0,
            lastColumn: this.getColumnCount() - 1
        };
        this.fireDataEvent(n, s)
    }
    this._firstLoadingBlock = -1;
    this._ignoreCurrentRequest = !1;
    this._firstRowToLoad != -1 && this.prefetchRows(this._firstRowToLoad, this._lastRowToLoad)
}

function _setRowBlockData(n, t) {
    var f, r, i, u;
    if (this._rowBlockCache[n] == null)
        for (this._rowBlockCount++; this._rowBlockCount > this.getMaxCachedBlockCount();) {
            r = this._lruCounter;
            for (i in this._rowBlockCache) u = this._rowBlockCache[i].lru, u < r && i > 1 && (r = u, f = i);
            delete this._rowBlockCache[f];
            this._rowBlockCount--
        }
    this._rowBlockCache[n] = {
        lru: ++this._lruCounter,
        rowDataArr: t
    }
}

function removeRow(t) {
    var i, r, e, o, u;
    if (this.getClearCacheOnRemove()) this.clearCache(), u = {
        firstRow: 0,
        lastRow: this.getRowCount() - 1,
        firstColumn: 0,
        lastColumn: this.getColumnCount() - 1
    }, this.fireDataEvent(n, u);
    else {
        var f = this.getBlockSize(),
            s = Math.ceil(this.getRowCount() / f),
            h = parseInt(t / f, 10);
        for (i = h; i <= s; i++) r = this._rowBlockCache[i], r != null && (e = 0, i == h && (e = t - i * f), r.rowDataArr.splice(e, 1), i == s - 1 ? r.rowDataArr.length == 0 && delete this._rowBlockCache[i] : (o = this._rowBlockCache[i + 1], o != null ? r.rowDataArr.push(o.rowDataArr[0]) : r.isDirty = !0));
        this._rowCount != -1 && this._rowCount--;
        this.hasListener(n) && (u = {
            firstRow: t,
            lastRow: this.getRowCount() - 1,
            firstColumn: 0,
            lastColumn: this.getColumnCount() - 1
        }, this.fireDataEvent(n, u))
    }
}

function getRowData(n) {
    var i = this.getBlockSize(),
        r = parseInt(n / i, 10),
        t = this._rowBlockCache[r],
        u;
    return t == null ? null : (u = t.rowDataArr[n - r * i], t.lru != this._lruCounter && (t.lru = ++this._lruCounter), u)
}

function getValue(n, t) {
    var i = this.getRowData(t),
        r;
    return i == null ? null : (r = this.getColumnId(n), i[r])
}

function setValue(t, i, r) {
    var u = this.getRowData(i),
        f, e;
    u != null && (f = this.getColumnId(t), u[f] = r, this.hasListener(n) && (e = {
        firstRow: i,
        lastRow: i,
        firstColumn: t,
        lastColumn: t
    }, this.fireDataEvent(n, e)))
}

function setEditable(n) {
    this._editableColArr = [];
    for (var i = 0; i < this.getColumnCount(); i++) this._editableColArr[i] = n;
    this.fireEvent(t)
}

function setColumnEditable(n, i) {
    i != this.isColumnEditable(n) && (this._editableColArr == null && (this._editableColArr = []), this._editableColArr[n] = i, this.fireEvent(t))
}

function isColumnEditable(n) {
    return this._editableColArr ? this._editableColArr[n] == !0 : !1
}

function setColumnSortable(n, i) {
    i != this.isColumnSortable(n) && (this._sortableColArr == null && (this._sortableColArr = []), this._sortableColArr[n] = i, this.fireEvent(t))
}

function isColumnSortable(n) {
    return this._sortableColArr ? this._sortableColArr[n] !== !1 : !0
}

function sortByColumn(n, i) {
    (this._sortColumnIndex != n || this._sortAscending != i) && (this._sortColumnIndex = n, this._sortAscending = i, this.clearCache(), this.fireEvent(t))
}

function getSortColumnIndex() {
    return this._sortColumnIndex
}

function isSortAscending() {
    return this._sortAscending
}

function setSortColumnIndexWithoutSortingData(n) {
    this._sortColumnIndex = n
}

function setSortAscendingWithoutSortingData(n) {
    this._sortAscending = n
}

function getLocked anonymous(value) {
    if (this.$$runtime_locked !== undefined) return this.$$runtime_locked;
    if (this.$$user_locked !== undefined) return this.$$user_locked;
    else return this.$$init_locked;
}

function setLocked anonymous(value) {
    this.$$setLockedImpl.apply(this, arguments);
    return value;
}

function resetLocked() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeLocked() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeLocked() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSearchName anonymous(value) {
    if (this.$$runtime_searchName !== undefined) return this.$$runtime_searchName;
    if (this.$$user_searchName !== undefined) return this.$$user_searchName;
    else return this.$$init_searchName;
}

function setSearchName anonymous() {
    this.setSearchName.$$install && this.setSearchName.$$install.call(this);
    return this.setSearchName.apply(this, arguments);
}

function resetSearchName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeSearchName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSearchName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function prefetchRows(n, t) {
    var r = Math.min(50, this.getRowCount()),
        i;
    r > 0 && t - n + 1 < r && (i = r - (t - n + 1), n >= Math.floor(i / 2) ? (n -= Math.floor(i / 2), i -= Math.floor(i / 2)) : (i -= n, n = 0), t = Math.min(t + i, this.getRowCount() - 1));
    qx.ui.table.model.Remote.prototype.prefetchRows.call(this, n, t)
}

function getViewType() {
    return this.__Uc
}

function getRankingType() {
    return this.__Ud
}

function searchValue(n, t) {
    this.getLocked() || this.__Ue.RequestData(0, 99, n, this.isSortAscending() ? ClientLib.Data.Ranking.ESortDirection.Ascending : ClientLib.Data.Ranking.ESortDirection.Descending, String(t))
}

function showValue(n, t) {
    this.getLocked() || this.__Ue.RequestIndex(this.__Uh(), this.isSortAscending() ? ClientLib.Data.Ranking.ESortDirection.Ascending : ClientLib.Data.Ranking.ESortDirection.Descending, n, String(t))
}

function getSortColumns() {
    return this.__Ug
}

function getMetaColumns() {
    return this.__Uf
}

function _loadRowCount() {
    this.getLocked() || this.__Ue.RequestCount(this.__Uc, this.__Ud, this.getSearchName())
}

function _loadRowData(n, t) {
    if (this.getLocked()) {
        this._onRowDataLoaded(null);
        return
    }
    this.__Ue.RequestData(n, t, this.__Uh(), this.isSortAscending() ? ClientLib.Data.Ranking.ESortDirection.Ascending : ClientLib.Data.Ranking.ESortDirection.Descending, this.getSearchName())
}