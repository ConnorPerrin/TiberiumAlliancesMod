[object prototypeObject]
function InitBattleUnitTypes() {
    var i = {},
        u = $I.BUEVKL.QGLUJV().VXAMCA(),
        n = u.units,
        r = {
            k: null,
            v: null
        },
        t, f, e;
    for (t in n) r.k = t, r.v = n[t], $I.HCPEDW.EMLOHJ.GXVKTX(r.k, (new $I.HULRLE).IZIBBK(u, r.v, $I.HCPEDW.VCUATG(), $I.HCPEDW.WJZDUV()));
    t = u.Tech;
    n = {
        k: null,
        v: null
    };
    for (f in t) n.k = f, n.v = t[f], n.v.c != -1 && (i.$r = $I.HCPEDW.EMLOHJ.ZOXRAI(n.v.c, i), e = i.b, i.$r) && $I.EUNQAF.SGXKWF(e.CBKFJT) && (e.CBKFJT = n.v.di);
    $I.HCPEDW.CEJRBG(115, 175);
    $I.HCPEDW.CEJRBG(155, 176)
}

function get_PreCacheUnitsEnabled() {
    return $I.HCPEDW.LYSRYS
}

function set_PreCacheUnitsEnabled(n) {
    $I.HCPEDW.LYSRYS = n
}

function PreCacheUnit(n) {
    var t = {},
        i;
    $I.HCPEDW.LYSRYS && (t.$r = $I.HCPEDW.EMLOHJ.ZOXRAI(n, t), i = t.b, t.$r) && i.DIIRPK()
}

function get_SimulationResolution() {
    return 512
}

function get_DamageResolution() {
    return 1
}

function ResourceField() {}

function DamageInfo() {}

function GroupSound() {}