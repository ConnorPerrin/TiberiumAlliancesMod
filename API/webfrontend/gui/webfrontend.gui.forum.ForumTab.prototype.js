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

function getForumType anonymous(value) {
    if (this.$$runtime_forumType !== undefined) return this.$$runtime_forumType;
    if (this.$$user_forumType !== undefined) return this.$$user_forumType;
    else return this.$$init_forumType;
}

function setForumType anonymous(value) {
    this.$$setForumTypeImpl.apply(this, arguments);
    return value;
}

function resetForumType() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initForumType() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeForumType() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeForumType() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getName anonymous(value) {
    if (this.$$runtime_name !== undefined) return this.$$runtime_name;
    if (this.$$user_name !== undefined) return this.$$user_name;
    else return this.$$init_name;
}

function setName anonymous(value) {
    this.$$setNameImpl.apply(this, arguments);
    return value;
}

function resetName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeName() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getPage anonymous(value) {
    if (this.$$runtime_page !== undefined) return this.$$runtime_page;
    if (this.$$user_page !== undefined) return this.$$user_page;
    else return this.$$init_page;
}

function setPage anonymous() {
    this.setPage.$$install && this.setPage.$$install.call(this);
    return this.setPage.apply(this, arguments);
}

function resetPage() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initPage() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimePage() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePage() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getPageContent anonymous(value) {
    if (this.$$runtime_pageContent !== undefined) return this.$$runtime_pageContent;
    if (this.$$user_pageContent !== undefined) return this.$$user_pageContent;
    else return this.$$init_pageContent;
}

function setPageContent anonymous(value) {
    this.$$setPageContentImpl.apply(this, arguments);
    return value;
}

function resetPageContent() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initPageContent() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimePageContent() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimePageContent() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanCreate anonymous() {
    this.getCanCreate.$$install && this.getCanCreate.$$install();
    return this.getCanCreate.apply(this, arguments);
}

function setCanCreate anonymous(value) {
    this.$$setCanCreateImpl.apply(this, arguments);
    return value;
}

function resetCanCreate() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanCreate() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanCreate() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanCreate() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanEdit anonymous(value) {
    if (this.$$runtime_canEdit !== undefined) return this.$$runtime_canEdit;
    if (this.$$user_canEdit !== undefined) return this.$$user_canEdit;
    else return this.$$init_canEdit;
}

function setCanEdit anonymous(value) {
    this.$$setCanEditImpl.apply(this, arguments);
    return value;
}

function resetCanEdit() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanEdit() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanEdit() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanEdit() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getCanForce anonymous(value) {
    if (this.$$runtime_canForce !== undefined) return this.$$runtime_canForce;
    if (this.$$user_canForce !== undefined) return this.$$user_canForce;
    else return this.$$init_canForce;
}

function setCanForce anonymous(value) {
    this.$$setCanForceImpl.apply(this, arguments);
    return value;
}

function resetCanForce() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initCanForce() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeCanForce() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeCanForce() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getUnreads anonymous(value) {
    if (this.$$runtime_unreads !== undefined) return this.$$runtime_unreads;
    if (this.$$user_unreads !== undefined) return this.$$user_unreads;
    else return this.$$init_unreads;
}

function setUnreads anonymous(value) {
    this.$$setUnreadsImpl.apply(this, arguments);
    return value;
}

function resetUnreads() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initUnreads() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeUnreads() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeUnreads() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function open() {
    webfrontend.data.AllianceEvents.getInstance().addListener(pt, this.__IR, this);
    webfrontend.data.AllianceEvents.getInstance().addListener(vt, this.__IR, this);
    webfrontend.data.AllianceEvents.getInstance().addListener(b, this.__IR, this);
    webfrontend.data.AllianceEvents.getInstance().addListener(ot, this.__IR, this);
    this.__Jp();
    this.__IP(this.getPage());
    this.__IL();
    this.show()
}

function close() {
    webfrontend.data.AllianceEvents.getInstance().removeListener(pt, this.__IR, this);
    webfrontend.data.AllianceEvents.getInstance().removeListener(vt, this.__IR, this);
    webfrontend.data.AllianceEvents.getInstance().removeListener(b, this.__IR, this);
    webfrontend.data.AllianceEvents.getInstance().removeListener(ot, this.__IR, this);
    this.setPageContent(this.__IB);
    this.__IC.deactivate();
    this.hide()
}

function showForums() {
    this.setPageContent(this.__IB)
}

function updateForumRights() {
    this.__IL()
}

function updateForumInfos(n) {
    this.__Il = n;
    this.setUnreads(this.__Jb());
    this.getPageContent() == this.__IB ? this.__IW() : this.getPageContent() && this.getPageContent().onForumUpdate();
    this.__IC.updateRights(this.getCanEdit(), this.getCanForce())
}

function onPageChange(n) {
    this.setPage(n)
}

function getContainsForum(n) {
    for (var t = 0; t < this.__Il.length; ++t)
        if (this.__Il[t].Id == n) return !0;
    return !1
}

function openThread(n, t, i) {
    for (var r = 0; r < this.__Il.length; ++r)
        if (this.__Il[r].Id == n) {
            this.__Jc(this.__Il[r]);
            this.getPageContent() != this.__IB && t > 0 && this.getPageContent().tryOpenThread(t, i);
            break
        }
}

function openForum(n) {
    for (var t = 0; t < this.__Il.length; ++t)
        if (this.__Il[t].Id == n) {
            this.__Jc(this.__Il[t]);
            break
        }
}

function getIsUnsavedMessage() {
    return this.getPageContent() == this.__ID ? this.__ID.getIsUnsavedMessage() : null
}

function doSaveClose() {
    this.getPageContent() == this.__ID && this.__ID.doSaveClose()
}

function undoSaveClose() {
    this.getPageContent() == this.__ID && this.__ID.undoSaveClose()
}