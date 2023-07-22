function getLabel anonymous() {
    this.getLabel.$$install && this.getLabel.$$install();
    return this.getLabel.apply(this, arguments);
}

function setLabel anonymous(value) {
    this.$$setLabelImpl.apply(this, arguments);
    return value;
}

function resetLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeLabel() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIcon anonymous() {
    this.getIcon.$$install && this.getIcon.$$install();
    return this.getIcon.apply(this, arguments);
}

function setIcon anonymous(value) {
    this.$$setIconImpl.apply(this, arguments);
    return value;
}

function resetIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIcon() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getShowCloseButton anonymous() {
    this.getShowCloseButton.$$install && this.getShowCloseButton.$$install();
    return this.getShowCloseButton.apply(this, arguments);
}

function setShowCloseButton anonymous() {
    this.setShowCloseButton.$$install && this.setShowCloseButton.$$install.call(this);
    return this.setShowCloseButton.apply(this, arguments);
}

function resetShowCloseButton() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initShowCloseButton() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeShowCloseButton() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeShowCloseButton() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function toggleShowCloseButton anonymous() {
    return this.setShowCloseButton(!this.getShowCloseButton())
}

function isShowCloseButton anonymous() {
    return this.getShowCloseButton()
} [object _forwardStatesObject]
function _applyIcon(t) {
    var r = this.getChildControl(n);
    t ? (r.setIcon(t), r._showChildControl(i)) : r._excludeChildControl(i)
}

function _applyLabel(t) {
    this.getChildControl(n).setLabel(t)
}

function _applyEnabled(t, i) {
    qx.ui.container.Composite.prototype._applyEnabled.call(this, t, i);
    var r = this.getChildControl(n);
    t == null ? r.resetEnabled() : r.setEnabled(t)
}

function _createChildControlImpl(t) {
    var i;
    switch (t) {
        case n:
            i = new qx.ui.tabview.TabButton;
            i.setAllowGrowX(!0);
            i.setAllowGrowY(!0);
            i.setUserData(f, this);
            i.addListener(r, this._onButtonClose, this)
    }
    return i || qx.ui.container.Composite.prototype._createChildControlImpl.call(this, t)
}

function _applyShowCloseButton(t) {
    this.getChildControl(n).setShowCloseButton(t)
}

function _onButtonClose() {
    this.fireEvent(r)
}

function getButton() {
    return this.getChildControl(n)
}

function triggerAppear() {
    this.__Bf.schedule()
}

function setSelected(n, t) {
    var i = this.__tp.indexOf(t);
    n ? i === -1 && this.__tp.push(t) : i > -1 && this.__tp.splice(i, 1)
}

function getSelected() {
    return this.__tp
}

function updateButtonStatus() {
    this.__Ti()
}

function executeFilter() {
    this._onFilter()
}

function setMemberListSortOrderAsc(n) {
    this.__Tb = n
}

function getMemberListSortOrderAsc() {
    return this.__Tb
}

function setMemberListSortColumn(n) {
    this.__Ta = [1, 2].indexOf(n) !== -1 ? n : null
}

function getMemberListSortColumn() {
    return this.__Ta
}

function showSelectAllBtn(n) {
    n ? this.__St.show() : this.__St.hide()
}

function _onAppearFake() {
    this.__Tf();
    this.__Od();
    this.__Tg();
    this.__Tj();
    this.__Tk();
    this.__Ti();
    this.__Th();
    this.__SU.setValue(u);
    this.__Te();
    ClientLib.Data.MainData.GetInstance().get_Alliance().RefreshMemberData();
    this.__Os || (webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), l, ClientLib.Data.AllianceChange, this, this._onAllianceDetailChanged), webfrontend.phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), p, ClientLib.Data.AllianceCanPromoteLowerRolesChange, this, this.__Td), webfrontend.data.AllianceEvents.getInstance().addListener(y, this.__Te, this), this.__Os = !0)
}

function _onDisappearFake() {
    var n, t, i;
    this.__Os && (webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), l, ClientLib.Data.AllianceChange, this, this._onAllianceDetailChanged), webfrontend.phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Alliance(), p, ClientLib.Data.AllianceCanPromoteLowerRolesChange, this, this.__Td), webfrontend.data.AllianceEvents.getInstance().removeListener(y, this.__Te, this), this.__Os = !1);
    n = this.__Tc.getSelectables();
    for (t in n) i = n[t], i.getTable().resetSelection();
    this.__tp = []
}

function _onAllianceDetailChanged() {
    this.__Od();
    this.__Tg();
    this.__Tj();
    this.__Tk();
    this.__Ti()
}

function _onSelectAll(n) {
    var r, u, t;
    this.__tp = [];
    r = this.__Tc.getSelectables();
    for (u in r) {
        var f = r[u],
            i = f.getTableModel().getData(),
            e = i.length;
        for (t = 0; t < e; t++) i[t] = i[t].originalData, i[t].b = n.getData(), i[t].b && this.__tp.indexOf(i[t].Id) < 0 && this.__tp.push(i[t].Id);
        f.getTableModel().setDataAsMapArray(i, !0)
    }
    this.__Ti()
}

