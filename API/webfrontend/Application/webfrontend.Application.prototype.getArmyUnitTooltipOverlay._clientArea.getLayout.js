function getAlignY anonymous(value) {
    if (this.$$runtime_alignY !== undefined) return this.$$runtime_alignY;
    if (this.$$user_alignY !== undefined) return this.$$user_alignY;
    else return this.$$init_alignY;
}

function setAlignY anonymous(value) {
    this.$$setAlignYImpl.apply(this, arguments);
    return value;
}

function resetAlignY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAlignY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAlignY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAlignY() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getAlignX anonymous(value) {
    if (this.$$runtime_alignX !== undefined) return this.$$runtime_alignX;
    if (this.$$user_alignX !== undefined) return this.$$user_alignX;
    else return this.$$init_alignX;
}

function setAlignX anonymous(value) {
    this.$$setAlignXImpl.apply(this, arguments);
    return value;
}

function resetAlignX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initAlignX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeAlignX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeAlignX() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSpacing anonymous(value) {
    if (this.$$runtime_spacing !== undefined) return this.$$runtime_spacing;
    if (this.$$user_spacing !== undefined) return this.$$user_spacing;
    else return this.$$init_spacing;
}

function setSpacing anonymous(value) {
    this.$$setSpacingImpl.apply(this, arguments);
    return value;
}

function resetSpacing() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initSpacing() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeSpacing() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSpacing() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSeparator anonymous(value) {
    if (this.$$runtime_separator !== undefined) return this.$$runtime_separator;
    if (this.$$user_separator !== undefined) return this.$$user_separator;
    else return null;
}

function setSeparator anonymous() {
    this.setSeparator.$$install && this.setSeparator.$$install.call(this);
    return this.setSeparator.apply(this, arguments);
}

function resetSeparator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initSeparator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeSeparator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSeparator() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getReversed anonymous(value) {
    if (this.$$runtime_reversed !== undefined) return this.$$runtime_reversed;
    if (this.$$user_reversed !== undefined) return this.$$user_reversed;
    else return this.$$init_reversed;
}

function setReversed anonymous(value) {
    this.$$setReversedImpl.apply(this, arguments);
    return value;
}

function resetReversed() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initReversed() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeReversed() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeReversed() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleReversed anonymous() {
    return this.setReversed(!this.getReversed())
}

function isReversed anonymous() {
    return this.getReversed()
}

function _applyReversed() {
    this._invalidChildrenCache = !0;
    this._applyLayoutChange()
}

function renderLayout(n, i, u) {
    var f, h, d, p, l, w, g, nt, ht, tt, it, s, e, ct, rt, o, ut, ft, et, ot, st;
    this._invalidChildrenCache && this.__nN();
    var c = this.__iA,
        b = c.length,
        v = qx.ui.layout.Util,
        y = this.getSpacing(),
        a = this.getSeparator(),
        k;
    for (k = a ? v.computeVerticalSeparatorGaps(c, y, a) : v.computeVerticalGaps(c, y, !0), p = [], l = k, f = 0; f < b; f += 1) d = this.__rJ[f], e = c[f].getSizeHint(), o = d != null ? Math.floor((i - k) * d) : e.height, o < e.minHeight ? o = e.minHeight : o > e.maxHeight && (o = e.maxHeight), p.push(o), l += o;
    if (this.__nM && l != i) {
        for (w = {}, ht = l > i, f = 0; f < b; f += 1) g = this.__nL[f], g > 0 && (e = c[f].getSizeHint(), w[f] = {
            min: e.minHeight,
            value: p[f],
            max: e.maxHeight,
            flex: g
        }, ht && (tt = c[f].getLayoutProperties(), tt && tt.flexShrink && (w[f].min = 0)));
        it = v.computeFlexOffsets(w, i, l);
        for (f in it) nt = it[f].offset, p[f] += nt, l += nt
    }
    for (s = c[0].getMarginTop(), l < i && this.getAlignY() != t && (s = i - l, this.getAlignY() === r && (s = Math.round(s / 2))), this._clearSeparators(), a && (ot = qx.theme.manager.Decoration.getInstance().resolve(a).getInsets(), st = ot.top + ot.bottom), f = 0; f < b; f += 1) h = c[f], o = p[f], e = h.getSizeHint(), ft = h.getMarginLeft(), et = h.getMarginRight(), rt = Math.max(e.minWidth, Math.min(n - ft - et, e.maxWidth)), ct = v.computeHorizontalAlignOffset(h.getAlignX() || this.getAlignX(), rt, n, ft, et), f > 0 && (a ? (s += ut + y, this._renderSeparator(a, {
        top: s + u.top,
        left: u.left,
        height: st,
        width: n
    }), s += st + y + h.getMarginTop()) : s += v.collapseMargins(y, ut, h.getMarginTop())), h.renderLayout(ct + u.left, s + u.top, rt, o), s += o, ut = h.getMarginBottom()
}

function _computeSizeHint() {
    var t, p, w, h, c, l, a;
    this._invalidChildrenCache && this.__nN();
    var v = qx.ui.layout.Util,
        r = this.__iA,
        u = 0,
        y = 0,
        e = 0,
        o = 0,
        s = 0,
        f, n, i;
    for (t = 0, p = r.length; t < p; t += 1) f = r[t], n = f.getSizeHint(), y += n.height, w = this.__nL[t], h = this.__rJ[t], w ? u += n.minHeight : h ? e = Math.max(e, Math.round(n.minHeight / h)) : u += n.height, i = f.getMarginLeft() + f.getMarginRight(), n.width + i > s && (s = n.width + i), n.minWidth + i > o && (o = n.minWidth + i);
    return u += e, c = this.getSpacing(), l = this.getSeparator(), a = l ? v.computeVerticalSeparatorGaps(r, c, l) : v.computeVerticalGaps(r, c, !0), {
        minHeight: u + a,
        height: y + a,
        minWidth: o,
        width: s
    }
}