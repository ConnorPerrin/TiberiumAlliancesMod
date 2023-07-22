function messageBox(p) {
    var nt = qx.core.Init.getApplication(),
        b = null,
        ot = nt.tr(u),
        w, it, rt, d, tt, g, ut, ft, et, k, st;
    p.title != null && (ot = p.title);
    w = new qx.ui.window.Window(ot).set({
        resizable: !1,
        showMaximize: !1,
        showMinimize: !1,
        allowMaximize: !1,
        minWidth: p.hasOwnProperty(f) ? p.minWidth : 300
    });
    p.hasOwnProperty(l) && w.setWidth(p.width);
    p.hasOwnProperty(c) && w.setMaxWidth(p.maxWidth);
    (p.showClose == null || p.showClose != null && p.showClose == !1) && w.setShowClose(!1);
    p.executeClose != null && w.addListener(v, function() {
        p.executeClose.call()
    }, this);
    w.addListenerOnce(r, w.center, w);
    w.setLayout(new qx.ui.layout.VBox(10));
    p.text != null && (it = new qx.ui.basic.Label(p.text).set({
        textColor: t
    }), p.textRich == !0 && it.setRich(!0), w.add(it));
    p.input == !0 && (b = new qx.ui.form.TextField, w.add(b), p.inputValidator != null && (b.addListener(h, function() {
        p.inputValidator(b.getValue()) ? (d.setVisibility(n), k.setEnabled(!1)) : (d.setVisibility(a), k.setEnabled(!0))
    }, this), rt = nt.tr(o), p.inputValidationFailedMessage != null && (rt = p.inputValidationFailedMessage), d = new qx.ui.basic.Label(rt).set({
        textColor: t
    }), d.setVisibility(n), w.add(d)));
    tt = 3;
    p.buttons != null && (tt = p.buttons);
    g = new qx.ui.container.Composite(new qx.ui.layout.HBox(10).set({
        alignX: s
    }));
    g.add(new qx.ui.core.Spacer, {
        flex: 1
    });
    tt & 2 && (ut = nt.tr(e), p.cancelText != null && (ut = p.cancelText), ft = new webfrontend.ui.SoundButton(ut), ft.addListener(i, function() {
        w.close();
        p.executeCancel != null && p.executeCancel.call(p.callbackContext)
    }, this), g.add(ft));
    tt & 1 && (et = nt.tr(y), p.okText != null && (et = p.okText), k = new webfrontend.ui.SoundButton(et), p.input && p.inputValidator && k.setEnabled(!1), k.addListener(i, function() {
        w.close();
        p.executeOk != null && (b != null ? p.executeOk.call(p.callbackContext, b.getValue(), p.data) : p.executeOk.call(p.callbackContext, undefined, p.data))
    }, this), g.add(k));
    w.add(g);
    (p.modal == null || p.modal == !0) && w.setModal(!0);
    w.open();
    st = qx.core.Init.getApplication().getRoot().getWindowManager();
    st.bringToFront(w);
    b != null && b.focus()
}