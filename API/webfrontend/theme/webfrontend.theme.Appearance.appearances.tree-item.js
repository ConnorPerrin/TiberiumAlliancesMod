function style(n) {
    return {
        decorator: n.selected ? ft : undefined,
        padding: [2, 6],
        textColor: n.selected ? ut : undefined
    }
}