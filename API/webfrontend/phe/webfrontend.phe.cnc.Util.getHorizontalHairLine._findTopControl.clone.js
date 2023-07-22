[object prototypeObject]
function base() {
    var n = qx.core.Object.prototype.clone.call(this),
        t = this.__gY;
    return t && (n.__gY = qx.lang.Object.clone(t)), n
} [Class q selfx.ui.core.Widget]