function _isActive() {
    return this.active
}

function isWaitingForOK() {
    return this.__wi
}

function getChoice() {
    return this.__wj
}

function _onResize() {
    this.centerPosition();
    this.bringToFront()
}

function _onKeypress(n) {
    var t = n.getKeyIdentifier();
    switch (t) {
        case u:
            this.disable();
            this._waitingForOK = !1;
            this.close(!0)
    }
}

function enable() {
    this.active || (this._currentContainer != null && (this._currentLayoutParams ? this.clientArea.add(this._currentContainer, this._currentLayoutParams) : this.clientArea.add(this._currentContainer)), this.show(), this.active = !0, this.__wi = !0)
}

function disable() {
    this.active && (this.addListenerOnce(r, function() {
        this.active = !1;
        this.__wi = !1;
        this._currentContainer != null && this.clientArea.indexOf(this._currentContainer) != -1 && this.clientArea.remove(this._currentContainer);
        this.hide()
    }, this), this.fadeOut())
}

function _onOK() {
    this.__wi = !1
}