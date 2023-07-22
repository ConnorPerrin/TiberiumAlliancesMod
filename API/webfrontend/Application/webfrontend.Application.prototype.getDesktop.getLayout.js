function getDesktop anonymous(value) {
    if (this.$$runtime_desktop !== undefined) return this.$$runtime_desktop;
    if (this.$$user_desktop !== undefined) return this.$$user_desktop;
    else return this.$$init_desktop;
}

function setDesktop anonymous() {
    this.setDesktop.$$install && this.setDesktop.$$install.call(this);
    return this.setDesktop.apply(this, arguments);
}

function resetDesktop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeDesktop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDesktop() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleDesktop anonymous() {
    return this.setDesktop(!this.getDesktop())
}

function isDesktop anonymous() {
    return this.getDesktop()
}

function renderLayout(n, f, e) {
    for (var nt = this._getLayoutChildren(), v, o, c, l, a, y, p, s, h, w, k, d, b, g = 0, tt = nt.length; g < tt; g++) {
        if (v = nt[g], o = v.getSizeHint(), c = v.getLayoutProperties(), w = v.getMarginTop(), k = v.getMarginRight(), d = v.getMarginBottom(), b = v.getMarginLeft(), l = c.left != null ? c.left : c.edge, qx.lang.Type.isString(l) && (l = Math.round(parseFloat(l) * n / 100)), y = c.right != null ? c.right : c.edge, qx.lang.Type.isString(y) && (y = Math.round(parseFloat(y) * n / 100)), a = c.top != null ? c.top : c.edge, qx.lang.Type.isString(a) && (a = Math.round(parseFloat(a) * f / 100)), p = c.bottom != null ? c.bottom : c.edge, qx.lang.Type.isString(p) && (p = Math.round(parseFloat(p) * f / 100)), l != null && y != null) s = n - l - y - b - k, s < o.minWidth ? s = o.minWidth : s > o.maxWidth && (s = o.maxWidth), l += b;
        else {
            if (s = c.width, s == null ? s = o.width : (s = Math.round(parseFloat(s) * n / 100), s < o.minWidth ? s = o.minWidth : s > o.maxWidth && (s = o.maxWidth)), l == null && y == null) switch (v.getAlignX()) {
                case t:
                    l = (n - o.width) / 2 - k;
                    break;
                case u:
                    y = 0
            }
            y != null ? l = n - s - y - k : l == null ? l = b : l += b
        }
        if (a != null && p != null) h = f - a - p - w - d, h < o.minHeight ? h = o.minHeight : h > o.maxHeight && (h = o.maxHeight), a += w;
        else {
            if (h = c.height, h == null ? h = o.height : (h = Math.round(parseFloat(h) * f / 100), h < o.minHeight ? h = o.minHeight : h > o.maxHeight && (h = o.maxHeight)), a == null && p == null) switch (v.getAlignY()) {
                case r:
                    a = (f - o.height) / 2 - d;
                    break;
                case i:
                    p = 0
            }
            p != null ? a = f - h - p - d : a == null ? a = w : a += w
        }
        l += e.left;
        a += e.top;
        v.renderLayout(l, a, s, h)
    }
}

function _computeSizeHint() {
    for (var b, k, a = 0, v = 0, y = 0, p = 0, s, h, c, l, d = this._getLayoutChildren(), i, t, r, g = this.isDesktop(), u, f, e, o, w = 0, nt = d.length; w < nt; w++) i = d[w], t = i.getLayoutProperties(), r = i.getSizeHint(), b = i.getMarginLeft() + i.getMarginRight(), k = i.getMarginTop() + i.getMarginBottom(), s = r.width + b, h = r.minWidth + b, u = t.left != null ? t.left : t.edge, u && typeof u === n && (s += u, h += u), e = t.right != null ? t.right : t.edge, e && typeof e === n && (s += e, h += e), a = Math.max(a, s), v = g ? 0 : Math.max(v, h), c = r.height + k, l = r.minHeight + k, f = t.top != null ? t.top : t.edge, f && typeof f === n && (c += f, l += f), o = t.bottom != null ? t.bottom : t.edge, o && typeof o === n && (c += o, l += o), y = Math.max(y, c), p = g ? 0 : Math.max(p, l);
    return {
        width: a,
        minWidth: v,
        height: y,
        minHeight: p
    }
}