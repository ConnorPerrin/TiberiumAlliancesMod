function style(i) {
    var r, u;
    return i.checked && i.focused && !i.inner ? (r = fk, u = n) : i.disabled ? (r = kit, u = n) : i.pressed ? (r = dn, u = t) : i.checked ? (r = yut, u = n) : i.hovered ? (r = uot, u = t) : i.preselected && i.focused && !i.inner ? (r = oht, u = t) : i.preselected ? (r = pet, u = t) : i.focused && !i.inner ? (r = aa, u = n) : (r = pv, u = n), {
        decorator: r,
        textColor: u
    }
}