 giftSlotsfunction activateOverlay(t) {
     this.active = t;
     var r = ClientLib.Host.Main.GetInstance(),
         i = r.get_PrimaryHost();
     this.active ? (webfrontend.phe.cnc.Util.attachNetEvent(i, n, ClientLib.Host.HostDataChange, this, this._onRequestsChange), this._updateGifts()) : webfrontend.phe.cnc.Util.detachNetEvent(i, n, ClientLib.Host.HostDataChange, this, this._onRequestsChange)
 }

 function _onAreaResize(n) {
     var e = n.getData().width,
         f = Math.floor((e - 100) / 120),
         t, r, u;
     for (this.visibleSlots = f; this.giftSlots.length < f;) t = new qx.ui.container.Composite(new qx.ui.layout.Canvas), t.setWidth(100), t.setHeight(100), r = new qx.ui.basic.Label, t.add(r, {
         top: 0,
         left: 0
     }), this._add(t, {
         left: 100 + 120 * this.giftSlots.length,
         top: 40
     }), u = {
         overlay: this,
         name: r,
         gift: null
     }, this.giftSlots.push(u), t.addListener(i, this._onGiftClick, u);
     this._updateGifts()
 }

 function _updateGifts() {
     var f, i, t, r, u, n;
     if (this.gifts = [], f = ClientLib.Host.Main.GetInstance(), i = f.get_PrimaryHost(), i != null && (t = i.get_Requests(), t != null))
         for (n = 0; n < t.length; n++) t[n].get_Deleted() == !1 && this.gifts.push(t[n]);
     for (this.visibleSlots > this.gifts.length && (this.offset = 0), r = Math.min(this.gifts.length, this.visibleSlots), n = 0; n < r; n++) u = this.gifts[n + this.offset], this.giftSlots[n].gift = u, this.giftSlots[n].name.setValue(u.get_Data());
     for (n = r; n < this.visibleSlots; n++) this.giftSlots[n].gift = null, this.giftSlots[n].name.setValue(null)
 }

 function _onGiftClick() {
     this.gift != null && this.gift.Delete()
 }

 function _onRequestsChange() {
     this._updateGifts()
 }
 qx.ui.co clientAreantainer.Composite[18680 - 0] webfront _closeButtonend.ui.SoundButton[18681 - 0] giftSlots