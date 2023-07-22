function Dispose() {
    if (this.indexOf(this.__bgw) != -1 && this.remove(this.__bgw), this.__bgw = null, this.__RG != null && this.__RG.get_VisObjectType() == ClientLib.Vis.VisObject.EObjectType.RegionCityType) {
        var n = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.__RG.get_Id());
        webfrontend.phe.cnc.Util.detachNetEvent(n, i, ClientLib.Data.CityChange, this, this.__qg)
    }
    this.__RG = null;
    ClientLib.Vis.VisMain.GetInstance().get_Region().SetAttackOverlayCity(0)
}

function setObject(u, f) {
    var e, h;
    if (this.__bgv = f || 0, this.__RG != null) switch (this.__RG.get_VisObjectType()) {
        case ClientLib.Vis.VisObject.EObjectType.RegionCityType:
            e = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.__RG.get_Id());
            webfrontend.phe.cnc.Util.detachNetEvent(e, i, ClientLib.Data.CityChange, this, this.__qg);
            break;
        case ClientLib.Vis.VisObject.EObjectType.RegionHubCenter:
            webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter(), s, ClientLib.Data.EndGame.HubChanged, this, this.__qg)
    }
    if (this.__RG = u, u == null) {
        qx.core.Init.getApplication().getBackgroundArea().closeCityInfo();
        return
    }
    this.removeAll();
    this.__bgo = this.__bgA(r, n);
    switch (this.__RG.get_VisObjectType()) {
        case ClientLib.Vis.VisObject.EObjectType.RegionCityType:
            e = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.__RG.get_Id());
            webfrontend.phe.cnc.Util.attachNetEvent(e, i, ClientLib.Data.CityChange, this, this.__qg);
            h = this.__RG.get_Type();
            switch (h) {
                case ClientLib.Vis.Region.RegionCity.ERegionCityType.Own:
                    this.__bgw = webfrontend.gui.region.RegionCityStatusInfoOwn.getInstance();
                    ClientLib.Vis.VisMain.GetInstance().get_Region().SetAttackOverlayCity(this.__RG.get_Id());
                    break;
                case ClientLib.Vis.Region.RegionCity.ERegionCityType.Alliance:
                    this.__bgw = webfrontend.gui.region.RegionCityStatusInfoAlliance.getInstance();
                    break;
                case ClientLib.Vis.Region.RegionCity.ERegionCityType.Enemy:
                    this.__bgw = webfrontend.gui.region.RegionCityStatusInfoEnemy.getInstance()
            }
            break;
        case ClientLib.Vis.VisObject.EObjectType.RegionGhostCity:
            this.__bgw = webfrontend.gui.region.RegionGhostStatusInfo.getInstance();
            break;
        case ClientLib.Vis.VisObject.EObjectType.RegionRuin:
            this.__bgw = webfrontend.gui.region.RegionRuinStatusInfo.getInstance();
            break;
        case ClientLib.Vis.VisObject.EObjectType.RegionNPCBase:
            this.__bgw = webfrontend.gui.region.RegionNPCBaseStatusInfo.getInstance();
            break;
        case ClientLib.Vis.VisObject.EObjectType.RegionNPCCamp:
            this.__bgw = webfrontend.gui.region.RegionNPCCampStatusInfo.getInstance();
            break;
        case ClientLib.Vis.VisObject.EObjectType.RegionPointOfInterest:
            this.__bgw = webfrontend.gui.region.RegionPointOfInterestStatusInfo.getInstance();
            break;
        case ClientLib.Vis.VisObject.EObjectType.RegionNewPlayerSpot:
            this.__bgw = webfrontend.gui.region.RegionNewPlayerSpotStatusInfo.getInstance();
            break;
        case ClientLib.Vis.VisObject.EObjectType.RegionHubServer:
            this.__bgw = webfrontend.gui.region.RegionHubServerStatusInfo.getInstance();
            break;
        case ClientLib.Vis.VisObject.EObjectType.RegionHubCenter:
            webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter(), s, ClientLib.Data.EndGame.HubChanged, this, this.__qg);
            this.__bgw = this.__RG.get_State() == ClientLib.Data.EndGame.EHubState.Attackable ? webfrontend.gui.region.RegionHubCenterAttackableStatusInfo.getInstance() : webfrontend.gui.region.RegionHubCenterStatusInfo.getInstance();
            break;
        case ClientLib.Vis.VisObject.EObjectType.RegionHubControl:
            switch (f) {
                case 0:
                    this.__bgw = webfrontend.gui.region.RegionHubStatusInfo.getInstance();
                    break;
                case 1:
                    this.__bgw = webfrontend.gui.region.RegionHubRespawnInfo.getInstance()
            }
            break;
        case ClientLib.Vis.VisObject.EObjectType.RegionAllianceMarker:
            this.__bgw = webfrontend.gui.region.RegionInfoAllianceMarker.getInstance()
    }
    this.__bgw.setObject(this.__RG);
    this.__bgw.getContentElement().setStyle(t, o);
    this.add(this.__bgo);
    this.add(this.__bgw);
    this.updatePosition()
}

function updatePosition() {
    if (this.getBounds() != null && this.__RG != null) {
        var it = qx.core.Init.getApplication(),
            v = it.getUIBounds(),
            y = this.getBounds().width,
            p = this.getBounds().height,
            i = ClientLib.Vis.VisMain.GetInstance(),
            w = i.get_Region().get_GridWidth(),
            rt = i.get_Region().get_GridHeight(),
            b = i.get_Region().get_ZoomFactor(),
            k = Math.floor(w * b),
            d = Math.floor(rt * b),
            o = 0,
            t = 0,
            e = 0,
            s = 0,
            h = 0;
        switch (this.__RG.get_VisObjectType()) {
            case ClientLib.Vis.VisObject.EObjectType.RegionHubServer:
            case ClientLib.Vis.VisObject.EObjectType.RegionHubControl:
            case ClientLib.Vis.VisObject.EObjectType.RegionHubCenter:
                t = this.__RG.get_SelectionSizeX() * k;
                e = this.__RG.get_SelectionSizeY() * d;
                s = this.__RG.get_SelectionX();
                h = this.__RG.get_SelectionY();
                break;
            default:
                t = w;
                e = d;
                s = this.__RG.get_X();
                h = this.__RG.get_Y();
                o = k / 2 - t / 2
        }
        this.__bgo.set({
            width: t
        });
        this.__bgr.set({
            width: t,
            height: e
        });
        this.__bgq.setWidth(t);
        this.__bgq.setHeight(e);
        var g = Math.floor(i.ScreenPosFromWorldPosX(s)),
            nt = Math.floor(i.ScreenPosFromWorldPosY(h)),
            c = g + o,
            l = nt,
            a = u,
            tt = r;
        c + y > v.right && (c = g + o - y + t, a = n);
        l + p > v.bottom && (l = nt - p + e, tt = f);
        this.indexOf(this.__bgo) != -1 && this.remove(this.__bgo);
        this.__bgo = this.__bgA(tt, a);
        a == u ? this.addAt(this.__bgo, 0) : this.addAt(this.__bgo, 1);
        this.setLayoutProperties({
            left: Math.floor(c),
            top: Math.floor(l)
        })
    }
}