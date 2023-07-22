function setDirection(n, t, i) {
    this.__bBT = t;
    this.__bBU = i;
    this.__bBR = n;
    this.__btS && this.__btS.cancel();
    this.__ya()
}

function setMenuActivationStatus(n) {
    this.__bBU = n
}

function fadeIn() {
    this.animate(qx.phe.AnimationManager.getInstance().getAnimation(s).getDescription(), null, this.__hG, this)
}

function fadeOut() {
    this.__bBS = !0;
    this.getContentElement().getDomElement() !== null && qx.bom.element.Style.get(this.getContentElement().getDomElement(), i) !== t && this.animate(qx.phe.AnimationManager.getInstance().getAnimation(r).getDescription(), null, this.__hG, this)
}

function scheduleAppear() {
    this.getContentElement().getDomElement() !== null && qx.bom.element.Style.get(this.getContentElement().getDomElement(), i) !== t && this._deferredAppear()
}

function _deferredAppear() {
    this.fadeIn()
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