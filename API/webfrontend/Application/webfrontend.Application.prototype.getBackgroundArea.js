qx.ui.co mapContainerntainer.Composite[15117 - 0] qx.ui.co mapBlockerntainer.Composite[15119 - 0]
function setActive(n) {
    this.active = n;
    this.mapBlocker.setVisibility(this.active ? v : b);
    var t = ClientLib.Vis.VisMain.GetInstance();
    this.active && this.mode == ClientLib.Vis.Mode.Region ? t.set_Mode(this.mode) : (this.closeCityInfo(), this.closeCityList())
}

function setView(n, t, i, r) {
    var h = ClientLib.Vis.VisMain.GetInstance(),
        c = ClientLib.Data.MainData.GetInstance(),
        f = null,
        e;
    if (n == ClientLib.Vis.Mode.Region) {
        f = ClientLib.Vis.VisMain.GetInstance().get_Region();
        var s = c.get_Cities().GetCity(t),
            u = ClientLib.Vis.VisMain.GetInstance().get_Region(),
            o = u.get_ZoomFactor();
        s != null ? (i = (s.get_PosX() + .5) * u.get_GridWidth() - Math.floor(u.get_ViewWidth() / o / 2), r = (s.get_PosY() + .5) * u.get_GridHeight() - Math.floor(u.get_ViewHeight() / o / 2)) : (i = (i + .5) * u.get_GridWidth() - Math.floor(u.get_ViewWidth() / o / 2), r = (r + .5) * u.get_GridHeight() - Math.floor(u.get_ViewHeight() / o / 2));
        this.active && h.set_Mode(n)
    }
    this.mode = n;
    i = Math.round(i);
    r = Math.round(r);
    f && (f.SetPosition(i, r), this.__bfB != null && this.__bfB.updatePosition());
    this.activeSceneView != f && (e = this.mapContainer.getContentElement().getDomElement(), this.activeSceneView && e && (this.activeSceneView.SetActive(!1), e.removeChild(this.activeSceneView.GetHtmlNode())), this.activeSceneView = f, this.activeSceneView && e && (e.appendChild(this.activeSceneView.GetHtmlNode()), this.activeSceneView.SetActive(!0)))
}

function _onMapAreaResize(n) {
    var t = n.getData().width,
        i = n.getData().height,
        r = ClientLib.Vis.VisMain.GetInstance();
    r.get_Region().SetViewSize(t, i)
}

function onHotKeyDown(n) {
    var e = ClientLib.Vis.VisMain.GetInstance(),
        f, u;
    if (!e.get_LockMove() && this.active) {
        f = n.getKeyIdentifier();
        u = !1;
        switch (f) {
            case r:
                this.__bfF = 1;
                u = !0;
                break;
            case i:
                this.__bfF = -1;
                u = !0;
                break;
            case t:
                this.__bfG = 1;
                u = !0;
                break;
            case c:
                this.__bfG = -1;
                u = !0
        }
        u && (this.closeCityInfo(), this.closeCityList())
    }
}

function onHotKeyUp(n) {
    var f = ClientLib.Vis.VisMain.GetInstance(),
        u;
    if (!f.get_LockMove() && this.active) {
        u = n.getKeyIdentifier();
        switch (u) {
            case r:
                this.__bfF == 1 && (this.__bfF = 0);
                break;
            case i:
                this.__bfF == -1 && (this.__bfF = 0);
                break;
            case t:
                this.__bfG == 1 && (this.__bfG = 0);
                break;
            case c:
                this.__bfG == -1 && (this.__bfG = 0)
        }
    }
}

function onHotKeyPress(n) {
    var t = ClientLib.Vis.VisMain.GetInstance(),
        u, i, r;
    if (!t.get_LockMove() && this.active) {
        u = n.getKeyIdentifier();
        i = !1;
        switch (u) {
            case webfrontend.gui.ShortkeyMapper.keys.zoomIn:
                r = t.get_Region().get_ZoomFactor() + .1;
                t.get_Region().set_ZoomFactor(Math.min(1, Math.max(.6, r)));
                i = !0;
                break;
            case webfrontend.gui.ShortkeyMapper.keys.zoomOut:
                r = t.get_Region().get_ZoomFactor() - .1;
                t.get_Region().set_ZoomFactor(Math.min(1, Math.max(.6, r)));
                i = !0
        }
        i && (this.closeCityInfo(), this.closeCityList())
    }
}

