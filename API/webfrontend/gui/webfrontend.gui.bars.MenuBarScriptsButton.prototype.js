function getMenu anonymous(value) {
    if (this.$$runtime_menu !== undefined) return this.$$runtime_menu;
    if (this.$$user_menu !== undefined) return this.$$user_menu;
    else return null;
}

function setMenu anonymous(value) {
    this.$$setMenuImpl.apply(this, arguments);
    return value;
}

function resetMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function initMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, s, arguments)
}

function setRuntimeMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeMenu() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function _applyVisibility(n, t) {
    qx.ui.form.Button.prototype._applyVisibility.call(this, n, t);
    var i = this.getMenu();
    n != o && i && i.hide()
}

function _applyMenu(n, t) {
    t && (t.removeListener(i, this._onMenuChange, this), t.resetOpener());
    n && (n.addListener(i, this._onMenuChange, this), n.setOpener(this), n.removeState(r), n.removeState(e))
}

function open(n) {
    var t = this.getMenu(),
        i;
    t && (qx.ui.menu.Manager.getInstance().hideAll(), t.setOpener(this), t.open(), n && (i = t.getSelectables()[0], i && t.setSelectedButton(i)))
}

function _onMenuChange() {
    var t = this.getMenu();
    t.isVisible() ? this.addState(n) : this.removeState(n)
}

function _onPointerDown(n) {
    if (qx.ui.form.Button.prototype._onPointerDown.call(this, n), n.getButton() == s) {
        var t = this.getMenu();
        t && (t.isVisible() ? t.exclude() : this.open(), n.stopPropagation())
    }
}

function _onPointerUp(n) {
    qx.ui.form.Button.prototype._onPointerUp.call(this, n);
    n.stopPropagation()
}

function _onPointerOver() {
    this.addState(t)
}

function _onPointerOut() {
    this.removeState(t)
}

function _onKeyDown(t) {
    switch (t.getKeyIdentifier()) {
        case u:
            this.removeState(f);
            this.addState(n);
            var i = this.getMenu();
            i && (i.isVisible() ? i.exclude() : this.open());
            t.stopPropagation()
    }
}

function _onKeyUp() {}

function Add(n, t, i) {
    var r = new qx.ui.menu.Button(n, t, null, i);
    this.__HJ.add(r);
    this.isVisible() || this.__HK()
}