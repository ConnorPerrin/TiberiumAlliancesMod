function getLabel anonymous() {
    this.getLabel.$$install && this.getLabel.$$install();
    return this.getLabel.apply(this, arguments);
}

function setLabel anonymous(value) {
    this.$$setLabelImpl.apply(this, arguments);
    return value;
}

function resetLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIcon anonymous() {
    this.getIcon.$$install && this.getIcon.$$install();
    return this.getIcon.apply(this, arguments);
}

function setIcon anonymous(value) {
    this.$$setIconImpl.apply(this, arguments);
    return value;
}

function resetIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getShowCloseButton anonymous() {
    this.getShowCloseButton.$$install && this.getShowCloseButton.$$install();
    return this.getShowCloseButton.apply(this, arguments);
}

function setShowCloseButton anonymous() {
    this.setShowCloseButton.$$install && this.setShowCloseButton.$$install.call(this);
    return this.setShowCloseButton.apply(this, arguments);
}

function resetShowCloseButton() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initShowCloseButton() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeShowCloseButton() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeShowCloseButton() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleShowCloseButton anonymous() {
    return this.setShowCloseButton(!this.getShowCloseButton())
}

function isShowCloseButton anonymous() {
    return this.getShowCloseButton()
} [object _forwardStatesObject]
function _applyIcon(t) {
    var r = this.getChildControl(n);
    t ? (r.setIcon(t), r._showChildControl(i)) : r._excludeChildControl(i)
}

function _applyLabel(t) {
    this.getChildControl(n).setLabel(t)
}

function _applyEnabled(t, i) {
    qx.ui.container.Composite.prototype._applyEnabled.call(this, t, i);
    var r = this.getChildControl(n);
    t == null ? r.resetEnabled() : r.setEnabled(t)
}

function _createChildControlImpl(t) {
    var i;
    switch (t) {
        case n:
            i = new qx.ui.tabview.TabButton;
            i.setAllowGrowX(!0);
            i.setAllowGrowY(!0);
            i.setUserData(f, this);
            i.addListener(r, this._onButtonClose, this)
    }
    return i || qx.ui.container.Composite.prototype._createChildControlImpl.call(this, t)
}

function _applyShowCloseButton(t) {
    this.getChildControl(n).setShowCloseButton(t)
}

function _onButtonClose() {
    this.fireEvent(r)
}

function getButton() {
    return this.getChildControl(n)
}

function triggerAppear() {
    this.update()
}

function update() {
    var n = ClientLib.Data.MainData.GetInstance().get_Alliance().get_OwnedPOIs(),
        t = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIRankScore();
    this.setData({
        opois: n,
        rpois: t
    })
}

function setData(n) {
    var a, e, rt, l, r, i, t;
    if (this.clearData(), n != null && (a = n.rpois, n.opois != null)) {
        e = {};
        for (rt in n.opois) l = n.opois[rt], e.hasOwnProperty(l.t) || (e[l.t] = []), e[l.t].push(l);
        for (r = ClientLib.Base.EPOIType.RankedTypeBegin; r < ClientLib.Base.EPOIType.RankedTypeEnd; r++)
            if (i = this.__VA(r), t = webfrontend.phe.cnc.gui.util.Text.getPoiInfosByType(r), e.hasOwnProperty(r)) {
                if (a.hasOwnProperty(i)) {
                    var b = a[i].r,
                        v = a[i].s,
                        k = ClientLib.Data.MainData.GetInstance().get_Server().get_POIGlobalBonusFactor(),
                        ut = ClientLib.Base.PointOfInterestTypes.GetNextScore(v),
                        ft = ClientLib.Base.PointOfInterestTypes.GetBonusByType(r, v, k),
                        ot = ClientLib.Base.PointOfInterestTypes.GetBonusByType(r, ut, k),
                        st = ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(r, b, v, k),
                        ct = ClientLib.Base.PointOfInterestTypes.GetBoostModifierByRank(b),
                        o = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(v),
                        s = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(ut),
                        g = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(ft),
                        h = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(ot),
                        nt = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(st),
                        y, u, f, at = this.tr(vi, ct, b),
                        it = ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer();
                    switch (r) {
                        case ClientLib.Base.EPOIType.TiberiumBonus:
                        case ClientLib.Base.EPOIType.CrystalBonus:
                        case ClientLib.Base.EPOIType.PowerBonus:
                            y = this.tr(si, t.type, nt);
                            it ? (u = this.tr(nr, t.name, o), f = this.tr(rr, t.name, s, h, t.resource)) : (u = this.tr(oi, t.name, o, g, t.resource), f = this.tr(w, t.name, s, h, t.resource));
                            break;
                        case ClientLib.Base.EPOIType.InfanteryBonus:
                        case ClientLib.Base.EPOIType.VehicleBonus:
                        case ClientLib.Base.EPOIType.AirBonus:
                            y = this.tr(ui, t.type, nt);
                            it ? (u = this.tr(p, t.name, o), f = this.tr(ki, t.name, s, h, t.resource)) : (u = this.tr(tt, t.name, o, g, t.resource), f = this.tr(et, t.name, s, h, t.resource));
                            break;
                        case ClientLib.Base.EPOIType.DefenseBonus:
                            y = this.tr(ei, t.type, nt);
                            it ? (u = this.tr(d, t.name, o), f = this.tr(sr, t.name, s, h, t.resource)) : (u = this.tr(ci, t.name, o, g, t.resource), f = this.tr(c, t.name, s, h, t.resource))
                    }
                    this.__Vz[i].lblTitle.setValue(y);
                    this.__Vz[i].lblCurrent.setValue(u);
                    this.__Vz[i].lblNext.setValue(f);
                    this.__Vz[i].lblMultiplier.setValue(at)
                }
                this.__Vz[i].infos.removeAll();
                this.__Vz[i].infos.add(this.__VC(r, e[r]));
                this.__Vz[i].lblNoPoiInfos.exclude();
                this.__Vz[i].contPoiInfos.show()
            } else this.__Vz[i].lblNoPoiInfos.setValue(this.tr(ht, t.name)), this.__Vz[i].lblTitle.setValue(this.tr(li, t.type, this.tr(lt))), this.__Vz[i].contPoiInfos.exclude(), this.__Vz[i].lblNoPoiInfos.show()
    }
}

function clearData() {
    for (var t = 0; t < this.__Vz.length; t++) this.__Vz[t].lblTitle.setValue(n), this.__Vz[t].lblCurrent.setValue(n), this.__Vz[t].lblNext.setValue(n), this.__Vz[t].lblMultiplier.setValue(n), this.__Vz[t].infos.removeAll()
}