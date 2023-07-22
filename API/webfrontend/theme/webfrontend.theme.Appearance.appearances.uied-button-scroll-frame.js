function style(n) {
    var t, i;
    return n.disabled ? (t = frt, i = f) : n.pressed ? (t = fl, i = f) : n.hovered ? (t = cv, i = f) : (t = lg, i = f), {
        decorator: t,
        textColor: i
    }
}