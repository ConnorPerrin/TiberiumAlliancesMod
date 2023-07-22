function style(n) {
    return {
        decorator: n.selected ? cft : undefined,
        padding: 4,
        textColor: n.selected ? br : br
    }
}