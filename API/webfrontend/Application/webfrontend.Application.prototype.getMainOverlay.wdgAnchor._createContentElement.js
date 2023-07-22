function setPadding(n, t) {
    this.__mh = n;
    this.__mg = t;
    this.getNodeName() == u && this.setStyle(a, n + s + t + o)
}

function _applyProperty(i, f) {
    var s, e;
    if (qx.html.Element.prototype._applyProperty.call(this, i, f), i === n) {
        s = this.getDomElement();
        e = this.getAllStyles();
        this.getNodeName() == u && this.getStyle(h) && (e.backgroundRepeat = null);
        var o = this._getProperty(n),
            c = this._getProperty(t),
            l = c ? t : r;
        o != null && (o = o || null, e.paddingTop = this.__mg, e.paddingLeft = this.__mh, qx.bom.element.Decoration.update(s, o, l, e))
    }
}

function _removeProperty(t, i) {
    t == n ? this._setProperty(t, f, i) : this._setProperty(t, null, i)
}

function _createDomElement() {
    var o = this._getProperty(t),
        u = o ? t : r,
        f;
    return qx.core.Environment.get(i) == e ? (f = this._getProperty(n), this.tagNameHint != null ? this.setNodeName(this.tagNameHint) : this.setNodeName(qx.bom.element.Decoration.getTagName(u, f))) : this.setNodeName(qx.bom.element.Decoration.getTagName(u)), qx.html.Element.prototype._createDomElement.call(this)
}

function _copyData() {
    return qx.html.Element.prototype._copyData.call(this, !0)
}

function setSource(t) {
    return this._setProperty(n, t), this
}

function getSource() {
    return this._getProperty(n)
}

function resetSource() {
    return qx.core.Environment.get(i) == c ? this._setProperty(n, l) : this._removeProperty(n, !0), this
}

function setScale(n) {
    return this._setProperty(t, n), this
}

function getScale() {
    return this._getProperty(t)
}