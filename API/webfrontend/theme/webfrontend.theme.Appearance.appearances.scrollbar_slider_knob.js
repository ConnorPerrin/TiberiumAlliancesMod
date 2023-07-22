function style(n) {
    var t = n.horizontal ? wf : lb;
    return n.disabled && (t += nr), {
        decorator: t,
        minHeight: n.horizontal ? undefined : 14,
        minWidth: n.horizontal ? 14 : undefined
    }
}