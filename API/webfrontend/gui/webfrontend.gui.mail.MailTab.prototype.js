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

function getMailboxType anonymous(value) {
    if (this.$$runtime_mailboxType !== undefined) return this.$$runtime_mailboxType;
    if (this.$$user_mailboxType !== undefined) return this.$$user_mailboxType;
    else return this.$$init_mailboxType;
}

function setMailboxType anonymous(value) {
    this.$$setMailboxTypeImpl.apply(this, arguments);
    return value;
}

function resetMailboxType() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initMailboxType() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeMailboxType() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeMailboxType() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getMailCount anonymous() {
    this.getMailCount.$$install && this.getMailCount.$$install();
    return this.getMailCount.apply(this, arguments);
}

function setMailCount anonymous(value) {
    this.$$setMailCountImpl.apply(this, arguments);
    return value;
}

function resetMailCount() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initMailCount() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeMailCount() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeMailCount() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getUnreadCount anonymous(value) {
    if (this.$$runtime_unreadCount !== undefined) return this.$$runtime_unreadCount;
    if (this.$$user_unreadCount !== undefined) return this.$$user_unreadCount;
    else return this.$$init_unreadCount;
}

function setUnreadCount anonymous(value) {
    this.$$setUnreadCountImpl.apply(this, arguments);
    return value;
}

function resetUnreadCount() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initUnreadCount() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeUnreadCount() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeUnreadCount() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSorting anonymous(value) {
    if (this.$$runtime_sorting !== undefined) return this.$$runtime_sorting;
    if (this.$$user_sorting !== undefined) return this.$$user_sorting;
    else return this.$$init_sorting;
}

function setSorting anonymous() {
    this.setSorting.$$install && this.setSorting.$$install.call(this);
    return this.setSorting.apply(this, arguments);
}

function resetSorting() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initSorting() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeSorting() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSorting() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getSortAsc anonymous(value) {
    if (this.$$runtime_sortAsc !== undefined) return this.$$runtime_sortAsc;
    if (this.$$user_sortAsc !== undefined) return this.$$user_sortAsc;
    else return this.$$init_sortAsc;
}

function setSortAsc anonymous() {
    this.setSortAsc.$$install && this.setSortAsc.$$install.call(this);
    return this.setSortAsc.apply(this, arguments);
}

function resetSortAsc() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initSortAsc() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeSortAsc() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeSortAsc() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getFilter anonymous(value) {
    if (this.$$runtime_filter !== undefined) return this.$$runtime_filter;
    if (this.$$user_filter !== undefined) return this.$$user_filter;
    else return this.$$init_filter;
}

function setFilter anonymous() {
    this.setFilter.$$install && this.setFilter.$$install.call(this);
    return this.setFilter.apply(this, arguments);
}

function resetFilter() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initFilter() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeFilter() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeFilter() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getOnlyNewMail anonymous(value) {
    if (this.$$runtime_onlyNewMail !== undefined) return this.$$runtime_onlyNewMail;
    if (this.$$user_onlyNewMail !== undefined) return this.$$user_onlyNewMail;
    else return this.$$init_onlyNewMail;
}

function setOnlyNewMail anonymous() {
    this.setOnlyNewMail.$$install && this.setOnlyNewMail.$$install.call(this);
    return this.setOnlyNewMail.apply(this, arguments);
}

function resetOnlyNewMail() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initOnlyNewMail() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeOnlyNewMail() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeOnlyNewMail() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function open() {
    this.__Wk = !0;
    this.__Wq(this.getSortAsc());
    this.__Jg()
}

function close() {}

function getPageIndex() {
    return this.__KF
}

function concatReceivers(n, i) {
    var u, f, r;
    if (!n || n.length < 1 || !i || n.length != i.length) return t;
    for (u = t, f = 2, r = 0; r < n.length; ++r)
        if (r > 0 && (u += ri), r < f) u += i[r] > 0 ? oi + webfrontend.gui.util.BBCode.clrLink + tt + String(i[r]) + kt + n[r] + ht : n[r];
        else {
            u += this.tr(ei, String(n.length - f));
            break
        } return u
}

function onPageChange(n) {
    this.__KF = n;
    this.__Wk && this.__WJ()
}

function updateMessages() {
    var f, h, e, a, c, l, u, n, t;
    if (this.__WC(), f = ClientLib.Data.MainData.GetInstance().get_Mail(), h = f.GetMailCount(this.getMailboxType()), this.setUnreadCount(f.GetUnreadCount()), this.__dS = f.GetMails(this.getMailboxType()).d, this.setMailCount(h), e = Math.ceil(h / this.MESSAGE_COUNT), a = this.__KF, this.__KF = this.__KF < e ? this.__KF : Math.max(e - 1, 0), this.__VW.updatePageButtons(this.__KF, Math.max(e, 1)), this.__KF < a) {
        this.__WJ();
        return
    }
    for (c = f.GetSortedIds(this.getMailboxType()).l, l = this.getMailboxType() == ClientLib.Data.Mail.EMailBox.Inbox, u = 0; u < this.MESSAGE_COUNT && u < c.length; ++u)(n = this.__IH[u], t = this.__dS[c[u]], n && t) && (n.ui.container.show(), t.Type == ClientLib.Data.Mail.EMailType.Play4Free ? (n.ui.lblnames.set({
        value: this.tr(o)
    }), n.ui.lblnames.setTextColor(at), n.ui.lblnames.getToolTip().setLabel(i + this.tr(o) + r)) : (n.ui.lblnames.set({
        value: this.concatReceivers(l ? [t.From] : t.To, l ? [t.FromId] : t.ToIds)
    }), n.ui.lblnames.getToolTip().setLabel(i + n.ui.lblnames.getValue() + r)), n.ui.lblsubject.set({
        value: t.Subject
    }), n.ui.lblsubject.getToolTip().setLabel(i + n.ui.lblsubject.getValue() + r), this.__Wi.setTime(t.Date), n.ui.lbldate.set({
        value: webfrontend.phe.cnc.Util.getDateTimeString(this.__Wi)
    }), n.ui.lbldate.getToolTip().setLabel(i + n.ui.lbldate.getValue() + r), t.Read || (n.ui.lblnames.setValue(li + n.ui.lblnames.getValue() + si), n.ui.lblsubject.set({
        font: s
    }), n.ui.lbldate.set({
        font: s
    })), n.ui.container.setDecorator(t.Read ? webfrontend.gui.mail.MailTab.deco.itembgread : webfrontend.gui.mail.MailTab.deco.itembgunread), n.current.id = t.Id, n.current.data = t)
}