webfront prototypeend.gui.region.RegionNewPlayerSpotStatusInfo[16897 - 0]
function getInstance() {
    if (this.$$instance === null) throw new Error(lt + this + w);
    return this.$$instance || (this.$$allowconstruct = !0, this.$$instance = null, this.$$instance = new this, delete this.$$allowconstruct), this.$$instance
}