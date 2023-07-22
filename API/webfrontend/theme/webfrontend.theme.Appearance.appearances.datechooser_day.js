function style(n) {
    return {
        decorator: n.selected ? ft : undefined,
        font: n.today ? it : undefined,
        padding: [2, 4],
        textAlign: ci,
        textColor: n.selected ? ut : n.otherMonth ? hs : undefined
    }
}