function Selection() {}

function Deselection() {}

function MouseOver() {}

function MouseOut() {}

function MouseMove() {}

function OnRightButtonClicked() {}

function ExecuteCommand() {
    return !1
}

function CommandPreconditionsFulfilled() {
    return !1
}

function CanExecuteCommand() {
    return !1
}

function ExecutePrimaryFunction() {
    return !1
}

function GetSelectionInfo() {
    return null
}

function GetHighlightInfo() {
    return null
}

function get_X() {
    return 0
}

function get_Y() {
    return 0
}

function get_SelectionTarget() {
    return this
}

function get_VisObjectType() {
    return $I.CDNXVQ.UnknownType
}

function get_UIType() {
    return null
}

function get_Coordinates() {
    return -1
}

function get_ObjectSelectOrder() {
    return $I.ETSALJ.Default
}

function get_MouseOverActive() {
    return this.PQUECX
}

function Dispose() {
    this.GHEPRQ != null && (this.GHEPRQ.NSFOQM(), this.GHEPRQ = null);
    this.ZSAIKP != null && (this.ZSAIKP.NSFOQM(), this.ZSAIKP = null)
}

function UiUpdate() {}

function VisUpdate(n, t) {
    this.GHEPRQ != null && t && this.GHEPRQ.OCAAHR(n);
    this.ZSAIKP != null && t && this.ZSAIKP.TXKCBT(n)
}

function UpdateZoom() {}

function get_CityEntityData() {
    return this.RBWWPQ
}

function get_IsTransportingUnit() {
    return this.RBWWPQ.ZHIRJH() == $I.ZNGMPE.Garrison && this.RBWWPQ.KGLYJZ() != null
}