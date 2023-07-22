webfront prototypeend.gui.SocialNetworkHelper[18102 - 0]
function postRequestWithGift(t, i, r, u, f, e) {
    var o = qx.core.Init.getApplication(),
        s = webfrontend.gui.SocialNetworkHelper._getPostRequestDialog(o.tr(nt), o.tr(b), o.tr(et));
    s.setUserData(n, function() {
        webfrontend.gui.SocialNetworkHelper.postWithGift(t, i, r, u, f, e)
    });
    o.getDesktop().add(s, {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    })
}

function postWithGift(n, t, i, r, u, f) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(rt, {
        type: 1,
        network: n.get_Name(),
        targetPlayer: t.get_AccountId(),
        targetWorld: u,
        targetObj: f
    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, webfrontend.gui.SocialNetworkHelper._processPostWithGift), {
        host: n,
        friend: t,
        subject: i,
        text: r,
        world: u
    })
}

function _processPostWithGift(n, t) {
    var i = qx.core.Init.getApplication(),
        r = n.host.get_LandingPage() + g + t + it + n.world.toString();
    n.friend.Post(n.subject, n.text, {
        actions: [{
            name: i.tr(ut).toString(),
            link: r
        }]
    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Host.PostResult, {
        item: t
    }, webfrontend.gui.SocialNetworkHelper._processPostWithGiftPublish))
}

function _processPostWithGiftPublish(n) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(y, {
        item: this.item,
        active: n != null ? !0 : !1
    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, webfrontend.gui.SocialNetworkHelper._processPostWithGiftDone, null))
}

function _processPostWithGiftDone() {}

function showGift(t) {
    var r = qx.core.Init.getApplication(),
        i = webfrontend.gui.SocialNetworkHelper._getClaimGiftDialog(t);
    i.setUserData(n, function() {
        webfrontend.gui.SocialNetworkHelper.claimGift(t)
    });
    r.getDesktop().add(i, {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    })
}

function claimGift(n) {
    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(p, {
        item: n.i
    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, webfrontend.gui.SocialNetworkHelper._processClaimGift), null)
}

function _processClaimGift() {}

function _getPostRequestDialog(f, e, s) {
    var y, w, p, tt, d, k, b, g, it, nt;
    return webfrontend.gui.SocialNetworkHelper.postRequestDialog == null ? (y = new qx.ui.container.Composite, w = new qx.ui.layout.Grid, w.setColumnFlex(0, 1), w.setColumnFlex(2, 1), w.setRowFlex(0, 1), w.setRowFlex(2, 1), y.setLayout(w), p = new qx.ui.container.Composite, p.setLayout(new qx.ui.layout.Canvas), p.setWidth(488), p.setHeight(198), tt = new qx.ui.basic.Image(l), p.add(tt), y.add(p, {
        row: 1,
        column: 1
    }), y.add(new qx.ui.core.Spacer(0), {
        row: 2,
        column: 2
    }), d = (new webfrontend.ui.SoundButton).set({
        appearance: c,
        width: 148,
        height: 38,
        font: t
    }), d.addListener(i, function() {
        var i = this.getLayoutParent(),
            t;
        i != null && i.remove(this);
        t = this.getUserData(n);
        t != null && (t.call(), this.setUserData(n, null))
    }, y), p.add(d, {
        left: 170,
        bottom: 18
    }), k = new webfrontend.ui.HotSpotComposite(new qx.ui.layout.Basic), k.setWidth(64), k.setHeight(24), p._add(k, {
        top: 3,
        right: 7
    }), b = new webfrontend.ui.HotSpotButton(null, null), b.setAppearance(ft), b.setWidth(64), b.setHeight(24), k._add(b, {
        top: 0,
        left: 0
    }), b.addListener(i, function() {
        var n = this.getLayoutParent();
        n != null && n.remove(this)
    }, y), g = new qx.ui.basic.Label, g.setAppearance(v), p.add(g, {
        left: 7,
        top: 3
    }), it = new qx.ui.basic.Image(h).set({
        decorator: r
    }), p.add(it, {
        left: 50,
        top: 58
    }), nt = (new qx.ui.basic.Label).set({
        font: t
    }).set({
        width: 290,
        rich: !0,
        wrap: !0
    }), p.add(nt, {
        left: 128,
        top: 68
    }), y.setUserData(u, d), y.setUserData(a, g), y.setUserData(o, nt), webfrontend.gui.SocialNetworkHelper.postRequestDialog = y) : y = webfrontend.gui.SocialNetworkHelper.postRequestDialog, y.getUserData(u).setLabel(s), y.getUserData(a).setValue(f), y.getUserData(o).setValue(e), y
}

function _getClaimGiftDialog(o) {
    var a, rt = qx.core.Init.getApplication(),
        p, y, et, ut, ft, b, g, nt, it;
    webfrontend.gui.SocialNetworkHelper.claimGiftDialog == null ? (a = new qx.ui.container.Composite, p = new qx.ui.layout.Grid, p.setColumnFlex(0, 1), p.setColumnFlex(2, 1), p.setRowFlex(0, 1), p.setRowFlex(2, 1), a.setLayout(p), y = new qx.ui.container.Composite, y.setLayout(new qx.ui.layout.Canvas), y.setWidth(488), y.setHeight(198), et = new qx.ui.basic.Image(l), y.add(et), a.add(y, {
        row: 1,
        column: 1
    }), a.add(new qx.ui.core.Spacer(0), {
        row: 2,
        column: 2
    }), ut = new webfrontend.ui.SoundButton(rt.tr(tt)).set({
        appearance: c,
        width: 148,
        height: 38
    }), ut.addListener(i, function() {
        var i = this.getLayoutParent(),
            t;
        i != null && i.remove(this);
        t = this.getUserData(n);
        t != null && (t.call(), this.setUserData(n, null))
    }, a), y.add(ut, {
        left: 170,
        bottom: 18
    }), ft = new qx.ui.basic.Label, ft.setAppearance(v), y.add(ft, {
        left: 7,
        top: 3
    }), b = new qx.ui.basic.Label(rt.tr(ot)), b.setFont(t), b.setWidth(481), b.setTextAlign(d), y.add(b, {
        left: 0,
        top: 75
    }), g = (new qx.ui.basic.Image).set({
        decorator: r
    }), g.setWidth(50), g.setHeight(50), y.add(g, {
        left: 151,
        top: 60
    }), nt = (new qx.ui.basic.Image).set({
        decorator: r
    }), nt.setWidth(50), nt.setHeight(50), y.add(nt, {
        left: 282,
        top: 60
    }), a.setUserData(u, ut), a.setUserData(f, ft), a.setUserData(s, g), a.setUserData(e, nt), webfrontend.gui.SocialNetworkHelper.claimGiftDialog = a) : a = webfrontend.gui.SocialNetworkHelper.claimGiftDialog;
    it = ClientLib.Host.Main.GetInstance().GetUser(o.a);
    a.getUserData(e).setSource(it != null ? it.get_AvatarImage() : null);
    switch (o.t) {
        case 1:
            a.getUserData(f).setValue(rt.tr(w, 5, it != null ? it.get_FirstName() : rt.tr(k)));
            a.getUserData(s).setSource(h)
    }
    return a
}