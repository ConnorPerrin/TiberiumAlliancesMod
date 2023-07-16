[object prototypeObject]
function CreateInstance() {
    var n = $I.BUEVKL.QGLUJV().VXAMCA();
    return $I.ILHIOR.CLRJVT = (new $I.ILHIOR).SLPWTI(), $I.ILHIOR.CLRJVT.CWOVDH(0, null), $I.ILHIOR.CLRJVT
}

function GetInstance() {
    return $I.ILHIOR.CLRJVT
}

function get_IsSoundSupported() {
    return $I.JYTDLG.EUXHHN().LGUSNR().length > 0
}

function FormatTimespan(n) {
    var t = "",
        i = Math.floor(n),
        f = i % 60,
        u, r, e;
    return i = Math.floor((i - f) / 60), u = i % 60, i = Math.floor((i - u) / 60), r = i % 24, i = Math.floor((i - r) / 24), e = i, e > 0 && (t = t + e.toString() + ":", r == 0 ? t = t + "00:" : r < 10 && (t = t + "0")), r > 0 && (t = t + r.toString() + ":", u < 10 && (t = t + "0")), t = t + u.toString() + ":", f < 10 && (t = t + "0"), t + f.toString()
}