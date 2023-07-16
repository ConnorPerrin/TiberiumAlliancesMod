function GetMouseToolType() {
    return $I.PLIBEB.SelectTouch
}

function Move(n, t) {
    return this.BYKPWN != null && this.BYKPWN.LANJTX(n, t), this.OYNZDT = n, this.DWYQMG = t, !0
}

function KeyDown() {}

function KeyUp() {}

function Down(n, t) {
    var r, u, f, s, h, c, l;
    if (this.OYNZDT = n, this.DWYQMG = t, n != this.FEXSJZ || t != this.OOVRWK) {
        if (this.FEXSJZ = Math.floor(n), this.OOVRWK = Math.floor(t), this.RMZSKB != null) {
            r = this.DZNXQH.JHNKUE();
            switch (r) {
                case $I.SOIZAH.ArmySetup:
                    u = this.DZNXQH.ZJFLKT();
                    f = u.VIXVNN(this.FEXSJZ, this.OOVRWK);
                    f != null ? (s = u.SXSKPB(f.PosX), h = u.QTQTAG(f.PosY), this.RMZSKB.LANJTX(Math.floor(this.DZNXQH.DCVCTJ(s)), Math.floor(this.DZNXQH.YMZPOC(h)))) : this.RMZSKB.LANJTX(-1, -1);
                    break;
                case $I.SOIZAH.DefenseSetup:
                case $I.SOIZAH.City:
                case $I.SOIZAH.CombatSetup:
                    var i = r == $I.SOIZAH.DefenseSetup ? this.DZNXQH.BKJSEM() : r == $I.SOIZAH.City ? this.DZNXQH.VKUOKS() : this.DZNXQH.KZMKZH(),
                        e = Math.floor(this.FEXSJZ / i.VVGOEM()),
                        o = Math.floor(this.OOVRWK / i.MWRYXH());
                    e >= 0 && o >= 0 && e < i.YJWQOV() && o < i.AKTUGZ() ? (c = e * i.VVGOEM(), l = o * i.MWRYXH(), this.RMZSKB.LANJTX(Math.floor(this.DZNXQH.DCVCTJ(c)), Math.floor(this.DZNXQH.YMZPOC(l)))) : this.RMZSKB.LANJTX(-1, -1)
            }
        }
        this.WBTBHI = this.DZNXQH.KIQLUA(n, t);
        this.GPEWGP()
    }
    return !0
}

function Up(n, t, i) {
    var u, r, f, e;
    if (this.SWWEWB != null && this.SWWEWB.WKIGJZ(n, t, i), this.OKMTXA) {
        var o = this.DZNXQH.VKUOKS(),
            s = $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR(),
            h = Math.floor(n / o.VVGOEM()),
            c = Math.floor(t / o.MWRYXH());
        if (this.DZNXQH.JHNKUE() != $I.SOIZAH.CombatSetup && s.ZUAHKT().HUETNC(11, h, c)) return !0;
        if (u = this.DZNXQH.KIQLUA(n, t), this.IRZZMI(u, this.WBTBHI)) {
            if (r = null, u.l.length > 0)
                for (r = u.l[0], f = 1; f < u.l.length; f++) u.l[f].VJTHAF() > r.VJTHAF() && (r = u.l[f]);
            this.DZNXQH.AGHKMD() != r && (r != null && r.AXKPJR() == $I.CDNXVQ.CityBuildingType && r.GWGREH() > 0 && (e = r, e.VARXFJ($I.VPNCTE.CollectResource) && (e.RXENEO($I.VPNCTE.CollectResource), r = null)), this.DZNXQH.NFJTBF(r));
            this.QEXUNJ != null && this.QEXUNJ.BXOYLL(r)
        }
        this.WBTBHI = null
    }
    return !0
}

function Activate() {
    this.JWQGEK != null && (this.JWQGEK.NSFOQM(), this.JWQGEK = null);
    $I.ILHIOR.GILABD().ODMFKV((new $I.MQGRJY).TFDQYD(this, this.TGGDVU))
}

function Deactivate() {
    this.JWQGEK != null && (this.JWQGEK.NSFOQM(), this.JWQGEK = null);
    $I.ILHIOR.GILABD().JCXIXW((new $I.MQGRJY).TFDQYD(this, this.TGGDVU));
    this.WBTBHI = null
}

