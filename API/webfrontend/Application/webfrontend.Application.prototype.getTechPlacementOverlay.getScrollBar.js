function getLastSelectedBox anonymous(value) {
    if (this.$$runtime_lastSelectedBox !== undefined) return this.$$runtime_lastSelectedBox;
    if (this.$$user_lastSelectedBox !== undefined) return this.$$user_lastSelectedBox;
    else return this.$$init_lastSelectedBox;
}

function setLastSelectedBox anonymous(value) {
    this.$$setLastSelectedBoxImpl.apply(this, arguments);
    return value;
}

function resetLastSelectedBox() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeLastSelectedBox() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeLastSelectedBox() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
} [Class w creatSlotBoxCBebfrontend.gui.production.ScrollBoxTechPlacement] boxSlotswebfront leftButtonend.ui.SoundButton[18634 - 0] webfront rightButtonend.ui.SoundButton[18636 - 0] webfront beginButtonend.ui.SoundButton[18638 - 0] webfront endButtonend.ui.SoundButton[18640 - 0]
function _onAreaResize(n) {
    var r, t, i;
    if (this.creatSlotBoxCB) {
        for (r = n.getData().width, t = Math.floor((r - 67) / this.boxSlotWidth), this.visibleSlots = t; this.boxSlots.length > t;) this.removeAt(this.boxSlots.length + 3), this.boxSlots = this.boxSlots.slice(0, this.boxSlots.length - 1);
        while (this.boxSlots.length < t) i = new this.creatSlotBoxCB(this), this._add(i, {
            left: 37 + this.boxSlots.length * this.boxSlotWidth,
            top: 7
        }), this.boxSlots.push(i);
        this._updateSlots(this.slotsData)
    }
}

function getOffset() {
    return this.offset
}

function setOffset(n, t) {
    if (n != null) {
        var i = Math.max(0, n.length - this.visibleSlots);
        this.offset > i && (this.offset = i);
        this.offset = t
    }
}

function updateDynamicSlots() {
    for (var n = 0; n < this.boxSlots.length; n++) this.boxSlots[n].updateDynamicElements(!1)
}

function _updateSlots(n) {
    var i, r, u, t;
    if (this.slotsData = n, this.selectedBoxUpdated = !1, n != null) {
        for (this.visibleSlots > this.slotsData.length && (this.offset = 0), i = Math.max(0, this.slotsData.length - this.visibleSlots), this.offset > i && (this.offset = i), r = Math.min(this.slotsData.length, this.visibleSlots), t = 0; t < r; t++) this.boxSlots[t].update(this.slotsData[t + this.offset]);
        for (u = Math.min(this.visibleSlots - r), t = 0; t < u; t++) this.boxSlots[r + t].update(null);
        this.leftButton.setEnabled(this.offset != 0);
        this.beginButton.setEnabled(this.offset != 0);
        this.rightButton.setEnabled(this.offset != i);
        this.endButton.setEnabled(this.offset != i);
        this.selectedBoxUpdated || this.getLastSelectedBox() == null || (this.getLastSelectedBox().resetPlateImage(), this.setLastSelectedBox(null))
    }
}

function _onLeft() {
    this.offset = this.slotsData != null ? Math.max(0, Math.min(this.slotsData.length - this.visibleSlots, this.offset - 1)) : 0;
    this._updateSlots(this.slotsData)
}

function _onRight() {
    this.offset = this.slotsData != null ? Math.max(0, Math.min(this.slotsData.length - this.visibleSlots, this.offset + 1)) : 0;
    this._updateSlots(this.slotsData)
}

function _onBegin() {
    this.offset = this.slotsData != null ? Math.max(0, Math.min(this.slotsData.length - this.visibleSlots, this.offset - (this.visibleSlots - 1))) : 0;
    this._updateSlots(this.slotsData)
}

function _onEnd() {
    this.offset = this.slotsData != null ? Math.max(0, Math.min(this.slotsData.length - this.visibleSlots, this.offset + (this.visibleSlots - 1))) : 0;
    this._updateSlots(this.slotsData)
}

function getUIItem(n) {
    var t = null;
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_HARVESTER:
            this._onBegin();
            t = this.boxSlots[0];
            break;
        case ClientLib.Data.Missions.PATH.WDG_SILO:
            this._onBegin();
            t = this.boxSlots[3];
            break;
        case ClientLib.Data.Missions.PATH.WDG_RIFLEMAN:
            this._onBegin();
            t = this.boxSlots[0];
            break;
        case ClientLib.Data.Missions.PATH.WDG_MILITANT:
        case ClientLib.Data.Missions.PATH.WDG_GUARDIANOFFENSE:
            this._onBegin();
            t = ClientLib.Data.MainData.GetInstance().get_Player().get_Faction() == ClientLib.Base.EFactionType.NODFaction ? this.boxSlots[0] : this.boxSlots[5];
            break;
        case ClientLib.Data.Missions.PATH.WDG_WALL:
            this._onBegin();
            t = this.boxSlots[0];
            break;
        case ClientLib.Data.Missions.PATH.WDG_MGNEST:
            this._onBegin();
            t = this.boxSlots[1]
    }
    return t && (t = t.getChildren()[0]), t
} [Class w creatSlotBoxCBebfrontend.gui.production.ScrollBoxTechPlacement] boxSlotswebfront leftButtonend.ui.SoundButton[18634 - 0] webfront rightButtonend.ui.SoundButton[18636 - 0] webfront beginButtonend.ui.SoundButton[18638 - 0] webfront endButtonend.ui.SoundButton[18640 - 0]