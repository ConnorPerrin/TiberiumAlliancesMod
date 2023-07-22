function setObject(n) {
    this.__RG = n;
    this.onCitiesChange();
    this.onTick()
}

function onTick() {}

function onCitiesChange() {
    var di, ir, ur, fr, ei, ni;
    this.__RG.get_OwnerAllianceId() > 0 ? this.__GG.setAlliance(this.__RG.get_OwnerAllianceName(), this.__RG.get_OwnerAllianceId()) : this.__GG.setNoAlliance();
    this.__bhb.setValue(this.tr(l));
    this.__bgT.setValue(e + ClientLib.Data.MainData.GetInstance().get_World().SurroundedEnemies(this.__RG.get_RawX(), this.__RG.get_RawY()).toString() + u);
    var a = ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(this.__RG.get_Level()),
        si = ClientLib.Data.MainData.GetInstance().get_Alliance().get_Id(),
        ti = this.__RG.get_Type(),
        s = 0;
    if (ti > 0 && si > 0) {
        var i = ClientLib.Base.PointOfInterestTypes.GetPOITypeFromWorldPOIType(ti),
            ci = webfrontend.phe.cnc.gui.util.Text.getPoiInfosByType(i),
            ct = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIRankScore(),
            d = ct[i - ClientLib.Base.EPOIType.RankedTypeBegin].r,
            w = ct[i - ClientLib.Base.EPOIType.RankedTypeBegin].s,
            li = ct[i - ClientLib.Base.EPOIType.RankedTypeBegin].ns,
            pi = ct[i - ClientLib.Base.EPOIType.RankedTypeBegin].ps,
            nt = ClientLib.Data.MainData.GetInstance().get_Server().get_POIGlobalBonusFactor(),
            wt = ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(i, d, w, nt);
        if (this.__RG.get_OwnerAllianceId() === si) {
            ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer() ? this.__bhe.getToolTip().setLabel(r + this.tr(yt) + n) : this.__bhe.getToolTip().setLabel(r + this.tr(dt, ci.name) + n);
            s = 0;
            pi > 0 && w - a < pi ? (di = ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(i, d + 1, w - a, nt), s = wt - di) : (ir = ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(i, d, w - a, nt), s = wt - ir);
            switch (i) {
                case ClientLib.Base.EPOIType.TiberiumBonus:
                case ClientLib.Base.EPOIType.CrystalBonus:
                case ClientLib.Base.EPOIType.PowerBonus:
                    this.__bhd.setValue(this.tr(ai, webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(s)));
                    break;
                case ClientLib.Base.EPOIType.InfanteryBonus:
                case ClientLib.Base.EPOIType.VehicleBonus:
                case ClientLib.Base.EPOIType.AirBonus:
                case ClientLib.Base.EPOIType.DefenseBonus:
                    this.__bhd.setValue(this.tr(ii, webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(s)))
            }
        } else {
            ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer() ? this.__bhe.getToolTip().setLabel(r + this.tr(yi) + n) : this.__bhe.getToolTip().setLabel(r + this.tr(it, ci.name) + n);
            s = 0;
            w === 0 ? s = ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(i, d, a, nt) : li > 0 && w + a > li && d > 1 ? (ur = ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(i, d - 1, w + a, nt), s = ur - wt) : (fr = ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(i, d, w + a, nt), s = fr - wt);
            switch (i) {
                case ClientLib.Base.EPOIType.TiberiumBonus:
                case ClientLib.Base.EPOIType.CrystalBonus:
                case ClientLib.Base.EPOIType.PowerBonus:
                    this.__bhd.setValue(this.tr(ri, webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(s)));
                    break;
                case ClientLib.Base.EPOIType.InfanteryBonus:
                case ClientLib.Base.EPOIType.VehicleBonus:
                case ClientLib.Base.EPOIType.AirBonus:
                case ClientLib.Base.EPOIType.DefenseBonus:
                    this.__bhd.setValue(this.tr(ui, webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(s)))
            }
        }
    } else this.__bhe.getToolTip().setLabel(r + this.tr(st) + n), this.__bhd.setValue(this.tr(bi));
    ei = !0;
    ni = !0;
    switch (ti) {
        case ClientLib.Data.WorldSector.WorldObjectPointOfInterest.EPOIType.TunnelExit:
            this.__Gz.setValue(this.tr(v));
            this.__GG.setAlliance(this.tr(c), webfrontend.gui.widgets.AllianceLabel.ESpecialAllianceIdMutants);
            this.__RN.setValue(t + this.tr(ht) + tr + this.tr(bt, Math.max(0, parseInt(this.__RG.get_Level()) - parseInt(ClientLib.Data.MainData.GetInstance().get_Server().get_POIActivationLevelDifference()))) + n);
            this.__bhb.setValue(this.tr(oi));
            this.__bgJ.setSource(webfrontend.phe.cnc.gui.util.Images.getFactionIcon(this.__RG.get_PlayerFaction()));
            ei = !1;
            ni = !1;
            break;
        case ClientLib.Data.WorldSector.WorldObjectPointOfInterest.EPOIType.TiberiumMine:
            this.__Gz.setValue(this.tr(k));
            this.__RN.setValue(t + this.tr(tt) + n);
            this.__bgJ.setSource(vi);
            break;
        case ClientLib.Data.WorldSector.WorldObjectPointOfInterest.EPOIType.CrystalMine:
            this.__Gz.setValue(this.tr(nr));
            this.__RN.setValue(t + this.tr(vt) + n);
            this.__bgJ.setSource(at);
            break;
        case ClientLib.Data.WorldSector.WorldObjectPointOfInterest.EPOIType.PowerVortex:
            this.__Gz.setValue(this.tr(g));
            this.__RN.setValue(t + this.tr(y) + n);
            this.__bgJ.setSource(ot);
            break;
        case ClientLib.Data.WorldSector.WorldObjectPointOfInterest.EPOIType.Infantery:
            this.__Gz.setValue(this.tr(hi));
            this.__RN.setValue(t + this.tr(et) + n);
            this.__bgJ.setSource(kt);
            break;
        case ClientLib.Data.WorldSector.WorldObjectPointOfInterest.EPOIType.Vehicle:
            this.__Gz.setValue(this.tr(ft));
            this.__RN.setValue(t + this.tr(gi) + n);
            this.__bgJ.setSource(b);
            break;
        case ClientLib.Data.WorldSector.WorldObjectPointOfInterest.EPOIType.Air:
            this.__Gz.setValue(this.tr(gt));
            this.__RN.setValue(t + this.tr(fi) + n);
            this.__bgJ.setSource(lt);
            break;
        case ClientLib.Data.WorldSector.WorldObjectPointOfInterest.EPOIType.Defense:
            this.__Gz.setValue(this.tr(p));
            this.__RN.setValue(t + this.tr(ut) + n);
            this.__bgJ.setSource(rt)
    }
    this.__bhc.setVisibility(ei ? o : f);
    this.__bhd.setVisibility(ni ? o : f);
    this.__bhe.setVisibility(ni ? o : f);
    this.__bhc.setValue(this.tr(h, e + webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(a) + u));
    this.__bgN.setValue(this.tr(pt, e + this.__RG.get_Level().toString() + u));
    this.__bgO.setCoordinates(this.__RG.get_RawX(), this.__RG.get_RawY(), ki + webfrontend.theme.Color.colors[wi] + rr + webfrontend.phe.cnc.gui.util.Numbers.formatCoordinates(this.__RG.get_RawX(), this.__RG.get_RawY()) + u)
}