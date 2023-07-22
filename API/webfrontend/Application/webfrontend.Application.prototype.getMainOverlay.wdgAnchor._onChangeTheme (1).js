[object prototypeObject]
function base() {
    if (!this.isDisposed()) {
        qx.ui.core.LayoutItem.prototype._onChangeTheme.call(this);
        this.updateAppearance();
        var n = this.getDecorator();
        this._applyDecorator(null, n);
        this._applyDecorator(n);
        n = this.getFont();
        qx.lang.Type.isString(n) && this._applyFont(n, n);
        n = this.getTextColor();
        qx.lang.Type.isString(n) && this._applyTextColor(n, n);
        n = this.getBackgroundColor();
        qx.lang.Type.isString(n) && this._applyBackgroundColor(n, n)
    }
} [Class q selfx.ui.basic.Image]