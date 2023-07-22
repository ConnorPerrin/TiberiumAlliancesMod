[object prototypeObject]
function base() {
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
} [Class w selfebfrontend.gui.production.ProductionMenuDetailPopup]