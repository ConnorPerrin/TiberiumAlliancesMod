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

function _setLoading() {}

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