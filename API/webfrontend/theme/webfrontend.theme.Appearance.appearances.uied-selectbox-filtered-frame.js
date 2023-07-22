function style(n) {
    var t;
    return t = n.disabled ? kst : n.pressed ? net : n.hovered ? nv : eut, {
        decorator: t
    }
}