function _onMouseDown(n) {
    var t, i;
    n.getButton() == h && (this.mouseDown = !0, this.worldMoved = !1, this.worldMouseMove == !1 && (this.worldMouseMove = !0, this.mapContainer.capture()), this.mouseStartX = n.getScreenLeft(), this.mouseStartY = n.getScreenTop(), t = this.getContentLocation(), this.active && (i = ClientLib.Vis.VisMain.GetInstance(), i.MouseDown(n.getDocumentLeft() - t.left, n.getDocumentTop() - t.top)), this.closeCityInfo(), this.closeCityList())
}

function _onMouseUp(n) {
    var i = n.getButton(),
        t, r;
    i == h && (this.worldMouseMove == !0 && (this.worldMouseMove = !1, this.mapContainer.releaseCapture(), this.getContentElement().removeStyle(u)), this.mouseDown == !0 && this.worldMoved == !1 && (t = this.getContentLocation(), this.active && (r = ClientLib.Vis.VisMain.GetInstance(), r.MouseUp(n.getDocumentLeft() - t.left, n.getDocumentTop() - t.top, i))), this.mouseDown = !1)
}

function _onMouseMove(n) {
    var h = ClientLib.Vis.VisMain.GetInstance(),
        t, e, o, s;
    if (!h.get_LockMove()) {
        if (t = this.getContentLocation(), this.mousePosX = n.getDocumentLeft() - t.left, this.mousePosY = n.getDocumentTop() - t.top, this.__bfD != null) {
            var c = qx.core.Init.getApplication(),
                l = c.getMessagingTicker().getBounds().top,
                a = c.getBaseNavigationBar().getBounds().left,
                i = this.__bfD.getBounds(),
                r = this.mousePosX + 20,
                f = this.mousePosY + 20;
            r + i.width > a && (r = this.mousePosX - 20 - i.width);
            f + i.height > l && (f = this.mousePosY - 20 - i.height);
            this.__bfD.setDomLeft(r);
            this.__bfD.setDomTop(f)
        }
        this.worldMouseMove == !0 ? (e = n.getScreenLeft() - this.mouseStartX, o = n.getScreenTop() - this.mouseStartY, (this.worldMoved || Math.abs(e) >= 5 || Math.abs(o) >= 5) && (this.mouseStartX = n.getScreenLeft(), this.mouseStartY = n.getScreenTop(), this.activeSceneView != null && (s = this.activeSceneView.get_ZoomFactor(), this.activeSceneView.MovePosition(-(e / s), -(o / s)) && (this.getContentElement().setStyle(u, k), this.worldMoved = !0)))) : this.active && h.MouseMove(n.getDocumentLeft() - t.left, n.getDocumentTop() - t.top)
    }
}

function onMouseWheel(n) {
    this._onMouseWheel(n)
}

function _onMouseWheel(n) {
    var r = ClientLib.Vis.VisMain.GetInstance(),
        i, t;
    r.get_LockMove() || this.activeSceneView != null && (i = n.getWheelDelta(), t = this.activeSceneView.get_ZoomFactor(), t += -i * (t < .5 ? .025 : .1), t = Math.min(this.activeSceneView.get_MaxZoomFactor(), Math.max(this.activeSceneView.get_MinZoomFactor(), t)), this.activeSceneView.set_ZoomFactor(t), n.stop())
}

function _onTick() {
    var t, i, r, n;
    this.activeSceneView && (t = ClientLib.Vis.VisMain.GetInstance(), t.UpdateMouseTool(), this.active && (this.activeSceneView.VisUpdate(ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep()), (this.worldMoved || Math.abs(this.__bfF) != 0 || Math.abs(this.__bfG) != 0) && (i = this.__bfG * 15, r = this.__bfF * 15, this.activeSceneView != null && (n = this.activeSceneView.get_ZoomFactor(), this.activeSceneView.MovePosition(-(i / n), -(r / n)) && (this.worldMoved = !0)))), this.activeSceneView.ViewUpdate())
}

function _onUiTick() {
    this.active && this.activeSceneView && this.activeSceneView.UiUpdate(ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep())
}

function _onCurrentCityChange() {}

