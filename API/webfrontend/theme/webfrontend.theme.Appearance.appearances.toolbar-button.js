function style(n) {
    return {
        decorator: n.pressed || n.checked && !n.hovered || n.checked && n.disabled ? cst : n.hovered && !n.disabled ? ctt : undefined,
        marginBottom: 2,
        marginTop: 2,
        padding: (n.pressed || n.checked || n.hovered) && !n.disabled || n.disabled && n.checked ? 3 : 5
    }
}