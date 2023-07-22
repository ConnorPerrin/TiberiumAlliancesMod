qx.ui.co prototypere.Widget[15180 - 0]
function getWidgetByElement(n, t) {
    while (n) {
        var i = n.$$widgetObject;
        if (i && (!t || !i.getAnonymous())) return i;
        try {
            n = n.parentNode
        } catch (r) {
            return null
        }
    }
    return null
}

function contains(n, t) {
    while (t)
        if (t = t.getLayoutParent(), n == t) return !0;
    return !1
}