function _activate() {
    this.__bad || (this.__Oc.activate(), webfrontend.phe.cnc.base.Timer.getInstance().addListener(h, this.__bae, this), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Player(), i, ClientLib.Data.PlayerChange, this, this.__bag), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Player().get_PlayerResearch(), i, ClientLib.Data.PlayerResearchChange, this, this.__bah), this.__bae(), this.__bag(), this.__bad = !0)
}

function _deactivate() {
    this.__bad && (this.__Oc.deactivate(), webfrontend.phe.cnc.base.Timer.getInstance().removeListener(h, this.__bae, this), webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Player(), i, ClientLib.Data.PlayerChange, this, this.__bag), webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Player().get_PlayerResearch(), i, ClientLib.Data.PlayerResearchChange, this, this.__bah), this.__bad = !1)
}

function getCurrentTab() {
    return this.__Oc
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_TABOFFENSE:
            return this.__baa.getChildControl(f);
        case ClientLib.Data.Missions.PATH.WDG_TABDEFENSE:
            return this.__bab.getChildControl(f);
        case ClientLib.Data.Missions.PATH.WDG_TABSPECIAL:
            return this.__bac.getChildControl(f);
        case ClientLib.Data.Missions.PATH.WDG_PITBULL:
            return this.__baa.getAndFocusItem(n)
    }
    return null
}

function setTab(n) {
    n.get_TechType() == ClientLib.Base.ETechType.TechOffense ? this.__yK.setSelection([this.__baa]) : n.get_TechType() == ClientLib.Base.ETechType.TechDefense ? this.__yK.setSelection([this.__bab]) : n.get_TechType() == ClientLib.Base.ETechType.TechSpecial && this.__yK.setSelection([this.__bac]);
    this.__Oc.deactivate();
    this.__Oc = this.__yK.getSelection()[0];
    this.__Oc.activate();
    this.__Oc.setTab(n)
}
qx.ui.co _bgrScalerntainer.Composite[11081 - 0] qx.ui.co _clientAreantainer.Composite[11083 - 0] webfront _closeButtonend.ui.SoundButton[11084 - 0] qx.ui.ba _headerImagesic.Image[11082 - 0] qx.ui.ba _titlesic.Label[11086 - 0]