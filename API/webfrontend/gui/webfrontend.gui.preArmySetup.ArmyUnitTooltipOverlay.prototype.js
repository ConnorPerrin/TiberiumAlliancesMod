function _onAppear() {
    var c;
    if (this._owner != null && this._parent != null) {
        var r = 36,
            t = this.getBounds(),
            u = this._owner.getBounds(),
            f = this._owner.getContentLocation(),
            e = this._parent.getBounds();
        if (t != null && f != null && u != null && e != null) {
            var n = qx.core.Init.getApplication(),
                o = e.height,
                l = t.width / 2,
                s = f.left + u.width / 2,
                h = n.getDesktop().getBounds().width - t.width,
                a = Math.floor(Math.min(Math.max(0, s - l), h));
            this.setLayoutProperties({
                left: a,
                bottom: o + 21
            });
            n.getDesktop().remove(this.__bvD);
            c = Math.floor(s - r / 2);
            h = n.getDesktop().getBounds().width - r;
            n.getDesktop().add(this.__bvD, {
                left: c,
                bottom: o
            });
            this.__bvD.setVisibility(i)
        }
    }
}

function activate(o, v, y, p) {
    var g, ut, ft, k, et, nt;
    webfrontend.gui.TooltipOverlay.prototype.activate.call(this, o, v);
    var tt = 0,
        b = 0,
        it = -1,
        d = !0,
        rt = !0,
        w = new qx.util.StringBuilder(1024);
    p && (tt = p.get_CurrentLevel(), b = p.get_HitpointsPercent(), it = p.get_MdbUnitId(), d = p.get_Enabled(), g = p.GetCityUnit(), g && (rt = g.AreTechRequirementsFulfilled()));
    ut = y.dn ? y.dn : n;
    ft = ut + f + tt.toString() + e;
    this._lblTitle.setValue(ft);
    this.__yY.setValue(y.ds ? y.ds : n);
    k = ClientLib.Base.Unit.GetUpgrade(it);
    k != null && k.get_CurrentLevel() == 2 ? (this.__bpy.setValue(this.tr(s, k.get_GameDataTech_Obj().tr.dn)), this.__bpz.setValue(k.get_GameDataTech_Obj().tr.uds == null ? n : k.get_GameDataTech_Obj().tr.uds), p.get_TransportedCityEntity() != null ? (et = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(p.get_TransportedCityEntity().get_MdbUnitId()), this.__byx.setValue(this.tr(h, et.dn, p.get_TransportedCityEntity().get_CurrentLevel())), this.__byx.show()) : this.__byx.exclude(), this.__bpx.show()) : this.__bpx.exclude();
    b < 1 && (nt = n, nt = b > 0 ? this.tr(l, webfrontend.phe.cnc.gui.util.Numbers.calculateDisplayPercentValue(b)) : this.tr(u), w.add(nt));
    d || (b < 1 && w.add(i), w.add(this.tr(r)));
    rt || ((b < 1 || !d) && w.add(i), w.add(this.tr(a)));
    this.__Ol.setValue(w.get());
    this.__Ol.setVisibility(w.get().length > 0 ? c : t)
}

function deactivate() {
    webfrontend.gui.TooltipOverlay.prototype.deactivate.call(this)
}

function activate(o, v, y, p) {
    var g, ut, ft, k, et, nt;
    webfrontend.gui.TooltipOverlay.prototype.activate.call(this, o, v);
    var tt = 0,
        b = 0,
        it = -1,
        d = !0,
        rt = !0,
        w = new qx.util.StringBuilder(1024);
    p && (tt = p.get_CurrentLevel(), b = p.get_HitpointsPercent(), it = p.get_MdbUnitId(), d = p.get_Enabled(), g = p.GetCityUnit(), g && (rt = g.AreTechRequirementsFulfilled()));
    ut = y.dn ? y.dn : n;
    ft = ut + f + tt.toString() + e;
    this._lblTitle.setValue(ft);
    this.__yY.setValue(y.ds ? y.ds : n);
    k = ClientLib.Base.Unit.GetUpgrade(it);
    k != null && k.get_CurrentLevel() == 2 ? (this.__bpy.setValue(this.tr(s, k.get_GameDataTech_Obj().tr.dn)), this.__bpz.setValue(k.get_GameDataTech_Obj().tr.uds == null ? n : k.get_GameDataTech_Obj().tr.uds), p.get_TransportedCityEntity() != null ? (et = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(p.get_TransportedCityEntity().get_MdbUnitId()), this.__byx.setValue(this.tr(h, et.dn, p.get_TransportedCityEntity().get_CurrentLevel())), this.__byx.show()) : this.__byx.exclude(), this.__bpx.show()) : this.__bpx.exclude();
    b < 1 && (nt = n, nt = b > 0 ? this.tr(l, webfrontend.phe.cnc.gui.util.Numbers.calculateDisplayPercentValue(b)) : this.tr(u), w.add(nt));
    d || (b < 1 && w.add(i), w.add(this.tr(r)));
    rt || ((b < 1 || !d) && w.add(i), w.add(this.tr(a)));
    this.__Ol.setValue(w.get());
    this.__Ol.setVisibility(w.get().length > 0 ? c : t)
}

function deactivate() {
    webfrontend.gui.TooltipOverlay.prototype.deactivate.call(this)
}