function _onSelectionChange(n, t) {
    var u;
    if (this.active && (this.__RG = t, this.closeCityInfo(), this.closeCityList(), this.__RG != null)) {
        var f = ClientLib.Vis.VisMain.GetInstance().WorldPosFromScreenPosX(this.mousePosX),
            e = ClientLib.Vis.VisMain.GetInstance().WorldPosFromScreenPosY(this.mousePosY),
            i = ClientLib.Vis.VisMain.GetInstance().GetAllSelectableObjectsFromPosition(f, e),
            r = !1;
        if (this.__RG.get_VisObjectType() == ClientLib.Vis.VisObject.EObjectType.RegionHubControl && (u = ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter(), u.get_State() == ClientLib.Data.EndGame.EHubState.Ruin && (r = !0)), i.l.length != 1 || r)(i.l.length > 1 || r) && this.openCityList(i);
        else switch (this.__RG.get_VisObjectType()) {
            case ClientLib.Vis.VisObject.EObjectType.RegionGhostCity:
            case ClientLib.Vis.VisObject.EObjectType.RegionNPCBase:
            case ClientLib.Vis.VisObject.EObjectType.RegionCityType:
            case ClientLib.Vis.VisObject.EObjectType.RegionNPCCamp:
            case ClientLib.Vis.VisObject.EObjectType.RegionRuin:
            case ClientLib.Vis.VisObject.EObjectType.RegionPointOfInterest:
            case ClientLib.Vis.VisObject.EObjectType.RegionNewPlayerSpot:
            case ClientLib.Vis.VisObject.EObjectType.RegionHubServer:
            case ClientLib.Vis.VisObject.EObjectType.RegionHubControl:
            case ClientLib.Vis.VisObject.EObjectType.RegionHubCenter:
            case ClientLib.Vis.VisObject.EObjectType.RegionAllianceMarker:
                this.openCityInfo(this.__RG);
                this.__RG.get_VisObjectType() == ClientLib.Vis.VisObject.EObjectType.RegionHubCenter && webfrontend.data.InfoTracker.getInstance().checkTrigger_WorldWin()
        }
    }
}

function openCityInfo(n, t) {
    if (t = t || 0, this.closeCityInfo(), this.__bfB != null) {
        switch (n.get_VisObjectType()) {
            case ClientLib.Vis.VisObject.EObjectType.RegionGhostCity:
            case ClientLib.Vis.VisObject.EObjectType.RegionNPCBase:
            case ClientLib.Vis.VisObject.EObjectType.RegionCityType:
            case ClientLib.Vis.VisObject.EObjectType.RegionNPCCamp:
            case ClientLib.Vis.VisObject.EObjectType.RegionHubCenter:
                ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(n.get_Id())
        }
        qx.core.Init.getApplication().getAllianceMarkerNavs().setDistanceToHome(n.get_RawX(), n.get_RawY());
        this.__bfB.setObject(n, t);
        this.__bfB.show();
        ClientLib.Vis.VisMain.GetInstance().PlayUISound(e)
    }
}

function closeCityInfo() {
    if (this.__bfB.isVisible()) {
        this.__bfB.Dispose();
        this.__bfB.exclude();
        qx.core.Init.getApplication().getAllianceMarkerNavs().resetDistanceToHome();
        var n = ClientLib.Data.MainData.GetInstance().get_Cities();
        n.set_CurrentCityId(0)
    }
}

function openCityList(n) {
    this.closeCityList();
    this.__bfC != null && this.__bfC.setObjects(n) && (this.__bfC.show(), ClientLib.Vis.VisMain.GetInstance().PlayUISound(e))
}

function closeCityList() {
    this.__bfC.isVisible() && (this.__bfC.Dispose(), this.__bfC.exclude())
}

function _onMouseToolChange() {
    var n = ClientLib.Vis.VisMain.GetInstance().get_ActiveMouseTool().GetMouseToolType();
    switch (n) {
        case ClientLib.Vis.MouseTool.EMouseTool.FoundBase:
            this.switchMouseToolTip(webfrontend.gui.region.RegionCityFoundInfo.getInstance());
            break;
        case ClientLib.Vis.MouseTool.EMouseTool.MoveBase:
            this.switchMouseToolTip(webfrontend.gui.region.RegionCityMoveInfo.getInstance());
            break;
        case ClientLib.Vis.MouseTool.EMouseTool.SelectSupport:
            this.switchMouseToolTip(webfrontend.gui.region.RegionCitySupportInfo.getInstance());
            break;
        case ClientLib.Vis.MouseTool.EMouseTool.MoveMarker:
            this.switchMouseToolTip(webfrontend.gui.region.RegionInfoAllianceMarkerTooltip.getInstance());
            break;
        default:
            this.switchMouseToolTip(null)
    }
}

function switchMouseToolTip(n) {
    this.__bfD && this.remove(this.__bfD);
    this.__bfD = n;
    this.__bfD && this.add(this.__bfD, {
        top: this.mousePosY,
        left: this.mousePosX
    })
}

function getAnonymousOverlayContainer() {
    return this.__bfA
}
qx.ui.co mapContainerntainer.Composite[15117 - 0] qx.ui.co mapBlockerntainer.Composite[15119 - 0]