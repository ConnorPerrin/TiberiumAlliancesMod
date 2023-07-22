webfront prototypeend.gui.MarkerManager[16958 - 0][object zindexObject]
function isWidgetBox(n) {
    var i = qx.Class.getByName(a),
        t = n && n.classname ? qx.Class.getByName(n.classname) : null;
    return !t || !qx.Class.isSubClassOf(t, i)
}

function _getImagePosition(n, i, r, u, f) {
    var l, c, o;
    if ((typeof i == b && (i = webfrontend.data.missions.MissionScriptParser.getInstance().findWidgetByPath(i)), !i) || (l = webfrontend.gui.MarkerManager.isWidgetBox(i), !l && (i.getBounds() == null || i.getVisibility() != e))) return null;
    var o = null,
        s = 0,
        h = 0;
    if (l) c = qx.bom.element.Location.get(n.getContentElement().getDomElement()), o = i, o.width = o.right - o.left, o.height = o.bottom - o.top, s = o.top - c.top, h = o.left - c.left;
    else {
        if (c = qx.bom.element.Location.get(n.getContentElement().getDomElement()), o = i.getContentElement().getDomElement() != null ? qx.bom.element.Location.get(i.getContentElement().getDomElement()) : null, !c || !o) return null;
        o.height = o.bottom - o.top;
        o.width = o.right - o.left;
        s = o.top - c.top;
        h = o.left - c.left
    }
    switch (r) {
        case st:
            return {
                left: h + Math.floor((o.width - u) / 2), top: s - f
            };
        case bt:
            return {
                left: h + Math.floor((o.width - u) / 2), top: s + o.height
            };
        case w:
            return {
                left: h + o.width, top: Math.floor(s + (o.height - f) / 2)
            };
        case vt:
            return {
                left: h - u, top: Math.floor(s + (o.height - f) / 2)
            };
        case ct:
            return {
                left: h - u, top: s - f
            };
        case rt:
            return {
                left: h - u, top: s + o.height
            };
        case ft:
            return {
                left: h + o.width, top: s - f
            };
        case y:
            return {
                left: h + o.width, top: s + o.height
            };
        case t:
            return {
                left: h, top: s, width: o.width, height: o.height
            }
    }
    return null
}