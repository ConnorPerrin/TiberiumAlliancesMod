function get_ServerUrl() {
    return this.OUZENI
}

function get_SessionId() {
    return this.RELDEA
}

function set_SessionId(n) {
    this.RELDEA = n
}

function get_ClientVersion() {
    return this.BRDGQL
}

function set_ClientVersion(n) {
    this.BRDGQL = n
}

function get_PlatformId() {
    return this.KCXFME
}

function set_PlatformId(n) {
    this.KCXFME = n
}

function get_ReferenceId() {
    return this.LWEJJX
}

function set_ReferenceId(n) {
    this.LWEJJX = n
}

function get_InstanceId() {
    return this.UAOONY
}

function set_InstanceId(n) {
    this.UAOONY = n
}

function get_PollActive() {
    return this.LHCNWX
}

function set_PollActive(n) {
    this.LHCNWX = n
}

function get_TimeoutFactor() {
    return this.HETHDK
}

function set_TimeoutFactor(n) {
    this.HETHDK = n
}

function GetAndResetDispatchExecTime() {
    var n = this.NUPPEL;
    return this.NUPPEL = 0, n
}

function RegisterDataReceiver(n, t) {
    t != null && this.WBYFXZ.GXVKTX(n, t)
}

function UnregisterDataReceiver(n) {
    this.WBYFXZ.XUDPAL(n)
}

function RegisterDataRequester(n, t) {
    t != null && this.OVHGOV.GXVKTX(n, t)
}

function UnregisterDataRequester(n) {
    this.OVHGOV.XUDPAL(n)
}

function GetCommandInterface() {
    return null
}

function SendCommand(n, t, i, r, u) {
    var f, e;
    this.UAOONY == null ? i != null && i.WUNRHZ(r, null) : (f = this.ASVYFN, this.ASVYFN++, e = this.UXENBY(t, f, !1), u && (this.WBWPAE = f), this.ERSMWN(this.OUZENI + n, e, this.UYNDEY, (new $I.ILGBPO).TFDQYD(this, this.PDILKU), (new $I.HVVCHI).TIUZKC(i, r, f)))
}

function SendSimpleCommand(n, t, i, r) {
    var u;
    this.UAOONY == null ? i != null && i.WUNRHZ(r, null) : (u = this.UXENBY(t, -1, !1), this.ERSMWN(this.OUZENI + n, u, this.UYNDEY, (new $I.ILGBPO).TFDQYD(this, this.WKOCYF), (new $I.HVVCHI).TIUZKC(i, r, -1)))
}

function SendSimpleCommandTimeout(n, t, i, r, u) {
    var f;
    this.UAOONY == null ? r != null && r.WUNRHZ(u, null) : (f = this.UXENBY(t, -1, !1), this.ERSMWN(this.OUZENI + n, f, i, (new $I.ILGBPO).TFDQYD(this, this.WKOCYF), (new $I.HVVCHI).TIUZKC(r, u, -1)))
}

function SendSimpleSessionCommand(n, t, i, r) {
    var u;
    this.RELDEA == null ? i != null && i.WUNRHZ(r, null) : (u = this.UXENBY(t, -1, !0), this.ERSMWN(this.OUZENI + n, u, this.UYNDEY, (new $I.ILGBPO).TFDQYD(this, this.WKOCYF), (new $I.HVVCHI).TIUZKC(i, r, -1)))
}

function UserAction() {
    this.TOHBJD = !0;
    this.JDQNQI = (new Date).getTime()
}