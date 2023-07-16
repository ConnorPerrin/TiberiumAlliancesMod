[object prototypeObject]
function get_IsSupported() {
    try {
        return !!window.localStorage
    } catch (n) {
        return !1
    }
}

function SetItem(n, t) {
    window.localStorage.setItem(n, qx.lang.Json.stringify(t))
}

function GetItem(n) {
    var t = window.localStorage.getItem(n);
    return t != null ? qx.lang.Json.parse(t, !1) : null
}