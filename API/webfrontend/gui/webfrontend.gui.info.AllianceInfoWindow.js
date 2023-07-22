webfront prototypeend.gui.info.AllianceInfoWindow[15752 - 0]
function getInstance() {
    if (this.$$instance === null) throw new Error(lt + this + w);
    return this.$$instance || (this.$$allowconstruct = !0, this.$$instance = null, this.$$instance = new this, delete this.$$allowconstruct), this.$$instance
}

function SortMembersTableColumn(n, t) {
    var i = parseInt(n, 10),
        r = parseInt(t, 10);
    return i == r ? 0 : i < r ? 1 : -1
} [object TabViewNamesObject]