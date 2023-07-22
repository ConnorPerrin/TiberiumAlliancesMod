function style(n) {
    var t = n.horizontal ? td : wb;
    return n.disabled && (t += nr), {
        decorator: t,
        height: n.horizontal ? 14 : undefined,
        marginLeft: 2,
        padding: 0,
        width: n.horizontal ? undefined : 14
    }
}