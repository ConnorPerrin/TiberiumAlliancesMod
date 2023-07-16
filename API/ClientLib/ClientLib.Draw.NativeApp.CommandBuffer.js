[object prototypeObject]
function GetBuffer(n) {
    $I.IWUMGU.POMOKS(n);
    $I.RIWRVV.DVCQBO();
    $I.IWUMGU.b[$I.IWUMGU.i++] = String.fromCharCode(32767);
    var t = $I.IWUMGU.b.join("");
    return $I.IWUMGU.i = 0, $I.IWUMGU.b = [], t
}

function AddUint(n) {
    var t = n;
    $I.IWUMGU.b[$I.IWUMGU.i++] = String.fromCharCode((t & 1023) + 1);
    $I.IWUMGU.b[$I.IWUMGU.i++] = String.fromCharCode((t >> 10 & 1023) + 1);
    $I.IWUMGU.b[$I.IWUMGU.i++] = String.fromCharCode((t >> 20 & 4095) + 1)
}

function PushGlyphInfo(n, t, i, r, u, f) {
    return $I.IWUMGU.VHBDQD != n && ($I.IWUMGU.VHBDQD = n, $I.IWUMGU.b[$I.IWUMGU.i++] = String.fromCharCode($I.ZAQXIF.NSBRHR), $I.IWUMGU.QJLENR(n)), $I.IWUMGU.b[$I.IWUMGU.i++] = String.fromCharCode($I.ZAQXIF.MHHNFE), $I.IWUMGU.b[$I.IWUMGU.i++] = t, $I.IWUMGU.b[$I.IWUMGU.i++] = String.fromCharCode(i + 1), $I.IWUMGU.b[$I.IWUMGU.i++] = String.fromCharCode(r + 1), $I.IWUMGU.b[$I.IWUMGU.i++] = String.fromCharCode(u + 256 + 1), $I.IWUMGU.YHLEMX(f), 0
}

function get_BridgeVersion() {
    return $I.IWUMGU.MXKBQL
}

function GetTextureData(n) {
    var r = $I.PWCOSE.PIYYSJ(n),
        o, s;
    if (r == null) return null;
    var i = $I.QOKGWR.WBFJPT(),
        u = i.VDQLZP(r),
        f = i.NANDCE(r),
        t = null,
        e = null;
    return f != null ? (o = i.RGGNHJ(f.i), t = i.SBOUYU(o.p), s = t.lastIndexOf("."), t = t.substr(0, s) + $I.IWUMGU.GCRXVD, e = $I.BDVWXD.CDYCVT(f.p)) : t = i.SBOUYU(r), $I.IWUMGU.LERFOI(t, u != null ? u.w : 0, u != null ? u.h : 0, e)
}

function TDToJSON(n, t, i, r) {
    var f = null,
        u, e;
    if (r != null)
        for (f = new Array(r.length), u = 0; u < f.length; u++) f[u] = r[u];
    return e = {
        path: n,
        width: t,
        height: i,
        coords: f
    }, JSON.stringify(e)
}

function GetGlyph(n, t) {
    var i, p, r, u, v, e, s, c, y, f, w;
    $I.IWUMGU.SNAHBG == null && ($I.IWUMGU.SNAHBG = document.createElement("canvas"), $I.IWUMGU.SNAHBG.width = 100, $I.IWUMGU.SNAHBG.height = 100);
    i = $I.IWUMGU.SNAHBG.getContext("2d");
    i.font = n;
    p = i.measureText(t);
    r = Math.floor(Math.ceil(p.width));
    i.textAlign = "center";
    i.textBaseline = "middle";
    i.fillStyle = "#FF0000";
    i.clearRect(0, 0, $I.IWUMGU.SNAHBG.width, $I.IWUMGU.SNAHBG.height);
    i.fillText(t, Math.floor(r / 2), 50);
    var l = $I.IWUMGU.SNAHBG.height,
        b = i.getImageData(0, 0, r, l),
        o = b.data,
        h = l,
        a = 0,
        k = r * l * 4;
    for (u = 0; u < k; u += 4)(o[u] | o[u + 1] | o[u + 2]) != 0 && (v = Math.floor(u / (r * 4)), h = Math.min(v, h), a = Math.max(v, a));
    for (e = a - h + 1, s = 0, e <= 0 ? (e = 1, s = 0) : s = h - 50, c = new Array(r * e * 2), y = (50 + s) * r * 4, f = 0; f < r * e * 2; f += 2) w = o[y + f * 2 + 3], c[f] = Math.floor(o[y + f * 2] * w / 256), c[f + 1] = 255;
    return $I.IWUMGU.LLSINT(r, e, s, c)
}

function GDToJSON(n, t, i, r) {
    var u = {
        width: n,
        height: t,
        offsetY: i,
        rasterData: r
    };
    return JSON.stringify(u)
}

function SetImageDataPush(n) {
    $I.PWCOSE.AWLNOA(n)
}

function SetGlyphPush(n) {
    $I.RIWRVV.BCIRDC(n)
}

function SetAtlasFileExtension(n) {
    $I.IWUMGU.GCRXVD = n
}

function Event() {}