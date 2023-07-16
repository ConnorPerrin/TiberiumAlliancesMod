function RegisterArchive(n) {
    this.CJQNJE.l.push(n)
}

function RegisterAtlas(n) {
    this.HFJRDY = n
}

function SetStorageData(n, t) {
    this.YRCKPX = n;
    this.YZXYWS = t
}

function SetPrefix(n) {
    this.XJAHNS = n
}

function GetMetaData(n) {
    for (var i, t = this.CJQNJE.l.length - 1; t >= 0; t--)
        if (i = this.CJQNJE.l[t].VDQLZP(n), i != null) return i;
    return null
}

function ResolveAlias(n) {
    return qx.util.AliasManager.getInstance().resolve(n).replace(frontendBaseFolder, "")
}

function GetPhysicalPath(n) {
    var i, u, r, t;
    if (n == null && (n = "webfrontend/ui/common/blank.gif"), n = $I.QOKGWR.ONQYCX(n), this.YRCKPX != null)
        for (i = this.CJQNJE.l.length - 1; i >= 0; i--)
            if (u = this.CJQNJE.l[i].FZIFFM(n), u != null) return this.YRCKPX + u;
    for (r = this.CJQNJE.l.length - 1; r >= 0; r--)
        if (t = this.CJQNJE.l[r].SBOUYU(n), t != null) return this.XJAHNS != null && (t = this.XJAHNS + t), t;
    return this.XJAHNS == null ? "" : this.XJAHNS + n
}

function GetOriginPhysicalPath(n) {
    var t, r, i, u;
    if (n == null && (n = "webfrontend/ui/common/blank.gif"), n = $I.QOKGWR.ONQYCX(n), this.YZXYWS != null)
        for (t = this.CJQNJE.l.length - 1; t >= 0; t--)
            if (r = this.CJQNJE.l[t].FZIFFM(n), r != null) return this.YZXYWS + r;
    for (i = this.CJQNJE.l.length - 1; i >= 0; i--)
        if (u = this.CJQNJE.l[i].SBOUYU(n), u != null) return u;
    return ""
}