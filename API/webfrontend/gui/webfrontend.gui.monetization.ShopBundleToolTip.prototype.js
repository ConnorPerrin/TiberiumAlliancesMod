function update(t, u) {
    var w, ct, lt, at, ft, et, ot, d, rt, it, yt, ht, pt;
    for (this._currentObject = t, this._currentCityId = u, w = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(u), ct = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetBundleInfo(t), this._lblTitle.setValue(t.dn), this.__vp.removeAll(), this.__bbn.length = 0, lt = new qx.ui.container.Composite((new qx.ui.layout.HBox).set({
            alignY: n,
            alignX: r
        })).set({
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: l,
            height: 25
        }), lt.add(new qx.ui.basic.Label(this.tr(y)).set({
            font: f
        })), this.__vp.add(lt, {
            row: 0,
            column: 0
        }), at = new qx.ui.container.Composite((new qx.ui.layout.HBox).set({
            alignY: n,
            alignX: r
        })).set({
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: l,
            height: 25
        }), at.add(new qx.ui.basic.Label(this.tr(g)).set({
            font: f
        })), this.__vp.add(at, {
            row: 0,
            column: 1,
            colSpan: 3
        }), ft = !1, et = 0; et < ct.Items.l.length; et++) {
        var tt = ct.Items.l[et],
            b = webfrontend.gui.Util.generateItemInfos(tt),
            k = h,
            nt = {};
        nt.category = tt.c;
        switch (tt.c) {
            case ClientLib.Base.EItemCategory.TiberiumGain:
                w != null && (d = Math.floor(w.GetResourceCount(ClientLib.Base.EResourceType.Tiberium)), e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(d), k = this.tr(i, e));
                break;
            case ClientLib.Base.EItemCategory.CrystalGain:
                w != null && (d = Math.floor(w.GetResourceCount(ClientLib.Base.EResourceType.Crystal)), e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(d), k = this.tr(i, e));
                break;
            case ClientLib.Base.EItemCategory.PowerGain:
                w != null && (d = Math.floor(w.GetResourceCount(ClientLib.Base.EResourceType.Power)), e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(d), k = this.tr(i, e));
                break;
            case ClientLib.Base.EItemCategory.CreditGain:
                ot = ClientLib.Data.MainData.GetInstance().get_Player();
                d = ot.GetCreditsCount();
                e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(d);
                k = this.tr(i, e);
                break;
            case ClientLib.Base.EItemCategory.CommandPointGain:
                var ot = ClientLib.Data.MainData.GetInstance().get_Player(),
                    d = ot.GetCommandPointCount(),
                    e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(d);
                k = this.tr(i, e);
                break;
            case ClientLib.Base.EItemCategory.ArmyRepairTime:
                if (w != null) {
                    rt = w.get_RepairOffenseResources();
                    it = null;
                    rt != null && (it = rt.get_RepairChargeOffense());
                    var wt = it != null ? it.Type : 0,
                        st = ClientLib.Data.MainData.GetInstance().get_Time(),
                        vt = st.GetServerStep(),
                        d = Math.floor(w.GetResourceCount(wt));
                    e = webfrontend.phe.cnc.Util.getTimespanString(st.GetTimeSpan(d));
                    k = this.tr(p, e, w.get_Name())
                }
                break;
            case ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity:
                if (w != null) {
                    rt = w.get_RepairOffenseResources();
                    it = null;
                    rt != null && (it = rt.get_RepairChargeOffense());
                    var wt = it != null ? it.Type : 0,
                        st = ClientLib.Data.MainData.GetInstance().get_Time(),
                        vt = st.GetServerStep(),
                        bt = Math.floor(w.GetResourceMaxStorage(wt)),
                        e = webfrontend.phe.cnc.Util.getTimespanString(st.GetTimeSpan(bt)),
                        ut = ClientLib.Data.MainData.GetInstance().get_Player().GetNextEffectEndStepByCategory(tt.c),
                        vt = ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep();
                    k = ut > -1 ? this.tr(s, e, webfrontend.phe.cnc.Util.getShortTimespanString(ut - vt, !0)) : this.tr(c, e)
                }
                break;
            case ClientLib.Base.EItemCategory.BonusPackageStorage:
                var e = ClientLib.Data.MainData.GetInstance().get_Player().get_PackageCount().toString(),
                    ut = ClientLib.Data.MainData.GetInstance().get_Player().GetNextEffectEndStepByCategory(tt.c),
                    vt = ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep();
                k = ut > -1 ? this.tr(s, e, webfrontend.phe.cnc.Util.getShortTimespanString(ut - vt, !0)) : this.tr(c, e);
                break;
            case ClientLib.Base.EItemCategory.CommandPointCapacityBuff:
                var st = ClientLib.Data.MainData.GetInstance().get_Time(),
                    vt = st.GetServerStep(),
                    ot = ClientLib.Data.MainData.GetInstance().get_Player(),
                    kt = ot.GetCommandPointMaxStorage(),
                    e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(kt, !0),
                    ut = ot.GetNextEffectEndStepByCategory(tt.c),
                    vt = ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep();
                k = ut > -1 ? this.tr(s, e, webfrontend.phe.cnc.Util.getShortTimespanString(ut - vt, !0)) : this.tr(c, e)
        }
        yt = b.duration > 0;
        ht = h;
        switch (tt.c) {
            case ClientLib.Base.EItemCategory.TiberiumGain:
            case ClientLib.Base.EItemCategory.CrystalGain:
            case ClientLib.Base.EItemCategory.PowerGain:
            case ClientLib.Base.EItemCategory.CreditGain:
            case ClientLib.Base.EItemCategory.ArmyRepairTime:
            case ClientLib.Base.EItemCategory.CommandPointGain:
                ht = this.tr(o, b.value);
                break;
            case ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity:
            case ClientLib.Base.EItemCategory.CityBuff:
                ht = yt ? this.tr(a, b.value, b.duration) : this.tr(o, b.value);
                break;
            case ClientLib.Base.EItemCategory.CommandPointCapacityBuff:
            case ClientLib.Base.EItemCategory.BonusPackageStorage:
                ht = yt ? this.tr(a, b.value, b.duration) : this.tr(o, b.value)
        }
        nt.icon = b.resourceIcon;
        nt.name = b.bn;
        nt.text = k;
        nt.value = ht;
        nt.quantity = t.i[et].q;
        nt.rank = b.requiredImage;
        nt.numRank = tt.t;
        ft = ft || b.requiredImage != null;
        this.__bbn.push(nt)
    }
    ft && (pt = new qx.ui.container.Composite((new qx.ui.layout.HBox).set({
        alignY: n,
        alignX: r
    })).set({
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: l,
        height: 25
    }), pt.add(new qx.ui.basic.Label(this.tr(v, h)).set({
        font: f
    })), this.__vp.add(pt, {
        row: 0,
        column: 4
    }));
    this.__bbq();
    this.__bbp(t, ft)
}

