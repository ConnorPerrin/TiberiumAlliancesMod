function style(n) {
    return {
        icon: rt,
        marginBottom: undefined,
        marginTop: undefined,
        padding: n.pressed || n.checked ? 1 : n.hovered ? 1 : 3
    }
}