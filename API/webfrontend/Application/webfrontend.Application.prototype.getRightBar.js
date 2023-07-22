function getActive anonymous(value) {
    if (this.$$runtime_Active !== undefined) return this.$$runtime_Active;
    if (this.$$user_Active !== undefined) return this.$$user_Active;
    else return this.$$init_Active;
}

function setActive anonymous(value) {
    this.$$setActiveImpl.apply(this, arguments);
    return value;
}

function resetActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeActive() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _activate() {}

function _deactivate() {}

function _deferredAppear() {
    this._activate();
    this.fadeIn()
}

function fadeIn() {
    this.animate(qx.phe.AnimationManager.getInstance().getAnimation(e).getDescription(), null, this.__hG, this)
}

function fadeOut() {
    this.animate(qx.phe.AnimationManager.getInstance().getAnimation(u).getDescription(), null, this.__hG, this)
}

function animate(t, i, r, u) {
    qx.html.Element.flush();
    this.stopAnimation();
    this.__vP(t.keyFrames);
    var f = this;
    this.__vO(function() {
        for (var e in t.keyFrames) {
            f.__vQ(f.getContentElement(), t.keyFrames[e]);
            break
        }
        r && f.addListenerOnce(n, r, u);
        f._animateImpl(t, i)
    }, function() {
        var e = null;
        for (var i in frames) e = t.keyFrames[i];
        f.__vQ(f.getContentElement(), t.keyFrames[i]);
        r && f.addListenerOnce(n, r, u)
    }, 5)
}

function stopAnimation() {
    this.__vN != null && this.__vN.cancel();
    this.__vN = null;
    this.__vM && this.__vM.isValid() && this.__vM.stop();
    this.__vM = null
}

function _animateImpl(i, r) {
    this.__vM = qx.bom.element.Animation.animate(this.getContentElement().getDomElement(), i, r);
    this.__vM.on(t, function() {
        this.fireEvent(n)
    }, this)
}