function _onClickHideOnlineStatusFromAllianceMembers() {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(yi, {
        b: !this.__SP.getValue()
    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this._onSetAllianceShowOnline), null)
}

function _onSetAllianceShowOnline(n, t) {
    t != null && t != 0 && (webfrontend.gui.MessageBox.messageBox({
        title: this.tr(rt),
        text: this.tr(pt),
        buttons: 1
    }), this.__Th())
}

function _onClickGetAllianceMembersOnlineNotifications() {
    var n = 0;
    this.__SQ.getValue() && (n = 1);
    ClientLib.Config.Main.GetInstance().SetConfig(ClientLib.Config.Main.CONFIG_ONLINENOTIFICATIONS, n);
    ClientLib.Config.Main.GetInstance().SaveToDB()
}

function _onClickManage() {
    this.__SS == null && (this.__SS = new webfrontend.gui.alliance.MemberRightsWindow);
    this.__SS.show()
}

function _onClickInvite() {
    var n = qx.core.Init.getApplication().getCurrentMenuOverlay();
    n.setTab(webfrontend.gui.alliance.AllianceOverlay.tabs.ETabOverviewPage);
    n.getCurrentTab().setView(webfrontend.gui.alliance.OverviewPage.EViewInvitations)
}

function _onClickSetMemberRole() {
    var n = -1;
    this.__SO.getSelection()[0] != null && (n = this.__SO.getSelection()[0].getModel().id);
    n >= 0 && ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(ai, {
        memberIds: this.__tp,
        roleId: n
    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this._onAllianceSetMemberRole), null);
    this.__Tf()
}

function _onAllianceSetMemberRole(n, t) {
    t != null && t != 0 && webfrontend.gui.MessageBox.messageBox({
        title: this.tr(bt),
        text: this.tr(ti),
        buttons: 1
    })
}

function _onClickDismiss() {
    var t = ClientLib.Data.MainData.GetInstance().get_Server(),
        i = t.get_AllianceLeaveGracePeriodInMinutes(),
        r = i / 1440,
        n = qx.core.Init.getApplication();
    webfrontend.gui.MessageBox.messageBox({
        title: n.tr(w),
        text: n.tr(at, this.__tp.length, r),
        textRich: !0,
        executeOk: this._onConfirmDismiss,
        callbackContext: this
    })
}

function _onConfirmDismiss() {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(kt, {
        memberIds: this.__tp
    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this._onAllianceKickMember), null);
    this.__Tf()
}

function _onAllianceKickMember(n, t) {
    if (t != null && t != 0) {
        var i = this.tr(bi);
        t == 5 && (i = this.tr(g));
        webfrontend.gui.MessageBox.messageBox({
            title: this.tr(oi),
            text: i,
            buttons: 1
        })
    }
}

function _onClickLeaveAlliance() {
    var t = ClientLib.Data.MainData.GetInstance().get_Alliance(),
        i, n;
    if (t.get_IsFirstLeader()) i = t.get_FirstLeaders().l.length > 1 ? this.tr(c) : this.tr(vt), n = qx.core.Init.getApplication(), webfrontend.gui.MessageBox.messageBox({
        title: n.tr(f),
        text: i,
        textRich: !0,
        buttons: 1
    });
    else {
        var r = ClientLib.Data.MainData.GetInstance().get_Server(),
            u = r.get_AllianceLeaveGracePeriodInMinutes(),
            e = u / 1440,
            n = qx.core.Init.getApplication();
        webfrontend.gui.MessageBox.messageBox({
            title: n.tr(f),
            text: n.tr(fi, e),
            textRich: !0,
            executeOk: this._onConfirmLeaveAlliance,
            callbackContext: this
        })
    }
}

function _onConfirmLeaveAlliance() {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(yt, null, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this._onAllianceLeave), null)
}

function _onAllianceLeave(n, t) {
    t != null && t != 0 && webfrontend.gui.MessageBox.messageBox({
        title: this.tr(f),
        text: this.tr(ri),
        buttons: 1
    })
}

function _onFilter() {
    var n = this.__SU !== null ? this.__SU.getValue() : null,
        t = this.__SV !== null && this.__SV.getSelection() !== null && this.__SV.getSelection().length > 0 ? parseInt(this.__SV.getSelection()[0].getModel().id) : 0,
        i = this.__SR != null ? this.__SR.getValue() : !1;
    this.__Tc !== null && this.__Tc.getSelection()[0].filterMemberList(n, t, i)
}

function _onClickResetBtn() {
    this.__SU.setValue(u);
    this.__SW = 0;
    this.__SV.resetSelection();
    this.__SR.resetValue();
    this._onFilter()
}