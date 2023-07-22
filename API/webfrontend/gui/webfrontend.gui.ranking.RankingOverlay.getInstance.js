function getCurView anonymous(value) {
    if (this.$$runtime_curView !== undefined) return this.$$runtime_curView;
    if (this.$$user_curView !== undefined) return this.$$user_curView;
    else return this.$$init_curView;
}

function setCurView anonymous(value) {
    this.$$setCurViewImpl.apply(this, arguments);
    return value;
}

function resetCurView() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCurView() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCurView() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCurView() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _activate() {
    this.__Hc();
    this.__GY && this.__GY.open && this.__GY.open();
    webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_EndGame(), u, ClientLib.Data.EndGame.HallOfFameChange, this, this.__Ha)
}

function _deactivate() {
    this.__GY && this.__GY.close && this.__GY.close();
    webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_EndGame(), u, ClientLib.Data.EndGame.HallOfFameChange, this, this.__Ha)
}

function setPage(n, t, i) {
    this.setCurView(n);
    var r = this.__GW[n] ? this.__GW[n][t] : null,
        u = this.__GQ.getSelection().length > 0 ? this.__GQ.getSelection()[0] : null;
    r && (this.__GX.indexOf(r) >= 0 && (r = this.__GW[n][webfrontend.gui.ranking.RankingOverlay.pages.bonuses]), this.__GQ.indexOf(r) >= 0 && (u = r));
    u && this.__GQ.setSelection([u]);
    i && new qx.util.DeferredCall(this.__Hf, this).schedule()
}
qx.ui.co _bgrScalerntainer.Composite[12136 - 0] qx.ui.co _clientAreantainer.Composite[12138 - 0] webfront _closeButtonend.ui.SoundButton[12139 - 0] qx.ui.ba _headerImagesic.Image[12137 - 0] qx.ui.ba _titlesic.Label[12141 - 0]