function _createLayout() {
    var n = new qx.ui.layout.Grid(0, 0);
    n.setColumnAlign(0, e, t);
    n.setColumnAlign(1, e, t);
    n.setColumnAlign(2, e, t);
    n.setColumnAlign(3, e, t);
    n.setColumnAlign(4, r, t);
    this.__vp = new qx.ui.container.Composite(n);
    this._cntContent.add(this.__vp)
}

function _onUITick() {
    this._currentObject != null && this.isVisible() && this.update(this._currentObject, this._currentCityId)
}

function update(t, u) {
    var w, ct, lt, at, ft, et, ot, d, rt, it, yt, ht, pt;
    for (this._currentObject = t, this._currentCityId = u, w = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(u), ct = ClientLib.Data.MainData.GetInstance().get_ShopCatalog().GetBundleInfo(t), this._lblTitle.setValue(t.dn), this.__vp.removeAll(), this.__bbn.length = 0, lt = new qx.ui.container.Composite((new qx.ui.layout.HBox).set({
            alignY: n,
            alignX: r
        })).set({
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: l,
            height: 25
        }), lt.add(new qx.ui.basic.Label(this.tr(y)).set({
            font: f
        })), this.__vp.add(lt, {
            row: 0,
            column: 0
        }), at = new qx.ui.container.Composite((new qx.ui.layout.HBox).set({
            alignY: n,
            alignX: r
        })).set({
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: l,
            height: 25
        }), at.add(new qx.ui.basic.Label(this.tr(g)).set({
            font: f
        })), this.__vp.add(at, {
            row: 0,
            column: 1,
            colSpan: 3
        }), ft = !1, et = 0; et < ct.Items.l.length; et++) {
        var tt = ct.Items.l[et],
            b = webfrontend.gui.Util.generateItemInfos(tt),
            k = h,
            nt = {};
        nt.category = tt.c;
        switch (tt.c) {
            case ClientLib.Base.EItemCategory.TiberiumGain:
                w != null && (d = Math.floor(w.GetResourceCount(ClientLib.Base.EResourceType.Tiberium)), e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(d), k = this.tr(i, e));
                break;
            case ClientLib.Base.EItemCategory.CrystalGain:
                w != null && (d = Math.floor(w.GetResourceCount(ClientLib.Base.EResourceType.Crystal)), e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(d), k = this.tr(i, e));
                break;
            case ClientLib.Base.EItemCategory.PowerGain:
                w != null && (d = Math.floor(w.GetResourceCount(ClientLib.Base.EResourceType.Power)), e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(d), k = this.tr(i, e));
                break;
            case ClientLib.Base.EItemCategory.CreditGain:
                ot = ClientLib.Data.MainData.GetInstance().get_Player();
                d = ot.GetCreditsCount();
                e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(d);
                k = this.tr(i, e);
                break;
            case ClientLib.Base.EItemCategory.CommandPointGain:
                var ot = ClientLib.Data.MainData.GetInstance().get_Player(),
                    d = ot.GetCommandPointCount(),
                    e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbersCompact(d);
                k = this.tr(i, e);
                break;
            case ClientLib.Base.EItemCategory.ArmyRepairTime:
                if (w != null) {
                    rt = w.get_RepairOffenseResources();
                    it = null;
                    rt != null && (it = rt.get_RepairChargeOffense());
                    var wt = it != null ? it.Type : 0,
                        st = ClientLib.Data.MainData.GetInstance().get_Time(),
                        vt = st.GetServerStep(),
                        d = Math.floor(w.GetResourceCount(wt));
                    e = webfrontend.phe.cnc.Util.getTimespanString(st.GetTimeSpan(d));
                    k = this.tr(p, e, w.get_Name())
                }
                break;
            case ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity:
                if (w != null) {
                    rt = w.get_RepairOffenseResources();
                    it = null;
                    rt != null && (it = rt.get_RepairChargeOffense());
                    var wt = it != null ? it.Type : 0,
                        st = ClientLib.Data.MainData.GetInstance().get_Time(),
                        vt = st.GetServerStep(),
                        bt = Math.floor(w.GetResourceMaxStorage(wt)),
                        e = webfrontend.phe.cnc.Util.getTimespanString(st.GetTimeSpan(bt)),
                        ut = ClientLib.Data.MainData.GetInstance().get_Player().GetNextEffectEndStepByCategory(tt.c),
                        vt = ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep();
                    k = ut > -1 ? this.tr(s, e, webfrontend.phe.cnc.Util.getShortTimespanString(ut - vt, !0)) : this.tr(c, e)
                }
                break;
            case ClientLib.Base.EItemCategory.BonusPackageStorage:
                var e = ClientLib.Data.MainData.GetInstance().get_Player().get_PackageCount().toString(),
                    ut = ClientLib.Data.MainData.GetInstance().get_Player().GetNextEffectEndStepByCategory(tt.c),
                    vt = ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep();
                k = ut > -1 ? this.tr(s, e, webfrontend.phe.cnc.Util.getShortTimespanString(ut - vt, !0)) : this.tr(c, e);
                break;
            case ClientLib.Base.EItemCategory.CommandPointCapacityBuff:
                var st = ClientLib.Data.MainData.GetInstance().get_Time(),
                    vt = st.GetServerStep(),
                    ot = ClientLib.Data.MainData.GetInstance().get_Player(),
                    kt = ot.GetCommandPointMaxStorage(),
                    e = webfrontend.phe.cnc.gui.util.Numbers.formatNumbers(kt, !0),
                    ut = ot.GetNextEffectEndStepByCategory(tt.c),
                    vt = ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep();
                k = ut > -1 ? this.tr(s, e, webfrontend.phe.cnc.Util.getShortTimespanString(ut - vt, !0)) : this.tr(c, e)
        }
        yt = b.duration > 0;
        ht = h;
        switch (tt.c) {
            case ClientLib.Base.EItemCategory.TiberiumGain:
            case ClientLib.Base.EItemCategory.CrystalGain:
            case ClientLib.Base.EItemCategory.PowerGain:
            case ClientLib.Base.EItemCategory.CreditGain:
            case ClientLib.Base.EItemCategory.ArmyRepairTime:
            case ClientLib.Base.EItemCategory.CommandPointGain:
                ht = this.tr(o, b.value);
                break;
            case ClientLib.Base.EItemCategory.ArmyRepairTimeCapacity:
            case ClientLib.Base.EItemCategory.CityBuff:
                ht = yt ? this.tr(a, b.value, b.duration) : this.tr(o, b.value);
                break;
            case ClientLib.Base.EItemCategory.CommandPointCapacityBuff:
            case ClientLib.Base.EItemCategory.BonusPackageStorage:
                ht = yt ? this.tr(a, b.value, b.duration) : this.tr(o, b.value)
        }
        nt.icon = b.resourceIcon;
        nt.name = b.bn;
        nt.text = k;
        nt.value = ht;
        nt.quantity = t.i[et].q;
        nt.rank = b.requiredImage;
        nt.numRank = tt.t;
        ft = ft || b.requiredImage != null;
        this.__bbn.push(nt)
    }
    ft && (pt = new qx.ui.container.Composite((new qx.ui.layout.HBox).set({
        alignY: n,
        alignX: r
    })).set({
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: l,
        height: 25
    }), pt.add(new qx.ui.basic.Label(this.tr(v, h)).set({
        font: f
    })), this.__vp.add(pt, {
        row: 0,
        column: 4
    }));
    this.__bbq();
    this.__bbp(t, ft)
}

function _createLayout() {
    var n = new qx.ui.layout.Grid(0, 0);
    n.setColumnAlign(0, e, t);
    n.setColumnAlign(1, e, t);
    n.setColumnAlign(2, e, t);
    n.setColumnAlign(3, e, t);
    n.setColumnAlign(4, r, t);
    this.__vp = new qx.ui.container.Composite(n);
    this._cntContent.add(this.__vp)
}