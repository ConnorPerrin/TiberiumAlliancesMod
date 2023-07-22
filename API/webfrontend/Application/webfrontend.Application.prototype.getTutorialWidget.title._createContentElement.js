function _applyProperty(t, i) {
    if (qx.html.Element.prototype._applyProperty.call(this, t, i), t == n) {
        var r = this.getDomElement();
        qx.bom.Label.setValue(r, i)
    }
}

function _createDomElement() {
    var t = this.__mx,
        n = qx.bom.Label.create(this._content, t);
    return n.style.overflow = i, n
}

function _copyData() {
    return qx.html.Element.prototype._copyData.call(this, !0)
}

function setRich(n) {
    var i = this.getDomElement();
    if (i) throw new Error(t);
    return (n = !!n, this.__mx == n) ? this : (this.__mx = n, this)
}

function setValue(t) {
    return this._setProperty(n, t), this
}

function getValue() {
    return this._getProperty(n)
}

function resetValue() {
    return this._removeProperty(n)
}