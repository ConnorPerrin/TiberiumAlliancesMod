webfront prototypeend.gui.layout.FileService[14685 - 0]
function getInstance() {
    if (this.$$instance === null) throw new Error(lt + this + w);
    return this.$$instance || (this.$$allowconstruct = !0, this.$$instance = null, this.$$instance = new this, delete this.$$allowconstruct), this.$$instance
}

function JsonLoad(i, f, o, s) {
    var h = this.__bdI(e),
        c = new qx.util.StringBuilder(2048);
    c.add(u, i, r);
    h.setRequestData(c.get());
    h.addListener(n, function(n) {
        o.call(f, n.getTarget().getResponse())
    }, this);
    s != null && h.addListener(t, function(n) {
        s.call(f, n.getTarget().getResponse())
    }, this);
    h.send()
}

function JsonSave(r, u, f, e, o) {
    var s = this.__bdI(c),
        h = qx.lang.Json.stringify({
            strPath: r,
            strContent: u
        }, null, i);
    s.setRequestData(h);
    s.addListener(n, function(n) {
        e.call(f, n.getTarget().getResponse())
    }, this);
    o != null && s.addListener(t, function(n) {
        o.call(f, n.getTarget().getResponse())
    }, this);
    s.send()
}

function ListJsons(i, f, e, s) {
    var h = this.__bdI(o),
        c = new qx.util.StringBuilder(2048);
    c.add(u, i, r);
    h.setRequestData(c.get());
    h.addListener(n, function(n) {
        e.call(f, n.getTarget().getResponse())
    }, this);
    s != null && h.addListener(t, function(n) {
        s.call(f, n.getTarget().getResponse())
    }, this);
    h.send()
}

function GetPerforceTicket(r, u, f, e, o) {
    var s = this.__bdI(a),
        h = qx.lang.Json.stringify({
            strUser: r,
            strPassword: u
        }, null, i);
    s.setRequestData(h);
    s.addListener(n, function(n) {
        e.call(f, n.getTarget().getResponse())
    }, this);
    o != null && s.addListener(t, function(n) {
        o.call(f, n.getTarget().getResponse())
    }, this);
    s.send()
}

function PerforceOperation(r, u, f, e, o, s) {
    var c = this.__bdI(h),
        l = qx.lang.Json.stringify({
            strUser: r,
            strTicket: u,
            strParams: f
        }, null, i);
    c.setRequestData(l);
    c.addListener(n, function(n) {
        o.call(e, n.getTarget().getResponse())
    }, this);
    s != null && c.addListener(t, function(n) {
        s.call(e, n.getTarget().getResponse())
    }, this);
    c.send()
}