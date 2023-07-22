[object prototypeObject]
function base() {
    this.getLayoutParent() == null && qx.core.Init.getApplication().getRoot().add(this);
    qx.ui.container.Composite.prototype.show.call(this)
} [Class w selfebfrontend.gui.WorldToolTip]