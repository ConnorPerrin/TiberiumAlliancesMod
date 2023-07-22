function getLoading(n) {
    return this.__Ur.hasOwnProperty(n)
}

function setLoading(t, i, r, u, f) {
    var e, s, o;
    (typeof t != n && (t = qx.core.ObjectRegistry.fromHashCode(t, !0)), t) && (e = t.toHashCode(), s = this.__Ur.hasOwnProperty(e), i ? (s || (this.__Ur[e] = {
        id: e,
        jobs: []
    }, this._setLoading(t, !0, f)), this.__Ur[e].func = r || null, this.__Ur[e].funccontext = r ? u || t : null) : s && (o = this.__Ur[e], delete this.__Ur[e], o.func && o.func.call(o.funccontext), this._setLoading(t, !1)))
}

function _setLoading(r, u) {
    var f, o, e;
    (webfrontend.phe.cnc.data.PreloadObserver.prototype._setLoading.call(this, r, u), qx.Class.isSubClassOf(qx.Class.getByName(r.classname), qx.ui.core.Widget)) && (f = r.toHashCode(), o = this.__Uw.hasOwnProperty(f), u ? o || (r.addListener(t, this.__Uy, this), r.addListener(n, this.__Uy, this), this.__Uw[f] = {
        id: f,
        obj: r,
        blocker: this.__UA()
    }, this.__Uw[f].idbind = r.bind(i, this.__Uw[f].blocker, i), this.__Uw[f].blocker.setVisibility(this.__Uw[f].obj.getVisibility()), this.__et.add(this.__Uw[f].blocker), this.__Uw[f].blocker.objdata = this.__Uw[f], this.__Uz(f)) : o && (e = this.__Uw[f], delete this.__Uw[f], this.__et.remove(e.blocker), e.blocker.objdata = null, e.obj.removeBinding(e.idbind), e.obj.addListener(t, this.__Uy, this), e.obj.addListener(n, this.__Uy, this)))
}

function addJob(n, t, i) {
    if (n && t) {
        var r = n.toHashCode(),
            u = this.__Ur.hasOwnProperty(r) ? this.__Ur[r] : null;
        u && u.jobs.push({
            func: t,
            funccontext: i || n
        })
    }
}

function setBlockerDecorator(n, t) {
    var i = n.toHashCode();
    this.__Uw.hasOwnProperty(i) && this.__Uw[i].blocker.setDecorator(t)
}

function _setLoading(r, u) {
    var f, o, e;
    (webfrontend.phe.cnc.data.PreloadObserver.prototype._setLoading.call(this, r, u), qx.Class.isSubClassOf(qx.Class.getByName(r.classname), qx.ui.core.Widget)) && (f = r.toHashCode(), o = this.__Uw.hasOwnProperty(f), u ? o || (r.addListener(t, this.__Uy, this), r.addListener(n, this.__Uy, this), this.__Uw[f] = {
        id: f,
        obj: r,
        blocker: this.__UA()
    }, this.__Uw[f].idbind = r.bind(i, this.__Uw[f].blocker, i), this.__Uw[f].blocker.setVisibility(this.__Uw[f].obj.getVisibility()), this.__et.add(this.__Uw[f].blocker), this.__Uw[f].blocker.objdata = this.__Uw[f], this.__Uz(f)) : o && (e = this.__Uw[f], delete this.__Uw[f], this.__et.remove(e.blocker), e.blocker.objdata = null, e.obj.removeBinding(e.idbind), e.obj.addListener(t, this.__Uy, this), e.obj.addListener(n, this.__Uy, this)))
}