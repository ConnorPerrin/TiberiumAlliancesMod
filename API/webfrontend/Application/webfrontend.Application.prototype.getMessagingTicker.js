function runTicker(n) {
    this.__yi = n
}

function moveTicker(t) {
    this.__yh += t;
    this.__ye != null && qx.bom.element.Style.set(this.__ye, u, this.__yh.toString() + n)
}

function isMouseDown() {
    return this.__yk
}

function _onTick() {
    if (this.__yl >= 0 && (this.__yl += webfrontend.gui.notifications.Ticker.TickInterval, this.__yl >= webfrontend.gui.notifications.Ticker.TickerHoverStopTime && this.runTicker(!1)), this.__ym >= 0 && (this.__ym += webfrontend.gui.notifications.Ticker.TickInterval, this.__ym >= webfrontend.gui.notifications.Ticker.TickerStopHoverStartTime && (this.__ym = -1, this.runTicker(!0))), this.__ye == null && this.__yc.getContentElement().getDomElement() != null) this.__yh = webfrontend.gui.notifications.Ticker.TickerStartPosition, this.__ye = document.createElement(e), this.__yc.getContentElement().getDomElement().appendChild(this.__ye), qx.bom.element.Style.setStyles(this.__ye, {
        position: tt,
        left: this.__yh.toString() + n,
        width: this.__yt().toString() + n
    }), qx.bom.Element.addListener(this.__ye, f, this._onMouseDown, this), qx.bom.Element.addListener(this.__ye, d, this._onMouseUp, this), qx.bom.Element.addListener(this.__ye, a, this._onMouseMove, this), qx.bom.Element.addListener(this.__ye, i, this._onMouseOut, this);
    else if (this.__ye != null && this.__yg && this.__yi && this.__yd.length > 0) {
        if (this.__yh < -1 * this.__yt()) {
            this.__yh = webfrontend.gui.notifications.Ticker.TickerStartPosition;
            for (var r = this.__yd.length - 1; r >= 0; --r) this.__yd[r].canDisplay() ? this.__yd[r].incrementTimesDisplayed() : (this.__ye.removeChild(this.__yd[r].getElement()), qx.bom.element.Style.set(this.__ye, t, this.__yt().toString() + n), delete this.__yd[r], this.__yd.splice(r, 1))
        }
        this.__yd.length > 0 ? (this.__yh -= webfrontend.gui.notifications.Ticker.TickerMovementInterval, qx.bom.element.Style.set(this.__ye, u, this.__yh.toString() + n), qx.bom.element.Style.set(this.__ye, t, this.__yt().toString() + n)) : this.__yh = webfrontend.gui.notifications.Ticker.TickerStartPosition
    }
}

function _onNotificationAdded(i) {
    var r, u;
    webfrontend.gui.notifications.NotificationsUtil.shouldDisplayInTicker(i.get_MdbId()) && (this.__yi = !0, r = this.__yq(i.get_Id(), i.get_IdOnlineOnly()), r == null ? (r = this.__yn(i), r != null && this.__ye != null && (this.__ye.appendChild(r), qx.bom.element.Style.set(this.__ye, t, this.__yt().toString() + n))) : (u = new webfrontend.gui.notifications.TickerItem(i), this.__yr(i.get_Id(), i.get_IdOnlineOnly(), u)))
}

function _onNotificationUpdated(i, r) {
    var f, u, e;
    webfrontend.gui.notifications.NotificationsUtil.shouldDisplayInTicker(r.get_MdbId()) && (this.__yi = !0, f = r.get_CategoryId(), u = this.__yq(r.get_Id(), r.get_IdOnlineOnly()), u == null ? (u = this.__yn(r), u != null && this.__ye != null && (this.__ye.appendChild(u), qx.bom.element.Style.set(this.__ye, t, this.__yt().toString() + n))) : f == ClientLib.Data.ENotificationCategory.Forum ? (e = new webfrontend.gui.notifications.TickerItem(r), this.__yr(i.get_Id(), i.get_IdOnlineOnly(), e)) : (u.updateCommentCount(), u.refresh()))
}

function _onNotificationRemoved(n) {
    this.__ys(n.get_Id(), n.get_IdOnlineOnly())
}

function _onToggleMode() {
    var n;
    if (this.__yg)
        for (this.__yg = !1, this.__yb.setIcon(nt), this.remove(this.__yc), n = 0; n < this.__yf.length; n++) this.add(this.__yf[n]);
    else {
        for (this.__yg = !0, this.__yb.setIcon(r), n = 0; n < this.__yf.length; n++) this.remove(this.__yf[n]);
        this.add(this.__yc)
    }
}

function _onMouseDown(n) {
    this.runTicker(!1);
    this.__yj = n.getDocumentLeft();
    this.__yk = !0
}

function _onMouseUp(n) {
    if (this.__yk) {
        var t = this.__yj - n.getDocumentLeft();
        this.moveTicker(-t);
        this.__yj = n.getDocumentLeft()
    }
    this.__yk = !1
}

function _onMouseMove(n) {
    if (this.__yk) {
        var t = this.__yj - n.getDocumentLeft();
        this.moveTicker(-t);
        this.__yj = n.getDocumentLeft()
    }
}

function _onMouseOut() {
    this.__yk = !1
}

function _onMouseOverTicker() {
    this.__yl = 0
}

function _onMouseOutTicker() {
    this.__yl >= 1e3 && (this.__ym = 0);
    this.__yl = -1
}