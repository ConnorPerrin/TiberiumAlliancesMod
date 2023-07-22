function getContainer anonymous(value) {
    if (this.$$runtime_Container !== undefined) return this.$$runtime_Container;
    if (this.$$user_Container !== undefined) return this.$$user_Container;
    else return this.$$init_Container;
}

function setContainer anonymous(value) {
    this.$$setContainerImpl.apply(this, arguments);
    return value;
}

function resetContainer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initContainer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeContainer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeContainer() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function setDistanceToHome(n, t) {
    var u, i, s, f;
    u = ClientLib.Data.MainData.GetInstance().get_Cities().get_HomeCityId() > -1 ? ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(ClientLib.Data.MainData.GetInstance().get_Cities().get_HomeCityId()) : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
    var e = u.get_PosX() - n,
        o = u.get_PosY() - t,
        h = Math.floor(Math.sqrt(e * e + o * o)),
        r = null;
    for (i = 0; i < this.__RR.length; i++)
        if (this.__RR[i].getUserData(webfrontend.gui.alliance.AllianceMarkerNavs.USERDATA_MARKER_TYPE) == ClientLib.Data.Alliance.EAMT_Home) {
            r = this.__RR[i];
            break
        } r != null && (s = qx.core.Init.getApplication(), f = webfrontend.gui.alliance.AllianceMarkerNavs, r.getUserData(f.USERDATA_LABEL_DISTANCE).setValue(s.tr(st, h)), r.getUserData(f.USERDATA_LABEL_DISTANCE).show())
}

function resetDistanceToHome() {
    for (var i, t = null, n = 0; n < this.__RR.length; n++)
        if (this.__RR[n].getUserData(webfrontend.gui.alliance.AllianceMarkerNavs.USERDATA_MARKER_TYPE) == ClientLib.Data.Alliance.EAMT_Home) {
            t = this.__RR[n];
            break
        } t != null && (i = webfrontend.gui.alliance.AllianceMarkerNavs, t.getUserData(i.USERDATA_LABEL_DISTANCE).exclude())
}