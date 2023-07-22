function popupReady() {
    return !0
}

function popupModal() {
    return !0
}

function popupShow() {
    this.open()
}

function popupSignalClosing() {
    this.fireEvent(t)
}

function popupSignalReady() {
    this.fireEvent(i)
}

function popupDestroyAfterClose() {
    return !0
}

function _onClose() {
    this.popupSignalClosing()
}

function getEventMode anonymous() {
    this.getEventMode.$$install && this.getEventMode.$$install();
    return this.getEventMode.apply(this, arguments);
}

function setEventMode anonymous() {
    this.setEventMode.$$install && this.setEventMode.$$install.call(this);
    return this.setEventMode.apply(this, arguments);
}

function resetEventMode() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initEventMode() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeEventMode() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeEventMode() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getIdChallenge anonymous() {
    this.getIdChallenge.$$install && this.getIdChallenge.$$install();
    return this.getIdChallenge.apply(this, arguments);
}

function setIdChallenge anonymous() {
    this.setIdChallenge.$$install && this.setIdChallenge.$$install.call(this);
    return this.setIdChallenge.apply(this, arguments);
}

function resetIdChallenge() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initIdChallenge() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeIdChallenge() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeIdChallenge() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getNameChallenge anonymous() {
    this.getNameChallenge.$$install && this.getNameChallenge.$$install();
    return this.getNameChallenge.apply(this, arguments);
}

function setNameChallenge anonymous() {
    this.setNameChallenge.$$install && this.setNameChallenge.$$install.call(this);
    return this.setNameChallenge.apply(this, arguments);
}

function resetNameChallenge() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initNameChallenge() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeNameChallenge() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeNameChallenge() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function open() {
    webfrontend.gui.widgets.popup.PopupWindow.prototype.open.call(this);
    this.centerPosition()
}

function popupReady() {
    return !0
}

function popupModal() {
    return !0
}

function popupDestroyAfterClose() {
    return !0
}

function createText() {
    var t = n,
        i = n,
        r = n;
    switch (this.getEventMode()) {
        case webfrontend.gui.challenge.ServerEventPopup.SHOW_EVENT_START:
            t = this.tr(b);
            i = this.tr(vt);
            r = this.tr(tt);
            break;
        case webfrontend.gui.challenge.ServerEventPopup.SHOW_EVENT_DONE:
            t = this.tr(u);
            i = this.tr(h);
            r = this.tr(v);
            break;
        case webfrontend.gui.challenge.ServerEventPopup.SHOW_EVENT_FAIL:
            t = this.tr(a);
            i = this.tr(f);
            r = this.tr(l)
    }
    return {
        Announce: t,
        AnnounceSub: i,
        AnnounceDetail: r
    }
}

function createSeasonText() {
    var t = n,
        i = n,
        r = n;
    switch (this.getEventMode()) {
        case webfrontend.gui.challenge.ServerEventPopup.SHOW_EVENT_START:
            t = this.tr(ht);
            i = this.tr(it);
            r = this.tr(at);
            break;
        case webfrontend.gui.challenge.ServerEventPopup.SHOW_EVENT_DONE:
            t = this.tr(u);
            i = this.tr(h);
            r = this.tr(v);
            break;
        case webfrontend.gui.challenge.ServerEventPopup.SHOW_EVENT_FAIL:
            t = this.tr(a);
            i = this.tr(f);
            r = this.tr(l)
    }
    return {
        Announce: t,
        AnnounceSub: i,
        AnnounceDetail: r
    }
}