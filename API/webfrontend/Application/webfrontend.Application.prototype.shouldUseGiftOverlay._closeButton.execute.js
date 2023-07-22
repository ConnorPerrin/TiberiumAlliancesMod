[object prototypeObject]
function base() {
    var n = this.getCommand();
    n && (this.__rC ? this.__rC = !1 : (this.__rC = !0, n.execute(this)));
    this.fireEvent(u)
} [Class w selfebfrontend.ui.SoundButton]