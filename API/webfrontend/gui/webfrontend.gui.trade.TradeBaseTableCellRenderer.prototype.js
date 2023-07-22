function getNumberFormat anonymous() {
    this.getNumberFormat.$$install && this.getNumberFormat.$$install();
    return this.getNumberFormat.apply(this, arguments);
}

function setNumberFormat anonymous() {
    this.setNumberFormat.$$install && this.setNumberFormat.$$install.call(this);
    return this.setNumberFormat.apply(this, arguments);
}

function resetNumberFormat() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeNumberFormat() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeNumberFormat() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _getContentHtml(t) {
    var r = this.getNumberFormat();
    return r ? t.value || t.value == 0 ? r.format(t.value) : n : t.value == 0 ? i : t.value || n
}

function _getCellClass() {
    return t
}

function _getCellStyle(s) {
    var h = {
            "text-align": n,
            color: n,
            "font-style": n,
            "font-weight": n
        },
        w = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(s.rowData[t]),
        p, a, c;
    if (w != null) {
        var b = parseInt(s.rowData[i], 10),
            v = parseInt(s.rowData[f], 10),
            y = b / v,
            l = n;
        v > 0 && (y >= 1 ? l = e : y >= .75 && (l = o));
        p = webfrontend.theme.Color.colors[l];
        h.color = p
    }
    a = [];
    for (c in h) h[c] && a.push(c, r, h[c], u);
    return a.join(n)
}