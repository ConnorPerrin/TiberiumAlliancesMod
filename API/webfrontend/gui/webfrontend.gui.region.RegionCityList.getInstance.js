function Dispose() {}

function setObjects(r) {
    var f, w, u, e, s, b, l, v;
    if (this.__bjm = !1, this.__nH = r, r.l.length == 2) {
        for (f = [!1, !1], u = 0; u < r.l.length; ++u) switch (r.l[u].get_VisObjectType()) {
            case ClientLib.Vis.VisObject.EObjectType.RegionHubServer:
                r.l[u].get_ServerState() != ClientLib.Data.EndGame.EHubState.Impact && (f[0] = !0);
                break;
            case ClientLib.Vis.VisObject.EObjectType.RegionCityType:
                f[1] = !0
        }
        if (f[0] && f[1]) return qx.core.Init.getApplication().getBackgroundArea().openCityInfo(r.l[0]), !1;
        for (f = [!1, !1], u = 0; u < r.l.length; ++u) switch (r.l[u].get_VisObjectType()) {
            case ClientLib.Vis.VisObject.EObjectType.RegionRuin:
                f[0] = !0;
                break;
            case ClientLib.Vis.VisObject.EObjectType.RegionGhostCity:
                f[1] = !0
        }
        if (f[0] && f[1]) return qx.core.Init.getApplication().getBackgroundArea().openCityInfo(r.l[0]), !1
    }
    for (u = 0, w = this.__bgp.getChildren(); u < w.length; ++u) w[u].removeListener(n, this.__bjn, v);
    for (this.__bgp.removeAll(), u = 0; u < r.l.length; ++u) {
        e = r.l[u];
        s = o;
        switch (e.get_VisObjectType()) {
            case ClientLib.Vis.VisObject.EObjectType.RegionRuin:
                s = this.tr(y);
                break;
            case ClientLib.Vis.VisObject.EObjectType.RegionAllianceMarker:
                s = this.tr(c);
                break;
            case ClientLib.Vis.VisObject.EObjectType.RegionNewPlayerSpot:
                s = this.tr(h);
                break;
            case ClientLib.Vis.VisObject.EObjectType.RegionHubControl:
                b = ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter();
                b.get_State() == ClientLib.Data.EndGame.EHubState.Ruin && (this.__bjm = !0, l = new webfrontend.ui.SoundButton(this.tr(p)).set({
                    height: 20
                }), l.setUserData(t, e), l.setUserData(i, 1), l.addListener(n, this.__bjn, l), this.__bgp.add(l));
            default:
                s = e.get_Name ? e.get_Name() : a
        }
        v = new webfrontend.ui.SoundButton(s).set({
            height: 20
        });
        v.setUserData(t, e);
        v.addListener(n, this.__bjn, v);
        this.__bgp.add(v)
    }
    return this.updatePosition(), !0
}

function updatePosition() {
    if (this.getBounds() != null && this.__nH.l.length != 0 && this.getContentElement().getDomElement() != null) {
        var o = this.__nH.l[0],
            u = Math.floor(ClientLib.Vis.VisMain.GetInstance().ScreenPosFromWorldPosX(o.get_X())),
            s = Math.floor(ClientLib.Vis.VisMain.GetInstance().ScreenPosFromWorldPosY(o.get_Y())),
            h = ClientLib.Vis.VisMain.GetInstance().get_Region().get_ZoomFactor(),
            t = Math.floor(ClientLib.Vis.VisMain.GetInstance().get_Region().get_GridWidth() * h),
            f = Math.floor(ClientLib.Vis.VisMain.GetInstance().get_Region().get_GridHeight() * h),
            n, e, i, r;
        this.__bjm ? (n = u, e = s + f, i = t * 5, r = f * 5) : (n = u - Math.abs(t / 2 - this.getBounds().width / 2), e = s, i = t, r = f);
        this.__bgq.setWidth(i);
        this.__bgq.setHeight(r);
        this.__bgr.set({
            width: this.__bjm ? i : 128,
            height: r
        });
        this.__bgr.setDomLeft(u - n);
        this.setDomLeft(this.__bjm ? n + t : n);
        this.setDomTop(e)
    }
}