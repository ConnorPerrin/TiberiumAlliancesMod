function style(n) {
    return {
        opacity: !n.replacement && n.disabled ? 1 : 1,
        textColor: n.disabled ? ka : undefined
    }
}