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

function showTooltip(t) {
    var i = null,
        r = t.getDocumentLeft(),
        o = t.getDocumentTop(),
        u = this.getTablePaneScrollerAtPageX(r),
        s, f, e;
    if (u != null && (s = this.getTableModel(), s != null && (f = u._getRowForPagePos(r, o), e = u._getColumnForPageX(r), f >= 0 && e >= 0))) try {
        i = this._getToolTip(e, f)
    } catch (h) {
        i = n
    }
    i != null && i != n && t != null ? (this.__bpe.moveTo(r + 10, o + 10), this.__bpe.setLabel(i), this.__bpe.show()) : this.__bpe.hide()
}

function _getToolTip(n, i) {
    var e, f, o;
    if (n >= 0 && i >= 0) try {
        if (e = this.getTableModel().getRowData(i), e && (f = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(e.ID), f != null)) {
            if (o = f.CanTrade(), (o & ClientLib.Data.ETradeError.IsGhostMode) == ClientLib.Data.ETradeError.IsGhostMode) return this.tr(u);
            if ((o & ClientLib.Data.ETradeError.IsAttacked) == ClientLib.Data.ETradeError.IsAttacked) return this.tr(r);
            if (f.GetResourceCount(this.selectedResourceType) < 1) return this.tr(t)
        }
    } catch (s) {
        return null
    }
}

function setFocusedCell(n, t, i) {
    var f, r, e, u;
    if (!this.isEditing() && (n != this.__bpg || t != this.__bpf)) {
        if (n === null && (n = 0), f = this.getTableModel().getRowData(t), f && (r = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(f.ID), r != null && r.CanTrade() != ClientLib.Data.ETradeError.None && r.GetResourceCount(this.selectedResourceType) >= 1)) return;
        for (this.__bpg = n, this.__bpf = t, e = this._getPaneScrollerArr(), u = 0; u < e.length; u++) e[u].setFocusedCell(n, t);
        n !== null && i && this.scrollCellVisible(n, t)
    }
}