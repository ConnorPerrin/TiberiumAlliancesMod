function getDuration anonymous(value) {
    if (this.$$runtime_duration !== undefined) return this.$$runtime_duration;
    if (this.$$user_duration !== undefined) return this.$$user_duration;
    else return this.$$init_duration;
}

function setDuration anonymous(value) {
    this.$$setDurationImpl.apply(this, arguments);
    return value;
}

function resetDuration() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initDuration() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeDuration() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDuration() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getFps anonymous(value) {
    if (this.$$runtime_fps !== undefined) return this.$$runtime_fps;
    if (this.$$user_fps !== undefined) return this.$$user_fps;
    else return this.$$init_fps;
}

function setFps anonymous(value) {
    this.$$setFpsImpl.apply(this, arguments);
    return value;
}

function resetFps() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeFps() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeFps() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSync anonymous(value) {
    if (this.$$runtime_sync !== undefined) return this.$$runtime_sync;
    if (this.$$user_sync !== undefined) return this.$$user_sync;
    else return this.$$init_sync;
}

function setSync anonymous() {
    this.setSync.$$install && this.setSync.$$install.call(this);
    return this.setSync.apply(this, arguments);
}

function resetSync() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeSync() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSync() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleSync anonymous() {
    return this.setSync(!this.getSync())
}

function isSync anonymous() {
    return this.getSync()
}

function getFrom anonymous(value) {
    if (this.$$runtime_from !== undefined) return this.$$runtime_from;
    if (this.$$user_from !== undefined) return this.$$user_from;
    else return this.$$init_from;
}

function setFrom anonymous(value) {
    this.$$setFromImpl.apply(this, arguments);
    return value;
}

function resetFrom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeFrom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeFrom() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getTo anonymous(value) {
    if (this.$$runtime_to !== undefined) return this.$$runtime_to;
    if (this.$$user_to !== undefined) return this.$$user_to;
    else return this.$$init_to;
}

function setTo anonymous(value) {
    this.$$setToImpl.apply(this, arguments);
    return value;
}

function resetTo() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeTo() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTo() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getDelay anonymous(value) {
    if (this.$$runtime_delay !== undefined) return this.$$runtime_delay;
    if (this.$$user_delay !== undefined) return this.$$user_delay;
    else return this.$$init_delay;
}

function setDelay anonymous(value) {
    this.$$setDelayImpl.apply(this, arguments);
    return value;
}

function resetDelay() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeDelay() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeDelay() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getQueue anonymous(value) {
    if (this.$$runtime_queue !== undefined) return this.$$runtime_queue;
    if (this.$$user_queue !== undefined) return this.$$user_queue;
    else throw new Error("Property queue of an instance of webfrontend.phe.cnc.base.fx.Base is not (yet) ready!");
}

function setQueue anonymous(value) {
    this.$$setQueueImpl.apply(this, arguments);
    return value;
}

function resetQueue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeQueue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeQueue() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getTransition anonymous(value) {
    if (this.$$runtime_transition !== undefined) return this.$$runtime_transition;
    if (this.$$user_transition !== undefined) return this.$$user_transition;
    else return this.$$init_transition;
}

function setTransition anonymous() {
    this.setTransition.$$install && this.setTransition.$$install.call(this);
    return this.setTransition.apply(this, arguments);
}

function resetTransition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeTransition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTransition() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _getElement() {
    return this.__in
}

function _setElement(n) {
    this.__in = n
}

function _applyDuration() {}

function init() {
    this.__uh = webfrontend.phe.cnc.base.fx.Base.EffectState.PREPARING;
    this.__btD = 0;
    this.__btE = this.getDelay() * 1e3 + (new Date).getTime();
    this.__btF = this.__btE + this.getDuration() * 1e3;
    this.__btG = this.getTo() - this.getFrom();
    this.__btH = this.__btF - this.__btE;
    this.__btI = this.getFps() * this.getDuration()
}

function beforeFinishInternal() {}

function beforeFinish() {}

function afterFinishInternal() {}

function afterFinish() {}

function beforeSetupInternal() {}

function beforeSetup() {}

function afterSetupInternal() {}

function afterSetup() {}

function beforeUpdateInternal() {}

function beforeUpdate() {}

function afterUpdateInternal() {}

function afterUpdate() {}

function beforeStartInternal() {}

function beforeStart() {}

function setup() {
    this.fireEvent(u)
}

function update(n) {
    webfrontend.phe.cnc.base.fx.Base.prototype.update.call(this);
    this.__btM(this, n)
}

function finish() {
    this.fireEvent(f)
}

function start() {
    return this.__uh != webfrontend.phe.cnc.base.fx.Base.EffectState.IDLE ? !1 : (this.init(), this.beforeStartInternal(), this.beforeStart(), this.getSync() || this.getQueue().add(this), !0)
}

function end() {
    this.render(1);
    this.cancel();
    this.beforeFinishInternal();
    this.beforeFinish();
    this.finish();
    this.afterFinishInternal();
    this.afterFinish()
}

function render(n) {
    this.__uh == webfrontend.phe.cnc.base.fx.Base.EffectState.PREPARING && (this.__uh = webfrontend.phe.cnc.base.fx.Base.EffectState.RUNNING, this.beforeSetupInternal(), this.beforeSetup(), this.setup(), this.afterSetupInternal(), this.afterSetup());
    this.__uh == webfrontend.phe.cnc.base.fx.Base.EffectState.RUNNING && (this.__btJ = webfrontend.phe.cnc.base.fx.Transition.get(this.getTransition())(n) * this.__btG + this.getFrom(), this.beforeUpdateInternal(), this.beforeUpdate(), this.update(this.__btJ), this.afterUpdateInternal(), this.afterUpdate(), this.hasListener(i) && this.fireEvent(i))
}

function loop(n) {
    if (n >= this.__btE) {
        n >= this.__btF && this.end();
        var t = (n - this.__btE) / this.__btH,
            i = Math.round(t * this.__btI);
        i > this.__btD && (this.render(t), this.__btD = i)
    }
}

function cancel() {
    this.getSync() || this.getQueue().remove(this);
    this.__uh = webfrontend.phe.cnc.base.fx.Base.EffectState.IDLE
}

function resetState() {
    this.__uh = webfrontend.phe.cnc.base.fx.Base.EffectState.IDLE
}

function isActive() {
    return this.__uh === webfrontend.phe.cnc.base.fx.Base.EffectState.RUNNING || this.__uh === webfrontend.phe.cnc.base.fx.Base.EffectState.PREPARING
}

function update(n) {
    webfrontend.phe.cnc.base.fx.Base.prototype.update.call(this);
    this.__btM(this, n)
}