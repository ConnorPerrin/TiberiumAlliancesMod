function _onMailChange(n) {
    if (n) {
        var r = ClientLib.Data.MainData.GetInstance().get_Mail().GetUnreadCount(),
            u = r > 0 ? t + r + i + this.tr(e) : this.tr(e);
        this.__Hl[webfrontend.gui.bars.MenuBar.buttons.mail].setLabel(u)
    }
}

function _onForumChange() {
    var n = ClientLib.Data.MainData.GetInstance().get_Forum().get_UnreadItems(),
        u = n > 0 ? t + n + i + this.tr(r) : this.tr(r);
    this.__Hl[webfrontend.gui.bars.MenuBar.buttons.forum].setLabel(u)
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_RESEARCH:
            return this.__Hl[webfrontend.gui.bars.MenuBar.buttons.research];
        case ClientLib.Data.Missions.PATH.WDG_ALLIANCE:
            return this.__Hl[webfrontend.gui.bars.MenuBar.buttons.alliance];
        case ClientLib.Data.Missions.PATH.WDG_MESSAGES:
            return this.__Hl[webfrontend.gui.bars.MenuBar.buttons.mail];
        case ClientLib.Data.Missions.PATH.WDG_INVENTORY:
            return this.__Hl[webfrontend.gui.bars.MenuBar.buttons.inventory];
        case ClientLib.Data.Missions.PATH.WDG_REPORTS:
            return this.__Hl[webfrontend.gui.bars.MenuBar.buttons.reports]
    }
    return null
}

function reset() {
    for (var n in this.__Hl) this.__Hl[n].setValue(!1)
}

function setMenuButtonActive(n, t) {
    this.reset();
    t && this.__Hl.hasOwnProperty(n) && this.__Hl[n].setValue(t)
}

function getScriptsButton() {
    return this.__Hm
}

function hasSelectedMenu() {
    return this.__Hk.getSelection().length != 0
}