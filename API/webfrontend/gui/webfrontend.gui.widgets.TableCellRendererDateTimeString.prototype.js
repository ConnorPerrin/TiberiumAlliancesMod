function getUseAutoAlign anonymous() {
    this.getUseAutoAlign.$$install && this.getUseAutoAlign.$$install();
    return this.getUseAutoAlign.apply(this, arguments);
}

function setUseAutoAlign anonymous(value) {
    this.$$setUseAutoAlignImpl.apply(this, arguments);
    return value;
}

function resetUseAutoAlign() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeUseAutoAlign() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeUseAutoAlign() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleUseAutoAlign anonymous() {
    return this.setUseAutoAlign(!this.getUseAutoAlign())
}

function isUseAutoAlign anonymous() {
    return this.getUseAutoAlign()
}

function _getStyleFlags(n) {
    return this.getUseAutoAlign() && typeof n.value == t ? qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT : 0
}

function _getCellClass(t) {
    var f = qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this, t),
        e;
    return f ? (e = this._getStyleFlags(t), e & qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT && (f += r), e & qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD && (f += i), e & qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC && (f += u), f) : n
}

function _getContentHtml(n) {
    return qx.bom.String.escape(this._formatValue(n))
}

function _formatValue(n) {
    var t = n.value;
    return webfrontend.phe.cnc.Util.getDateTimeString(new Date(t), this.__bcv, this.__bcw, this.__bcx)
}

function resetDefaultCellStyle anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    if (this.$$user_defaultCellStyle !== undefined) delete this.$$user_defaultCellStyle;
}

function _formatValue(n) {
    var t = n.value;
    return webfrontend.phe.cnc.Util.getDateTimeString(new Date(t), this.__bcv, this.__bcw, this.__bcx)
}