function OnSelectionChange(n, t) {
    if (this.JWQGEK != null && (this.JWQGEK.NSFOQM(), this.JWQGEK = null), t != null) {
        var i = this.DZNXQH.KIJEST(),
            r = this.DZNXQH.VKUOKS(),
            f = $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR(),
            e = Math.floor(t.DGLCVK() / r.VVGOEM()),
            o = Math.floor(t.XYKFSB() / r.MWRYXH()),
            u = null;
        u = this.DZNXQH.JHNKUE() != $I.SOIZAH.CombatSetup && f.ZUAHKT().HUETNC(11, e, o) ? $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().citylayer.die) : $I.BUEVKL.QGLUJV().WJVSOL($I.BUEVKL.QGLUJV().VXAMCA().citylayer.sd);
        this.JWQGEK = (new $I.ZFKFPU).CBDLKU(i.WHQQMY(), u, Math.floor(t.DGLCVK()) + i.VVGOEM(), Math.floor(t.XYKFSB()) + i.MWRYXH(), null);
        this.JWQGEK.TYDVYV(4)
    }
}

function RemoveSelectionDecal() {
    this.JWQGEK != null && (this.JWQGEK.NSFOQM(), this.JWQGEK = null)
}

function VisUpdate() {
    var n = (new Date).getTime();
    this.JWQGEK != null && this.JWQGEK.OCAAHR(n)
}

function UpdateGridPos() {
    var n = this.DZNXQH.KIJEST();
    this.UFROKV = Math.floor(this.FEXSJZ / n.VVGOEM());
    this.MEAINR = Math.floor(this.OOVRWK / n.MWRYXH())
}

function TouchStart(n) {
    return this.XGPIIJ(n[0].X, n[0].Y)
}

function TouchMove(n) {
    return this.XNSDOS(n[0].X, n[0].Y)
}

function TouchEnd(n) {
    return this.DMYNCQ(n[0].X, n[0].Y, "left")
}

function TouchCancel() {
    return !0
}

function get_ObjectSelectionEnabled() {
    return this.OKMTXA
}

function set_ObjectSelectionEnabled(n) {
    this.OKMTXA = n
}

function add_OnMouseDown(n) {
    var t = {},
        i, r = this.RMZSKB,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.RMZSKB, t.$r = $I.TSJVQL.JXWJWI($I.VHKEDR, u, i, t), this.RMZSKB = t.a, t.$r); while (r != i)
}

function remove_OnMouseDown(n) {
    var t = {},
        i, r = this.RMZSKB,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.RMZSKB, t.$r = $I.TSJVQL.JXWJWI($I.VHKEDR, u, i, t), this.RMZSKB = t.a, t.$r); while (r != i)
}

function add_OnMouseUp(n) {
    var t = {},
        i, r = this.SWWEWB,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.SWWEWB, t.$r = $I.TSJVQL.JXWJWI($I.DYSLHG, u, i, t), this.SWWEWB = t.a, t.$r); while (r != i)
}

function remove_OnMouseUp(n) {
    var t = {},
        i, r = this.SWWEWB,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.SWWEWB, t.$r = $I.TSJVQL.JXWJWI($I.DYSLHG, u, i, t), this.SWWEWB = t.a, t.$r); while (r != i)
}

function add_OnMouseMove(n) {
    var t = {},
        i, r = this.BYKPWN,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.BYKPWN, t.$r = $I.TSJVQL.JXWJWI($I.PEPXQK, u, i, t), this.BYKPWN = t.a, t.$r); while (r != i)
}

function remove_OnMouseMove(n) {
    var t = {},
        i, r = this.BYKPWN,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.BYKPWN, t.$r = $I.TSJVQL.JXWJWI($I.PEPXQK, u, i, t), this.BYKPWN = t.a, t.$r); while (r != i)
}

function add_OnObjectSelection(n) {
    var t = {},
        i, r = this.QEXUNJ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.QEXUNJ, t.$r = $I.TSJVQL.JXWJWI($I.FCZEQV, u, i, t), this.QEXUNJ = t.a, t.$r); while (r != i)
}

function remove_OnObjectSelection(n) {
    var t = {},
        i, r = this.QEXUNJ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.QEXUNJ, t.$r = $I.TSJVQL.JXWJWI($I.FCZEQV, u, i, t), this.QEXUNJ = t.a, t.$r); while (r != i)
}