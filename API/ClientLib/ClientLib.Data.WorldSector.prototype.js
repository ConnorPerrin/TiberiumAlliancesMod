function SetDetails(n, t) {
    var v = $I.PHKAYY.OFXTJO(n, t),
        i = v & 31,
        r = v >> 5 & 31,
        u = v >> 10,
        e, s, l, f, o, y, h, c, a;
    switch (u) {
        case $I.RZUVTA.None:
            return this.WQPGLO.XUDPAL(r << 16 | i), this.OTCAPV.YOIHBW(this.YJLBSQ * 32 + i, this.GVOSAT * 32 + r, $I.CXWCTA.Player, 0, 0, 0, !1);
        case $I.RZUVTA.City:
            return (e = (new $I.VRWICV).LSLDJB(u, this, n, t + 2), this.WQPGLO.UHNVSA(r << 16 | i, e), e.worldId = $I.NZIFZB.XKYIRQ(this.YJLBSQ * 32 + i, this.GVOSAT * 32 + r), s = this.ISCHNW.d[e.IYYVIM], s == null) ? !1 : (l = s.ZWLTDB != 0 ? this.XVSIYI.d[s.ZWLTDB] : null, this.OTCAPV.YOIHBW(this.YJLBSQ * 32 + i, this.GVOSAT * 32 + r, l != null ? $I.CXWCTA.Alliance : $I.CXWCTA.Player, l != null ? l.MGDTER : s.SHCMPC, e.FNRKZP, e.FVOYDT, !0));
        case $I.RZUVTA.NewPlayerSlot:
            return this.WQPGLO.UHNVSA(r << 16 | i, (new $I.TAWLLV).HSJWWL(u, this.OTCAPV, n, t + 2)), this.OTCAPV.YOIHBW(this.YJLBSQ * 32 + i, this.GVOSAT * 32 + r, $I.CXWCTA.StartSlot, 0, 2, 1, !0);
        case $I.RZUVTA.NPCBase:
            return f = (new $I.EKJKJQ).HSJWWL(u, this.OTCAPV, n, t + 2), this.WQPGLO.UHNVSA(r << 16 | i, f), f.worldId = $I.NZIFZB.XKYIRQ(this.YJLBSQ * 32 + i, this.GVOSAT * 32 + r), f.posX = this.YJLBSQ * 32 + i, f.posY = this.GVOSAT * 32 + r, this.OTCAPV.YOIHBW(this.YJLBSQ * 32 + i, this.GVOSAT * 32 + r, $I.CXWCTA.NPC, 0, f.RAGYYA, f.VHOUOP, !0);
        case $I.RZUVTA.NPCCamp:
            return (o = (new $I.OVMWCX).HSJWWL(u, this.OTCAPV, n, t + 2), this.WQPGLO.UHNVSA(r << 16 | i, o), o.worldId = $I.NZIFZB.XKYIRQ(this.YJLBSQ * 32 + i, this.GVOSAT * 32 + r), o.posX = this.YJLBSQ * 32 + i, o.posY = this.GVOSAT * 32 + r, o.YBZQFQ == $I.UICJRN.Destroyed) ? this.OTCAPV.YOIHBW(this.YJLBSQ * 32 + i, this.GVOSAT * 32 + r, $I.CXWCTA.Player, 0, 0, 0, !1) : this.OTCAPV.YOIHBW(this.YJLBSQ * 32 + i, this.GVOSAT * 32 + r, $I.CXWCTA.Player, 0, 0, 0, !0);
        case $I.RZUVTA.PointOfInterest:
            return y = (new $I.EKVSOC).HVBCTM(u, this.OTCAPV, this, n, t + 2), this.WQPGLO.UHNVSA(r << 16 | i, y), y.worldId = $I.NZIFZB.XKYIRQ(this.YJLBSQ * 32 + i, this.GVOSAT * 32 + r), this.OTCAPV.YOIHBW(this.YJLBSQ * 32 + i, this.GVOSAT * 32 + r, $I.CXWCTA.Player, 0, 0, 0, !0);
        case $I.RZUVTA.Ruin:
            return (h = (new $I.XXYUBQ).HSJWWL(u, this.OTCAPV, n, t + 2), this.WQPGLO.UHNVSA(r << 16 | i, h), c = this.ISCHNW.d[h.DFMMEX], c == null) ? !1 : (a = c.ZWLTDB != 0 ? this.XVSIYI.d[c.ZWLTDB] : null, this.OTCAPV.YOIHBW(this.YJLBSQ * 32 + i, this.GVOSAT * 32 + r, a != null ? $I.CXWCTA.Alliance : $I.CXWCTA.Player, a != null ? a.MGDTER : c.SHCMPC, h.PNFWHV, h.NUUUIV, !0))
    }
    return this.WQPGLO.UHNVSA(r << 16 | i, (new $I.SGECSH).ICGRXN(u, this.OTCAPV)), !1
}

