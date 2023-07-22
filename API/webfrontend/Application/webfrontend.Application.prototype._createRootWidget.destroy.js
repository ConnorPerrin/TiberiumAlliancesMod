[object prototypeObject]
function base() {
    if (!this.$$disposed) {
        var n = this.$$parent;
        n && n._remove(this);
        qx.ui.core.queue.Dispose.add(this)
    }
} [Class q selfx.ui.root.Application]