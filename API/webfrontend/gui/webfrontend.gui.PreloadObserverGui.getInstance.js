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