function get_Id() {
    return this.LZXDQA
}

function get_SectorX() {
    return this.YJLBSQ
}

function get_SectorY() {
    return this.GVOSAT
}

function get_Version() {
    return this.CGWSQA
}

function get_TerrainDetails() {
    return this.RYNAJM
}

function get_Terrain() {
    return this.FYBPXP
}

function GetUpdateFlags(n) {
    var t = 0;
    return n && this.RYNAJM == null && (t |= 1), this.FYBPXP == null && (t |= 2), t
}

function GetObject(n, t) {
    var i = {},
        r;
    return (i.$r = this.WQPGLO.ZOXRAI(t << 16 | n, i), r = i.b, i.$r) ? r : null
}

function GetPOIs() {
    var t = (new $I.UCRMVA).SLPWTI(),
        i = this.WQPGLO.d,
        n = {
            k: null,
            v: null
        };
    for (var r in i) n.k = r, n.v = i[r], n.v.Type == $I.RZUVTA.PointOfInterest && t.l.push(n.v);
    return t
}

function GetCities() {
    var t = (new $I.UCRMVA).SLPWTI(),
        i = this.WQPGLO.d,
        n = {
            k: null,
            v: null
        };
    for (var r in i) n.k = r, n.v = i[r], n.v.Type == $I.RZUVTA.City && t.l.push(n.v);
    return t
}

function GetNPCBases() {
    var t = (new $I.UCRMVA).SLPWTI(),
        i = this.WQPGLO.d,
        n = {
            k: null,
            v: null
        };
    for (var r in i) n.k = r, n.v = i[r], n.v.Type == $I.RZUVTA.NPCBase && t.l.push(n.v);
    return t
}

function GetNPCCamps() {
    var t = (new $I.UCRMVA).SLPWTI(),
        i = this.WQPGLO.d,
        n = {
            k: null,
            v: null
        };
    for (var r in i) n.k = r, n.v = i[r], n.v.Type == $I.RZUVTA.NPCCamp && t.l.push(n.v);
    return t
}

function GetNPCOutposts() {
    var t = (new $I.UCRMVA).SLPWTI(),
        i = this.WQPGLO.d,
        n = {
            k: null,
            v: null
        };
    for (var r in i) n.k = r, n.v = i[r], n.v.Type == $I.RZUVTA.Outpost && t.l.push(n.v);
    return t
}

function GetPlayerId(n) {
    var t = {},
        i;
    return (t.$r = this.ISCHNW.ZOXRAI(n, t), i = t.b, t.$r) ? i.SHCMPC : 0
}

function GetPlayerAllianceId(n) {
    var t = {},
        i, r;
    return (t.$r = this.ISCHNW.ZOXRAI(n, t), i = t.b, t.$r) ? (t.$r = this.XVSIYI.ZOXRAI(i.ZWLTDB, t), r = t.b, t.$r) ? r.MGDTER : 0 : 0
}

function GetPlayer(n) {
    var t = {},
        i;
    return (t.$r = this.ISCHNW.ZOXRAI(n, t), i = t.b, t.$r) ? i : null
}

function GetAlliance(n) {
    var t = {},
        i;
    return (t.$r = this.XVSIYI.ZOXRAI(n, t), i = t.b, t.$r) ? i : null
}

function ConvertToWorldX(n) {
    return this.YJLBSQ * 32 + n
}

function ConvertToWorldY(n) {
    return this.GVOSAT * 32 + n
}

function get_World() {
    return this.OTCAPV
}