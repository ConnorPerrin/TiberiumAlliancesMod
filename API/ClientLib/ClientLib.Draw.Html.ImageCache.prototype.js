function get_AddToDOM() {
    return this.DNUPVA
}

function set_AddToDOM(n) {
    this.DNUPVA = n
}

function ShowImageCache(n, t, i, r, u) {
    var f = this.FGLOFB;
    f.parentElement == null && (f.style.position = "fixed", f.style.left = n.toString() + "px", f.style.top = t.toString() + "px", f.style.width = i.toString() + "px", f.style.height = r.toString() + "px", f.style.zIndex = u, document.body.appendChild(f))
}

function HideImageCache() {
    var n = this.FGLOFB;
    n.parentElement != null && n.parentElement.removeChild(n)
}

function AddOriginImage(n) {
    var t = document.createElement("img");
    t.src = $I.QOKGWR.WBFJPT().OIBAMH(n);
    this.PNBCIU(n, t)
}

function AddImage(n, t) {
    var i;
    $I.EUNQAF.SGXKWF(n) || (this.LUZMFJ.UHNVSA(n, t), this.DNUPVA && (i = t, i.style.position = "absolute", this.FGLOFB.appendChild(t)), t.complete || this.SSUFGQ.l.push(t))
}

function GetImage(n) {
    var i = {},
        t, r;
    return $I.EUNQAF.SGXKWF(n) ? null : ((i.$r = this.LUZMFJ.ZOXRAI(n, i), t = i.b, i.$r) && t != null || (t = document.createElement("img"), t.src = $I.QOKGWR.WBFJPT().SBOUYU(n), this.LUZMFJ.UHNVSA(n, t), this.DNUPVA && (r = t, r.style.position = "absolute", this.FGLOFB.appendChild(t)), t.complete || this.SSUFGQ.l.push(t)), t)
}

function IsInCache(n) {
    return $I.EUNQAF.SGXKWF(n) ? !1 : this.LUZMFJ.XOHVCR(n)
}

function GetImageLoaded(n) {
    var t = this.QGEIFL(n);
    return t != null && t.complete ? t : null
}

function AddImageForPreload(n) {
    this.LUZMFJ.XOHVCR(n) || (this.LUZMFJ.GXVKTX(n, null), this.KVPAEC.GDQCYY(n))
}

function get_PreloadChannels() {
    return this.APYEMJ
}

function set_PreloadChannels(n) {
    this.APYEMJ = n
}

function get_OutstandingFiles() {
    return this.KVPAEC.KPHGWV() + this.SSUFGQ.l.length
}

function add_OnImageLoaded(n) {
    var t = {},
        i, r = this.JSDPIH,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.JSDPIH, t.$r = $I.TSJVQL.JXWJWI($I.TKBDRK, u, i, t), this.JSDPIH = t.a, t.$r); while (r != i)
}

function remove_OnImageLoaded(n) {
    var t = {},
        i, r = this.JSDPIH,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.JSDPIH, t.$r = $I.TSJVQL.JXWJWI($I.TKBDRK, u, i, t), this.JSDPIH = t.a, t.$r); while (r != i)
}