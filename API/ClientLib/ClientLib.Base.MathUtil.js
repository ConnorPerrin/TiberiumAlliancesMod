[object prototypeObject]
function FloatEqual(n, t) {
    var i = Math.abs(n - t),
        r = Math.abs(n) + Math.abs(t);
    return i <= r * 1e-15
}

function EncodeCoordId(n, t) {
    return (n & 65535) << 16 | t & 65535
}

function DecodeCoordId(n, t) {
    t.c = n & 65535;
    t.b = n >> 16 & 65535
}