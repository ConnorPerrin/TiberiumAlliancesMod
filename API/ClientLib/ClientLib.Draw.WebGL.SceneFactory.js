[object prototypeObject]
function get_IsSupported() {
    return $I.QGAMFF.YHVNNZ() == 1
}

function CheckWebGL() {
    var t;
    if ($I.QGAMFF.$Check != null) return $I.QGAMFF.$Check;
    if (!window.WebGLRenderingContext) return $I.QGAMFF.$Check = 0, 0;
    var r = document.createElement("canvas"),
        i = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"],
        n = null;
    for (t = 0; t < i.length; ++t) {
        try {
            n = r.getContext(i[t])
        } catch (u) {}
        if (n) return $I.QGAMFF.$Check = 1, $I.QGAMFF.CMBOMV.MaxTextureSize = n.getParameter(n.MAX_TEXTURE_SIZE), 1
    }
    return $I.QGAMFF.$Check = -1, -1
}

function get_Caps() {
    return $I.QGAMFF.CMBOMV
}