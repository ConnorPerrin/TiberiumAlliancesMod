function getLimit anonymous(value) {
    if (this.$$runtime_limit !== undefined) return this.$$runtime_limit;
    if (this.$$user_limit !== undefined) return this.$$user_limit;
    else return this.$$init_limit;
}

function setLimit anonymous() {
    this.setLimit.$$install && this.setLimit.$$install.call(this);
    return this.setLimit.apply(this, arguments);
}

function resetLimit() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeLimit() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeLimit() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function add(n) {
    var t = (new Date).getTime();
    n._startOn += t;
    n._finishOn += t;
    this.__btK.length < this.getLimit() ? this.__btK.push(n) : n.resetState();
    this.__btL || (this.__btL = qx.lang.Function.periodical(this.loop, 15, this))
}

function remove(n) {
    qx.lang.Array.remove(this.__btK, n);
    this.__btK.length == 0 && (window.clearInterval(this.__btL), delete this.__btL)
}

function loop() {
    for (var t = (new Date).getTime(), n = 0, i = this.__btK.length; n < i; n++) this.__btK[n] && this.__btK[n].loop(t)
}