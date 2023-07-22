function style(n) {
    var t, i;
    return n.disabled ? (t = sst, i = yt) : n.pressed ? (t = ep, i = yt) : n.hovered ? (t = vit, i = bf) : (t = fht, i = yt), {
        decorator: t,
        textColor: i
    }
}