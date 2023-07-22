function style(n) {
    return {
        opacity: !n.replacement && n.disabled ? .7 : 1,
        textColor: n.disabled ? v : undefined
    }
}