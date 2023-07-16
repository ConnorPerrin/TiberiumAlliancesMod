function get_BaseId() {
    return this.BACLFV
}

function get_Id() {
    return this.PEDUSL
}

function get_IsRead() {
    return this.ECFTZS
}

function set_IsRead(n) {
    this.ECFTZS = n
}

function get_IsShared() {
    return this.NHDARK
}

function set_IsShared(n) {
    this.NHDARK = n
}

function get_OtherBaseId() {
    return this.PIBYXQ
}

function get_PlayerReportType() {
    return this.FPMOHP
}

function get_ReportOtherFaction() {
    return this.CHJCPR
}

function get_ReportOwnerFaction() {
    return this.TTUHBD
}

function get_ReportOwnerName() {
    return this.BVAYDY
}

function get_Time() {
    return this.XJIUPM
}

function get_Type() {
    return this.XQQAID
}

function get_ValidReplayData() {
    return this.VLAZJF
}

function SetData(n) {
    var t = n;
    this.PEDUSL < 0 && (this.PEDUSL = t.i);
    this.XQQAID == $I.GBKWPP.None && (this.XQQAID = t.tp)
}