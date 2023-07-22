function style(n) {
    return {
        decorator: n.pressed || n.hovered ? ft : undefined,
        padding: [3, 8],
        textColor: n.pressed || n.hovered ? ut : undefined
    }
}