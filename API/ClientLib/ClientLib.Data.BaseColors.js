[object prototypeObject]
function ConvertFromHtmlColor(n) {
    var t = qx.util.ColorUtil.stringToRgb(n);
    return t[2] | t[1] << 8 | t[0] << 16
}

function EntityListChange() {}

function ShowObject() {}

function ColorType() {}

function Entity() {}