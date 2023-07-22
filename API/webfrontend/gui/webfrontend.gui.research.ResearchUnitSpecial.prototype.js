function onUiTick() {
    var o;
    if (this._researchItem != null) {
        var t = ClientLib.Data.MainData.GetInstance().get_Cities(),
            r = !1,
            u = i,
            e = i,
            n = this._researchItem.get_NextLevelInfo_Obj();
        ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer() && (o = JSON.stringify(n), n = JSON.parse(o), n != null && n.rr != null && n.rr.length > 1 && (n.rr[1].c = n.rr[1].c * ClientLib.Data.MainData.GetInstance().get_Player().GetSeasonLegacyModifier()));
        n != null && (u = webfrontend.gui.UtilTech.generateResourceHtmlText(n.rr, t.get_CurrentOwnCity(), !1, !1, !1, !0, -4, null, !0).get(), e = webfrontend.gui.UtilTech.generateResourceHtmlText(n.rr, t.get_CurrentOwnCity(), !1, !1, !1, !0, -4, {
            valid: webfrontend.theme.Color.colors[nt],
            invalid: webfrontend.theme.Color.colors[b]
        }).get(), r = webfrontend.phe.cnc.Util.checkResources(n.rr));
        this._btnResearch != null && (this._btnResearch.setEnabled(this._canUpgrade == !0 && r == !0 && !this.__bax), this.__bax && this._btnResearch.setToolTipText(this.tr(f)));
        this._getShowResourceCosts() && this._lblResourceCost != null && (this._lblResourceCost.setValue(u), this._lblResourceCost.setToolTipText(e))
    }
}

function updateInfo(n) {
    var t, i, u;
    (webfrontend.gui.research.ResearchUnit.prototype.updateInfo.call(this, n), n && this.isVisible()) && (this._canUpgrade = !0, t = h, i = n.get_ErrorCode(), (i & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.EFullyUpgraded) != 0 ? t = f : (i & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.EMissingRequirements) != 0 && (t = s, this._canUpgrade = !1), this._imgPlateBackground.setSource(this.__baC[t]), this._lblTitle.setValue(this._techGamedata.dnuc != null ? this._techGamedata.dnuc : r), this._imgResearchUnit.setSource(webfrontend.phe.cnc.config.Config.getInstance().getUIImagePath(this._techGamedata.ci)), this._lblResourceCost != null && (this._getShowResourceCosts() ? this._lblResourceCost.show() : this._lblResourceCost.exclude()), this._lblDescription.setValue(this._techGamedata.ds), u = ClientLib.Base.Tech.GetTechNameFromTechId(this._researchItem.get_MdbId(), this._techGamedata.f), this._researchItem.get_CurrentLevel() == 0 && this._techGamedata.sds != null && u == ClientLib.Base.ETechName.Research_BaseFound && this._lblDescription.setValue(this._techGamedata.sds), this._showWidgetsByState(t))
}

function _showWidgetsByState(i) {
    var u = !1,
        f = !1,
        o = !1,
        s, h;
    switch (i) {
        case r:
            f = !0;
            break;
        case v:
            f = !0;
            o = !0;
            break;
        case a:
            f = !0;
            break;
        case e:
            u = !0
    }
    s = !u && f ? t : n;
    this._lblDescription.setVisibility(s);
    this._lblResearchBonus != null && (this._lblResearchBonus.setVisibility(s), h = this._lblResearchBonus.getValue(), h && h.length != 0 || this._lblResearchBonus.setVisibility(n));
    this._getShowResourceCosts() && this._lblResourceCost != null && this._lblResourceCost.setVisibility(s);
    this._btnResearch != null && this._btnResearch.setVisibility(!u && o ? t : n);
    this._lblRequirements != null && this._lblRequirements.setVisibility(!u && !o ? t : n);
    this._imgLockedUnit != null && this._imgLockedUnit.setVisibility(u ? t : n);
    this._lblNotAvailable != null && this._lblNotAvailable.setVisibility(!u && !o ? n : t);
    this._imgChecked && this._imgChecked.setVisibility(i == r ? t : n)
}

function _onClickResearch() {
    var e;
    if (this._researchItem != null && this._researchItem.get_MdbId() != -1) {
        var r = i,
            u = i,
            t = this._researchItem.get_GameDataUnit_Obj() || this._researchItem.get_GameDataTech_Obj();
        t != null && (r = t.dnuc ? t.dnuc : i, u = t.ds ? t.ds : i);
        var o = webfrontend.phe.cnc.config.Config.getInstance().getUIImagePath(this._researchItem.get_GameDataTech_Obj().ci),
            f = i,
            n = this._researchItem.get_NextLevelInfo_Obj();
        ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer() && n != null && n.rr != null && n.rr.length > 1 && (e = JSON.stringify(n), n = JSON.parse(e), n.rr[1].c = n.rr[1].c * ClientLib.Data.MainData.GetInstance().get_Player().GetSeasonLegacyModifier());
        n != null && (f = webfrontend.gui.UtilTech.generateResourceHtmlText(n.rr, null, !1, !1, !0, !0, -4).get());
        this._confirmationWidget.showResearchConfirmation(this, this._onResearchConfirmationResult, r, u, o, f)
    }
}

function _onResearchConfirmationResult(n) {
    if (n) {
        var t = ClientLib.Data.MainData.GetInstance().get_Player().get_PlayerResearch();
        t.ResearchTech(this._researchItem.get_MdbId())
    }
    this._confirmationWidget.disable()
}

function _getShowResourceCosts() {
    return !0
}

function updateInfo(n) {
    var t, i, u;
    (webfrontend.gui.research.ResearchUnit.prototype.updateInfo.call(this, n), n && this.isVisible()) && (this._canUpgrade = !0, t = h, i = n.get_ErrorCode(), (i & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.EFullyUpgraded) != 0 ? t = f : (i & 1 << ClientLib.Data.PlayerResearchItem.EResearchErrors.EMissingRequirements) != 0 && (t = s, this._canUpgrade = !1), this._imgPlateBackground.setSource(this.__baC[t]), this._lblTitle.setValue(this._techGamedata.dnuc != null ? this._techGamedata.dnuc : r), this._imgResearchUnit.setSource(webfrontend.phe.cnc.config.Config.getInstance().getUIImagePath(this._techGamedata.ci)), this._lblResourceCost != null && (this._getShowResourceCosts() ? this._lblResourceCost.show() : this._lblResourceCost.exclude()), this._lblDescription.setValue(this._techGamedata.ds), u = ClientLib.Base.Tech.GetTechNameFromTechId(this._researchItem.get_MdbId(), this._techGamedata.f), this._researchItem.get_CurrentLevel() == 0 && this._techGamedata.sds != null && u == ClientLib.Base.ETechName.Research_BaseFound && this._lblDescription.setValue(this._techGamedata.sds), this._showWidgetsByState(t))
}

function _getShowResourceCosts() {
    return !0
}