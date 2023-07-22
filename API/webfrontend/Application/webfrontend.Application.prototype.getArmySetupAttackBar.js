function getIsAllowedSimulate anonymous() {
    this.getIsAllowedSimulate.$$install && this.getIsAllowedSimulate.$$install();
    return this.getIsAllowedSimulate.apply(this, arguments);
}

function setIsAllowedSimulate anonymous() {
    this.setIsAllowedSimulate.$$install && this.setIsAllowedSimulate.$$install.call(this);
    return this.setIsAllowedSimulate.apply(this, arguments);
}

function resetIsAllowedSimulate() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIsAllowedSimulate() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIsAllowedSimulate() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIsAllowedSimulate() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleIsAllowedSimulate anonymous() {
    return this.setIsAllowedSimulate(!this.getIsAllowedSimulate())
}

function isIsAllowedSimulate anonymous() {
    return this.getIsAllowedSimulate()
}

function getToolTipSimulate anonymous() {
    this.getToolTipSimulate.$$install && this.getToolTipSimulate.$$install();
    return this.getToolTipSimulate.apply(this, arguments);
}

function setToolTipSimulate anonymous() {
    this.setToolTipSimulate.$$install && this.setToolTipSimulate.$$install.call(this);
    return this.setToolTipSimulate.apply(this, arguments);
}

function resetToolTipSimulate() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initToolTipSimulate() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeToolTipSimulate() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeToolTipSimulate() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSelectedUnitContainer() {
    return this.__bxe != null ? this.__bxe.cont : null
}

function _attachMouseEventToWidget(n) {
    qx.bom.Element.addListener(n, g, this.__QL, this)
}

function _onResize() {
    var u = ClientLib.Vis.VisMain.GetInstance().get_CombatSetup(),
        f = u.get_ZoomFactor(),
        n, t, i, e, r, o;
    for (this.__bwc = Math.round(u.get_GridWidth() * f), this.__bwi = Math.round(u.get_PosX() * f * -1), n = this.__bwc * this.__bwa, this.__bwn.setLayoutProperties({
            left: this.__bwi
        }), this.__bwn.setWidth(n), this.__bwn.setMaxWidth(n), t = 0; t < this.__bwa; t++)
        for (i = 0; i < this.__bwb; i++) e = this.__bwo[t][i], e.cont.set({
            width: this.__bwc,
            maxWidth: this.__bwc
        });
    for (this.__bwV != null && (this.__bwV.setLayoutProperties({
            left: this.__bwi + 10
        }), this.__bwV.setWidth(n), this.__bwV.setMaxWidth(n)), r = 0; r < this.__bwW.length; r++) o = this.__bwW[r], o.set({
        width: this.__bwc,
        maxWidth: this.__bwc
    })
}

function activate(n) {
    if (this.__bad != n)
        if (this.__bad = n, n) {
            this.__bxP();
            var t = ClientLib.Data.MainData.GetInstance().get_Cities();
            this.__bwS = t.get_CurrentCity();
            this.__bxz();
            this.__bwT.get_CityArmyFormationsManager().set_CurrentTargetBaseId(this.__bwS.get_Id());
            webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Combat(), ki, ClientLib.Data.CombatReport, this, this._onCombatReport);
            webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), fi, ClientLib.Data.CurrentOwnCityChange, this, this.__qh);
            webfrontend.phe.cnc.base.Timer.getInstance().addListener(ai, this.__we, this);
            this.__bys();
            this.__we()
        } else this.__bxx(), webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Combat(), ki, ClientLib.Data.CombatReport, this, this._onCombatReport), webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), fi, ClientLib.Data.CurrentOwnCityChange, this, this.__qh), webfrontend.phe.cnc.base.Timer.getInstance().removeListener(ai, this.__we, this), this.__bwS = null, this.__bwT = null, this.showSetup(!1), this.__Ad.setEnabled(!1), this.__bwJ.setIcon(pt), this.__bwJ.setValue(!1), this.__bwN.setIcon(tt), this.__bwN.setValue(!1), this.__bwO.setIcon(p), this.__bwO.setValue(!1), this.__bwC.setValue(!1)
}

function activateSetupDisplay() {
    this.showSetup(!0);
    this.__bwQ = !1;
    this.__bvX.setVisibility(t);
    ClientLib.Data.MainData.GetInstance().get_Server().get_WorldConfig_IsActiveIngameCombatSimulation() && this.__bwv.setVisibility(n);
    this.__bxB(this.__bwU);
    this.__bys()
}

