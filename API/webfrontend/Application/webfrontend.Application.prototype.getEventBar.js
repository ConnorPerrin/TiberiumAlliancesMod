function getIsShown anonymous(value) {
    if (this.$$runtime_IsShown !== undefined) return this.$$runtime_IsShown;
    if (this.$$user_IsShown !== undefined) return this.$$user_IsShown;
    else return this.$$init_IsShown;
}

function setIsShown anonymous(value) {
    this.$$setIsShownImpl.apply(this, arguments);
    return value;
}

function resetIsShown() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIsShown() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIsShown() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIsShown() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleIsShown anonymous() {
    return this.setIsShown(!this.getIsShown())
}

function isIsShown anonymous() {
    return this.getIsShown()
}

function getIsTimeUpdating anonymous() {
    this.getIsTimeUpdating.$$install && this.getIsTimeUpdating.$$install();
    return this.getIsTimeUpdating.apply(this, arguments);
}

function setIsTimeUpdating anonymous(value) {
    this.$$setIsTimeUpdatingImpl.apply(this, arguments);
    return value;
}

function resetIsTimeUpdating() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIsTimeUpdating() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIsTimeUpdating() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIsTimeUpdating() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleIsTimeUpdating anonymous() {
    return this.setIsTimeUpdating(!this.getIsTimeUpdating())
}

function isIsTimeUpdating anonymous() {
    return this.getIsTimeUpdating()
}

function getCfgChallengeControl anonymous(value) {
    if (this.$$runtime_CfgChallengeControl !== undefined) return this.$$runtime_CfgChallengeControl;
    if (this.$$user_CfgChallengeControl !== undefined) return this.$$user_CfgChallengeControl;
    else return this.$$init_CfgChallengeControl;
}

function setCfgChallengeControl anonymous(value) {
    this.$$setCfgChallengeControlImpl.apply(this, arguments);
    return value;
}

function resetCfgChallengeControl() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeCfgChallengeControl() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCfgChallengeControl() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function fadeIn() {
    this.setVisibility(n);
    this.animate(qx.phe.AnimationManager.getInstance().getAnimation(lu).getDescription(), null, this.__hG, this)
}

function fadeOut() {
    this.setVisibility(n);
    this.animate(qx.phe.AnimationManager.getInstance().getAnimation(gr).getDescription(), null, this.__hG, this)
}

function checkVisibility() {
    var n = webfrontend.data.ChallengeEvents.getInstance().getIsActive() && !webfrontend.data.ChallengeEvents.getInstance().isChallengeFailed(),
        t = ClientLib.Vis.Mode.Region == ClientLib.Vis.VisMain.GetInstance().get_Mode(),
        i = !qx.core.Init.getApplication().getMenuBar().hasSelectedMenu();
    n ? ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer() ? this.__buo.getToolTip().setLabel(this.tr(yi, webfrontend.data.ChallengeEvents.getInstance().getName() || vi)) : this.__buo.getToolTip().setLabel(this.tr(vu, webfrontend.data.ChallengeEvents.getInstance().getName() || eu)) : this.__bum.setValue(!1);
    this.setIsTimeUpdating(n);
    this.__buY();
    this.setIsShown(n && t && i)
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