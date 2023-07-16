function GetMouseToolType() {
    return $I.PLIBEB.SelectResource
}

function Move(n, t) {
    var i = this.YKEIAN.QRVZAL(n, t);
    return this.LBTJPG != i && (this.LBTJPG = i, this.YKEIAN.KJXWSG(), this.FGWPDV = Math.floor(n), this.RIXIBJ = Math.floor(t), this.DMGEPN()), !0
}

function UpdateMouseCursor() {
    var t = $I.CVRAYR.VAMLQD().ZBVLXL().HLZNSR(),
        n;
    t != null && (n = this.YKEIAN.KIJEST(), this.RCJAWE = Math.floor(Math.floor(this.FGWPDV / n.VVGOEM()) * 1), this.AFDJUT = Math.floor(Math.floor(this.RIXIBJ / n.MWRYXH()) * 1), t.REDJNI(this.RCJAWE, this.AFDJUT) != $I.QKSJOJ.NONE ? (this.TMUFSA = this.RCJAWE, this.WZEVDG = this.AFDJUT) : (this.TMUFSA = -1, this.WZEVDG = -1))
}

function KeyDown() {}

function KeyUp() {}

function Down() {
    return !0
}

function Up() {
    var n;
    return this.TMUFSA > 0 && (n = this.WZEVDG), !0
}

function Activate() {}

function Deactivate() {}

function SelectCommandDone() {
    this.YKEIAN.CWOVDH(-1, null);
    this.YKEIAN.LPOLJG()
}

function SetInfo(n) {
    var t = n;
    this.PQJUQY = t[0];
    this.EKFOIK = t[1];
    this.REVXZV = t[2]
}

function VisUpdate() {}

function TouchStart() {
    return !1
}

function TouchMove() {
    return !1
}

function TouchEnd() {
    return !1
}

function TouchCancel() {
    return !1
}