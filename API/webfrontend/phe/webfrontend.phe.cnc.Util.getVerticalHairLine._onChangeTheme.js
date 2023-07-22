[object prototypeObject]
function base() {
    var t = qx.util.PropertyUtil.getAllProperties(this.constructor),
        n, i, r;
    for (n in t) i = t[n], i.themeable && (r = qx.util.PropertyUtil.getUserValue(this, n), r == null && qx.util.PropertyUtil.resetThemed(this, n))
} [Class q selfx.ui.core.Widget]