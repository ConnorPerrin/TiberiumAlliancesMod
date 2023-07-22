function round(n) {
    return Math.floor(n + .5)
}

function calculateDisplayPercentValue(n) {
    var t = n * 100;
    return t > 0 && t < 1 ? t = 1 : t > 99 && t < 100 && (t = 99), Math.round(t)
}

function formatNumbers(n, t, i) {
    var r = n,
        u;
    return (t == !0 && (r = Math.floor(r)), u = webfrontend.phe.cnc.gui.util.Numbers.__tY(), isNaN(r)) ? this.applyNF(r) : i && Math.abs(r) >= 1e6 ? qx.core.Init.getApplication().tr(f) : Math.abs(r) >= 1e3 || Math.floor(r) != r ? u.format(r) : r.toString()
}

function formatNumbersCompact(i) {
    i = isNaN(i) ? 0 : i;
    var f = qx.core.Init.getApplication(),
        u = webfrontend.phe.cnc.gui.util.Numbers.__tY();
    return isNaN(i) || (Math.abs(i) < 1e5 ? i = u.format(Math.floor(i)) : Math.abs(i) >= 1e5 && Math.abs(i) < 1e6 ? i = u.format(Math.floor(i / 100) / 10) + f.tr(a) : Math.abs(i) >= 1e6 && Math.abs(i) < 1e7 ? i = u.format(Math.floor(i / 1e3) / 1e3) + f.tr(r) : Math.abs(i) >= 1e7 && Math.abs(i) < 1e8 ? i = u.format(Math.floor(i / 1e4) / 100) + f.tr(r) : Math.abs(i) >= 1e8 && Math.abs(i) < 1e9 ? i = u.format(Math.floor(i / 1e5) / 10) + f.tr(r) : Math.abs(i) >= 1e9 && Math.abs(i) < 1e10 ? i = u.format(Math.floor(i / 1e6) / 1e3) + f.tr(t) : Math.abs(i) >= 1e10 && Math.abs(i) < 1e11 ? i = u.format(Math.floor(i / 1e7) / 100) + f.tr(t) : Math.abs(i) >= 1e11 && Math.abs(i) < 1e12 ? i = u.format(Math.floor(i / 1e8) / 10) + f.tr(t) : Math.abs(i) >= 1e12 && Math.abs(i) < 1e13 ? i = u.format(Math.floor(i / 1e9) / 1e3) + f.tr(n) : Math.abs(i) >= 1e13 && Math.abs(i) < 1e14 ? i = u.format(Math.floor(i / 1e10) / 100) + f.tr(n) : Math.abs(i) >= 1e14 && Math.abs(i) < 1e15 ? i = u.format(Math.floor(i / 1e11) / 10) + f.tr(n) : Math.abs(i) >= 1e15 && (i = u.format(Math.floor(i / 1e12)) + f.tr(n))), i.toString()
}

function formatNumbersCompactAfterMillion(n) {
    var i = qx.core.Init.getApplication(),
        t = webfrontend.phe.cnc.gui.util.Numbers.__tY();
    return isNaN(n) || (n = Math.abs(n) < 1e6 ? t.format(Math.floor(n)) : webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(n)), n.toString()
}

function formatCurrency(n, t) {
    var i = this.__ua(),
        n;
    return i.setPrefix(t + v), n = i.format(n), n.toString()
}

function applyNF(n, t) {
    var v, d, g;
    t = t || !1;
    for (var nt = qx.core.Init.getApplication(), u = n.toString(), k = [i, c, w, p, b, h, l, o, s, e], y = u.length, a = new qx.util.StringBuilder(1024), r = 0, tt = webfrontend.phe.cnc.gui.util.Numbers.__tY(); r < y && k.indexOf(u.charAt(r)) == -1;) r++;
    for (r != 0 && a.add(u.substr(0, r)); r < y;) {
        for (v = r; k.indexOf(u.charAt(r)) != -1;)
            if (r++, r > y - 1) break;
        for (d = r - v, d > 3 ? t && d > 6 ? a.add(nt.tr(f)) : a.add(tt.format(u.substr(v, r - v))) : a.add(u.substr(v, r - v)), g = r; r < y && k.indexOf(u.charAt(r)) == -1;) r++;
        a.add(u.substr(g, r - g))
    }
    return a.get()
}

function formatCoordinates(n, t) {
    for (var r = u + n, f = u + t; r.length < 3;) r = i + r;
    while (f.length < 3) f = i + f;
    return r + y + f
}