function PrintNameValue(n, t) {
    console.log(n + ": " + String(t))
}

function get_TrackedMissionSteps() {
    return this.VMRVBA
}

function get_CategoryOrder() {
    return this.DYBQEA
}

function get_TaskTypeOrder() {
    return this.KSLCRA
}

function GetCurrentMission(n) {
    return this.MLOVMJ.XOHVCR(n) ? this.MLOVMJ.d[n] : null
}

function GetMission(n) {
    for (var t in {
            d: this.MLOVMJ
        }.d.d)
        if (this.MLOVMJ.d[t].XOHVCR(n)) return this.MLOVMJ.d[t].d[n];
    return null
}

function GetMissionStep(n) {
    var t = {},
        i = null;
    return (t.$r = this.LHINUU.ZOXRAI(n, t), i = t.b, t.$r) || (t.$r = this.OUGECJ.ZOXRAI(n, t), i = t.b, t.$r), i
}

function CompleteStep(n, t, i, r) {
    var f = this.FUUDPI(t),
        e;
    if (f != null && f.EJHJKP(i)) {
        if (this.LHINUU.d[i].EIRPQI()) {
            var h = f.ZVYJEZ(),
                o = !1,
                s = h.d,
                u = {
                    k: null,
                    v: null
                };
            for (e in s) u.k = e, u.v = s[e], this.OUGECJ.XOHVCR(u.v.NPWBYT()) ? this.OUGECJ.XUDPAL(u.v.NPWBYT()) : this.LHINUU.XOHVCR(u.v.NPWBYT()) && this.LHINUU.XUDPAL(u.v.NPWBYT()), this.VMRVBA.XOHVCR(i) && (this.VMRVBA.XUDPAL(i), o = !0);
            o && this.TWJQAQ != null && this.TWJQAQ.FOWLVG()
        }
        r > 0 ? f.GMTKBN(i, r) : f.FFEOYE(i);
        this.MLOVMJ.d[n].XUDPAL(t);
        this.BSDEMX != null && this.BSDEMX.FOWLVG()
    }
}

function GetClaimableCount() {
    return this.LHINUU == null ? 0 : this.LHINUU.c
}

function GetMissionCount() {
    var t = 0,
        i = this.MLOVMJ.d,
        n = {
            k: null,
            v: null
        };
    for (var r in i) n.k = r, n.v = i[r], n.v != null && (t += n.v.c);
    return t
}

function CanTrackSteps() {
    return !0
}

function TrackStep(n, t) {
    n != null && (!t || this.OVRFIE()) && (t ? this.VMRVBA.UHNVSA(n.NPWBYT(), n) : this.VMRVBA.XOHVCR(n.NPWBYT()) && this.VMRVBA.XUDPAL(n.NPWBYT()), this.TWJQAQ != null && this.TWJQAQ.FOWLVG())
}

function GetActiveMissionStepIds() {
    var i = $I.UDAQKL.DNVCCU($I.YJUUCR, this.OUGECJ.c + this.LHINUU.c),
        f = 0,
        n = this.OUGECJ.d,
        r = {
            k: null,
            v: null
        },
        t, u;
    for (t in n) r.k = t, r.v = n[t], i[f++] = r.k;
    t = this.LHINUU.d;
    n = {
        k: null,
        v: null
    };
    for (u in t) n.k = u, n.v = t[u], i[f++] = n.k;
    return i
}

function MissionNeedsMoreFreeSlots() {
    var r = $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR(),
        f, e, i, o, t, h;
    if (r == null) return !1;
    var c = r.ZXZWSV() - r.UWTCMA(),
        n = !1,
        s = this.OUGECJ.d,
        u = {
            k: null,
            v: null
        };
    for (f in s) {
        u.k = f;
        u.v = s[f];
        e = u.v.HMSLPW().d;
        i = {
            k: null,
            v: null
        };
        for (o in e) {
            i.k = o;
            i.v = e[o];
            t = i.v;
            h = t.ZXDNDJ() - Math.floor(.5 + t.IBTKMJ() * t.ZXDNDJ());
            switch (t.IQHLDR()) {
                case $I.OBUJAM.CheckBuildingType:
                    n = h > c
            }
            if (n) break
        }
        if (n) return n
    }
    return n
}

function add_MissionUpdated(n) {
    var t = {},
        i, r = this.BSDEMX,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.BSDEMX, t.$r = $I.TSJVQL.JXWJWI($I.UXYYVH, u, i, t), this.BSDEMX = t.a, t.$r); while (r != i)
}

function remove_MissionUpdated(n) {
    var t = {},
        i, r = this.BSDEMX,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.BSDEMX, t.$r = $I.TSJVQL.JXWJWI($I.UXYYVH, u, i, t), this.BSDEMX = t.a, t.$r); while (r != i)
}

function add_MissionTrackerUpdate(n) {
    var t = {},
        i, r = this.TWJQAQ,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.TWJQAQ, t.$r = $I.TSJVQL.JXWJWI($I.ZLLMMF, u, i, t), this.TWJQAQ = t.a, t.$r); while (r != i)
}

function remove_MissionTrackerUpdate(n) {
    var t = {},
        i, r = this.TWJQAQ,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.TWJQAQ, t.$r = $I.TSJVQL.JXWJWI($I.ZLLMMF, u, i, t), this.TWJQAQ = t.a, t.$r); while (r != i)
}

function add_MissionTrackerTaskDone(n) {
    var t = {},
        i, r = this.MGOXKX,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.MGOXKX, t.$r = $I.TSJVQL.JXWJWI($I.EMLWME, u, i, t), this.MGOXKX = t.a, t.$r); while (r != i)
}

function remove_MissionTrackerTaskDone(n) {
    var t = {},
        i, r = this.MGOXKX,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.MGOXKX, t.$r = $I.TSJVQL.JXWJWI($I.EMLWME, u, i, t), this.MGOXKX = t.a, t.$r); while (r != i)
}

function add_MissionRandomRewardClaimed(n) {
    var t = {},
        i, r = this.FZNIHB,
        u;
    do i = r, u = $I.OJGKRE.ZEWLWQ(i, n), r = (t.a = this.FZNIHB, t.$r = $I.TSJVQL.JXWJWI($I.AZWLKD, u, i, t), this.FZNIHB = t.a, t.$r); while (r != i)
}

function remove_MissionRandomRewardClaimed(n) {
    var t = {},
        i, r = this.FZNIHB,
        u;
    do i = r, u = $I.OJGKRE.VPYYQK(i, n), r = (t.a = this.FZNIHB, t.$r = $I.TSJVQL.JXWJWI($I.AZWLKD, u, i, t), this.FZNIHB = t.a, t.$r); while (r != i)
}