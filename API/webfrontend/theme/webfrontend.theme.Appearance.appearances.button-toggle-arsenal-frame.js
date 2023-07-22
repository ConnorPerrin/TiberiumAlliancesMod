function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = kv, u = n) : i.disabled ? (r = vd, u = n) : i.pressed ? (r = hk, u = st) : i.checked ? (r = dut, u = n) : i.hovered ? (r = rn, u = t) : i.preselected && i.focused && !i.inner ? (r = wy, u = t) : i.preselected ? (r = ntt, u = t) : i.focused && !i.inner ? (r = nst, u = n) : i.checked && i.hovered ? (r = wp, u = n) : (r = kl, u = n), {
        decorator: r,
        textColor: u
    }
}