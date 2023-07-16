function SetGamedata(n) {
    var i, t, r;
    this.KFCVDD = n;
    i = this.KFCVDD.Config;
    t = {
        k: null,
        v: null
    };
    for (r in i) t.k = r, t.v = i[r], this.YLJQCH.GXVKTX(t.v.l, t.v.s), this.TQPQAC.GXVKTX(t.v.s, t.v.l), this.PRGLVJ.GXVKTX(t.v.l, t.v.d)
}

function ApplyResourceModifiers() {
    var o = this.KFCVDD.Tech,
        u = {
            k: null,
            v: null
        },
        f, e, i, t, r, n;
    for (f in o)
        for (u.k = f, u.v = o[f], e = u.v, i = 0; i < e.r.length; i++)
            if (t = e.r[i], t != null && t.rr != null)
                for (r = 0; r < t.rr.length; r++) n = t.rr[r], n.t == 6 ? n.c = Math.floor(n.c * $I.XOJOCY.VONSQV()) : n.t == 3 && (n.c = Math.floor(n.c * $I.XOJOCY.HMWMLM()))
}

function GetGamedata() {
    return this.KFCVDD
}

function GetConfigLongName(n) {
    var t = {},
        i;
    return (t.$r = this.TQPQAC.ZOXRAI(n, t), i = t.b, t.$r) ? i : null
}

function GetConfigShortName(n) {
    var t = {},
        i;
    return (t.$r = this.YLJQCH.ZOXRAI(n, t), i = t.b, t.$r) ? i : null
}

function GetConfigDefaultValue(n) {
    var t = {},
        i;
    return $I.CVRAYR.VAMLQD().TZZENG().SPVTMU() ? "ui/system/tutorialcancelled" == n ? !1 : (t.$r = this.PRGLVJ.ZOXRAI(n, t), i = t.b, t.$r) ? i : null : (t.$r = this.PRGLVJ.ZOXRAI(n, t), i = t.b, t.$r) ? i : null
}

function GetNerfModifierByLevel(n) {
    var t;
    return (n = Math.min(n, this.KFCVDD.MaxNerfModifierLevel), !(t = this.KFCVDD.NerfModifier[n], t == undefined ? !1 : !0)) ? null : t
}

function GetCombatNerfModifierByLevel(n) {
    var t;
    return (n = Math.min(n, this.KFCVDD.MaxNerfModifierLevel), t = this.KFCVDD.NerfModifier[n], t == undefined ? !1 : !0) ? t.c : 0
}

function GetEconomyNerfModifierByLevel(n) {
    var t;
    return (n = Math.min(n, this.KFCVDD.MaxNerfModifierLevel), t = this.KFCVDD.NerfModifier[n], t == undefined ? !1 : !0) ? t.e : 0
}

function GetResource(n) {
    return this.KFCVDD.resources[n]
}

function GetSupportTechs_Obj(n) {
    var t;
    return (t = this.KFCVDD.supportTechs[n], t == undefined ? !1 : !0) ? t : null
}

function GetResourceIconPath(n) {
    return $I.QOKGWR.WBFJPT().SBOUYU(this.KFCVDD.resources[n].i)
}

function GetServerSideTechs() {
    var n = $I.CVRAYR.VAMLQD().ONGTRQ();
    if (n != null) switch (n.PCFWKQ()) {
        case $I.KGPDNC.GDIFaction:
            return $I.BDVWXD.CDYCVT(this.KFCVDD.gdiTechIds);
        case $I.KGPDNC.NODFaction:
            return $I.BDVWXD.CDYCVT(this.KFCVDD.nodTechIds);
        case $I.KGPDNC.FORFaction:
            return $I.BDVWXD.CDYCVT(this.KFCVDD.npcTechIds)
    }
    return null
}

function GetTech_Obj(n) {
    var t;
    return (t = this.KFCVDD.Tech[n], t == undefined ? !1 : !0) ? t : null
}

function GetUnit_Obj(n) {
    var t;
    return (t = this.KFCVDD.units[n], t == undefined ? !1 : !0) ? t : null
}

function GetAmmoPoolById(n) {
    var t = 0;
    return (t = this.KFCVDD.UnitAmmoPool[n], t == undefined ? !1 : !0) ? t : 0
}

function GetFactionTitles(n) {
    var t;
    return (t = this.KFCVDD.PlayerTitles[n], t == undefined ? !1 : !0) ? t : null
}

function GetPlayerTitleByLevel(n, t) {
    var i, r;
    return (i = this.KFCVDD.PlayerTitles[n], i == undefined ? !1 : !0) && (r = i[t], r == undefined ? !1 : !0) ? r : null
}

function PreloadEffect(n) {
    var t;
    (t = this.KFCVDD.effects[n], t == undefined ? !1 : !0) && $I.CJXMSB.AQGJPC(t)
}

function GetMissionLines() {
    return this.IMOYFI == null && this.DLVQNY(), this.IMOYFI
}