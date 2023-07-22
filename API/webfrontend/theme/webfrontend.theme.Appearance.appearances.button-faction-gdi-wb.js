function style(n) {
    var t;
    return t = n.checked && n.hovered || n.checked && n.focused && n.hovered ? cot : n.checked && n.focused ? ts : n.checked && n.disabled ? io : n.checked && n.pressed ? vf : n.checked ? ts : n.disabled ? io : n.pressed ? vf : n.hovered ? cg : not, {
        decorator: t,
        gap: 0,
        height: 99,
        minHeight: 99,
        width: 220
    }
}