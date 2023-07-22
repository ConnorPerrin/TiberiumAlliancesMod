function style(i) {
    var r, u;
    return i.hovered ? (r = i.checked ? fd : ttt, u = t) : i.disabled ? (r = i.checked ? pw : ov, u = n) : i.checked ? (r = il, u = t) : (r = rw, u = n), {
        decorator: r,
        textColor: u
    }
}