function activateCombatDisplay() {
    var i = webfrontend.phe.cnc.Util.getConfigBoolean(ClientLib.Config.Main.CONFIG_COMBATSHOWSETUP);
    this.showSetup(i);
    this.__bwQ = !0;
    this.__bwv.setVisibility(t);
    this.__bvX.setVisibility(n);
    this.__bxB(this.__bwU)
}

function showSetup(n) {
    this.__bwR = n;
    n ? (this.__bxu(), this.__bxv(), this.show()) : (this.__bxX(), this.exclude())
}

function isActive() {
    return this.__bad
}

function _onCombatReport() {
    var n = ClientLib.Data.MainData.GetInstance().get_Combat(),
        t = n.GetReport();
    this.__bwT.get_Id() == t.get_AttackerBaseId() && (this.activateSetupDisplay(), this.__bxm = !0)
}

function getUIItem(n) {
    var i, u, t, r;
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_ATTACK:
            return this.__Ad;
        case ClientLib.Data.Missions.PATH.WDG_UPPERLEFTSLOT:
            return i = this.__byf() - 1, i < 0 && (i = 0), this.__bwo[i][0].cont;
        case ClientLib.Data.Missions.PATH.WDG_LOWERRIGHTSLOT:
            return i = this.__byf() + 1, i > this.__bwa - 1 && (i = this.__bwa - 1), this.__bwo[i][this.__bwb - 1].cont;
        case ClientLib.Data.Missions.PATH.VIS_CONSTRUCTIONYARD:
            if (u = ClientLib.Vis.VisMain.GetInstance().get_CombatSetup(), u) {
                if (r = u.GetConstructionYard(), r && r.GetOpacityLevel() > 0) return t = r.GetCoordinates(), t.left = Math.floor(ClientLib.Vis.VisMain.GetInstance().ScreenPosFromWorldPosX(t.left)), t.right = Math.floor(ClientLib.Vis.VisMain.GetInstance().ScreenPosFromWorldPosX(t.right)) + 8, t.top = Math.floor(ClientLib.Vis.VisMain.GetInstance().ScreenPosFromWorldPosY(t.top)), t.bottom = Math.floor(ClientLib.Vis.VisMain.GetInstance().ScreenPosFromWorldPosY(t.bottom)) + 8, qx.core.Init.getApplication().addOffset(t);
                if (r = ClientLib.Vis.VisMain.GetInstance().GetActiveView().GetAllBuildingsFromType ? ClientLib.Vis.VisMain.GetInstance().GetActiveView().GetAllBuildingsFromType(ClientLib.Base.ETechName.Construction_Yard, ClientLib.Base.EResourceType.None) : null, r != null) return qx.core.Init.getApplication().addOffset(r.l[0])
            }
    }
    return null
}

function getMainContainer() {
    return this.__oJ
}

function onHotKeyPress(n) {
    if (!this.isVisible()) return !1;
    var r = n.getKeyIdentifier(),
        i = !1,
        t = null;
    switch (r) {
        case webfrontend.gui.ShortkeyMapper.keys.repairall:
            t = this.__bkr;
            break;
        case webfrontend.gui.ShortkeyMapper.keys.disableAllUnits:
            t = this.__bwJ;
            break;
        case webfrontend.gui.ShortkeyMapper.keys.disableUnits:
            t = this.__bwN;
            break;
        case webfrontend.gui.ShortkeyMapper.keys.repair:
            t = this.__bwO;
            break;
        case webfrontend.gui.ShortkeyMapper.keys.moveUp:
            t = this.__bwF;
            break;
        case webfrontend.gui.ShortkeyMapper.keys.moveRight:
            t = this.__bwE;
            break;
        case webfrontend.gui.ShortkeyMapper.keys.moveDown:
            t = this.__bwG;
            break;
        case webfrontend.gui.ShortkeyMapper.keys.moveLeft:
            t = this.__bwD;
            break;
        case webfrontend.gui.ShortkeyMapper.keys.flipHorizontal:
            t = this.__bwH;
            break;
        case webfrontend.gui.ShortkeyMapper.keys.flipVertical:
            t = this.__bwI
    }
    return t && t.isVisible() && t.isEnabled() && (i = !0, t.execute()), i
}