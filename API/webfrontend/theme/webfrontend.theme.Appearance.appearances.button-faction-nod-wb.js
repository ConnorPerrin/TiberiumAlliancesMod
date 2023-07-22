function style(n) {
    var t;
    return t = n.checked && n.hovered || n.checked && n.focused && n.hovered ? uft : n.checked && n.focused ? eo : n.checked && n.disabled ? ns : n.checked && n.pressed ? sc : n.checked ? eo : n.disabled ? ns : n.pressed ? sc : n.hovered ? uht : oft, {
        decorator: t,
        gap: 0,
        height: 99,
        minHeight: 99,
        width: 220
    }
}