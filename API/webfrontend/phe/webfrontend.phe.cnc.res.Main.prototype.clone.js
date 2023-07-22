function cacheImage(n) {
    if (this.imageCache == null && (this.imageCache = {}), !this.imageCache.hasOwnProperty(n)) {
        var t = document.createElement(r);
        t.src = n;
        this.imageCache[n] = t
    }
}

function addData(n) {
    qx.lang.Object.mergeWith(this, n)
}

function generateCityNames() {
    var h = qx.core.Init.getApplication(),
        l, c, r, a;
    this.knownCityNames = {};
    for (l in this.dungeons)
        for (c = this.dungeons[l], r = 1; r <= 10; r++) a = h.tr(o, c.dn, r), this.knownCityNames[c.n + f + r.toString()] = a;
    this.knownCityNames[e] = h.tr(t);
    this.knownCityNames[n] = h.tr(s);
    this.knownCityNames[u] = h.tr(i)
}