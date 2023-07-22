function style(i) {
    var r, u;
    return i.hovered ? (r = i.checked ? ks : oot, u = t) : i.checked ? (r = ks, u = t) : (r = tv, u = n), {
        decorator: r,
        textColor: u
    }
}