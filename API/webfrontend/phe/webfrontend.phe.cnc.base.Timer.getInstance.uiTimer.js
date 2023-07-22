function getEnabled anonymous(value) {
    if (this.$$runtime_enabled !== undefined) return this.$$runtime_enabled;
    if (this.$$user_enabled !== undefined) return this.$$user_enabled;
    else return this.$$init_enabled;
}

function setEnabled anonymous(value) {
    this.$$setEnabledImpl.apply(this, arguments);
    return value;
}

function resetEnabled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initEnabled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeEnabled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeEnabled() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleEnabled anonymous() {
    return this.setEnabled(!this.getEnabled())
}

function isEnabled anonymous() {
    return this.getEnabled()
}

function getInterval anonymous(value) {
    if (this.$$runtime_interval !== undefined) return this.$$runtime_interval;
    if (this.$$user_interval !== undefined) return this.$$user_interval;
    else return this.$$init_interval;
}

function setInterval anonymous(value) {
    this.$$setIntervalImpl.apply(this, arguments);
    return value;
}

function resetInterval() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initInterval() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeInterval() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeInterval() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _applyInterval() {
    this.getEnabled() && this.restart()
}

function _applyEnabled(n, t) {
    t ? (window.clearInterval(this.__fC), this.__fC = null) : n && (this.__fC = window.setInterval(this.__fA, this.getInterval()))
}

function start() {
    this.setEnabled(!0)
}

function startWith(n) {
    this.setInterval(n);
    this.start()
}

function stop() {
    this.setEnabled(!1)
}

function restart() {
    this.stop();
    this.start()
}

function restartWith(n) {
    this.stop();
    this.startWith(n)
}

function _oninterval() {
    if (!t.__B) return n.apply(this, arguments);
    try {
        return n.apply(this, arguments)
    } catch (i) {
        t.handleError(new qx.core.GlobalError(i, arguments))
    }
}