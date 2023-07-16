function CanRepairAll(n) {
    var t;
    return n == $I.SOIZAH.UseCurrent && (n = $I.ILHIOR.GILABD().JHNKUE()), this.LMASUR = $I.DUXUSX.IWPNRA(this.KCMNZY, 0, n, this.CANDGA(), this.QXLFNH(), this.DDCMYG(), this.QSRSTB()), this.ELKYME(n), t = this.LMASUR != null && (!this.KCMNZY.QGOTUP() || $I.DUXUSX.SXGFQS(this.KCMNZY.UBTDFB(), n)), $I.DUXUSX.SXGFQS(this.KCMNZY.UBTDFB(), n) && this.KCMNZY.TSHNME() && (t = !1), t
}

function RepairAll(n) {
    var i = n,
        u, r, f, t;
    if (i == $I.SOIZAH.UseCurrent && (i = $I.ILHIOR.GILABD().JHNKUE()), this.OUIQYW(i) && this.LMASUR != null) {
        u = this.LMASUR.d;
        r = {
            k: null,
            v: null
        };
        for (f in u) r.k = f, r.v = u[f], t = r.v, t.m_oEntity.XJJYXY(t.m_dHitpoints), this.KOTYLT(t.m_oEntity.UQGPFX()), this.KCMNZY.CZJJDL(t.m_dctResTypeValueFullRepairCost, !1);
        this.LMASUR = null;
        this.KCMNZY.WLFGKP();
        this.OGGSRB();
        this.KCMNZY.UVFOIV(1);
        this.KCMNZY.ROPWEN();
        this.KCMNZY.ETIPYV() || ClientLib.Net.CommunicationManager.GetInstance().SendCommand("Repair", {
            cityid: this.KCMNZY.UQGPFX(),
            entityId: -1,
            mode: i
        }, (new $I.JNOYHJ).TFDQYD(this, this.VYKJFU), null, !0)
    }
    return !1
}

function UpdateCityData() {
    var n = 0;
    n |= 2;
    n |= 1;
    n |= 240;
    this.KCMNZY.MMOSHY(n, !1, null)
}

function get_CachedFullRepairAllCost() {
    return this.RXEBWV
}

function get_CachedRepairAllUnitInfos() {
    return this.LMASUR
}