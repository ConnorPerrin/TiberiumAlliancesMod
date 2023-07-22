webfront prototypeend.res.llcomp[14784 - 0]
function ll_alliance_overview_markers(i) {
    var u = qx.core.Init.getApplication(),
        f = i ? i : new qx.ui.container.Composite,
        s, r, h, c;
    f.set({
        layout: (new qx.ui.layout.Canvas).set({})
    });
    var l = (new qx.ui.container.Scroll).set({
            scrollbarX: fi
        }),
        a = (new webfrontend.gui.GroupBoxLarge).set({
            Title: u.tr(dkt)
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 5
            }),
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 1,
            paddingBottom: 1
        }),
        o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                alignX: t,
                alignY: n
            })
        });
    return o.objid = wp, s = (new qx.ui.basic.Label).set({
        value: u.tr(byr),
        textColor: dd,
        rich: !0,
        wrap: !1,
        font: y
    }), s.objid = ruu, o.add(s), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5
        })
    }), r.objid = nk, h = (new qx.ui.form.Button).set({
        label: u.tr(pbr)
    }), h.objid = prt, c = (new qx.ui.basic.Label).set({
        value: u.tr(iki),
        textColor: dd,
        rich: !0,
        wrap: !1,
        allowGrowX: !0,
        font: y
    }), c.objid = vcr, r.add(h), r.add(c, {
        flex: 1
    }), e.add(o, {
        flex: 1
    }), e.add(r), a.add(e, {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }), l.add(a), f.add(l, {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }), f
}

function ll_armysetup_saveload_item(n) {
    var u = qx.core.Init.getApplication(),
        r = n ? n : new qx.ui.container.Composite,
        f, t, e, i, o, s;
    return r.set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 3
        }),
        paddingTop: 3,
        paddingLeft: 3,
        paddingBottom: 3,
        paddingRight: 3,
        allowGrowX: !1
    }), f = (new qx.ui.form.CheckBox).set({
        allowGrowY: !1,
        marginTop: 2
    }), f.objid = atu, t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    }), t.objid = lp, e = (new qx.ui.basic.Label).set({
        value: u.tr(adr),
        rich: !0,
        wrap: !1,
        font: l
    }), e.objid = lf, i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 3
        }),
        font: k
    }), i.objid = nkt, o = (new qx.ui.basic.Label).set({
        value: u.tr(sgi)
    }), o.objid = eg, s = (new qx.ui.basic.Label).set({
        value: u.tr(neu)
    }), s.objid = eb, i.add(o), i.add(s), t.add(e), t.add(i), r.add(f), r.add(t), r
}

function ll_armysetup_topcontrols(i) {
    var c = qx.core.Init.getApplication(),
        o = i ? i : new qx.ui.container.Composite,
        s, l, u, f, e, r, a, v, y, p, w, b, k, d, g, nt, tt, it, rt;
    return o.set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        allowGrowX: !1
    }), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t,
            spacing: 2
        }),
        decorator: gut,
        paddingBottom: 3
    }), r.objid = usi, u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        })
    }), u.objid = kfu, f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5
        }),
        minHeight: 30
    }), e = (new webfrontend.ui.SoundButton).set({
        label: c.tr(yvi)
    }), e.objid = udi, l = (new webfrontend.ui.SoundButton).set({
        label: c.tr(uli)
    }), l.objid = fcr, f.add(e, {
        flex: 1
    }), f.add(l, {
        flex: 1
    }), r.add((new qx.ui.basic.Label).set({
        rich: !0,
        wrap: !1,
        value: c.tr(ver),
        font: h
    })), r.add((new qx.ui.basic.Image).set({
        source: cl,
        allowGrowX: !0,
        scale: !0
    })), r.add(u), r.add((new qx.ui.basic.Image).set({
        source: cl,
        allowGrowX: !0,
        scale: !0
    })), r.add(f), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        })
    }), u.objid = khi, f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignX: t
        }),
        decorator: phi,
        allowGrowX: !1,
        width: 74
    }), e = (new webfrontend.ui.SoundButton).set({
        appearance: si,
        maxHeight: 15,
        height: 15,
        width: 50,
        icon: ekr
    }), e.objid = hl, f.add(e), u.add(f), s.add(r, {
        left: 20,
        bottom: 0
    }), s.add(u, {
        left: 0,
        right: 0,
        bottom: 0
    }), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        decorator: rot,
        paddingBottom: 2
    }), r.objid = nui, a = (new qx.ui.form.ToggleButton).set({
        icon: wgi,
        appearance: vi,
        marginRight: 8
    }), a.objid = pit, v = (new qx.ui.form.Button).set({
        icon: fkt
    }), v.objid = fyt, y = (new qx.ui.form.Button).set({
        icon: uvr
    }), y.objid = gat, p = (new qx.ui.form.Button).set({
        icon: udt
    }), p.objid = cp, w = (new qx.ui.form.Button).set({
        icon: avi
    }), w.objid = ta, b = (new qx.ui.form.Button).set({
        icon: btr
    }), b.objid = har, k = (new qx.ui.form.Button).set({
        icon: eci
    }), k.objid = lyt, d = (new qx.ui.form.ToggleButton).set({
        icon: iwt,
        appearance: vi,
        marginLeft: 8
    }), d.objid = elr, g = (new qx.ui.form.ToggleButton).set({
        icon: efu,
        appearance: vi
    }), g.objid = fut, nt = (new qx.ui.form.ToggleButton).set({
        icon: spt,
        appearance: vi
    }), nt.objid = isu, tt = (new qx.ui.form.ToggleButton).set({
        icon: oer,
        appearance: vi
    }), tt.objid = wdi, it = (new qx.ui.form.ToggleButton).set({
        icon: net,
        appearance: vi
    }), it.objid = lat, rt = (new qx.ui.form.ToggleButton).set({
        icon: cyr,
        appearance: vi,
        marginLeft: 8
    }), rt.objid = dei, r.add(a), r.add(v), r.add(y), r.add(p), r.add(w), r.add(b), r.add(k), r.add(d), r.add(g), r.add(nt), r.add(tt), r.add(it), r.add(rt), o.add(s), o.add(r), o
}

function ll_arsenal_data_building(f) {
    var c = qx.core.Init.getApplication(),
        w = f ? f : new qx.ui.container.Composite,
        y, nt, it, o, e, s, rt, ut, ft, p, et;
    w.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 512,
        maxWidth: 512
    });
    var b = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            innerDecorator: wi
        }),
        ot = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            decorator: yi,
            width: 506,
            maxWidth: 506
        }),
        k = (new qx.ui.container.Scroll).set({
            width: 502,
            minHeight: 224,
            marginBottom: 10,
            paddingLeft: 10,
            paddingRight: 1,
            marginTop: 2,
            height: 224
        });
    k.objid = fr;
    var l = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 6
            }),
            paddingTop: 4
        }),
        d = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 0
            })
        }),
        o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({})
        }),
        st = (new qx.ui.basic.Image).set({
            source: bi,
            width: 109,
            height: 106,
            scale: !0
        });
    st.objid = ir;
    e.add((new qx.ui.basic.Image).set({
        source: nu
    }));
    e.add(st, {
        left: 7,
        top: 7
    });
    s = (new qx.ui.basic.Label).set({
        value: lr,
        rich: !0,
        width: 190,
        font: a,
        textColor: u,
        paddingLeft: 4
    });
    s.objid = ar;
    o.add(e);
    o.add(s);
    var e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 16
            }),
            width: 50,
            height: 100
        }),
        h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 6
            }),
            width: 120,
            marginRight: 10,
            paddingTop: 7
        }),
        g = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10
            }),
            alignY: n
        }),
        ht = (new qx.ui.form.Spinner).set({
            value: 1,
            minimum: 1,
            alignY: n,
            maximum: 65
        });
    ht.objid = tu;
    g.add((new qx.ui.basic.Label).set({
        value: c.tr(rf),
        font: i,
        textColor: u,
        alignY: n,
        width: 100,
        textAlign: r
    }));
    g.add(ht);
    y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        }),
        alignY: n
    });
    nt = (new qx.ui.basic.Label).set({
        value: pf
    });
    nt.objid = ue;
    y.add((new qx.ui.basic.Label).set({
        value: c.tr(ee),
        font: i,
        textColor: u,
        alignY: n,
        width: 100,
        textAlign: r
    }));
    y.add(nt);
    var lt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10
            }),
            marginTop: 6
        }),
        at = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10
            })
        }),
        tt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10
            }),
            alignY: n,
            marginTop: 6
        }),
        ct = (new qx.ui.basic.Label).set({
            value: c.tr(ant),
            font: i,
            textColor: u,
            alignY: n,
            width: 100,
            textAlign: r
        });
    return ct.objid = yhi, it = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), it.objid = idi, tt.add(ct), tt.add(it), h.add(g), h.add(y), h.add(lt), h.add(at), h.add(tt), e.add(h), d.add(o), d.add(e), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    }), o.objid = ykr, e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 10
        })
    }), s = (new qx.ui.basic.Label).set({
        value: c.tr(oe),
        font: i,
        textColor: u,
        alignY: n,
        width: 100,
        textAlign: r
    }), s.objid = wf, rt = (new qx.ui.basic.Label).set({
        value: dgi
    }), rt.objid = ne, ut = (new qx.ui.basic.Label).set({
        value: yf,
        font: i,
        textColor: u,
        alignY: n,
        textAlign: r,
        marginLeft: 20
    }), ut.objid = te, ft = (new qx.ui.form.Spinner).set({
        value: 0,
        minimum: 1,
        maximum: 65
    }), ft.objid = gu, e.add(s), e.add(rt), e.add(ut), e.add(ft), l.add(d), l.add(o), l.add(e), k.add(l), ot.add(k, {
        top: 0,
        bottom: 0
    }), p = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        visibility: v
    }), et = (new qx.ui.basic.Label).set({
        value: pi,
        alignX: t,
        appearance: ur
    }), et.objid = yt, p.add((new qx.ui.basic.Image).set({
        source: gi
    })), p.add(et), b.add(ot, {
        bottom: 2,
        left: 2,
        top: 28
    }), b.add(p), w.add(b, {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }), w
}

function ll_arsenal_data_defense(f) {
    var c = qx.core.Init.getApplication(),
        nt = f ? f : new qx.ui.container.Composite,
        ft, et, ot, st, s, o, p, v, ht, l, w, y, ct, h, lt, e, b, d, k, at, g, vt;
    nt.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 512,
        maxWidth: 512,
        allowGrowX: !1,
        allowGrowY: !0,
        allowShrinkY: !1,
        allowShrinkX: !1
    });
    var tt = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            innerDecorator: wi
        }),
        pt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            width: 506,
            maxWidth: 506,
            height: 50,
            decorator: yi
        }),
        it = (new qx.ui.container.Scroll).set({
            width: 502,
            minHeight: 200
        });
    it.objid = fr;
    var rt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        ut = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            paddingLeft: 10
        }),
        s = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 4
            })
        }),
        o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({}),
            marginTop: 2
        }),
        wt = (new qx.ui.basic.Image).set({
            source: bi,
            width: 109,
            height: 106,
            scale: !0
        });
    wt.objid = ir;
    o.add((new qx.ui.basic.Image).set({
        source: nu
    }));
    o.add(wt, {
        left: 7,
        top: 7
    });
    p = (new qx.ui.basic.Label).set({
        value: lr,
        rich: !0,
        width: 190,
        paddingLeft: 4,
        font: a,
        textColor: u
    });
    p.objid = ar;
    s.add(o);
    s.add(p);
    var o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 10
            }),
            paddingTop: 4
        }),
        v = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10,
                alignY: n
            })
        }),
        bt = (new qx.ui.form.Spinner).set({
            value: 1,
            minimum: 1,
            allowGrowX: !1,
            maximum: 65
        });
    bt.objid = tu;
    v.add((new qx.ui.basic.Label).set({
        value: c.tr(rf),
        font: i,
        textColor: u,
        alignX: r,
        width: 120,
        textAlign: r
    }));
    v.add(bt);
    l = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10,
            alignY: n
        })
    });
    w = (new qx.ui.basic.Label).set({
        value: pf
    });
    w.objid = ue;
    l.add((new qx.ui.basic.Label).set({
        value: c.tr(ee),
        font: i,
        textColor: u,
        alignX: r,
        width: 120,
        textAlign: r
    }));
    l.add(w);
    var y = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            alignY: n
        }),
        kt = (new qx.ui.basic.Image).set({
            minWidth: 20,
            minHeight: 10,
            source: we,
            alignY: n
        });
    return kt.objid = ia, b = (new qx.ui.basic.Label).set({
        value: tv,
        alignY: n,
        width: 50,
        maxWidth: 50
    }), b.objid = en, ft = (new qx.ui.basic.Image).set({
        minWidth: 20,
        minHeight: 10,
        source: th,
        alignY: n,
        marginLeft: 10
    }), ft.objid = ww, k = (new qx.ui.basic.Label).set({
        value: itt,
        alignY: n,
        width: 50,
        maxWidth: 50
    }), k.objid = fa, h.add((new qx.ui.basic.Label).set({
        value: c.tr(cr),
        font: i,
        textColor: u,
        width: 120,
        textAlign: r,
        alignY: n
    })), h.add(kt), h.add(b), h.add(ft), h.add(k), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), et = (new qx.ui.basic.Image).set({
        minHeight: 10,
        minWidth: 20,
        source: gs,
        alignY: n
    }), et.objid = ntt, d = (new qx.ui.basic.Label).set({
        value: htt,
        alignY: n,
        width: 50,
        maxWidth: 50
    }), d.objid = yl, ot = (new qx.ui.basic.Image).set({
        minWidth: 20,
        minHeight: 10,
        source: sh,
        alignY: n,
        marginLeft: 10
    }), ot.objid = al, st = (new qx.ui.basic.Label).set({
        value: sy,
        alignY: n,
        width: 50,
        maxWidth: 50
    }), st.objid = cy, e.add((new qx.ui.core.Widget).set({
        width: 120
    })), e.add(et), e.add(d), e.add(ot), e.add(st), y.add(h), y.add(e), o.add(v), o.add(l), o.add(y), ut.add(s), ut.add(o), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        }),
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        decorator: li
    }), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        })
    }), o.objid = aai, p = (new qx.ui.basic.Label).set({
        value: yei
    }), p.objid = agr, o.add((new qx.ui.basic.Label).set({
        value: c.tr(ryi),
        font: i,
        textColor: u,
        width: 120,
        textAlign: r
    })), o.add(p), v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        })
    }), v.objid = tut, ht = (new qx.ui.basic.Label).set({
        value: lpr
    }), ht.objid = yhr, v.add((new qx.ui.basic.Label).set({
        value: c.tr(wcr),
        font: i,
        textColor: u,
        width: 120,
        textAlign: r
    })), v.add(ht), l = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        })
    }), l.objid = ddr, w = (new qx.ui.basic.Label).set({
        value: dy
    }), w.objid = bo, l.add((new qx.ui.basic.Label).set({
        value: c.tr(fc),
        font: i,
        textColor: u,
        width: 120,
        textAlign: r
    })), l.add(w), y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        })
    }), ct = (new qx.ui.basic.Label).set({
        value: up
    }), ct.objid = sp, y.add((new qx.ui.basic.Label).set({
        value: c.tr(kc),
        font: i,
        textColor: u,
        width: 120,
        textAlign: r
    })), y.add(ct), h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        })
    }), lt = (new qx.ui.basic.Label).set({
        value: yrt
    }), lt.objid = dwr, h.add((new qx.ui.basic.Label).set({
        value: c.tr(ori),
        font: i,
        textColor: u,
        width: 120,
        textAlign: r
    })), h.add(lt), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 10
        }),
        marginTop: 4
    }), b = (new qx.ui.basic.Label).set({
        value: c.tr(oe),
        font: i,
        textColor: u,
        alignX: r,
        width: 120,
        textAlign: r
    }), b.objid = wf, d = (new qx.ui.basic.Label).set({
        value: so
    }), d.objid = ne, k = (new qx.ui.basic.Label).set({
        value: yf,
        font: i,
        textColor: u,
        textAlign: r,
        alignX: r,
        marginLeft: 20
    }), k.objid = te, at = (new qx.ui.form.Spinner).set({
        value: 0,
        minimum: 1,
        allowGrowX: !1,
        maximum: 65
    }), at.objid = gu, e.add(b), e.add(d), e.add(k), e.add(at), s.add(o), s.add(v), s.add(l), s.add(y), s.add(h), s.add(e), rt.add(ut), rt.add(s, {
        flex: 1
    }), it.add(rt), pt.add(it, {
        bottom: 0,
        top: 0
    }), g = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), vt = (new qx.ui.basic.Label).set({
        value: pi,
        alignX: t,
        appearance: ur
    }), vt.objid = yt, g.add((new qx.ui.basic.Image).set({
        source: gi
    })), g.add(vt), tt.add(pt, {
        bottom: 2,
        left: 2,
        top: 28
    }), tt.add(g), nt.add(tt, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), nt
}

function ll_arsenal_data_offense(t) {
    var s = qx.core.Init.getApplication(),
        d = t ? t : new qx.ui.container.Composite,
        b, rt, ut, v, ft, et, ot, st, e, l, ht, c, y, o, ct, w, p, lt, k, at;
    d.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        maxWidth: 512,
        allowShrinkY: !1,
        allowGrowX: !1,
        allowShrinkX: !1,
        minHeight: 225
    });
    var g = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            innerDecorator: wi
        }),
        vt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            height: 50,
            decorator: yi,
            width: 506,
            maxWidth: 506
        }),
        nt = (new qx.ui.container.Scroll).set({});
    nt.objid = fr;
    var tt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        it = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            paddingLeft: 10
        }),
        h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 4
            })
        }),
        f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({}),
            marginTop: 2
        }),
        pt = (new qx.ui.basic.Image).set({
            source: bi,
            scale: !0,
            width: 109,
            height: 106
        });
    pt.objid = ir;
    f.add((new qx.ui.basic.Image).set({
        source: nu
    }));
    f.add(pt, {
        left: 7,
        top: 7
    });
    b = (new qx.ui.basic.Label).set({
        value: lr,
        rich: !0,
        width: 190,
        textColor: u,
        paddingLeft: 4,
        font: a
    });
    b.objid = ar;
    h.add(f);
    h.add(b);
    var f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 10
            }),
            paddingTop: 4
        }),
        l = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10
            })
        }),
        wt = (new qx.ui.form.Spinner).set({
            value: 1,
            minimum: 1,
            allowGrowX: !1,
            alignY: n,
            maximum: 65
        });
    wt.objid = tu;
    l.add((new qx.ui.basic.Label).set({
        value: s.tr(rf),
        font: i,
        alignX: r,
        textColor: u,
        width: 120,
        textAlign: r,
        alignY: n
    }));
    l.add(wt);
    c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        })
    });
    y = (new qx.ui.basic.Label).set({
        value: pf
    });
    y.objid = ue;
    c.add((new qx.ui.basic.Label).set({
        value: s.tr(ee),
        font: i,
        alignX: r,
        textColor: u,
        marginTop: 0,
        width: 120,
        textAlign: r
    }));
    c.add(y);
    var o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 4
            })
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            alignY: n
        }),
        bt = (new qx.ui.basic.Image).set({
            minWidth: 20,
            minHeight: 10,
            alignY: n,
            source: we
        });
    bt.objid = ia;
    p = (new qx.ui.basic.Label).set({
        value: tv,
        alignY: n,
        width: 50,
        maxWidth: 50
    });
    p.objid = en;
    rt = (new qx.ui.basic.Image).set({
        minWidth: 20,
        minHeight: 10,
        source: th,
        marginLeft: 10
    });
    rt.objid = ww;
    ut = (new qx.ui.basic.Label).set({
        value: itt,
        alignY: n,
        width: 50,
        maxWidth: 50
    });
    ut.objid = fa;
    e.add((new qx.ui.basic.Label).set({
        value: s.tr(cr),
        font: i,
        textColor: u,
        width: 120,
        textAlign: r,
        alignY: n
    }));
    e.add(bt);
    e.add(p);
    e.add(rt);
    e.add(ut);
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        alignY: n
    });
    ft = (new qx.ui.basic.Image).set({
        minHeight: 10,
        minWidth: 20,
        source: gs
    });
    ft.objid = ntt;
    et = (new qx.ui.basic.Label).set({
        value: htt,
        alignY: n,
        width: 50,
        maxWidth: 50
    });
    et.objid = yl;
    ot = (new qx.ui.basic.Image).set({
        minWidth: 20,
        minHeight: 10,
        source: sh,
        marginLeft: 10
    });
    ot.objid = al;
    st = (new qx.ui.basic.Label).set({
        value: sy,
        alignY: n,
        width: 50,
        maxWidth: 50
    });
    st.objid = cy;
    v.add((new qx.ui.core.Widget).set({
        width: 120,
        allowGrowY: !1,
        height: 1
    }));
    v.add(ft);
    v.add(et);
    v.add(ot);
    v.add(st);
    o.add(e);
    o.add(v);
    e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        })
    });
    w = (new qx.ui.basic.Label).set({
        value: eti
    });
    w.objid = grt;
    e.add((new qx.ui.basic.Label).set({
        value: s.tr(uyi),
        font: i,
        textColor: u,
        width: 120,
        textAlign: r
    }));
    e.add(w);
    f.add(l);
    f.add(c);
    f.add(o);
    f.add(e);
    it.add(h);
    it.add(f);
    var h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 2
            }),
            decorator: li,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10
        }),
        f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10
            })
        }),
        b = (new qx.ui.basic.Label).set({
            value: dy
        });
    return b.objid = bo, f.add((new qx.ui.basic.Label).set({
        value: s.tr(fc),
        font: i,
        textColor: u,
        width: 120,
        textAlign: r
    })), f.add(b), l = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        })
    }), ht = (new qx.ui.basic.Label).set({
        value: up
    }), ht.objid = sp, l.add((new qx.ui.basic.Label).set({
        value: s.tr(kc),
        font: i,
        textColor: u,
        width: 120,
        textAlign: r
    })), l.add(ht), c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        })
    }), y = (new qx.ui.basic.Label).set({
        value: hur
    }), y.objid = aci, c.add((new qx.ui.basic.Label).set({
        value: s.tr(chi),
        font: i,
        textColor: u,
        width: 120,
        textAlign: r
    })), c.add(y), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        }),
        marginTop: 2
    }), ct = (new qx.ui.basic.Label).set({
        value: s.tr(oe),
        font: i,
        textColor: u,
        alignY: n,
        width: 120,
        textAlign: r
    }), ct.objid = wf, w = (new qx.ui.basic.Label).set({
        value: so,
        alignY: n
    }), w.objid = ne, p = (new qx.ui.basic.Label).set({
        value: yf,
        font: i,
        textColor: cui,
        alignX: r,
        alignY: n,
        marginLeft: 20
    }), p.objid = te, lt = (new qx.ui.form.Spinner).set({
        value: 0,
        minimum: 1,
        allowGrowX: !1,
        alignY: n,
        maximum: 65
    }), lt.objid = gu, o.add(ct), o.add(w), o.add(p), o.add(lt), h.add(f), h.add(l), h.add(c), h.add(o), tt.add(it), tt.add(h, {
        flex: 1
    }), nt.add(tt, {
        flex: 1
    }), vt.add(nt, {
        bottom: 0,
        top: 0,
        left: 0,
        right: 3
    }), k = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), at = (new qx.ui.basic.Label).set({
        value: pi,
        appearance: ur
    }), at.objid = yt, k.add((new qx.ui.basic.Image).set({
        source: gi
    })), k.add(at), g.add(vt, {
        bottom: 2,
        left: 2,
        top: 28
    }), g.add(k), d.add(g, {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }), d
}

function ll_arsenal_data_special(f) {
    var c = qx.core.Init.getApplication(),
        w = f ? f : new qx.ui.container.Composite,
        nt, l, it, v, rt, y, ut, e, ft, p, et;
    w.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 512,
        maxWidth: 512,
        allowGrowX: !1,
        allowGrowY: !0,
        allowShrinkY: !1,
        allowShrinkX: !1
    });
    var b = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            innerDecorator: wi
        }),
        ot = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            width: 506,
            maxWidth: 506,
            height: 50,
            decorator: yi
        }),
        k = (new qx.ui.container.Scroll).set({
            width: 502,
            minHeight: 224,
            height: 224
        });
    k.objid = fr;
    var d = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        g = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            paddingLeft: 10
        }),
        h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 4
            })
        }),
        o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({}),
            marginTop: 2
        }),
        st = (new qx.ui.basic.Image).set({
            source: bi,
            width: 109,
            height: 106,
            scale: !0
        });
    st.objid = ir;
    o.add((new qx.ui.basic.Image).set({
        source: nu
    }));
    o.add(st, {
        left: 7,
        top: 7
    });
    nt = (new qx.ui.basic.Label).set({
        value: lr,
        rich: !0,
        width: 190,
        minWidth: 0,
        paddingLeft: 4,
        font: a,
        textColor: u
    });
    nt.objid = ar;
    h.add(o);
    h.add(nt);
    var o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 16
            }),
            width: 50,
            height: 100
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 6
            }),
            width: 120,
            marginRight: 10,
            paddingTop: 7,
            alignX: r
        }),
        tt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10
            })
        }),
        ht = (new qx.ui.form.Spinner).set({
            value: 0,
            minimum: 1,
            alignY: n,
            allowGrowX: !1,
            maximum: 65
        });
    ht.objid = tu;
    tt.add((new qx.ui.basic.Label).set({
        value: ddt,
        textColor: u,
        font: i,
        width: 100,
        alignX: r,
        textAlign: r,
        alignY: n
    }));
    tt.add(ht);
    l = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        })
    });
    it = (new qx.ui.basic.Label).set({
        value: dpt
    });
    it.objid = lou;
    l.add((new qx.ui.basic.Label).set({
        value: c.tr(tgt),
        textColor: u,
        font: i,
        width: 100,
        alignX: r,
        textAlign: r
    }));
    l.add(it);
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        })
    });
    rt = (new qx.ui.basic.Label).set({
        value: ciu,
        width: 120
    });
    rt.objid = lhi;
    v.add((new qx.ui.basic.Label).set({
        value: c.tr(lfr),
        textColor: u,
        font: i,
        width: 100,
        alignX: r,
        textAlign: r
    }));
    v.add(rt);
    y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        })
    });
    ut = (new qx.ui.basic.Label).set({
        value: oat
    });
    ut.objid = ahr;
    y.add((new qx.ui.basic.Label).set({
        value: c.tr(osr),
        textColor: u,
        font: i,
        width: 100,
        alignX: r,
        textAlign: r
    }));
    y.add(ut);
    e.add(tt);
    e.add(l);
    e.add(v);
    e.add(y);
    o.add(e);
    g.add(h);
    g.add(o);
    var h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 2
            }),
            marginLeft: 10,
            marginTop: 10,
            marginRight: 10,
            marginBottom: 10,
            decorator: li
        }),
        o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10
            })
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        });
    return e.objid = auu, o.add((new qx.ui.basic.Label).set({
        value: c.tr(ist),
        textColor: u,
        font: i,
        textAlign: r,
        width: 120
    })), o.add(e), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        })
    }), ft = (new qx.ui.basic.Label).set({
        value: odr
    }), ft.objid = dar, e.add((new qx.ui.basic.Label).set({
        value: c.tr(dot),
        textColor: u,
        font: i,
        textAlign: r,
        width: 120
    })), e.add(ft), h.add(o), h.add(e), d.add(g), d.add(h, {
        flex: 1
    }), k.add(d), ot.add(k, {
        bottom: 0,
        top: 0
    }), p = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        visibility: s
    }), et = (new qx.ui.basic.Label).set({
        value: pi,
        alignX: t,
        appearance: ur
    }), et.objid = yt, p.add((new qx.ui.basic.Image).set({
        source: gi
    })), p.add(et), b.add(ot, {
        bottom: 2,
        left: 2,
        top: 4
    }), b.add(p), w.add(b, {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }), w
}

function ll_arsenal_data_support(f) {
    var b = qx.core.Init.getApplication(),
        d = f ? f : new qx.ui.container.Composite,
        g, ft, k, nt, tt, it, ht, rt, ct, ut, lt, e, w, h, y, c, l, v;
    d.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 512,
        maxWidth: 512,
        allowShrinkX: !1,
        allowGrowX: !1,
        allowShrinkY: !1
    });
    g = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        visibility: s
    });
    ft = (new qx.ui.basic.Label).set({
        value: pi,
        alignX: t,
        appearance: ur
    });
    ft.objid = yt;
    g.add((new qx.ui.basic.Image).set({
        source: gi
    }));
    g.add(ft);
    var at = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            innerDecorator: wi
        }),
        vt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            width: 506,
            maxWidth: 506,
            decorator: yi
        }),
        et = (new qx.ui.container.Scroll).set({
            width: 502,
            height: 224,
            minHeight: 224
        });
    et.objid = fr;
    var ot = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        st = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 4
            }),
            paddingLeft: 10
        }),
        p = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 4
            })
        }),
        o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({}),
            paddingTop: 2
        }),
        pt = (new qx.ui.basic.Image).set({
            source: bi,
            width: 109,
            height: 106,
            scale: !0
        });
    pt.objid = ir;
    o.add((new qx.ui.basic.Image).set({
        source: nu
    }));
    o.add(pt, {
        left: 7,
        top: 7
    });
    k = (new qx.ui.basic.Label).set({
        value: lr,
        rich: !0,
        allowShrinkY: !0,
        width: 200,
        font: a,
        textColor: u,
        paddingLeft: 4
    });
    k.objid = ar;
    p.add(o);
    p.add(k);
    var o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 16
            }),
            width: 50,
            height: 100
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 6
            }),
            width: 120,
            marginRight: 10,
            paddingTop: 7,
            alignX: r
        }),
        h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10
            }),
            paddingTop: 4
        }),
        wt = (new qx.ui.form.Spinner).set({
            value: 1,
            minimum: 1,
            allowGrowX: !1,
            alignY: n,
            maximum: 65
        });
    wt.objid = tu;
    h.add((new qx.ui.basic.Label).set({
        value: b.tr(rf),
        font: i,
        textColor: u,
        alignX: r,
        width: 100,
        alignY: n,
        textAlign: r
    }));
    h.add(wt);
    nt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        }),
        paddingTop: 4
    });
    c = (new qx.ui.basic.Label).set({
        value: pf
    });
    c.objid = ue;
    nt.add((new qx.ui.basic.Label).set({
        value: b.tr(ee),
        font: i,
        textColor: u,
        alignX: r,
        width: 100,
        alignY: n,
        textAlign: r
    }));
    nt.add(c);
    tt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        }),
        paddingTop: 4
    });
    l = (new qx.ui.basic.Label).set({
        value: b.tr(oe),
        font: i,
        textColor: u,
        alignX: r,
        width: 100,
        alignY: n,
        textAlign: r
    });
    l.objid = wf;
    v = (new qx.ui.basic.Label).set({
        value: so
    });
    v.objid = ne;
    tt.add(l);
    tt.add(v);
    it = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        }),
        paddingTop: 4
    });
    v = (new qx.ui.basic.Label).set({
        value: yf,
        font: i,
        textColor: u,
        alignX: r,
        width: 100,
        alignY: n,
        textAlign: r
    });
    v.objid = te;
    ht = (new qx.ui.form.Spinner).set({
        value: 0,
        minimum: 1,
        allowGrowX: !1,
        alignY: n,
        maximum: 65
    });
    ht.objid = gu;
    it.add(v);
    it.add(ht);
    rt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        }),
        paddingTop: 4
    });
    ct = (new qx.ui.basic.Label).set({
        value: rw
    });
    ct.objid = bo;
    rt.add((new qx.ui.basic.Label).set({
        value: b.tr(nki),
        font: i,
        textColor: u,
        alignX: r,
        width: 100,
        alignY: n,
        textAlign: r
    }));
    rt.add(ct);
    ut = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        }),
        paddingTop: 4
    });
    lt = (new qx.ui.basic.Label).set({
        value: rw
    });
    lt.objid = whr;
    ut.add((new qx.ui.basic.Label).set({
        value: b.tr(owt),
        font: i,
        textColor: u,
        alignX: r,
        width: 100,
        alignY: n,
        textAlign: r
    }));
    ut.add(lt);
    e.add(h);
    e.add(nt);
    e.add(tt);
    e.add(it);
    e.add(rt);
    e.add(ut);
    o.add(e);
    st.add(p, {});
    st.add(o);
    var p = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            enabled: !0,
            marginTop: 10,
            decorator: li,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10
        }),
        o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        k = (new qx.ui.basic.Label).set({
            value: bh,
            textAlign: r,
            alignY: n,
            font: i,
            textColor: u,
            width: 120
        });
    return k.objid = kit, w = (new qx.ui.basic.Label).set({
        value: cki,
        alignY: n
    }), w.objid = rsu, y = (new qx.ui.basic.Label).set({
        value: wpi,
        alignY: n
    }), y.objid = wit, c = (new qx.ui.basic.Label).set({
        value: knr,
        alignY: n
    }), c.objid = fsr, o.add(k), o.add((new qx.ui.basic.Image).set({
        minHeight: 10,
        source: cu,
        minWidth: 20,
        marginLeft: 10,
        alignY: n
    })), o.add(w), o.add((new qx.ui.basic.Image).set({
        minHeight: 10,
        minWidth: 20,
        source: su,
        marginLeft: 10,
        alignY: n
    })), o.add(y), o.add((new qx.ui.basic.Image).set({
        minWidth: 20,
        minHeight: 10,
        source: eu,
        marginLeft: 10,
        alignY: n
    })), o.add(c), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), w = (new qx.ui.basic.Label).set({
        value: bh,
        textAlign: r,
        alignY: n,
        font: i,
        textColor: u,
        width: 120
    }), w.objid = gwt, y = (new qx.ui.basic.Label).set({
        value: trr,
        alignY: n
    }), y.objid = hpt, c = (new qx.ui.basic.Label).set({
        value: agi,
        alignY: n
    }), c.objid = ibt, l = (new qx.ui.basic.Label).set({
        value: wwr,
        alignY: n
    }), l.objid = ntu, e.add(w), e.add((new qx.ui.basic.Image).set({
        minWidth: 20,
        minHeight: 10,
        source: cu,
        marginLeft: 10,
        alignY: n
    })), e.add(y), e.add((new qx.ui.basic.Image).set({
        minHeight: 10,
        minWidth: 20,
        source: su,
        marginLeft: 10,
        alignY: n
    })), e.add(c), e.add((new qx.ui.basic.Image).set({
        minWidth: 20,
        minHeight: 10,
        source: eu,
        marginLeft: 10,
        alignY: n
    })), e.add(l), h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), y = (new qx.ui.basic.Label).set({
        value: bh,
        textAlign: r,
        alignY: n,
        font: i,
        textColor: u,
        width: 120
    }), y.objid = blt, c = (new qx.ui.basic.Label).set({
        value: ihr,
        alignY: n
    }), c.objid = elt, l = (new qx.ui.basic.Label).set({
        value: dur,
        alignY: n
    }), l.objid = klt, v = (new qx.ui.basic.Label).set({
        value: nar,
        alignY: n
    }), v.objid = kki, h.add(y), h.add((new qx.ui.basic.Image).set({
        minWidth: 20,
        minHeight: 10,
        source: cu,
        marginLeft: 10,
        alignY: n
    })), h.add(c), h.add((new qx.ui.basic.Image).set({
        minHeight: 10,
        minWidth: 20,
        source: su,
        marginLeft: 10,
        alignY: n
    })), h.add(l), h.add((new qx.ui.basic.Image).set({
        minWidth: 20,
        minHeight: 10,
        source: eu,
        marginLeft: 10,
        alignY: n
    })), h.add(v), p.add(o), p.add(e), p.add(h), ot.add(st), ot.add(p), et.add(ot, {
        flex: 1
    }), vt.add(et, {
        bottom: 0,
        top: 0
    }), at.add(vt, {
        bottom: 2,
        left: 2,
        top: 4
    }), d.add(g), d.add(at, {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }), d
}

function ll_arsenal_data_window(n) {
    var t = n ? n : new qx.ui.container.Composite;
    return t.set({
        layout: (new qx.ui.layout.VBox).set({})
    }), t
}

function ll_arsenal_list_item(n) {
    var r = n ? n : new qx.ui.container.Composite,
        u, f;
    return r.set({
        layout: (new qx.ui.layout.HBox).set({}),
        width: 184,
        height: 92,
        maxWidth: 184,
        maxHeight: 92,
        appearance: yor
    }), u = (new qx.ui.basic.Image).set({
        width: 88,
        height: 86,
        scale: !0,
        marginTop: 2,
        marginLeft: 4,
        anonymous: !0
    }), u.objid = ir, f = (new qx.ui.basic.Label).set({
        value: vki,
        marginTop: 6,
        font: i,
        anonymous: !0,
        rich: !0,
        allowGrowX: !0,
        marginRight: 7,
        textAlign: t
    }), f.objid = pur, r.add(u), r.add(f, {
        flex: 1
    }), r
}

function ll_arsenal_list_window(n) {
    var r = n ? n : new qx.ui.container.Composite,
        i, u;
    return r.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        paddingRight: 8,
        marginRight: 4
    }), i = (new qx.ui.container.Scroll).set({
        alignX: t,
        scrollbarY: reu
    }), i.objid = gti, u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        backgroundColor: gyi,
        marginTop: 10
    }), u.objid = vft, i.add(u), r.add(i, {
        top: 10,
        left: 0,
        bottom: 0,
        right: 0
    }), r
}

function ll_arsenal_main_window(i) {
    var f = qx.core.Init.getApplication(),
        v = i ? i : new qx.ui.container.Composite,
        d, g, l, a, tt, e, c, y, r, rt, ut, ft;
    v.set({
        layout: (new qx.ui.layout.VBox).set({}),
        maxWidth: 750,
        width: 750,
        minHeight: 500
    });
    var p = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 3
            }),
            allowGrowY: !1
        }),
        k = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 2
            }),
            width: 218,
            height: 72,
            maxWidth: 218,
            innerDecorator: it
        }),
        r = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10,
                alignY: n
            }),
            width: 0,
            alignY: n,
            maxWidth: 208,
            alignX: t,
            innerDecorator: li
        }),
        et = (new qx.ui.form.RadioButton).set({
            icon: ari,
            appearance: at,
            width: 38,
            height: 36,
            allowGrowX: !0,
            allowGrowY: !1,
            toolTipText: f.tr(tot)
        });
    et.objid = hgi;
    d = (new qx.ui.form.RadioButton).set({
        icon: bur,
        appearance: at,
        width: 38,
        height: 36,
        allowGrowX: !0,
        allowGrowY: !1,
        toolTipText: f.tr(sst)
    });
    d.objid = sot;
    g = (new qx.ui.form.RadioButton).set({
        icon: esi,
        appearance: at,
        allowGrowX: !0,
        allowGrowY: !1,
        width: 38,
        height: 36,
        toolTipText: f.tr(pst)
    });
    g.objid = kou;
    r.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    });
    r.add(et);
    r.add(d);
    r.add(g);
    r.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    });
    k.add((new qx.ui.basic.Label).set({
        value: fir,
        alignX: t,
        alignY: b,
        marginTop: 3
    }));
    k.add(r);
    var r = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            innerDecorator: it
        }),
        ht = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.Basic).set({}),
            innerDecorator: li
        }),
        o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                alignY: n
            }),
            paddingRight: 20,
            alignY: n,
            marginTop: 1,
            width: 522
        }),
        nt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 4
            })
        }),
        h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 12
            }),
            alignY: n,
            allowGrowY: !0
        }),
        ot = (new qx.ui.form.RadioButton).set({
            height: 36,
            allowGrowX: !0,
            allowGrowY: !1,
            appearance: at,
            label: f.tr(lei),
            alignY: n,
            marginRight: 8,
            visibility: s
        });
    ot.objid = hor;
    c = (new qx.ui.form.RadioButton).set({
        width: 38,
        height: 36,
        allowGrowX: !0,
        allowGrowY: !1,
        appearance: at,
        icon: we
    });
    c.objid = ueu;
    l = (new qx.ui.form.RadioButton).set({
        width: 38,
        height: 36,
        allowGrowX: !0,
        allowGrowY: !1,
        appearance: at,
        icon: th
    });
    l.objid = bgt;
    a = (new qx.ui.form.RadioButton).set({
        width: 38,
        height: 36,
        appearance: at,
        icon: gs
    });
    a.objid = ati;
    h.add(ot);
    h.add(c);
    h.add(l);
    h.add(a);
    nt.add((new qx.ui.basic.Label).set({
        value: ecr,
        alignX: t
    }));
    nt.add(h);
    var h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 4
            })
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 12
            }),
            alignY: n,
            allowGrowY: !1
        }),
        c = (new qx.ui.form.RadioButton).set({
            height: 36,
            allowGrowX: !0,
            allowGrowY: !1,
            appearance: at,
            alignY: n,
            label: f.tr(dbr),
            marginRight: 8,
            visibility: s
        });
    return c.objid = kct, l = (new qx.ui.form.RadioButton).set({
        width: 38,
        height: 36,
        allowGrowX: !0,
        allowGrowY: !1,
        appearance: at,
        icon: ltr,
        toolTipText: f.tr(tuu)
    }), l.objid = tbr, a = (new qx.ui.form.RadioButton).set({
        width: 38,
        height: 36,
        allowGrowX: !0,
        allowGrowY: !1,
        appearance: at,
        icon: ofr,
        toolTipText: f.tr(gwr)
    }), a.objid = bsi, tt = (new qx.ui.form.RadioButton).set({
        width: 38,
        height: 36,
        allowGrowX: !0,
        allowGrowY: !1,
        appearance: at,
        icon: bgi,
        toolTipText: f.tr(pft)
    }), tt.objid = poi, e.add(c), e.add(l), e.add(a), e.add(tt), h.add((new qx.ui.basic.Label).set({
        value: crt,
        alignX: t
    })), h.add(e), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 4
        })
    }), c = (new qx.ui.form.RadioButton).set({
        allowGrowX: !0,
        allowGrowY: !1,
        appearance: at,
        icon: sh,
        width: 38,
        height: 36,
        toolTipText: f.tr(rnr)
    }), c.objid = okt, e.add((new qx.ui.basic.Label).set({
        value: ult,
        alignX: t
    })), e.add(c), o.add((new qx.ui.core.Spacer).set({
        allowShrinkY: !1,
        allowShrinkX: !1,
        height: null,
        width: null
    }), {
        flex: 1
    }), o.add(nt), o.add((new qx.ui.basic.Image).set({
        source: fl,
        alignY: b,
        width: 4,
        height: 34,
        marginLeft: 14,
        marginRight: 16,
        scale: !0,
        marginBottom: 1
    })), o.add(h), o.add((new qx.ui.basic.Image).set({
        source: fl,
        alignY: b,
        width: 4,
        height: 34,
        marginLeft: 14,
        marginRight: 16,
        scale: !0,
        marginBottom: 1
    })), o.add(e), o.add((new qx.ui.core.Spacer).set({
        height: null,
        allowShrinkY: !1,
        allowShrinkX: !1
    }), {
        flex: 1
    }), r.add(ht, {
        left: 2,
        right: 2,
        top: 21,
        bottom: 5
    }), r.add(o), p.add(k), p.add(r), y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        marginTop: 6
    }), r = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({}),
        width: 220,
        maxWidth: 220,
        paddingTop: 6,
        paddingLeft: 4,
        paddingRight: 4,
        paddingBottom: 3,
        innerDecorator: gf
    }), r.objid = bwr, rt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        decorator: ii
    }), ut = (new qx.ui.basic.Label).set({
        value: anr,
        font: st,
        textColor: u,
        textAlign: t,
        rich: !0,
        allowGrowX: !0
    }), ut.objid = esu, rt.add(ut, {
        flex: 1
    }), r.add(rt), ft = (new qx.ui.tabview.TabView).set({
        barPosition: w,
        paddingTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        paddingBottom: 3,
        contentPaddingBottom: 8,
        contentPaddingLeft: 4,
        contentPaddingRight: 4,
        contentPaddingTop: 4
    }), ft.objid = arr, y.add(r), y.add(ft, {
        flex: 1
    }), v.add(p), v.add(y, {
        flex: 1
    }), v
}

function ll_arsenal_noinfo_window(n) {
    var i = n ? n : new qx.ui.container.Composite,
        r;
    return i.set({
        layout: (new qx.ui.layout.VBox).set({}),
        backgroundColor: eni
    }), r = (new qx.ui.basic.Label).set({
        textColor: yc,
        alignX: t,
        marginTop: 130,
        value: fe
    }), r.objid = cht, i.add(r), i
}

function ll_arsenal_requirements_window(r) {
    var a = r ? r : new qx.ui.container.Composite,
        h, b, k, f, d, g, e, nt, l, tt;
    a.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 512,
        maxWidth: 512,
        allowGrowX: !1,
        allowShrinkX: !1,
        allowShrinkY: !1
    });
    var y = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            innerDecorator: wi
        }),
        it = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            decorator: yi,
            width: 506,
            maxWidth: 506
        }),
        p = (new qx.ui.container.Scroll).set({
            minHeight: 224,
            width: 502,
            height: 224
        });
    p.objid = fr;
    var o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 4
            }),
            paddingLeft: 10
        }),
        w = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({}),
            marginTop: 2
        }),
        rt = (new qx.ui.basic.Image).set({
            width: 109,
            height: 106,
            scale: !0,
            marginTop: 32,
            marginLeft: 2,
            visibility: v
        });
    return rt.objid = bwt, h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        }),
        marginLeft: 3,
        minWidth: 100,
        width: 107,
        marginTop: 3
    }), b = (new qx.ui.basic.Label).set({
        minWidth: 100,
        width: 100,
        textAlign: t,
        textColor: c,
        font: tit
    }), b.objid = wvi, k = (new qx.ui.basic.Label).set({
        minWidth: 100,
        width: 100,
        textAlign: t,
        textColor: c,
        font: tit
    }), k.objid = cvr, h.add(b), h.add(k), e.add((new qx.ui.basic.Image).set({
        source: oht,
        width: 118,
        height: 144
    })), e.add(rt), e.add(h), w.add(f), w.add(e), f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        })
    }), f.objid = slr, d = (new qx.ui.basic.Label).set({
        font: i,
        width: 120,
        textColor: u
    }), d.objid = wdt, g = (new qx.ui.basic.Label).set({
        value: cii,
        font: i,
        textColor: u
    }), g.objid = nni, f.add(d), f.add((new qx.ui.basic.Image).set({
        source: iv,
        marginLeft: 10
    })), f.add(g), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), e.objid = od, nt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        marginTop: 20,
        decorator: li
    }), nt.objid = fp, o.add(w), o.add(f), o.add(e), o.add(nt), p.add(o), it.add(p, {
        top: 0,
        bottom: 0
    }), l = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        visibility: s
    }), tt = (new qx.ui.basic.Label).set({
        value: pi,
        alignX: t,
        allowGrowX: !0,
        appearance: ur
    }), tt.objid = yt, l.add((new qx.ui.basic.Image).set({
        source: gi,
        width: 510
    })), l.add(tt), y.add(it, {
        bottom: 2,
        left: 2,
        top: 4
    }), y.add(l), a.add(y, {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }), a
}

function ll_arsenal_researchCost_window(t) {
    var o = qx.core.Init.getApplication(),
        u = t ? t : new qx.ui.container.Composite,
        i, f, e;
    return u.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 10
        })
    }), i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        })
    }), f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), f.objid = od, e = (new webfrontend.ui.SoundButton).set({
        label: o.tr(nor),
        allowGrowX: !1,
        allowGrowY: !1,
        alignX: r
    }), e.objid = af, i.add(f, {
        flex: 1
    }), i.add(e), u.add(i), u
}

function ll_arsenal_upgrade_window(n) {
    var o = n ? n : new qx.ui.container.Composite,
        f, v, y, i, e, p;
    o.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 512,
        maxWidth: 512,
        allowShrinkX: !1,
        allowGrowX: !1,
        allowShrinkY: !1
    });
    var s = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            innerDecorator: wi
        }),
        w = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            width: 506,
            maxWidth: 506,
            height: 50,
            decorator: yi
        }),
        h = (new qx.ui.container.Scroll).set({
            width: 502,
            minHeight: 200
        });
    h.objid = fr;
    var c = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            paddingLeft: 10,
            paddingRight: 10
        }),
        l = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            paddingLeft: 4,
            paddingTop: 5
        }),
        i = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 4
            })
        }),
        b = (new qx.ui.basic.Label).set({
            value: lwt,
            font: st,
            textColor: u,
            paddingLeft: 3,
            paddingTop: 0
        });
    b.objid = feu;
    f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Basic).set({}),
        marginTop: 2,
        decorator: bet,
        paddingTop: 1,
        paddingLeft: 1,
        paddingBottom: 1,
        paddingRight: 1
    });
    v = (new qx.ui.basic.Image).set({
        source: bi
    });
    v.objid = ir;
    f.add(v, {});
    y = (new qx.ui.basic.Label).set({
        value: lr,
        width: 190,
        rich: !0,
        paddingLeft: 4,
        font: a,
        textColor: u
    });
    y.objid = ar;
    i.add(b);
    i.add(f);
    i.add(y);
    var k = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            paddingTop: 24
        }),
        f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            marginRight: 10,
            alignX: r
        }),
        d = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        });
    return d.objid = gcr, f.add(d), k.add(f), l.add(i), l.add(k), i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        marginTop: 20,
        decorator: li
    }), i.objid = fp, c.add(l), c.add(i), h.add(c), w.add(h, {
        bottom: 0,
        top: 0
    }), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), p = (new qx.ui.basic.Label).set({
        value: pi,
        alignX: t,
        appearance: ur
    }), p.objid = yt, e.add((new qx.ui.basic.Image).set({
        source: gi
    })), e.add(p), s.add(w, {
        bottom: 2,
        left: 2,
        top: 28
    }), s.add(e), o.add(s, {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }), o
}

function ll_bar_notifications(n) {
    var t = n ? n : new qx.ui.container.Composite,
        i, r;
    return t.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        visibility: v
    }), i = (new qx.ui.container.Scroll).set({
        scrollbarX: fi,
        scrollbarY: bbr,
        maxWidth: 120
    }), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        }),
        decorator: ehi
    }), r.objid = vyi, i.add(r), t.add((new qx.ui.basic.Image).set({
        source: nuu
    }), {
        left: 0,
        top: 0
    }), t.add((new qx.ui.basic.Image).set({
        source: obi,
        allowGrowY: !0,
        allowShrinkY: !0,
        scale: !0
    }), {
        left: 0,
        top: 12,
        bottom: 13
    }), t.add((new qx.ui.basic.Image).set({
        source: teu
    }), {
        left: 0,
        bottom: 0
    }), t.add(i, {
        top: 12,
        bottom: 13,
        left: 0,
        right: 0
    }), t
}

function ll_bar_options(n) {
    var u = qx.core.Init.getApplication(),
        f = n ? n : new qx.ui.container.Composite,
        t, h, e, c, o, i, s, r;
    return f.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        allowGrowX: !1,
        width: 0,
        minWidth: null,
        minHeight: 85
    }), t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 1
        })
    }), h = (new qx.ui.basic.Image).set({
        source: ocr,
        cursor: p
    }), h.objid = ner, e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5
        }),
        marginLeft: 2
    }), c = (new qx.ui.basic.Label).set({
        value: u.tr(dii),
        textColor: ct,
        rich: !0,
        appearance: d,
        cursor: p,
        font: pt
    }), c.objid = keu, i = (new qx.ui.basic.Label).set({
        value: u.tr(wtu),
        textColor: ct,
        rich: !0,
        appearance: d,
        cursor: p,
        font: pt
    }), i.objid = eii, e.add(c), e.add(i), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5
        }),
        marginLeft: 2
    }), i = (new qx.ui.basic.Label).set({
        value: u.tr(ffi),
        textColor: ct,
        rich: !0,
        appearance: d,
        cursor: p,
        font: pt,
        maxWidth: 75
    }), i.objid = lvi, r = (new qx.ui.basic.Label).set({
        value: u.tr(bar),
        textColor: ct,
        rich: !0,
        appearance: d,
        cursor: p,
        font: pt
    }), r.objid = eeu, o.add(i), o.add(r), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5
        }),
        marginLeft: 2
    }), r = (new qx.ui.basic.Label).set({
        value: u.tr(hfu),
        textColor: ct,
        rich: !0,
        appearance: d,
        cursor: p,
        font: pt
    }), r.objid = dft, s.add(r), s.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), t.add(h), t.add(e), t.add(o), t.add(s), f.add((new qx.ui.basic.Image).set({
        source: fwr,
        width: 122,
        height: 9
    }), {
        left: 0,
        top: 0
    }), f.add((new qx.ui.basic.Image).set({
        source: dri,
        scale: !0,
        width: 122,
        allowGrowY: !0
    }), {
        left: 0,
        top: 9,
        bottom: 0
    }), f.add(t, {
        left: 2,
        top: 2
    }), f
}

function ll_bar_server(n) {
    var o = qx.core.Init.getApplication(),
        r = n ? n : new qx.ui.container.Composite,
        t, u, f, e, i;
    return r.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        allowGrowX: !1
    }), t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    }), i = (new qx.ui.basic.Label).set({
        value: ew,
        width: 100,
        textColor: ct,
        font: pt,
        toolTipText: ew
    }), i.objid = tn, u = (new qx.ui.basic.Label).set({
        value: wc,
        width: 100,
        textColor: ct,
        font: pt,
        toolTipText: wc
    }), u.objid = knt, f = (new qx.ui.basic.Label).set({
        value: odi,
        textColor: ct,
        font: pt
    }), f.objid = dr, e = (new qx.ui.basic.Label).set({
        value: art,
        textColor: ct,
        font: pt,
        fixedContentSize: !0,
        width: 100,
        height: 14
    }), e.objid = uii, t.add((new qx.ui.basic.Label).set({
        value: o.tr(wot),
        textColor: ct,
        font: pt
    })), t.add(i), t.add(u), t.add(f), t.add(e), i = (new qx.ui.basic.Label).set({
        value: tii,
        textColor: ct,
        font: pt,
        fixedContentSize: !0,
        width: 40,
        height: 14
    }), i.objid = tui, r.add((new qx.ui.basic.Image).set({
        source: dki,
        width: 122,
        height: 73,
        scale: !0,
        allowGrowX: !0
    }), {}), r.add(t, {
        left: 5
    }), r.add(i, {
        right: 15
    }), r
}

function ll_base_navigation_bar(n) {
    var i = n ? n : new qx.ui.container.Composite,
        u, t;
    return i.set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: r
        }),
        allowShrinkY: !0,
        allowGrowY: !0,
        maxWidth: 128,
        width: 128
    }), u = (new qx.ui.container.Scroll).set({
        allowGrowX: !0,
        allowShrinkX: !0,
        allowShrinkY: !0,
        allowGrowY: !0,
        width: 128,
        maxWidth: 128,
        decorator: rc
    }), u.objid = va, t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 4,
            alignX: r
        }),
        allowGrowX: !0,
        allowShrinkX: !0,
        allowShrinkY: !0,
        allowGrowY: !0,
        paddingTop: 4
    }), t.objid = vv, u.add(t), t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 4,
            alignX: r
        }),
        allowGrowX: !0,
        allowShrinkX: !0,
        allowShrinkY: !0,
        allowGrowY: !0,
        paddingTop: 4,
        width: 128,
        maxWidth: 128,
        decorator: rc
    }), t.objid = ooi, i.add(u), i.add(t), i.add((new qx.ui.basic.Image).set({
        maxWidth: 128,
        maxHeight: 15,
        width: 128,
        height: 15,
        decorator: cnt
    })), i
}

function ll_base_navigation_bar_item(t) {
    var e = t ? t : new qx.ui.container.Composite,
        s, r, h, c, l, a, v, y;
    e.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        height: 51,
        width: 115,
        allowShrinkX: !0,
        maxWidth: 124,
        maxHeight: 51
    });
    var o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 2
            }),
            width: 96,
            height: 42
        }),
        f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                alignY: n
            })
        }),
        p = (new qx.ui.basic.Image).set({
            width: 22,
            height: 22,
            alignY: w,
            source: kbi
        });
    return p.objid = fit, s = (new qx.ui.basic.Label).set({
        alignY: n,
        textColor: u,
        font: i,
        marginRight: 3,
        height: 22,
        maxHeight: 22,
        value: rni,
        maxWidth: 96
    }), s.objid = est, f.add(p), f.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    })), f.add(s), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 1
        }),
        focusable: !0
    }), h = (new qx.ui.basic.Image).set({
        source: fb,
        width: 15,
        height: 15,
        scale: !0
    }), h.objid = ghi, c = (new qx.ui.basic.Image).set({
        width: 15,
        height: 15,
        source: he,
        scale: !0
    }), c.objid = suu, l = (new qx.ui.basic.Image).set({
        width: 15,
        height: 15,
        source: ku,
        scale: !0
    }), l.objid = nnr, a = (new qx.ui.basic.Image).set({
        height: 15,
        width: 15,
        source: gg,
        scale: !0
    }), a.objid = bot, v = (new qx.ui.basic.Image).set({
        width: 15,
        height: 15,
        source: bw,
        scale: !0
    }), v.objid = eei, y = (new qx.ui.basic.Image).set({
        width: 15,
        height: 15,
        source: rp,
        scale: !0
    }), y.objid = nbi, r.add(h), r.add(c), r.add(l), r.add(a), r.add(v), r.add(y), o.add(f), o.add(r), e.add(o, {
        top: 2,
        left: 2,
        right: 2
    }), e
}

function ll_base_navigation_bar_item_tt(t) {
    var r = qx.core.Init.getApplication(),
        i = t ? t : new qx.ui.container.Composite,
        p, w, h, b, c, k, l, d, u, f, e, o, a, v, y, s, g;
    return i.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 4
        }),
        textColor: nw
    }), p = (new qx.ui.basic.Label).set({
        value: shi,
        rich: !0
    }), p.objid = sor, w = (new qx.ui.basic.Label).set({
        value: r.tr(apr),
        rich: !0
    }), w.objid = epi, h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5
        })
    }), b = (new qx.ui.basic.Label).set({
        value: dli,
        rich: !0
    }), b.objid = osi, h.add((new qx.ui.basic.Image).set({
        source: he,
        width: 18,
        height: 18,
        scale: !0
    })), h.add(b), c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5
        })
    }), k = (new qx.ui.basic.Label).set({
        value: uki,
        rich: !0
    }), k.objid = kvr, c.add((new qx.ui.basic.Image).set({
        source: ro,
        width: 18,
        height: 18,
        scale: !0
    })), c.add(k), l = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5
        })
    }), d = (new qx.ui.basic.Label).set({
        value: fet,
        rich: !0
    }), d.objid = fou, l.add((new qx.ui.basic.Image).set({
        source: ku,
        width: 18,
        height: 18,
        scale: !0
    })), l.add(d), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5
        })
    }), u.objid = iar, u.add((new qx.ui.basic.Image).set({
        source: lbt,
        width: 18,
        height: 18,
        scale: !0
    })), u.add((new qx.ui.basic.Label).set({
        value: r.tr(uct),
        rich: !0
    })), f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5
        })
    }), f.objid = nft, f.add((new qx.ui.basic.Image).set({
        source: gg,
        width: 18,
        height: 18,
        scale: !0
    })), f.add((new qx.ui.basic.Label).set({
        value: r.tr(gd),
        rich: !0
    })), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5
        })
    }), e.objid = irr, e.add((new qx.ui.basic.Image).set({
        source: bw,
        width: 18,
        height: 18,
        scale: !0
    })), e.add((new qx.ui.basic.Label).set({
        value: r.tr(hru),
        rich: !0
    })), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5
        })
    }), o.objid = cet, o.add((new qx.ui.basic.Image).set({
        source: rp,
        width: 18,
        height: 18,
        scale: !0
    })), o.add((new qx.ui.basic.Label).set({
        value: r.tr(yit),
        rich: !0
    })), a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5
        })
    }), a.objid = ifu, a.add((new qx.ui.basic.Image).set({
        source: ku,
        width: 18,
        height: 18,
        scale: !0
    })), v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5
        })
    }), v.objid = rtr, v.add((new qx.ui.basic.Image).set({
        source: he,
        width: 18,
        height: 18,
        scale: !0
    })), y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5
        })
    }), y.objid = vrr, y.add((new qx.ui.basic.Image).set({
        source: ro,
        width: 18,
        height: 18,
        scale: !0
    })), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5
        })
    }), s.objid = nlt, g = (new qx.ui.basic.Label).set({
        value: eou,
        rich: !0
    }), g.objid = tnt, s.add((new qx.ui.basic.Image).set({
        source: fb,
        width: 18,
        height: 18,
        scale: !0
    })), s.add(g), i.add(p), i.add(w), i.add(h), i.add(c), i.add(l), i.add(u), i.add(f), i.add(e), i.add(o), i.add(a), i.add(v), i.add(y), i.add(s), i
}

function ll_basearea_info(u) {
    var ft = qx.core.Init.getApplication(),
        d = u ? u : new qx.ui.container.Composite,
        ut, ot, at, et, vt, yt, pt, a, wt, c, y, b, bt, kt, e, tt, it, s, g, h, k, rt, dt, ni, ti, ii;
    return d.set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), ut = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        visibility: v
    }), ut.objid = srt, ot = (new webfrontend.ui.SoundButton).set({
        icon: cd,
        appearance: ht,
        height: 30,
        width: 31,
        allowGrowY: !1,
        marginTop: 0,
        toolTipText: bou,
        enabled: !1
    }), ot.objid = ygi, at = (new qx.ui.basic.Image).set({
        source: iru
    }), at.objid = lcr, ut.add(ot, {
        left: 4,
        top: 5
    }), ut.add(at, {
        left: 0,
        top: 0
    }), et = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2,
            alignY: w
        }),
        visibility: v
    }), et.objid = fti, a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2,
            alignY: n
        }),
        decorator: nr,
        paddingLeft: 1,
        paddingRight: 1,
        paddingTop: 1
    }), vt = (new webfrontend.ui.SoundButton).set({
        icon: lk,
        appearance: ht,
        height: 20,
        width: 20,
        toolTipText: ft.tr(cgr),
        enabled: !1,
        marginTop: 1
    }), vt.objid = lct, yt = (new qx.ui.basic.Label).set({
        textColor: uwi,
        font: l,
        fixedContentSize: !0,
        width: 150,
        height: 19,
        textAlign: t,
        cursor: p,
        value: rsi
    }), yt.objid = eg, pt = (new webfrontend.ui.SoundButton).set({
        icon: ae,
        appearance: ht,
        height: 20,
        width: 20,
        marginTop: 1,
        toolTipText: ft.tr(car),
        enabled: !1
    }), pt.objid = vkt, a.add(vt), a.add(yt), a.add(pt), et.add(a), a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            alignX: t
        })
    }), c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        toolTipText: ft.tr(vuu)
    }), c.objid = yeu, e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        height: 36
    }), wt = (new qx.ui.basic.Image).set({
        source: shr,
        allowGrowX: !0,
        scale: !0
    }), wt.objid = hei, y = (new qx.ui.basic.Image).set({
        source: yii
    }), y.objid = clt, b = (new qx.ui.basic.Label).set({
        value: pwi,
        textAlign: t,
        width: 130,
        height: 17,
        textColor: pd,
        font: i,
        zIndex: 11,
        marginRight: 9,
        fixedContentSize: !0
    }), b.objid = gvt, k = (new qx.ui.basic.Image).set({
        source: der
    }), k.objid = eyr, e.add(wt, {
        left: 18,
        top: 7,
        right: 9,
        bottom: 0
    }), e.add(y, {
        left: 0,
        top: 0
    }), e.add(b, {
        left: 34,
        top: 11
    }), e.add(k, {
        right: 0,
        top: 7
    }), c.add(e), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            alignX: o
        })
    }), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        height: 38,
        paddingLeft: 15,
        paddingRight: 15,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            label: gt
        }),
        decorator: aiu
    }), s.objid = iur, y = (new qx.ui.basic.Image).set({
        source: fui,
        marginTop: 1,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            label: gt
        })
    }), y.objid = oei, b = (new qx.ui.basic.Label).set({
        value: os,
        font: st,
        textColor: pd,
        textAlign: t,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            label: gt
        })
    }), b.objid = yht, s.add(y), s.add(b), e.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), e.add(s), e.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), a.add(c), a.add(e), c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            alignX: r
        })
    }), c.objid = kii, e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        decorator: nr,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            label: nrt,
            rich: !0
        }),
        visibility: v,
        marginRight: 5,
        paddingRight: 2
    }), e.objid = gur, tt = (new qx.ui.basic.Label).set({
        value: ibr,
        font: i,
        textColor: ct,
        fixedContentSize: !0,
        width: 99,
        height: 15,
        textAlign: r
    }), tt.objid = lnt, it = (new qx.ui.basic.Label).set({
        value: bdr,
        font: l,
        textColor: lt,
        fixedContentSize: !0,
        width: 40,
        height: 19,
        textAlign: o,
        marginLeft: 3
    }), it.objid = psr, e.add(tt), e.add(it), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2,
            alignY: n
        }),
        marginRight: 5,
        decorator: nr,
        paddingRight: 2
    }), s.objid = aft, y = (new qx.ui.basic.Image).set({
        source: dtu,
        toolTipText: lc,
        width: 28,
        height: 28
    }), y.objid = ldr, b = (new qx.ui.basic.Label).set({
        textColor: lt,
        font: l,
        fixedContentSize: !0,
        width: 55,
        height: 19,
        textAlign: o,
        toolTipText: lc,
        rich: !0,
        wrap: !1,
        value: vfu
    }), b.objid = owr, s.add(y), s.add(b), g = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2,
            alignY: n
        }),
        marginRight: 5,
        decorator: nr,
        paddingRight: 2,
        visibility: v
    }), g.objid = ukr, bt = (new qx.ui.basic.Image).set({
        source: iv,
        toolTipText: dp,
        width: 28,
        height: 28
    }), bt.objid = pti, kt = (new qx.ui.basic.Label).set({
        textColor: lt,
        font: l,
        fixedContentSize: !0,
        width: 55,
        height: 19,
        textAlign: o,
        toolTipText: dp,
        rich: !0,
        wrap: !1,
        allowGrowX: !0,
        value: rdr
    }), kt.objid = tdt, g.add(bt), g.add(kt), h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2,
            alignY: n
        }),
        marginRight: 5,
        decorator: nr,
        paddingRight: 2
    }), h.objid = etu, k = (new qx.ui.basic.Image).set({
        source: hvr,
        toolTipText: btt,
        width: 28,
        height: 28
    }), k.objid = nfi, rt = (new qx.ui.basic.Label).set({
        textColor: lt,
        font: l,
        fixedContentSize: !0,
        width: 55,
        height: 19,
        textAlign: o,
        toolTipText: btt,
        rich: !0,
        wrap: !1,
        allowGrowX: !0,
        value: bhr
    }), rt.objid = eb, h.add(k), h.add(rt), c.add(e), c.add(s), c.add(g), c.add(h), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        height: 30,
        paddingLeft: 15,
        paddingRight: 15,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            label: gt,
            rich: !0,
            maxWidth: 400
        }),
        decorator: not
    }), e.objid = hdt, tt = (new qx.ui.basic.Label).set({
        value: os,
        font: l,
        textColor: gy,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            label: gt,
            rich: !0,
            maxWidth: 400
        })
    }), tt.objid = ait, it = (new qx.ui.basic.Label).set({
        value: os,
        font: l,
        textColor: gy,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            label: gt,
            rich: !0,
            maxWidth: 400
        })
    }), it.objid = gci, e.add(tt), e.add(it), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6
        }),
        decorator: nr
    }), s.objid = cw, g = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6
        })
    }), g.add((new qx.ui.basic.Label).set({
        value: ft.tr(uci),
        rich: !0,
        textColor: nt,
        alignY: n
    })), h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), k = (new qx.ui.basic.Image).set({
        source: cu
    }), k.objid = plt, rt = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        textAlign: o,
        width: 30,
        value: rd
    }), rt.objid = rk, dt = (new qx.ui.basic.Image).set({
        source: su
    }), dt.objid = twi, ni = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        textAlign: o,
        width: 30,
        value: an
    }), ni.objid = gk, ti = (new qx.ui.basic.Image).set({
        source: eu
    }), ti.objid = ltu, ii = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        textAlign: o,
        width: 30,
        value: gb
    }), ii.objid = nv, h.add(k, {
        left: 0,
        top: 0
    }), h.add(rt, {
        left: 22,
        top: 5
    }), h.add(dt, {
        left: 54,
        top: 0
    }), h.add(ni, {
        left: 78,
        top: 5
    }), h.add(ti, {
        left: 112,
        top: 0
    }), h.add(ii, {
        left: 140,
        top: 5
    }), s.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 6
    })), s.add(g), s.add(h), d.add(ut, {
        top: 0,
        right: 240
    }), d.add(et, {
        top: 5,
        right: 32
    }), d.add(a, {
        left: 0,
        top: 38,
        right: 0
    }), d.add(c, {
        top: 38,
        right: 0
    }), d.add(e, {
        top: 72,
        left: 5
    }), d.add(s, {
        top: 40,
        left: 5
    }), d
}

function ll_basicWaitingScreeen(i) {
    var r = i ? i : new qx.ui.container.Composite;
    return r.set({
        layout: (new qx.ui.layout.VBox).set({
            alignY: n,
            alignX: t
        })
    }), r.add((new qx.ui.basic.Image).set({
        source: foi,
        width: 48,
        height: 48
    })), r
}

function ll_building_details_view(r) {
    var v = qx.core.Init.getApplication(),
        w = r ? r : new qx.ui.container.Composite,
        nt, tt, b, a, p, k, rt, y, ut, et, ot, st, ht, ct, s, u, o, lt, f, at;
    w.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 4
        }),
        marginTop: 5,
        marginLeft: 15,
        marginBottom: 10,
        width: 500
    });
    var d = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 6
            })
        }),
        g = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({})
        }),
        vt = (new qx.ui.basic.Image).set({
            width: 109,
            height: 106,
            marginBottom: 4,
            scale: !0,
            source: ter
        });
    vt.objid = agt;
    g.add((new qx.ui.basic.Image).set({
        source: rnt
    }));
    g.add(vt);
    s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        decorator: it
    });
    nt = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: e,
        value: oli
    });
    nt.objid = ye;
    tt = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: e,
        font: ft,
        textAlign: t,
        allowGrowX: !0,
        value: pb
    });
    tt.objid = vit;
    p = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: e,
        textAlign: t,
        allowGrowX: !0,
        value: uc
    });
    p.objid = sri;
    s.add(nt);
    s.add((new qx.ui.core.Spacer).set({
        height: 10
    }));
    s.add(tt);
    s.add(p);
    d.add(g);
    d.add(s, {
        flex: 1
    });
    var yt = (new qx.ui.container.Scroll).set({
            width: null,
            height: null
        }),
        s = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 4
            })
        }),
        h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 2
            }),
            decorator: it
        });
    h.objid = dlr;
    var a = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                alignX: t
            })
        }),
        u = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        b = (new qx.ui.basic.Label).set({
            rich: !0,
            textColor: e,
            value: pb
        });
    b.objid = kkt;
    f = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: e,
        value: uc
    });
    f.objid = rwi;
    u.add(b);
    u.add(f);
    a.add(u);
    u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2,
            alignY: n,
            alignX: t
        }),
        marginTop: 6
    });
    u.objid = plr;
    b = (new qx.ui.basic.Label).set({
        value: v.tr(ski),
        rich: !0,
        textColor: e,
        font: l
    });
    b.objid = gfu;
    f = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: e,
        font: l,
        value: hi
    });
    f.objid = nht;
    u.add(b);
    u.add((new qx.ui.basic.Image).set({
        source: gyr,
        scale: !0,
        width: 21,
        height: 21
    }));
    u.add(f);
    h.add((new qx.ui.basic.Label).set({
        value: v.tr(eru),
        textColor: c,
        font: l,
        decorator: it,
        textAlign: t,
        allowGrowX: !0,
        marginBottom: 6
    }));
    h.add(a);
    h.add(u);
    a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6
        }),
        decorator: it
    });
    a.objid = fpt;
    p = (new qx.ui.basic.Label).set({
        textColor: e,
        font: i,
        alignY: n,
        rich: !0,
        value: uat
    });
    p.objid = olr;
    a.add((new qx.ui.basic.Image).set({
        source: vbr
    }));
    a.add(p);
    u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 6
        }),
        decorator: it
    });
    u.objid = pct;
    o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6
        })
    });
    o.objid = ger;
    f = (new qx.ui.basic.Label).set({
        textColor: e,
        font: i,
        alignY: n,
        rich: !0,
        value: vru
    });
    f.objid = cpr;
    o.add(f);
    o.add((new qx.ui.core.Spacer).set({
        width: 10
    }));
    f = (new qx.ui.basic.Label).set({
        textColor: egr,
        font: i,
        rich: !0,
        value: evr
    });
    f.objid = lsi;
    u.add(o);
    u.add(f);
    o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        decorator: it
    });
    o.objid = het;
    f = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: e,
        textAlign: t,
        allowGrowX: !0,
        value: woi
    });
    f.objid = vdt;
    k = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignY: n
        })
    });
    k.objid = ndi;
    rt = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: e,
        value: wkr
    });
    rt.objid = hbr;
    k.add(rt);
    y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignY: n
        }),
        marginBottom: 8
    });
    y.objid = riu;
    ut = (new qx.ui.basic.Label).set({
        value: v.tr(lvt),
        textColor: c,
        font: l,
        decorator: it,
        textAlign: t,
        allowGrowX: !0,
        marginBottom: 4
    });
    ut.objid = urr;
    et = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignX: t
        })
    });
    ot = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        marginBottom: 8
    });
    ot.objid = yai;
    et.add(ot);
    st = (new qx.ui.basic.Label).set({
        value: v.tr(ift),
        textColor: e,
        font: i,
        textAlign: t,
        allowGrowX: !0,
        marginBottom: 5
    });
    st.objid = otu;
    ht = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignX: t
        })
    });
    ct = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        marginBottom: 8
    });
    ct.objid = rir;
    ht.add(ct);
    y.add(ut);
    y.add(et);
    y.add(st);
    y.add(ht);
    o.add(f, {
        flex: 1
    });
    o.add(k);
    o.add(y);
    s.add(h);
    s.add(a);
    s.add(u);
    s.add(o);
    yt.add(s);
    s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6
        })
    });
    s.objid = ogi;
    var h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({})
        }),
        a = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                alignX: t
            })
        }),
        pt = (new webfrontend.ui.SoundButton).set({
            label: v.tr(la),
            icon: dtr,
            appearance: glr,
            width: 156,
            height: 34
        });
    return pt.objid = gbr, a.add(pt), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 5
        }),
        decorator: it
    }), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 3
        })
    }), o.objid = hhi, lt = (new webfrontend.gui.widgets.ResourceCostsBox).set({}), lt.objid = hbt, o.add((new qx.ui.basic.Label).set({
        value: v.tr(uot),
        width: 100,
        rich: !0,
        textColor: e,
        font: i,
        marginLeft: 3
    })), o.add(lt), f = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: e,
        font: i,
        width: 468,
        height: 40,
        value: rai
    }), f.objid = cni, at = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: e,
        font: i,
        value: usu
    }), at.objid = uei, u.add(o), u.add(f), u.add(at), h.add((new qx.ui.basic.Image).set({
        source: dfi,
        scale: !0,
        allowGrowX: !0
    }), {
        left: 0,
        right: 0
    }), h.add((new qx.ui.basic.Image).set({
        source: pwr,
        scale: !0,
        allowGrowX: !0,
        allowGrowY: !0
    }), {
        left: 0,
        top: 20,
        right: 0,
        bottom: 31
    }), h.add((new qx.ui.basic.Image).set({
        source: wki,
        scale: !0,
        allowGrowX: !0
    }), {
        left: 0,
        right: 0,
        bottom: 0
    }), h.add((new qx.ui.basic.Label).set({
        value: v.tr(la),
        appearance: ibi
    }), {
        left: 8,
        top: 2
    }), h.add(a, {
        bottom: 2,
        left: 0,
        right: 0
    }), h.add(u, {
        top: 24,
        bottom: 40,
        left: 6,
        right: 6
    }), s.add(h, {
        flex: 1
    }), w.add(d), w.add(yt, {
        flex: 1
    }), w.add(s), w
}

function ll_combatreportpopup(f) {
    var l = qx.core.Init.getApplication(),
        ei = f ? f : new qx.ui.container.Composite,
        ui, yi, pi, wi, bi, fi, ki, gi, nr, tr, ir, vi, ht, hi, kt, rr, ur, ai, fr, it, er, et, or, sr, st, hr, lr, ar, dt, v, bt, yt, li, vr, w, pt, vt, ti, at, yr, ri, gt, ut, si, pr, nt, br, kr;
    ei.set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        })
    });
    ui = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        marginBottom: 2,
        decorator: get,
        height: 71,
        width: 436,
        maxWidth: 436
    });
    ui.objid = aat;
    yi = (new qx.ui.basic.Label).set({
        textColor: u,
        font: ua,
        textAlign: t,
        allowGrowX: !0,
        value: l.tr(ay)
    });
    yi.objid = lht;
    pi = (new qx.ui.basic.Label).set({
        textColor: lt,
        font: ua,
        textAlign: t,
        allowGrowX: !0,
        value: l.tr(ay)
    });
    pi.objid = sar;
    wi = (new qx.ui.basic.Label).set({
        textColor: tt,
        font: rt,
        textAlign: t,
        allowGrowX: !0,
        visibility: s
    });
    wi.objid = esr;
    bi = (new qx.ui.basic.Label).set({
        textColor: ct,
        allowGrowX: !0,
        rich: !0,
        wrap: !1,
        textAlign: t,
        value: lgr
    });
    bi.objid = uut;
    ui.add(yi, {
        top: 10,
        left: 2,
        right: 0
    });
    ui.add(pi, {
        top: 8,
        left: 0,
        right: 0
    });
    ui.add(wi, {
        top: 40,
        left: 0,
        right: 0
    });
    ui.add(bi, {
        top: 44,
        left: 0,
        right: 0
    });
    fi = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 436,
        maxWidth: 436
    });
    fi.objid = hit;
    var et = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 2,
            marginBottom: 6,
            paddingBottom: 4
        }),
        nt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            width: 418,
            alignY: n,
            marginBottom: 12
        }),
        dr = (new qx.ui.basic.Image).set({
            source: py
        });
    dr.objid = gri;
    ki = (new qx.ui.basic.Label).set({
        font: h,
        textColor: lt,
        alignY: n,
        value: l.tr(ws)
    });
    ki.objid = cwi;
    nt.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    });
    nt.add(dr);
    nt.add(ki);
    nt.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    });
    var ii = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10
            }),
            marginBottom: 2
        }),
        oi = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 3
            }),
            width: 200
        }),
        ht = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 2
            })
        }),
        hi = (new qx.ui.basic.Label).set({
            value: ra,
            textColor: e,
            font: rt
        });
    hi.objid = yrr;
    gi = (new webfrontend.gui.widgets.PlayerLabel).set({
        textColor: ni,
        font: i,
        value: ah
    });
    gi.objid = act;
    ht.add(hi);
    ht.add(gi);
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    nr = (new webfrontend.gui.widgets.BaseLabel).set({
        font: i,
        wrap: !1,
        value: ck
    });
    nr.objid = roi;
    v.add((new qx.ui.basic.Label).set({
        textColor: e,
        font: rt,
        value: l.tr(au)
    }));
    v.add(nr);
    oi.add(ht);
    oi.add(v);
    var ht = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 3
            }),
            width: 200
        }),
        v = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 2
            })
        }),
        bt = (new qx.ui.basic.Label).set({
            value: l.tr(di),
            textColor: e,
            font: rt
        });
    bt.objid = yot;
    tr = (new webfrontend.gui.widgets.AllianceLabel).set({
        allianceId: -1,
        font: i,
        value: hw
    });
    tr.objid = cut;
    v.add(bt);
    v.add(tr);
    st = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    ir = (new webfrontend.gui.widgets.CoordinatesLabel).set({
        selectable: !0,
        value: null,
        y: -1,
        label: null,
        appearance: d,
        cursor: p,
        font: i,
        textColor: ni,
        wrap: !1
    });
    ir.objid = ypr;
    st.add((new qx.ui.basic.Label).set({
        value: l.tr(ns),
        textColor: e,
        font: rt
    }));
    st.add(ir);
    ht.add(v);
    ht.add(st);
    ii.add(oi);
    ii.add(ht);
    vi = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        }),
        innerDecorator: ci,
        contentPaddingLeft: 6,
        contentPaddingRight: 4,
        contentPaddingTop: 4,
        contentPaddingBottom: 6,
        width: 416,
        maxWidth: 416
    });
    vi.objid = egi;
    ht = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        minWidth: 0,
        width: 416
    });
    ht.objid = tyi;
    hi = (new qx.ui.basic.Label).set({
        value: l.tr(sd),
        textColor: e,
        font: k,
        textAlign: t,
        width: 416
    });
    hi.objid = fsi;
    ht.add(hi);
    vi.add(ht);
    dt = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({}),
        decorator: ci,
        height: 88,
        contentPaddingTop: 6,
        contentPaddingBottom: 8,
        maxWidth: 416
    });
    dt.objid = sgr;
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    });
    bt = (new qx.ui.basic.Label).set({
        rich: !0
    });
    bt.objid = oir;
    yt = (new qx.ui.basic.Label).set({
        rich: !0
    });
    yt.objid = gdt;
    vt = (new qx.ui.basic.Label).set({
        rich: !0
    });
    vt.objid = bst;
    v.add(bt);
    v.add(yt);
    v.add(vt);
    st = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    });
    st.objid = ypi;
    dt.add(v);
    dt.add(st);
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        marginBottom: 0,
        width: 416,
        maxWidth: 416
    });
    w = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 6
        }),
        innerDecorator: wr,
        contentPaddingTop: 2,
        contentPaddingBottom: 4,
        minWidth: null,
        width: 416,
        paddingLeft: 0
    });
    w.objid = wft;
    yt = (new qx.ui.basic.Label).set({
        value: l.tr(pp),
        alignX: t,
        marginBottom: 6,
        font: k,
        textColor: u,
        textAlign: t
    });
    yt.objid = gai;
    it = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 8
        }),
        marginTop: 4,
        paddingLeft: 6
    });
    it.objid = peu;
    ut = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 8
        }),
        marginTop: 4,
        paddingLeft: 6
    });
    ut.objid = cpi;
    at = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 4,
            alignX: r
        }),
        alignX: o,
        paddingLeft: 6
    });
    ri = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 4,
            alignX: t
        }),
        alignX: t,
        width: null
    });
    ri.objid = cit;
    gt = (new qx.ui.basic.Label).set({
        value: l.tr(hg),
        textColor: u,
        alignX: t,
        textAlign: t
    });
    gt.objid = iou;
    ri.add(gt);
    at.add((new qx.ui.core.Spacer).set({}));
    at.add((new qx.ui.basic.Label).set({
        value: l.tr(ksr),
        textColor: u,
        alignX: t,
        textAlign: t
    }));
    at.add(ri);
    at.add((new qx.ui.core.Spacer).set({}));
    ti = (new qx.ui.basic.Label).set({
        textColor: c,
        textAlign: t,
        paddingTop: 2,
        rich: !0,
        allowGrowX: !0,
        paddingLeft: 6
    });
    ti.objid = fsu;
    gt = (new qx.ui.basic.Label).set({
        value: l.tr(fo),
        alignX: t,
        textAlign: t,
        allowGrowY: !0,
        alignY: b,
        height: null,
        minHeight: null,
        width: 410,
        rich: !0
    });
    gt.objid = lot;
    w.add(yt);
    w.add(it);
    w.add(ut);
    w.add(at, {
        flex: 1
    });
    w.add(ti);
    w.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }));
    w.add(gt);
    kt = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        innerDecorator: wr,
        width: 138,
        minHeight: 81,
        maxHeight: 81,
        visibility: s,
        maxWidth: 138
    });
    kt.objid = crr;
    vt = (new qx.ui.basic.Label).set({
        value: l.tr(uv),
        font: k,
        textColor: u,
        width: 138,
        textAlign: t
    });
    vt.objid = kli;
    rr = (new qx.ui.basic.Image).set({
        source: pn,
        width: 63,
        height: 50,
        scale: !0
    });
    rr.objid = tki;
    ur = (new qx.ui.basic.Image).set({
        source: bd,
        scale: !0,
        width: 18,
        height: 18
    });
    ur.objid = geu;
    kt.add(vt);
    kt.add((new qx.ui.basic.Image).set({
        source: sb
    }), {
        top: 26,
        left: 13
    });
    kt.add(rr, {
        left: 39,
        top: 25
    });
    kt.add(ur, {
        left: 15,
        top: 56
    });
    v.add(w);
    v.add(kt);
    var w = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.VBox).set({}),
            contentPaddingTop: 4,
            contentPaddingRight: 4,
            contentPaddingBottom: 5,
            contentPaddingLeft: 4,
            innerDecorator: ci,
            width: 436,
            maxWidth: 436
        }),
        pt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        it = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 2
            })
        }),
        li = (new qx.ui.basic.Label).set({
            font: ft,
            textAlign: t,
            textColor: c,
            width: 70,
            marginTop: 2,
            value: lu
        });
    li.objid = rur;
    ai = (new qx.ui.basic.Label).set({
        value: l.tr(bki),
        font: a,
        rich: !0,
        width: 70,
        textAlign: t,
        textColor: g
    });
    ai.objid = rut;
    it.add(li);
    it.add(ai);
    ut = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 260,
        height: 28,
        marginLeft: 6,
        decorator: sk
    });
    fr = (new webfrontend.gui.widgets.ColouredHPBar).set({
        width: 238
    });
    fr.objid = vhi;
    ut.add(fr, {
        top: -7,
        left: 11
    });
    at = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        })
    });
    ti = (new qx.ui.basic.Label).set({
        font: ft,
        textAlign: t,
        textColor: wt,
        width: 70,
        marginTop: 2,
        value: ng
    });
    ti.objid = det;
    at.add(ti);
    at.add((new qx.ui.basic.Label).set({
        value: l.tr(yp),
        font: a,
        textColor: g,
        width: 70,
        textAlign: t
    }));
    pt.add(it);
    pt.add(ut);
    pt.add(at);
    it = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Flow).set({
            spacingX: 10
        }),
        marginTop: 4,
        marginRight: 4,
        marginBottom: 4,
        marginLeft: 4
    });
    er = (new qx.ui.basic.Atom).set({
        label: l.tr(dh),
        icon: ko,
        gap: 2,
        font: a,
        textColor: g,
        iconPosition: ot,
        rich: !0
    });
    er.objid = adi;
    si = (new qx.ui.basic.Atom).set({
        label: l.tr(ya),
        icon: na,
        gap: 2,
        font: a,
        textColor: g,
        iconPosition: ot,
        rich: !0
    });
    si.objid = but;
    it.add((new qx.ui.basic.Atom).set({
        label: l.tr(kf),
        icon: wh,
        gap: 2,
        font: a,
        textColor: g,
        iconPosition: ot,
        rich: !0
    }));
    it.add(er);
    it.add((new qx.ui.basic.Atom).set({
        label: l.tr(cr),
        icon: ks,
        gap: 2,
        font: a,
        textColor: g,
        iconPosition: ot,
        rich: !0
    }));
    it.add(si);
    it.add((new qx.ui.basic.Atom).set({
        label: l.tr(ch),
        icon: ds,
        gap: 2,
        font: a,
        textColor: g,
        iconPosition: ot,
        rich: !0
    }));
    w.add(pt);
    w.add(it);
    et.add(nt);
    et.add(ii);
    et.add(vi);
    et.add(dt);
    et.add(v);
    et.add(w);
    fi.add((new qx.ui.basic.Image).set({
        source: pl
    }), {});
    fi.add((new qx.ui.core.Widget).set({
        decorator: kb,
        allowGrowX: !0,
        width: 438
    }), {
        top: 34,
        bottom: 18
    });
    fi.add((new qx.ui.basic.Image).set({
        source: ov,
        scale: !0
    }), {
        bottom: 0
    });
    fi.add(et, {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    });
    et = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 436,
        maxWidth: 436
    });
    et.objid = tat;
    var nt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 2,
            marginBottom: 6
        }),
        ii = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            width: 418,
            alignY: n,
            marginBottom: 12
        }),
        gr = (new qx.ui.basic.Image).set({
            source: py
        });
    gr.objid = dwt;
    or = (new qx.ui.basic.Label).set({
        font: h,
        textColor: lt,
        alignY: n,
        value: l.tr(ln)
    });
    or.objid = ugi;
    ii.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    });
    ii.add(gr);
    ii.add(or);
    ii.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    });
    var oi = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10
            }),
            marginBottom: 2
        }),
        ht = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 3
            }),
            width: 200
        }),
        v = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 2
            })
        }),
        bt = (new qx.ui.basic.Label).set({
            value: ra,
            textColor: e,
            font: rt
        });
    bt.objid = ypt;
    sr = (new webfrontend.gui.widgets.PlayerLabel).set({
        textColor: ni,
        font: i,
        value: ah
    });
    sr.objid = fnt;
    v.add(bt);
    v.add(sr);
    st = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    hr = (new webfrontend.gui.widgets.BaseLabel).set({
        font: i,
        wrap: !1,
        value: ck
    });
    hr.objid = fgt;
    st.add((new qx.ui.basic.Label).set({
        textColor: e,
        font: rt,
        value: l.tr(au)
    }));
    st.add(hr);
    ht.add(v);
    ht.add(st);
    var v = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 3
            }),
            width: 200
        }),
        st = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 2
            })
        }),
        yt = (new qx.ui.basic.Label).set({
            value: l.tr(di),
            textColor: e,
            font: rt
        });
    yt.objid = gvi;
    lr = (new webfrontend.gui.widgets.AllianceLabel).set({
        allianceId: -1,
        font: i,
        value: hw
    });
    lr.objid = hnr;
    st.add(yt);
    st.add(lr);
    pt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    ar = (new webfrontend.gui.widgets.CoordinatesLabel).set({
        selectable: !0,
        value: null,
        y: -1,
        label: null,
        appearance: d,
        cursor: p,
        font: i,
        textColor: ni,
        wrap: !1
    });
    ar.objid = hvi;
    pt.add((new qx.ui.basic.Label).set({
        value: l.tr(ns),
        textColor: e,
        font: rt
    }));
    pt.add(ar);
    v.add(st);
    v.add(pt);
    oi.add(ht);
    oi.add(v);
    dt = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        }),
        innerDecorator: ci,
        contentPaddingLeft: 6,
        contentPaddingRight: 4,
        contentPaddingTop: 4,
        contentPaddingBottom: 6
    });
    dt.objid = iti;
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        })
    });
    v.objid = gar;
    bt = (new qx.ui.basic.Label).set({
        value: l.tr(sd),
        textColor: e,
        font: k
    });
    bt.objid = fbt;
    yt = (new qx.ui.basic.Label).set({
        rich: !0
    });
    yt.objid = htr;
    vt = (new qx.ui.basic.Label).set({
        rich: !0
    });
    vt.objid = aer;
    li = (new qx.ui.basic.Label).set({
        rich: !0
    });
    li.objid = hli;
    v.add(bt);
    v.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    });
    v.add(yt);
    v.add(vt);
    v.add(li);
    v.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    });
    dt.add(v);
    vr = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({}),
        decorator: ci,
        height: 88,
        contentPaddingTop: 6,
        contentPaddingBottom: 8,
        maxWidth: 416
    });
    vr.objid = gft;
    w = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 4
        }),
        contentPaddingTop: 2,
        contentPaddingBottom: 8,
        innerDecorator: ci,
        maxWidth: 416
    });
    w.objid = cwr;
    pt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 4
        })
    });
    pt.objid = vvr;
    vt = (new qx.ui.basic.Label).set({
        textColor: c,
        paddingTop: 2,
        allowGrowX: !0,
        textAlign: t,
        rich: !0
    });
    vt.objid = pkt;
    w.add((new qx.ui.basic.Label).set({
        value: l.tr(hou),
        width: 404,
        textAlign: t,
        font: y,
        textColor: u
    }));
    w.add(pt);
    w.add(vt);
    var kt = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.VBox).set({}),
            contentPaddingTop: 4,
            contentPaddingRight: 4,
            contentPaddingBottom: 5,
            contentPaddingLeft: 4,
            innerDecorator: ci,
            marginBottom: 3,
            maxWidth: 416
        }),
        it = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        ut = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 2
            })
        }),
        ai = (new qx.ui.basic.Label).set({
            font: ft,
            textAlign: t,
            textColor: c,
            width: 70,
            marginTop: 2,
            value: lu
        });
    return ai.objid = kti, ti = (new qx.ui.basic.Label).set({
        value: l.tr(gwi),
        font: a,
        rich: !0,
        width: 70,
        textAlign: t,
        textColor: g
    }), ti.objid = hat, ut.add(ai), ut.add(ti), at = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 260,
        height: 28,
        marginLeft: 6,
        decorator: sk
    }), yr = (new webfrontend.gui.widgets.ColouredHPBar).set({
        width: 238
    }), yr.objid = kft, at.add(yr, {
        top: -7,
        left: 11
    }), ri = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        })
    }), gt = (new qx.ui.basic.Label).set({
        font: ft,
        textAlign: t,
        textColor: wt,
        width: 70,
        marginTop: 2,
        value: ng
    }), gt.objid = cct, ri.add(gt), ri.add((new qx.ui.basic.Label).set({
        value: l.tr(yp),
        font: a,
        textColor: g,
        width: 70,
        textAlign: t
    })), it.add(ut), it.add(at), it.add(ri), ut = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Flow).set({
            spacingX: 10
        }),
        marginTop: 4,
        marginRight: 4,
        marginBottom: 4,
        marginLeft: 4
    }), si = (new qx.ui.basic.Atom).set({
        label: l.tr(dh),
        icon: ko,
        gap: 2,
        font: a,
        textColor: g,
        iconPosition: ot,
        rich: !0
    }), si.objid = nwt, pr = (new qx.ui.basic.Atom).set({
        label: l.tr(ya),
        icon: na,
        gap: 2,
        font: a,
        textColor: g,
        iconPosition: ot,
        rich: !0
    }), pr.objid = aet, ut.add((new qx.ui.basic.Atom).set({
        label: l.tr(kf),
        icon: wh,
        gap: 2,
        font: a,
        textColor: g,
        iconPosition: ot,
        rich: !0
    })), ut.add(si), ut.add((new qx.ui.basic.Atom).set({
        label: l.tr(cr),
        icon: ks,
        gap: 2,
        font: a,
        textColor: g,
        iconPosition: ot,
        rich: !0
    })), ut.add(pr), ut.add((new qx.ui.basic.Atom).set({
        label: l.tr(ch),
        icon: ds,
        gap: 2,
        font: a,
        textColor: g,
        iconPosition: ot,
        rich: !0
    })), kt.add(it), kt.add(ut), nt.add(ii), nt.add(oi), nt.add(dt), nt.add(vr), nt.add(w), nt.add(kt), et.add((new qx.ui.basic.Image).set({
        source: pl
    }), {}), et.add((new qx.ui.core.Widget).set({
        decorator: kb,
        allowGrowX: !0,
        width: 438
    }), {
        top: 34,
        bottom: 18
    }), et.add((new qx.ui.basic.Image).set({
        source: ov,
        scale: !0
    }), {
        bottom: 0
    }), et.add(nt, {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }), nt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        paddingLeft: 18,
        paddingRight: 18
    }), nt.objid = cst, br = (new webfrontend.ui.SoundButton).set({
        label: l.tr(cot)
    }), br.objid = eui, kr = (new webfrontend.ui.SoundButton).set({
        label: l.tr(lnr),
        enabled: !1
    }), kr.objid = oui, nt.add(br), nt.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), nt.add(kr), ei.add(ui), ei.add(fi), ei.add(et), ei.add(nt), ei
}

function ll_currency_changed(n) {
    var f = qx.core.Init.getApplication(),
        i = n ? n : new qx.ui.container.Composite,
        r, t, u;
    return i.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 20
        }),
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10
    }), r = (new qx.ui.container.Scroll).set({}), r.add((new qx.ui.basic.Label).set({
        value: f.tr(eyt),
        rich: !0,
        font: y,
        textColor: lt
    }), {
        flex: 1
    }), t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), u = (new webfrontend.ui.SoundButton).set({
        label: f.tr(tr)
    }), u.objid = dg, t.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), t.add(u, {
        flex: 1
    }), t.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), i.add(r, {
        flex: 1
    }), i.add(t, {}), i
}

function ll_funds_tooltip(t) {
    var e = qx.core.Init.getApplication(),
        r = t ? t : new qx.ui.container.Composite,
        s, c, u, f, l;
    return r.set({
        layout: (new qx.ui.layout.VBox).set({}),
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        maxWidth: null,
        maxHeight: null,
        minWidth: null,
        width: null,
        height: null,
        allowShrinkX: !1,
        allowShrinkY: !1,
        minHeight: null
    }), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 4,
            alignY: n
        }),
        alignX: o,
        alignY: n,
        marginBottom: 6,
        marginTop: 6
    }), c = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: uf
    }), c.objid = hki, s.add((new qx.ui.basic.Image).set({
        source: bc
    })), s.add(c), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        marginBottom: 10
    }), u.objid = kyt, f = (new qx.ui.basic.Label).set({
        textColor: uf,
        marginLeft: 5
    }), f.objid = sir, u.add((new qx.ui.basic.Label).set({
        rich: !0,
        value: e.tr(cvi),
        textColor: uf,
        font: rt
    })), u.add((new qx.ui.basic.Image).set({
        source: ybt,
        marginLeft: 10
    })), u.add(f), f = (new qx.ui.basic.Label).set({
        value: e.tr(piu),
        textColor: lt,
        rich: !0,
        allowGrowX: !0,
        allowGrowY: !0,
        allowShrinkY: !1,
        minWidth: null,
        allowShrinkX: !1
    }), f.objid = pyr, l = (new qx.ui.basic.Label).set({
        value: e.tr(nwr),
        textColor: oru,
        font: h,
        rich: !0,
        marginTop: 10,
        allowGrowX: !0,
        allowGrowY: !0
    }), l.objid = gou, r.add((new qx.ui.basic.Label).set({
        value: e.tr(par),
        font: i,
        textColor: uf
    })), r.add(s), r.add(u), r.add(f), r.add(l), r
}

function ll_global_base_timer_bar(t) {
    var h = qx.core.Init.getApplication(),
        e = t ? t : new qx.ui.container.Composite,
        c, l, o, a, f, v, s, y, r, p;
    return e.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 1
        }),
        width: 128,
        height: 143,
        maxWidth: 128,
        maxHeight: 144,
        decorator: klr
    }), c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    }), l = (new webfrontend.ui.SoundButton).set({
        toolTipText: h.tr(itr),
        label: h.tr(tvr),
        appearance: ht,
        height: 27,
        width: 110,
        marginLeft: 7,
        marginRight: 5
    }), l.objid = lti, c.add(l), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 8
        }),
        paddingLeft: 4,
        marginTop: 6
    }), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 4
        })
    }), r.objid = fer, a = (new qx.ui.basic.Label).set({
        textColor: u,
        font: i,
        maxWidth: 80,
        width: 80,
        height: 18,
        maxHeight: 18,
        fixedContentSize: !0
    }), a.objid = lkt, r.add((new qx.ui.basic.Image).set({
        source: he,
        maxWidth: 18,
        width: 18,
        height: 18,
        maxHeight: 18,
        marginLeft: 4
    })), r.add(a), f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 4
        })
    }), f.objid = dpi, v = (new qx.ui.basic.Label).set({
        textColor: u,
        font: i,
        width: 66,
        maxWidth: 66,
        height: 18,
        maxHeight: 18,
        fixedContentSize: !0
    }), v.objid = lpt, f.add((new qx.ui.basic.Image).set({
        source: ro,
        maxWidth: 18,
        width: 18,
        height: 18,
        maxHeight: 18,
        marginLeft: 4
    })), f.add(v), f.add((new webfrontend.gui.widgets.QuickBuyButton).set({
        ItemCategory: 9,
        alignY: n,
        paddingTop: 4
    })), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 4
        })
    }), s.objid = wkt, y = (new qx.ui.basic.Label).set({
        textColor: u,
        font: i,
        width: 80,
        maxWidth: 80,
        fixedContentSize: !0,
        height: 18,
        maxHeight: 18
    }), y.objid = deu, s.add((new qx.ui.basic.Image).set({
        source: ku,
        width: 18,
        maxWidth: 18,
        height: 18,
        maxHeight: 18,
        marginLeft: 4
    })), s.add(y), o.add(r), o.add(f), o.add(s), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    }), p = (new webfrontend.ui.SoundButton).set({
        toolTipText: h.tr(lit),
        label: h.tr(ovt),
        appearance: ht,
        height: 27,
        width: 110,
        marginLeft: 7,
        marginRight: 5
    }), p.objid = vet, r.add(p), e.add(c), e.add(o), e.add(r), e
}

function ll_groupboxlarge(n) {
    var i = n ? n : new qx.ui.container.Composite,
        t, u;
    i.set({
        layout: (new qx.ui.layout.Canvas).set({})
    });
    var r = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        t = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({})
        }),
        f = (new qx.ui.basic.Label).set({
            value: sii,
            appearance: rr,
            textColor: pai,
            marginRight: 10,
            minWidth: 100
        });
    return f.objid = lf, t.add((new qx.ui.basic.Image).set({
        source: tiu,
        allowGrowX: !0,
        scale: !0
    }), {
        left: 0,
        right: 0
    }), t.add(f, {
        top: 7
    }), r.add((new qx.ui.basic.Image).set({
        source: urt
    })), r.add(t), r.add((new qx.ui.basic.Image).set({
        source: nwi
    })), r.add((new qx.ui.basic.Image).set({
        source: wdr,
        allowGrowX: !0,
        scale: !0
    }), {
        flex: 1
    }), r.add((new qx.ui.basic.Image).set({
        source: pii
    })), t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), t.add((new qx.ui.basic.Image).set({
        source: ipi
    })), t.add((new qx.ui.basic.Image).set({
        source: sl,
        scale: !0,
        allowGrowX: !0
    }), {
        flex: 1
    }), t.add((new qx.ui.basic.Image).set({
        source: uir
    })), t.add((new qx.ui.basic.Image).set({
        source: sl,
        scale: !0,
        allowGrowX: !0
    }), {
        flex: 1
    }), t.add((new qx.ui.basic.Image).set({
        source: ini
    })), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), u.objid = lp, i.add(r, {
        top: 0,
        left: 0,
        right: 0
    }), i.add((new qx.ui.basic.Image).set({
        source: cgt,
        allowGrowY: !0,
        scale: !0
    }), {
        left: 0,
        top: 33,
        bottom: 16
    }), i.add((new qx.ui.basic.Image).set({
        source: ivt,
        blockToolTip: !0,
        allowGrowX: !0,
        allowGrowY: !0,
        scale: !0
    }), {
        left: 16,
        top: 33,
        bottom: 16,
        right: 16
    }), i.add((new qx.ui.basic.Image).set({
        source: ufi,
        scale: !0,
        allowGrowY: !0
    }), {
        right: 0,
        top: 33,
        bottom: 16
    }), i.add(t, {
        left: 0,
        right: 0,
        bottom: 0
    }), i.add(u, {
        top: 35,
        left: 5,
        right: 5,
        bottom: 18
    }), i
}

function ll_legacy_item(i) {
    var w = qx.core.Init.getApplication(),
        r = i ? i : new qx.ui.container.Composite,
        s, h, a, f, y;
    r.set({
        layout: (new qx.ui.layout.VBox).set({}),
        paddingLeft: 3,
        paddingRight: 8,
        marginRight: 0
    });
    var u = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            marginLeft: 2,
            contentPaddingRight: 4,
            contentPaddingTop: 6,
            contentPaddingBottom: 8,
            contentPaddingLeft: 6,
            innerDecorator: ktt
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            alignX: o,
            visibility: v,
            marginTop: 2
        }),
        p = (new qx.ui.basic.Label).set({
            value: co,
            textColor: c,
            font: l,
            marginRight: 10,
            allowGrowX: !0,
            marginLeft: 3,
            marginBottom: 0,
            rich: !0,
            alignX: t,
            alignY: n
        });
    return p.objid = ev, s = (new qx.ui.basic.Image).set({
        source: alt,
        alignY: n,
        selectable: !0
    }), s.objid = iir, e.add(p), e.add(s), h = (new qx.ui.form.Button).set({
        icon: vn,
        appearance: ktt,
        height: 26,
        width: 25,
        toolTipText: w.tr(tp),
        marginRight: 2,
        marginTop: 1,
        alignY: n,
        alignX: t
    }), h.objid = hy, a = (new qx.ui.basic.Label).set({
        alignY: b,
        value: ugr,
        font: l,
        marginTop: 3,
        paddingTop: 1
    }), a.objid = nc, u.add(e), u.add(h, {
        right: 0
    }), u.add(a, {
        right: 50
    }), f = (new qx.ui.container.Scroll).set({
        scrollbarX: fi,
        height: null,
        minHeight: 40,
        decorator: nr
    }), f.objid = rtt, y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    }), y.objid = uw, f.add(y), r.add(u), r.add(f), r
}

function ll_legacy_sub_item(t) {
    var r = t ? t : new qx.ui.container.Composite,
        u, f;
    return r.set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: n
        }),
        paddingBottom: 6,
        paddingRight: 24,
        paddingTop: 6,
        paddingLeft: 6,
        marginLeft: 10,
        marginRight: 10
    }), u = (new qx.ui.basic.Label).set({
        value: fs,
        paddingLeft: 18,
        font: i,
        rich: !0
    }), u.objid = tw, f = (new qx.ui.basic.Label).set({
        value: fs,
        paddingLeft: 18,
        font: i,
        rich: !0
    }), f.objid = sdt, r.add(u), r.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), r.add(f), r
}

function ll_maildisplay(n) {
    var u = qx.core.Init.getApplication(),
        f = n ? n : new qx.ui.container.Composite,
        a, y, k, g, s, h, i, tt, it, rt, ut, ft, et;
    f.set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        })
    });
    a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: b
        }),
        height: 38,
        paddingLeft: 15,
        paddingTop: 4,
        paddingRight: 15,
        paddingBottom: 6,
        decorator: bvr
    });
    y = (new qx.ui.basic.Label).set({
        value: sc,
        appearance: d,
        font: st,
        cursor: p,
        rich: !0
    });
    y.objid = bn;
    k = (new qx.ui.basic.Label).set({
        value: rdt,
        allowGrowX: !0,
        appearance: rr,
        textAlign: o,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            maxWidth: 500,
            rich: !0,
            label: ad
        })
    });
    k.objid = eot;
    g = (new qx.ui.basic.Label).set({
        value: yg,
        appearance: rr,
        textAlign: r
    });
    g.objid = gn;
    a.add(y);
    a.add((new qx.ui.basic.Label).set({
        value: iwi,
        allowGrowX: !0,
        appearance: rr,
        textAlign: o,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            maxWidth: 500,
            rich: !0,
            label: ad
        })
    }));
    a.add(k, {
        flex: 1
    });
    a.add(g);
    var ht = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({}),
            height: 8,
            decorator: rar
        }),
        nt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 6,
                alignY: w
            }),
            allowGrowY: !0,
            allowShrinkY: !0,
            paddingLeft: 8,
            paddingRight: 10,
            decorator: bti
        }),
        s = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 3,
                alignY: w
            }),
            minWidth: 90,
            width: 90,
            maxWidth: 90,
            paddingLeft: 5,
            paddingTop: 3
        }),
        ot = (new qx.ui.basic.Label).set({
            value: u.tr(vgt),
            font: l,
            textColor: c
        });
    return ot.objid = wai, s.add((new qx.ui.basic.Label).set({
        value: u.tr(nh),
        textColor: e
    })), s.add(ot), h = (new qx.ui.container.Scroll).set({
        minWidth: 574,
        width: 574,
        maxWidth: 574,
        marginTop: 3,
        marginLeft: 3,
        minHeight: 0,
        height: 20,
        maxHeight: 60,
        allowGrowY: !0,
        allowShrinkY: !0,
        allowGrowX: !0,
        dragScrollThresholdY: 30,
        scrollbarX: fi
    }), h.objid = pg, i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Flow).set({
            spacingX: 4,
            spacingY: 4,
            alignX: o
        }),
        allowShrinkY: !1,
        allowGrowY: !0
    }), i.objid = sg, h.add(i), nt.add(s), nt.add(h, {
        flex: 1
    }), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        paddingLeft: 6,
        paddingTop: 21,
        height: 61,
        decorator: iyi
    }), s.add((new qx.ui.basic.Label).set({
        value: u.tr(vct),
        appearance: rr,
        marginLeft: 7
    })), s.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), h = (new qx.ui.container.Scroll).set({
        allowGrowX: !0,
        paddingLeft: 5,
        paddingRight: 18,
        decorator: kdt
    }), i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 5,
            alignX: t
        }),
        decorator: snt
    }), i.objid = sn, h.add(i), i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: b
        }),
        paddingLeft: 6,
        paddingRight: 8,
        paddingBottom: 6,
        height: 69,
        decorator: dir
    }), tt = (new qx.ui.form.Button).set({
        label: u.tr(nd),
        allowGrowY: !1
    }), tt.objid = uuu, it = (new qx.ui.form.Button).set({
        label: u.tr(ppi),
        allowGrowY: !1
    }), it.objid = ka, rt = (new qx.ui.form.Button).set({
        label: u.tr(yut),
        allowGrowY: !1
    }), rt.objid = kfr, ut = (new qx.ui.form.Button).set({
        label: u.tr(ryt),
        allowGrowY: !1,
        visibility: v
    }), ut.objid = rft, ft = (new qx.ui.form.Button).set({
        label: u.tr(dbi),
        allowGrowY: !1,
        visibility: v
    }), ft.objid = ucr, et = (new qx.ui.form.Button).set({
        label: u.tr(pvt),
        allowGrowY: !1,
        visibility: v
    }), et.objid = kut, i.add(tt), i.add(it), i.add(rt), i.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), i.add(ut), i.add(ft), i.add(et), f.add(a), f.add(ht), f.add(nt), f.add(s), f.add(h, {
        flex: 1
    }), f.add(i), f
}

function ll_mailmessage(u) {
    var f = qx.core.Init.getApplication(),
        o = u ? u : new qx.ui.container.Composite,
        y, k, d, p, s, w, v, h, l, nt, tt, c, it, rt, ut, ft;
    o.set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        })
    });
    y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5
        }),
        height: 43,
        paddingTop: 4,
        paddingLeft: 400,
        decorator: viu
    });
    k = (new qx.ui.form.SelectBox).set({
        allowGrowY: !1,
        width: 130,
        minHeight: 25
    });
    k.objid = lii;
    d = (new qx.ui.form.Button).set({
        label: f.tr(tb),
        allowGrowY: !1,
        width: 130,
        minHeight: 25,
        toolTipText: f.tr(tb)
    });
    d.objid = kui;
    y.add(k);
    y.add(d);
    p = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        paddingLeft: 12,
        paddingRight: 10,
        decorator: cdi
    });
    s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        allowGrowX: !0,
        allowShrinkY: !0,
        decorator: yar
    });
    s.objid = sg;
    w = (new qx.ui.container.Scroll).set({
        minHeight: 33,
        height: 33,
        maxHeight: 80,
        allowGrowY: !0,
        allowShrinkY: !0
    });
    w.objid = pg;
    l = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Flow).set({
            spacingX: 4,
            spacingY: 4
        }),
        paddingLeft: 4,
        paddingRight: 4,
        paddingBottom: 4,
        paddingTop: 3
    });
    l.objid = gfr;
    w.add(l);
    v = (new qx.ui.form.TextField).set({
        placeholder: f.tr(yri),
        maxLength: 16,
        allowGrowY: !1,
        allowGrowX: !0
    });
    v.objid = ylt;
    s.add(w, {
        flex: 1
    });
    s.add(v);
    p.add((new qx.ui.basic.Label).set({
        value: f.tr(nh),
        width: 87
    }));
    p.add(s, {
        flex: 1
    });
    var s = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 16
            }),
            height: 89,
            paddingTop: 6,
            paddingLeft: 12,
            paddingRight: 10,
            decorator: lki
        }),
        h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        v = (new qx.ui.form.TextField).set({
            placeholder: f.tr(lli),
            maxLength: 225,
            allowGrowX: !0,
            allowGrowY: !1
        });
    v.objid = ysi;
    h.add((new qx.ui.basic.Label).set({
        marginTop: 4,
        width: 87,
        value: f.tr(kn)
    }));
    h.add(v, {
        flex: 1
    });
    s.add(h);
    s.add((new qx.ui.basic.Label).set({
        value: f.tr(ior),
        appearance: rr
    }));
    h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: b
        }),
        paddingLeft: 12,
        paddingRight: 15,
        paddingBottom: 6,
        decorator: tci
    });
    l = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        maxWidth: 400
    });
    l.objid = kkr;
    nt = (new qx.ui.basic.Label).set({
        fixedContentSize: !0,
        width: 30,
        height: 16,
        textColor: e,
        value: hi
    });
    nt.objid = fat;
    h.add(l);
    h.add((new qx.ui.basic.Label).set({
        allowGrowX: !0,
        value: f.tr(tcr),
        textAlign: r,
        textColor: g,
        marginRight: 5
    }), {
        flex: 1
    });
    h.add(nt);
    tt = (new qx.ui.container.Scroll).set({
        allowGrowX: !0,
        paddingLeft: 12,
        paddingRight: 18,
        decorator: cir
    });
    c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 5,
            alignX: t
        }),
        decorator: kgi
    });
    c.objid = sn;
    it = (new qx.ui.form.TextArea).set({
        autoSize: !1,
        minHeight: 120
    });
    it.objid = cei;
    rt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 5,
            alignX: t
        })
    });
    rt.objid = nrr;
    c.add(it, {
        flex: 1
    });
    c.add(rt, {
        flex: 1
    });
    tt.add(c);
    var c = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignY: b
            }),
            paddingLeft: 6,
            paddingRight: 8,
            paddingBottom: 6,
            height: 69,
            decorator: hdr
        }),
        a = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 5,
                alignY: n
            }),
            allowGrowX: !0
        }),
        et = (new qx.ui.form.Button).set({
            allowGrowY: !1,
            marginLeft: 7,
            label: f.tr(yr)
        });
    return et.objid = dru, ut = (new qx.ui.basic.Label).set({
        textAlign: t,
        textColor: ic,
        allowGrowX: !0,
        font: i,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 5,
        value: tfu,
        decorator: bui
    }), ut.objid = cwt, ft = (new qx.ui.form.Button).set({
        allowGrowY: !1,
        marginRight: 10,
        label: f.tr(kd)
    }), ft.objid = rbr, a.add(et), a.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), a.add(ut), a.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), a.add(ft), c.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), c.add(a), o.add(y), o.add(p), o.add(s), o.add(h), o.add(tt, {
        flex: 1
    }), o.add(c), o
}

function ll_mailmessage_itemhistory(t) {
    var o = t ? t : new qx.ui.container.Composite,
        e, u, s, h, f;
    return o.set({
        layout: (new qx.ui.layout.VBox).set({})
    }), e = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 3
        }),
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
        innerDecorator: ii,
        contentPaddingBottom: 7,
        contentPaddingLeft: 7,
        contentPaddingRight: 7,
        contentPaddingTop: 7
    }), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        })
    }), u.objid = kci, f = (new qx.ui.basic.Label).set({
        font: i,
        cursor: p,
        appearance: d,
        value: sc
    }), f.objid = bn, s = (new qx.ui.basic.Label).set({
        value: yg,
        selectable: !0,
        marginRight: 5,
        textAlign: r,
        font: i,
        allowGrowX: !0
    }), s.objid = gn, h = (new qx.ui.form.Button).set({
        icon: wa,
        appearance: si,
        height: 16,
        width: 16
    }), h.objid = yv, u.add(f), u.add(s, {
        flex: 1
    }), u.add(h), f = (new qx.ui.basic.Label).set({
        rich: !0,
        wrap: !0,
        value: fe,
        selectable: !0,
        cursor: fe
    }), f.objid = ser, e.add(u), e.add(f), o.add(e), o
}

function ll_mailmessage_itemreceiver(t) {
    var r = t ? t : new qx.ui.container.Composite,
        i, u, f;
    return r.set({
        layout: (new qx.ui.layout.HBox).set({}),
        minHeight: 26
    }), i = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2,
            alignY: n
        }),
        contentPaddingLeft: 3,
        contentPaddingTop: 3,
        contentPaddingRight: 3,
        contentPaddingBottom: 3,
        innerDecorator: hct
    }), i.objid = wtr, u = (new qx.ui.basic.Label).set({
        alignY: n,
        marginBottom: 2,
        font: k,
        appearance: d,
        cursor: p,
        value: aut
    }), u.objid = dyr, f = (new qx.ui.form.Button).set({
        icon: wa,
        alignY: n,
        appearance: si,
        height: 16,
        width: 16
    }), f.objid = yv, i.add(u), i.add(f), r.add(i), r
}

function ll_mailtab(i) {
    var f = qx.core.Init.getApplication(),
        e = i ? i : new qx.ui.container.Composite,
        h, p, w, k, l, v, a, d, c, y, u, g, s, nt, tt, it, rt, ut;
    return e.set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        marginLeft: 9,
        marginRight: 9,
        paddingLeft: 11,
        paddingRight: 12,
        paddingBottom: 10
    }), h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignX: r
        }),
        paddingTop: 3,
        paddingLeft: 15,
        paddingRight: 15,
        zIndex: 100
    }), p = (new qx.ui.form.ToggleButton).set({
        label: f.tr(fnr),
        alignX: o,
        marginRight: 20,
        zIndex: 16
    }), p.objid = eiu, w = (new qx.ui.form.TextField).set({
        placeholder: f.tr(rpr),
        maxLength: 20,
        marginLeft: 5,
        width: 150,
        alignY: n
    }), w.objid = whi, k = (new webfrontend.ui.SoundButton).set({
        minWidth: 26,
        minHeight: 26,
        width: 26,
        height: 26,
        maxWidth: 26,
        maxHeight: 26,
        marginTop: 4,
        marginLeft: 4,
        appearance: ht,
        toolTipText: f.tr(abr),
        icon: sf
    }), k.objid = fwt, h.add(p), h.add((new qx.ui.basic.Image).set({
        source: egt
    })), h.add(w), h.add(k), l = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: b
        }),
        allowGrowX: !0,
        marginTop: -16
    }), l.add((new qx.ui.basic.Image).set({
        source: tdr
    })), l.add((new qx.ui.core.Widget).set({
        maxHeight: 36,
        decorator: pni
    }), {
        flex: 1
    }), l.add((new qx.ui.basic.Image).set({
        source: uyr
    })), v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        }),
        maxWidth: 711,
        decorator: glt
    }), a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        decorator: bbt,
        height: 25
    }), a.objid = dyi, d = (new qx.ui.basic.Label).set({
        value: hkt,
        textColor: pc,
        allowGrowX: !0,
        textAlign: o,
        marginLeft: 15,
        minWidth: 100
    }), d.objid = hoi, c = (new qx.ui.basic.Image).set({
        marginRight: 15,
        source: rv
    }), c.objid = byi, a.add(d, {
        flex: 1
    }), a.add(c), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        height: 25,
        decorator: otr
    }), u.objid = eft, c = (new qx.ui.basic.Image).set({
        marginRight: 15,
        source: rv
    }), c.objid = gii, u.add((new qx.ui.basic.Label).set({
        allowGrowX: !0,
        textAlign: o,
        marginLeft: 8,
        textColor: pc,
        value: f.tr(gbi)
    }), {
        flex: 1
    }), u.add(c), v.add(a, {
        flex: 2
    }), v.add(u, {
        flex: 1
    }), y = (new qx.ui.container.Scroll).set({
        allowGrowY: !0,
        allowShrinkY: !0,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 4,
        decorator: krt
    }), y.objid = dvi, u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 3
        }),
        allowGrowY: !0,
        allowShrinkY: !0
    }), u.objid = ili, y.add(u), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        allowGrowX: !0
    }), g = (new webfrontend.gui.forum.ForumNavigationWidget).set({
        maxHeight: 30
    }), g.objid = nur, u.add((new qx.ui.basic.Image).set({
        source: gfi
    })), u.add((new qx.ui.core.Widget).set({
        decorator: ba,
        maxHeight: 30
    }), {
        flex: 1
    }), u.add(g), u.add((new qx.ui.core.Widget).set({
        maxHeight: 30,
        decorator: ba
    }), {
        flex: 1
    }), u.add((new qx.ui.basic.Image).set({
        source: vvt
    })), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 15
        }),
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 10,
        marginBottom: 10
    }), nt = (new qx.ui.form.CheckBox).set({
        label: f.tr(bai),
        minWidth: 85
    }), nt.objid = toi, tt = (new qx.ui.form.Button).set({
        label: f.tr(pir),
        maxWidth: 145
    }), tt.objid = wwt, it = (new qx.ui.form.Button).set({
        label: f.tr(inr),
        maxWidth: 145
    }), it.objid = dgr, rt = (new qx.ui.form.Button).set({
        label: f.tr(yet)
    }), rt.objid = ka, ut = (new qx.ui.form.Button).set({
        label: f.tr(ykt)
    }), ut.objid = cai, s.add(nt), s.add(tt), s.add(it), s.add(rt), s.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), s.add(ut), e.add(h), e.add(l), e.add(v), e.add(y, {
        flex: 1
    }), e.add(u), e.add(s), e
}

function ll_marker_create_window(i) {
    var r = qx.core.Init.getApplication(),
        h = i ? i : new qx.ui.container.Composite,
        f, c, e, l, a, v, y, u, w, b;
    h.set({
        layout: (new qx.ui.layout.VBox).set({}),
        minHeight: 390,
        minWidth: 400,
        decorator: gf,
        allowGrowX: !1,
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        paddingRight: 5
    });
    var o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            decorator: it
        }),
        k = (new webfrontend.gui.GroupBoxLarge).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            Title: r.tr(ha)
        }),
        s = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 5
            })
        }),
        u = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                alignY: n
            }),
            marginLeft: 5,
            marginRight: 5
        }),
        g = (new qx.ui.form.SelectBox).set({});
    return g.objid = rat, u.add((new qx.ui.basic.Label).set({
        value: r.tr(aor),
        minWidth: 100
    })), u.add(g), f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        marginLeft: 5,
        marginRight: 5
    }), f.objid = tsr, c = (new webfrontend.gui.widgets.CoordinatesLabel).set({
        rich: !0,
        selectable: !0,
        x: 55,
        value: null,
        y: 66,
        label: null,
        appearance: d,
        cursor: p
    }), c.objid = yru, f.add((new qx.ui.basic.Label).set({
        value: r.tr(guu),
        minWidth: 100
    })), f.add(c), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 5
        })
    }), e.objid = ioi, l = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        marginLeft: 5,
        marginRight: 5
    }), l.add((new qx.ui.basic.Label).set({
        value: r.tr(ebt),
        minWidth: 100
    })), a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        marginLeft: 5,
        marginRight: 5
    }), v = (new qx.ui.basic.Label).set({
        value: r.tr(flt),
        minWidth: 100,
        textColor: yat
    }), v.objid = abt, a.add(v), e.add(l), e.add(a), s.add(u), s.add(f), s.add(e), k.add(s, {
        left: 0,
        right: 0,
        top: 0
    }), y = (new webfrontend.gui.widgets.BBCodeTextArea).set({
        Legend: r.tr(kl),
        WidthBBCodes: 250
    }), y.objid = nhr, u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 25,
            alignX: t
        })
    }), u.objid = ent, w = (new webfrontend.ui.SoundButton).set({
        label: r.tr(tr),
        minWidth: 100
    }), w.objid = syr, b = (new webfrontend.ui.SoundButton).set({
        label: r.tr(yr),
        minWidth: 100
    }), b.objid = rct, u.add(w), u.add(b), o.add(k), o.add(y), o.add(u), h.add(o, {
        flex: 1
    }), h
}

function ll_marker_info_window(t) {
    var r = qx.core.Init.getApplication(),
        f = t ? t : new qx.ui.container.Composite,
        o, s, i, h, c;
    f.set({
        layout: (new qx.ui.layout.VBox).set({}),
        minWidth: 650,
        minHeight: 420,
        decorator: gf,
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    });
    var u = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 5
            }),
            decorator: it
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({})
        }),
        l = (new webfrontend.gui.GroupBoxLarge).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            Title: r.tr(ha)
        }),
        i = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({}),
            marginLeft: 3,
            marginRight: 3
        });
    return i.objid = vtt, l.add(i, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), o = (new webfrontend.ui.SoundButton).set({
        icon: vp,
        height: 32
    }), o.objid = oci, e.add(l, {
        left: 0,
        right: 0,
        top: 11,
        bottom: 0
    }), e.add(o, {
        right: 2,
        top: 2
    }), s = (new webfrontend.gui.widgets.BBCodeTextArea).set({
        Legend: r.tr(kl),
        WidthBBCodes: 500
    }), s.objid = avt, i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5
        })
    }), i.objid = nk, h = (new webfrontend.ui.SoundButton).set({
        label: r.tr(uoi)
    }), h.objid = ldt, c = (new webfrontend.ui.SoundButton).set({
        label: r.tr(ieu)
    }), c.objid = cri, i.add(h), i.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), i.add(c), u.add(e), u.add(s, {
        flex: 1
    }), u.add(i), f.add(u, {
        flex: 1
    }), f
}

function ll_missions_bar(n) {
    var r = n ? n : new qx.ui.container.Composite,
        f, e, o;
    r.set({
        layout: (new qx.ui.layout.VBox).set({}),
        allowGrowX: !1,
        marginBottom: 2,
        decorator: iii,
        width: 124
    });
    var u = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        i = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            paddingLeft: 3
        }),
        s = (new webfrontend.ui.SoundButton).set({
            icon: rvr,
            appearance: si,
            height: 20,
            center: !0,
            marginTop: 2,
            marginRight: 8,
            marginLeft: 1
        });
    return s.objid = cp, f = (new webfrontend.ui.SoundButton).set({
        icon: iri,
        appearance: si,
        height: 20,
        center: !0,
        marginLeft: 1,
        marginTop: 5,
        marginRight: 7,
        marginBottom: 5
    }), f.objid = ta, i.add(s), i.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), i.add(f), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        marginRight: 5
    }), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        })
    }), o.objid = dyt, e.add(o, {
        flex: 1
    }), u.add(i), u.add(e, {
        flex: 1
    }), r.add(u, {
        flex: 1
    }), r
}

function ll_missions_bar_details(r) {
    var f = qx.core.Init.getApplication(),
        o = r ? r : new qx.phe.Decontainer,
        h, c, l, a, e, v, y;
    o.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        minWidth: 390,
        maxWidth: 500,
        innerDecorator: brr
    });
    var u = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignX: t,
                spacing: 3
            })
        }),
        s = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 5
            })
        }),
        p = (new qx.ui.basic.Label).set({
            value: ktu,
            font: st,
            allowGrowX: !0
        });
    return p.objid = lf, h = (new webfrontend.ui.SoundButton).set({
        icon: sf,
        width: 21,
        height: 21,
        appearance: uo,
        toolTipText: f.tr(gw)
    }), h.objid = ap, s.add(p, {
        flex: 1
    }), s.add(h), c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        paddingTop: 5,
        paddingBottom: 8,
        paddingLeft: 1
    }), c.objid = uit, l = (new qx.ui.basic.Label).set({
        value: noi,
        allowGrowX: !0,
        marginLeft: 10,
        rich: !0,
        marginBottom: 6,
        marginRight: 5,
        marginTop: -2
    }), l.objid = ssu, a = (new webfrontend.ui.SoundButton).set({
        allowGrowX: !1,
        label: f.tr(wet)
    }), a.objid = gnt, e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 15,
            alignY: n
        })
    }), v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Flow).set({
            spacingX: 10,
            spacingY: 5
        }),
        marginRight: 5
    }), v.objid = ctt, e.add((new qx.ui.basic.Label).set({
        value: f.tr(nvr),
        font: i
    })), e.add(v, {
        flex: 1
    }), y = (new webfrontend.ui.SoundButton).set({
        label: f.tr(lsr),
        allowGrowX: !1
    }), y.objid = psi, u.add(s), u.add(c), u.add((new qx.ui.basic.Label).set({
        value: f.tr(ttr),
        allowGrowX: !0,
        font: i,
        marginRight: 5,
        marginTop: 4
    })), u.add(l, {}), u.add(a), u.add(e), u.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), u.add(y), o.add(u, {
        left: 10,
        top: 5,
        right: 6,
        bottom: 14
    }), o
}

function ll_missions_bar_item(n) {
    var t = n ? n : new qx.ui.container.Composite,
        i, r;
    return t.set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: w
        }),
        allowGrowX: !1,
        paddingRight: 3,
        appearance: wru,
        cursor: p
    }), i = (new qx.ui.basic.Image).set({
        source: bi,
        anonymous: !0
    }), i.objid = ifi, r = (new qx.ui.form.ToggleButton).set({
        maxHeight: 22,
        maxWidth: 28,
        appearance: nfr,
        width: 28,
        height: 22,
        marginTop: 4,
        marginRight: 0
    }), r.objid = hl, t.add(i), t.add(r), t
}

function ll_missions_bar_tooltip(t) {
    var i = t ? t : new qx.ui.container.Composite,
        r;
    return i.set({
        layout: (new qx.ui.layout.VBox).set({
            alignY: n
        }),
        maxHeight: 70,
        maxWidth: 210,
        decorator: unt,
        anonymous: !0,
        zIndex: 19,
        allowGrowX: !1
    }), r = (new qx.ui.basic.Label).set({
        value: yvt,
        textColor: nw,
        rich: !0,
        anonymous: !0,
        font: bht
    }), r.objid = isr, i.add(r, {
        flex: 1
    }), i
}

function ll_newPlayerComposite(i) {
    var r = qx.core.Init.getApplication(),
        y = i ? i : new qx.ui.container.Composite,
        p, w, b, f, k, d;
    y.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 20
        }),
        maxWidth: 800,
        paddingTop: 0,
        alignX: t,
        minHeight: 640
    });
    var l = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 8
            }),
            alignX: o,
            marginTop: 155,
            maxWidth: 800
        }),
        a = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 12
            })
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            marginLeft: 19,
            paddingTop: 27
        }),
        g = (new qx.ui.form.RadioButton).set({
            appearance: fgi,
            allowGrowX: !0
        });
    g.objid = dwi;
    e.add(g);
    e.add((new qx.ui.basic.Label).set({
        rich: !0,
        value: r.tr(gor),
        allowGrowX: !0,
        textColor: ea,
        paddingTop: 8,
        textAlign: o,
        font: yo,
        marginTop: 35,
        paddingLeft: 10,
        paddingRight: 12,
        minHeight: 120,
        maxHeight: 120
    }), {
        flex: 1
    });
    var s = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            paddingLeft: 10,
            minWidth: 295
        }),
        f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            allowShrinkX: !1,
            allowGrowX: !1,
            minWidth: 295,
            maxWidth: 295,
            paddingTop: 15
        }),
        h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 10
            }),
            alignX: o
        });
    h.objid = kgt;
    p = (new qx.ui.form.TextField).set({
        appearance: uwr,
        marginTop: 12,
        maxWidth: 206,
        alignX: o,
        marginLeft: 36,
        marginBottom: 8
    });
    p.objid = ewt;
    w = (new qx.ui.form.Button).set({
        label: r.tr(owi),
        appearance: spi,
        marginLeft: 70,
        marginRight: 83
    });
    w.objid = hc;
    b = (new qx.ui.basic.Label).set({
        rich: !0,
        value: r.tr(ey),
        textColor: u,
        paddingTop: 3,
        font: hvt
    });
    b.objid = air;
    h.add(p);
    h.add(w);
    h.add(b);
    f.add((new qx.ui.basic.Label).set({
        rich: !0,
        value: r.tr(pli),
        paddingTop: 4,
        width: 295,
        textColor: c,
        textAlign: t,
        font: du,
        paddingRight: 12
    }));
    f.add(h);
    s.add((new qx.ui.basic.Label).set({
        value: r.tr(dat),
        rich: !0,
        allowGrowX: !1,
        textColor: u,
        paddingBottom: 14,
        paddingTop: 4,
        minWidth: 295,
        minHeight: 95,
        maxHeight: 95,
        allowShrinkX: !1,
        font: dvt,
        textAlign: t,
        allowGrowY: !0
    }));
    s.add(f);
    f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        visibility: v,
        marginTop: 27
    });
    k = (new qx.ui.form.RadioButton).set({
        appearance: ssr,
        allowGrowX: !0
    });
    k.objid = ket;
    f.add(k);
    f.add((new qx.ui.basic.Label).set({
        value: r.tr(rkt),
        rich: !0,
        allowGrowX: !0,
        textColor: ea,
        paddingTop: 8,
        font: yo,
        marginTop: 35,
        minHeight: 120,
        maxHeight: 120,
        paddingLeft: 10,
        paddingRight: 16
    }), {
        flex: 1
    });
    a.add(e, {});
    a.add(s);
    a.add(f, {});
    var e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            paddingTop: 8,
            minWidth: 800,
            maxWidth: 800,
            allowShrinkX: !1,
            allowGrowX: !1
        }),
        s = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            minWidth: 44,
            minHeight: 44,
            maxWidth: 44,
            maxHeight: 44,
            marginLeft: 42,
            marginTop: 23
        }),
        nt = (new qx.ui.form.Button).set({
            label: r.tr(vii),
            appearance: vpi,
            allowShrinkX: !1,
            allowGrowX: !1,
            allowGrowY: !1,
            allowShrinkY: !1,
            show: aa,
            maxWidth: 44,
            gap: 1,
            maxHeight: 44,
            width: 44,
            height: 44,
            icon: rvt,
            alignY: n,
            alignX: t
        });
    return nt.objid = tdi, s.add(nt), d = (new qx.ui.basic.Label).set({
        rich: !0,
        value: r.tr(ey),
        font: bu,
        textColor: wt,
        paddingTop: 3,
        allowShrinkX: !1,
        wrap: !0,
        minWidth: 695,
        maxWidth: 695,
        marginTop: 2,
        marginLeft: 6
    }), d.objid = yyi, e.add(s), e.add(d), l.add((new qx.ui.basic.Label).set({
        value: r.tr(cfi),
        rich: !0,
        font: ft,
        paddingLeft: 12,
        paddingTop: 6,
        textColor: c,
        textAlign: t,
        minWidth: 800,
        marginBottom: 20
    })), l.add(a, {
        flex: 1
    }), l.add(e), y.add(l), y
}

function ll_options_server(n) {
    var e = qx.core.Init.getApplication(),
        t = n ? n : new qx.ui.container.Composite,
        i, u, f;
    return t.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 5
        })
    }), i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        marginLeft: 15,
        marginRight: 15
    }), i.objid = wp, u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignX: r
        }),
        marginRight: 15
    }), f = (new qx.ui.form.Button).set({
        label: e.tr(gsi)
    }), f.objid = leu, u.add(f), t.add((new qx.ui.basic.Label).set({
        value: e.tr(hrt),
        font: h,
        textColor: tt,
        marginLeft: 15,
        marginTop: 10
    })), t.add(i, {
        flex: 1
    }), t.add(u, {}), t
}

function ll_options_time(t) {
    var r = qx.core.Init.getApplication(),
        i = t ? t : new qx.ui.container.Composite,
        h, c, e, l, o, a, v, s, y, p, u, w, b, f, d;
    return i.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 5
        })
    }), h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: n
        }),
        marginLeft: 15
    }), c = (new qx.ui.form.SelectBox).set({
        width: 150,
        height: 25
    }), c.objid = wyt, h.add(c), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: n
        }),
        marginLeft: 15
    }), l = (new qx.ui.basic.Label).set({
        value: bf,
        textColor: tt
    }), l.objid = rri, e.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), e.add((new qx.ui.basic.Label).set({
        value: r.tr(lkr),
        textColor: tt
    })), e.add(l), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: n
        }),
        marginLeft: 15
    }), a = (new qx.ui.form.RadioButton).set({
        label: r.tr(bru),
        textColor: tt
    }), a.objid = lpi, v = (new qx.ui.basic.Label).set({
        value: bf,
        textColor: tt
    }), v.objid = eit, o.add(a), o.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), o.add(v), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: n
        }),
        marginLeft: 15
    }), y = (new qx.ui.form.RadioButton).set({
        label: r.tr(vot),
        textColor: tt
    }), y.objid = fht, p = (new qx.ui.basic.Label).set({
        value: bf,
        textColor: tt
    }), p.objid = tn, s.add(y), s.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), s.add(p), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: n
        }),
        marginLeft: 15
    }), f = (new qx.ui.form.RadioButton).set({
        label: r.tr(ygr),
        textColor: tt
    }), f.objid = hci, w = (new qx.ui.form.SelectBox).set({
        width: 50,
        height: 25
    }), w.objid = set, b = (new qx.ui.basic.Label).set({
        value: bf,
        textColor: tt
    }), b.objid = buu, u.add(f), u.add((new qx.ui.basic.Label).set({
        value: r.tr(ust),
        textColor: tt,
        marginLeft: 10
    })), u.add(w), u.add((new qx.ui.basic.Label).set({
        value: r.tr(bkt),
        textColor: tt
    })), u.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), u.add(b), f = (new qx.ui.form.RadioButton).set({
        label: r.tr(ceu),
        textColor: tt,
        marginLeft: 15
    }), f.objid = wbr, d = (new qx.ui.form.RadioButton).set({
        label: r.tr(lfu),
        textColor: tt,
        marginLeft: 15
    }), d.objid = hht, i.add((new qx.ui.basic.Label).set({
        value: r.tr(koi),
        font: k,
        textColor: tt
    })), i.add(h), i.add((new qx.ui.basic.Label).set({
        value: r.tr(wti),
        font: k,
        textColor: tt,
        marginTop: 20
    })), i.add(e), i.add(o), i.add(s), i.add(u), i.add((new qx.ui.basic.Label).set({
        value: r.tr(fuu),
        font: k,
        textColor: tt,
        marginTop: 20
    })), i.add(f), i.add(d), i
}

function ll_playerbar(u) {
    var st = qx.core.Init.getApplication(),
        ft = u ? u : new qx.ui.container.Composite,
        ht, ot, v, ct, lt, at, y, vt, f, g, nt, it, yt, rt, tt, a, pt, bt, s, o, kt, dt, gt;
    ft.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 127,
        height: 312,
        minHeight: 280,
        maxHeight: 328,
        minWidth: 127,
        maxWidth: 127,
        allowGrowX: !0
    });
    var ii = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({}),
            decorator: lvr
        }),
        et = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        s = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            marginLeft: 5
        }),
        ti = (new webfrontend.gui.widgets.PlayerLabel).set({
            rich: !0,
            selectable: !0,
            value: lh,
            appearance: d,
            textColor: onr,
            font: usr,
            maxWidth: 105,
            cursor: p,
            minHeight: 24
        });
    return ti.objid = uhr, s.add(ti, {
        left: 0,
        top: 0
    }), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 4,
            alignY: n
        }),
        marginLeft: 5,
        marginTop: 3,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            label: yst,
            rich: !0
        }),
        marginBottom: 2
    }), o.objid = ywi, ht = (new qx.ui.basic.Image).set({
        width: 16,
        height: 16,
        scale: !0,
        source: ytu
    }), ht.objid = trt, v = (new qx.ui.basic.Label).set({
        value: aou,
        font: i,
        fixedContentSize: !0,
        width: 95,
        height: 16,
        textColor: c
    }), v.objid = ev, o.add(ht), o.add(v), ot = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: n
        }),
        marginLeft: 5
    }), v = (new qx.ui.basic.Label).set({
        value: st.tr(hlt),
        font: bu,
        textColor: ni,
        height: 17,
        cursor: p
    }), v.objid = npr, ct = (new qx.ui.basic.Label).set({
        value: ut,
        font: bu,
        width: 60,
        height: 17,
        fixedContentSize: !0,
        textColor: ni,
        cursor: p
    }), ct.objid = aki, ot.add(v), ot.add(ct), lt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: n
        }),
        marginLeft: 5,
        maxHeight: null,
        height: 24,
        minHeight: null
    }), at = (new webfrontend.gui.widgets.AllianceLabel).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: w,
            alignX: t
        }),
        value: eoi,
        rich: !1,
        selectable: !0,
        appearance: d,
        textColor: ni,
        font: bu,
        fixedContentSize: !1,
        height: 24,
        cursor: p,
        toolTipText: tf,
        wrap: !1,
        paddingBottom: 3,
        allowGrowY: !0
    }), at.objid = vnt, lt.add(at), y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Basic).set({}),
        marginTop: 2,
        marginLeft: 3,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            rich: !0,
            label: sur
        })
    }), y.objid = pw, f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        })
    }), g = (new qx.ui.basic.Label).set({
        value: eh,
        textColor: c,
        font: l,
        marginRight: 1,
        fixedContentSize: !0,
        width: 32,
        height: 17
    }), g.objid = pa, nt = (new webfrontend.gui.widgets.QuickBuyButton).set({
        width: 22,
        height: 23,
        marginTop: 9,
        marginLeft: 3,
        ItemCategory: 7
    }), nt.objid = fli, tt = (new qx.ui.basic.Label).set({
        value: eh,
        textColor: c,
        font: l,
        marginRight: 1,
        fixedContentSize: !0,
        width: 32,
        height: 17
    }), tt.objid = tru, vt = (new webfrontend.gui.widgets.QuickBuyButton).set({
        width: 22,
        height: 23,
        marginTop: 9,
        ItemCategory: 5
    }), vt.objid = ukt, f.add(g), f.add(nt), f.add((new qx.ui.basic.Label).set({
        value: rs,
        textColor: kot,
        font: k,
        fixedContentSize: !0,
        width: 5,
        height: 18
    })), f.add(tt), f.add(vt), y.add((new qx.ui.basic.Image).set({
        source: ncr
    })), y.add((new qx.ui.basic.Image).set({
        source: str,
        width: 20,
        height: 20,
        scale: !0
    }), {
        left: 2,
        top: 2
    }), y.add(f, {
        left: 3,
        top: 15
    }), f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: w,
            spacing: 2
        }),
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            rich: !0,
            label: adt,
            width: 320
        }),
        marginTop: 1
    }), f.objid = uar, g = (new qx.ui.basic.Label).set({
        textColor: c,
        font: l,
        fixedContentSize: !0,
        width: 73,
        height: 17,
        value: ut,
        marginTop: 2,
        marginLeft: -2
    }), g.objid = iwr, nt = (new webfrontend.gui.widgets.QuickBuyButton).set({
        width: 22,
        marginTop: 3,
        ItemCategory: 4
    }), nt.objid = kei, f.add((new qx.ui.basic.Image).set({
        source: rvi,
        scale: !0
    })), f.add(g), f.add(nt), it = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: w
        }),
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            label: ebr,
            rich: !0
        })
    }), it.objid = huu, yt = (new qx.ui.basic.Label).set({
        textColor: c,
        font: l,
        marginTop: 2,
        fixedContentSize: !0,
        width: 80,
        height: 17,
        value: ut
    }), yt.objid = cur, it.add((new qx.ui.basic.Image).set({
        source: wbi
    })), it.add(yt), rt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: w
        }),
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            rich: !0,
            label: duu
        })
    }), rt.objid = iyr, tt = (new qx.ui.basic.Label).set({
        value: pnr,
        textColor: wt,
        font: l,
        marginTop: 3,
        fixedContentSize: !0,
        width: 80,
        height: 17
    }), tt.objid = hir, rt.add((new qx.ui.basic.Image).set({
        source: soi
    })), rt.add(tt), a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        allowGrowX: !0,
        paddingLeft: 2,
        paddingRight: 13,
        marginTop: -3,
        marginBottom: 3,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            rich: !0
        }),
        paddingBottom: 0,
        width: 124,
        minWidth: null,
        maxWidth: 124
    }), a.objid = atr, pt = (new qx.ui.basic.Label).set({
        textColor: c,
        font: h,
        fixedContentSize: !0,
        width: 57,
        height: 20,
        alignY: n,
        marginBottom: 8,
        value: ut,
        paddingTop: 3,
        paddingLeft: 1
    }), pt.objid = kat, bt = (new webfrontend.gui.widgets.QuickBuyButton).set({
        width: 22,
        ItemCategory: 5,
        alignX: r,
        alignY: b,
        height: null,
        paddingTop: 5
    }), bt.objid = awt, a.add((new qx.ui.basic.Image).set({
        source: cd,
        scale: !0,
        width: 20,
        height: 20
    })), a.add(pt, {}), a.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), a.add(bt), e.add(s), e.add(o), e.add(ot), e.add(lt), e.add(y), e.add(f), e.add(it), e.add(rt), e.add(a), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 2
        }),
        allowGrowX: !0,
        paddingLeft: 5,
        paddingRight: 13,
        marginTop: 5,
        maxWidth: 124,
        width: 124
    }), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        toolTip: (new webfrontend.gui.widgets.FundsToolTip).set({}),
        width: null
    }), o.objid = kar, kt = (new qx.ui.basic.Label).set({
        value: ut,
        textColor: c,
        font: h,
        fixedContentSize: !0,
        width: 57,
        height: 18,
        alignY: n,
        marginBottom: 6
    }), kt.objid = out, o.add((new qx.ui.basic.Image).set({
        source: bc
    })), o.add(kt), dt = (new qx.ui.form.Button).set({
        icon: td,
        allowShrinkY: !0,
        allowGrowY: !1,
        toolTipText: st.tr(wg),
        appearance: si
    }), dt.objid = fki, s.add(o), s.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), s.add(dt), gt = (new qx.ui.form.Button).set({
        label: st.tr(fy),
        height: 26,
        allowShrinkY: !0,
        allowGrowY: !1,
        appearance: si,
        marginLeft: 5,
        marginRight: 7,
        marginTop: 10,
        width: 112,
        maxWidth: 112
    }), gt.objid = ayt, et.add(e), et.add(s), et.add(gt), ft.add(ii, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), ft.add(et), ft
}

function ll_playerinfo_tab_challenge(i) {
    var u = i ? i : new qx.ui.container.Composite,
        f, e, o, r;
    u.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        paddingTop: 6,
        paddingRight: 10,
        paddingBottom: 8,
        paddingLeft: 8
    });
    f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    });
    f.add((new qx.ui.basic.Image).set({
        source: ik
    }));
    f.add((new qx.ui.core.Widget).set({
        decorator: vc
    }), {
        flex: 1
    });
    f.add((new qx.ui.basic.Image).set({
        source: bg
    }));
    e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignX: t,
            alignY: n
        })
    });
    e.add((new qx.ui.basic.Image).set({
        source: rl,
        width: 300,
        height: 300,
        scale: !0
    }));
    o = (new qx.ui.container.Scroll).set({
        allowGrowX: !0,
        allowGrowY: !0
    });
    r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Flow).set({
            spacingX: 2,
            spacingY: 2
        }),
        allowGrowX: !0,
        allowGrowY: !0
    });
    r.objid = gh;
    var s = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({})
        }),
        h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({})
        }),
        c = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({})
        }),
        l = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({})
        });
    return r.add(s), r.add(h), r.add(c), r.add(l), o.add(r), u.add(f, {
        right: 0,
        left: 0
    }), u.add(e, {
        left: 4,
        right: 4,
        top: 4,
        bottom: 8
    }), u.add(o, {
        left: 3,
        right: 3,
        top: 4,
        bottom: 8
    }), u
}

function ll_playerinfo_tab_challenge_item(n) {
    var i = n ? n : new qx.ui.container.Composite,
        r, u, f, e, o, s;
    return i.set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        width: 206,
        height: 310,
        decorator: to,
        maxWidth: 206,
        maxHeight: 310,
        minWidth: 206,
        minHeight: 310,
        paddingTop: 8,
        paddingLeft: 17,
        paddingRight: 17,
        paddingBottom: 8
    }), r = (new qx.ui.basic.Image).set({
        marginTop: 10,
        source: se
    }), r.objid = hpi, u = (new qx.ui.basic.Label).set({
        value: vg,
        font: et,
        textColor: sr,
        toolTipText: dt,
        cssContent: ei,
        marginTop: 3
    }), u.objid = ug, f = (new qx.ui.basic.Label).set({
        toolTipText: dt,
        value: dt,
        font: h,
        textColor: c,
        cssContent: ei,
        textAlign: t
    }), f.objid = eo, e = (new qx.ui.basic.Label).set({
        value: rfi,
        font: et,
        textColor: sr,
        cssContent: ei
    }), e.objid = bnr, o = (new qx.ui.basic.Label).set({
        value: og,
        font: l
    }), o.objid = pe, s = (new qx.ui.basic.Label).set({
        value: no,
        font: k
    }), s.objid = dr, i.add(r), i.add(u), i.add(f), i.add(e), i.add(o), i.add(s), i
}

function ll_playerinfo_tab_endgame(i) {
    var u = i ? i : new qx.ui.container.Composite,
        f, e, o, r;
    u.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        paddingTop: 6,
        paddingRight: 10,
        paddingBottom: 8,
        paddingLeft: 8
    });
    f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    });
    f.add((new qx.ui.basic.Image).set({
        source: ik
    }));
    f.add((new qx.ui.core.Widget).set({
        decorator: vc
    }), {
        flex: 1
    });
    f.add((new qx.ui.basic.Image).set({
        source: bg
    }));
    e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignX: t,
            alignY: n
        })
    });
    e.add((new qx.ui.basic.Image).set({
        source: rl,
        width: 300,
        height: 300,
        scale: !0
    }));
    o = (new qx.ui.container.Scroll).set({
        allowGrowX: !0,
        allowGrowY: !0
    });
    r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Flow).set({
            spacingX: 2,
            spacingY: 2
        }),
        allowGrowX: !0,
        allowGrowY: !0
    });
    r.objid = gh;
    var s = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({})
        }),
        h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({})
        }),
        c = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({})
        }),
        l = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({})
        });
    return r.add(s), r.add(h), r.add(c), r.add(l), o.add(r), u.add(f, {
        right: 0,
        left: 0
    }), u.add(e, {
        left: 4,
        right: 4,
        top: 4,
        bottom: 8
    }), u.add(o, {
        left: 3,
        right: 3,
        top: 4,
        bottom: 8
    }), u
}

function ll_playerinfo_tab_endgame_item(n) {
    var i = n ? n : new qx.ui.container.Composite,
        r, u, f, e, o, s;
    return i.set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        width: 206,
        height: 310,
        decorator: to,
        maxWidth: 206,
        maxHeight: 310,
        minWidth: 206,
        minHeight: 310,
        paddingTop: 8,
        paddingLeft: 17,
        paddingRight: 17,
        paddingBottom: 8
    }), r = (new qx.ui.basic.Image).set({
        marginTop: 10,
        source: se
    }), r.objid = ccr, u = (new qx.ui.basic.Label).set({
        value: npt,
        font: y,
        textColor: sr,
        marginTop: 3,
        textAlign: t,
        rich: !0,
        wrap: !1
    }), u.objid = wrr, f = (new qx.ui.basic.Label).set({
        value: rli,
        font: et,
        textColor: sr,
        toolTipText: dt,
        cssContent: ei
    }), f.objid = ebi, e = (new qx.ui.basic.Label).set({
        toolTipText: dt,
        value: dt,
        font: h,
        textColor: c,
        marginBottom: 6,
        cssContent: ei,
        allowGrowY: !0,
        textAlign: t
    }), e.objid = eo, o = (new qx.ui.basic.Label).set({
        value: wiu,
        font: l
    }), o.objid = pe, s = (new qx.ui.basic.Label).set({
        value: no,
        font: k
    }), s.objid = dr, i.add(r), i.add(u), i.add(f), i.add(e), i.add(o), i.add(s), i
}

function ll_playerinfo_tab_general(n) {
    var r = qx.core.Init.getApplication(),
        w = n ? n : new qx.ui.container.Composite,
        b, s, k, h, d, g, nt, y, a, tt, p, i, rt, ut, e, ft, u, f;
    w.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        paddingTop: 4,
        paddingRight: 4,
        paddingBottom: 4,
        paddingLeft: 4,
        maxWidth: null,
        marginRight: 0
    });
    var et = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            innerDecorator: it,
            contentPaddingLeft: 5,
            contentPaddingRight: 2,
            contentPaddingTop: 5,
            contentPaddingBottom: 5
        }),
        ot = (new qx.ui.container.Scroll).set({
            scrollbarX: fi,
            height: null
        }),
        o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 4
            })
        }),
        v = (new qx.ui.groupbox.GroupBox).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            contentPaddingTop: 14,
            contentPaddingRight: 10,
            contentPaddingLeft: 10,
            contentPaddingBottom: 10
        });
    return v.objid = hsi, b = (new qx.ui.basic.Image).set({
        scale: !0,
        source: beu,
        width: 225,
        height: 224
    }), b.objid = uhi, i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 6
        })
    }), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Grid).set({
            spacingX: 10,
            spacingY: 6
        })
    }), u.objid = vtt, f = (new qx.ui.basic.Label).set({
        value: r.tr(dgt)
    }), f.objid = tni, s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5
        }),
        marginBottom: 6,
        decorator: it
    }), s.objid = efi, k = (new qx.ui.basic.Image).set({
        source: se,
        marginLeft: 6
    }), k.objid = ert, h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 5
        }),
        marginBottom: 6,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10
    }), d = (new qx.ui.basic.Label).set({
        textColor: c,
        font: l,
        rich: !0,
        width: 405,
        paddingBottom: 4,
        value: oai
    }), d.objid = clr, g = (new qx.ui.basic.Label).set({
        textColor: c,
        font: ge,
        rich: !0,
        width: 405,
        paddingBottom: 6,
        value: wd
    }), g.objid = ppt, nt = (new qx.ui.basic.Label).set({
        textColor: c,
        font: ge,
        rich: !0,
        width: 405,
        value: ort
    }), nt.objid = fdr, h.add(d), h.add(g), h.add(nt), s.add(k), s.add(h), i.add(u), i.add(f), i.add(s), v.add(b), v.add(i, {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }), y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        marginBottom: 10
    }), y.objid = idr, a = (new qx.ui.groupbox.GroupBox).set({
        layout: (new qx.ui.layout.VBox).set({}),
        contentPadding: 10
    }), a.objid = bbi, tt = (new qx.ui.basic.Label).set({
        rich: !0,
        paddingLeft: 4,
        paddingTop: 4,
        paddingRight: 4,
        paddingBottom: 4,
        value: wd
    }), tt.objid = ye, p = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), e = (new webfrontend.ui.SoundButton).set({
        label: r.tr(iy)
    }), e.objid = yer, p.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), p.add(e), a.add(tt), a.add(p), y.add(a), i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 15
        })
    }), rt = (new webfrontend.ui.SoundButton).set({
        label: r.tr(goi),
        toolTipText: r.tr(vwt),
        minWidth: 100
    }), rt.objid = rg, ut = (new webfrontend.ui.SoundButton).set({
        label: r.tr(eyi),
        minWidth: 100
    }), ut.objid = her, e = (new webfrontend.ui.SoundButton).set({
        label: r.tr(bri),
        minWidth: 100
    }), e.objid = ilr, ft = (new webfrontend.ui.SoundButton).set({
        label: r.tr(uvi),
        minWidth: 100
    }), ft.objid = fhi, i.add((new qx.ui.core.Spacer).set({}), {
        flex: 2
    }), i.add(rt), i.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), i.add(ut), i.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), i.add(e), i.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), i.add(ft), i.add((new qx.ui.core.Spacer).set({}), {
        flex: 2
    }), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignX: t
        })
    }), f = (new qx.ui.basic.Label).set({
        value: r.tr(sct),
        appearance: ty
    }), f.objid = rki, u.add(f, {}), o.add(v), o.add(y, {
        flex: 1
    }), o.add(i), o.add(u), ot.add(o), et.add(ot, {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }), w.add(et, {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }), w
}

function ll_playerinfo_tab_legacy(i) {
    var a = qx.core.Init.getApplication(),
        u = i ? i : new qx.ui.container.Composite,
        f, r, e, o, s, h;
    u.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        paddingLeft: 8,
        paddingRight: 8
    });
    var c = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            marginTop: 132,
            decorator: hwi
        }),
        l = (new qx.ui.container.Scroll).set({
            zIndex: 12
        }),
        r = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        });
    return r.objid = gh, l.add(r, {
        left: 0
    }), c.add(l, {
        left: 0,
        right: 0,
        top: 4,
        bottom: 0
    }), f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: -7
    }), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        alignX: t
    }), r.objid = svr, e = (new qx.ui.basic.Label).set({
        value: dui,
        alignY: n,
        alignX: t,
        font: ckr,
        textColor: go,
        paddingBottom: 7
    }), e.objid = lbi, o = (new qx.ui.basic.Label).set({
        value: oki,
        textColor: go,
        alignX: t,
        alignY: n,
        paddingBottom: 6
    }), o.objid = dst, s = (new qx.ui.basic.Label).set({
        value: lyi,
        textColor: vl,
        alignX: t,
        alignY: n
    }), s.objid = vci, h = (new qx.ui.basic.Label).set({
        alignX: t,
        alignY: n,
        value: gdr,
        textColor: vl
    }), h.objid = hni, r.add((new qx.ui.basic.Label).set({
        value: a.tr(llt),
        textColor: go,
        alignY: n,
        alignX: t
    })), r.add(e), r.add(o), r.add(s), r.add(h), f.add((new qx.ui.basic.Image).set({
        source: yci
    }), {
        top: 15
    }), f.add(r, {
        right: 30,
        top: 30
    }), u.add(c, {
        left: 0,
        right: 0
    }), u.add(f, {
        left: 0,
        right: 0
    }), u
}

function ll_playerinfo_tab_misc_item(n) {
    var i = n ? n : new qx.ui.container.Composite,
        r, u, f, e, o, s;
    return i.set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        width: 206,
        height: 310,
        decorator: to,
        maxWidth: 206,
        maxHeight: 310,
        minWidth: 206,
        minHeight: 310,
        paddingTop: 8,
        paddingLeft: 17,
        paddingRight: 17,
        paddingBottom: 19
    }), r = (new qx.ui.basic.Image).set({
        marginTop: 10,
        source: se
    }), r.objid = kiu, u = (new qx.ui.basic.Label).set({
        value: vg,
        font: et,
        textColor: sr,
        toolTipText: dt,
        cssContent: ei,
        marginTop: 3
    }), u.objid = ug, f = (new qx.ui.basic.Label).set({
        toolTipText: dt,
        value: dt,
        font: h,
        textColor: c,
        cssContent: ei,
        textAlign: t
    }), f.objid = eo, e = (new qx.ui.basic.Label).set({
        value: cor,
        font: et,
        textColor: sr,
        cssContent: ei
    }), e.objid = pnt, o = (new qx.ui.basic.Label).set({
        value: og,
        font: l
    }), o.objid = pe, s = (new qx.ui.basic.Label).set({
        value: no,
        font: k
    }), s.objid = dr, i.add(r), i.add(u), i.add(f), i.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), i.add(e), i.add(o), i.add(s), i
}

function ll_poipage(t) {
    var s = qx.core.Init.getApplication(),
        i = t ? t : new qx.ui.container.Composite,
        r, f, e, u, o;
    return i.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 4
        }),
        decorator: kk,
        paddingLeft: 3,
        paddingTop: 3,
        paddingRight: 8,
        paddingBottom: 6,
        marginRight: 0
    }), r = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        marginTop: 2,
        marginLeft: 2,
        marginBottom: 4,
        innerDecorator: ci,
        contentPaddingRight: 4,
        contentPaddingTop: 4,
        contentPaddingBottom: 6,
        contentPaddingLeft: 6
    }), f = (new qx.ui.basic.Label).set({
        value: co,
        textColor: c,
        font: l,
        marginRight: 10,
        allowGrowX: !0,
        marginLeft: 3,
        marginBottom: 0,
        rich: !0
    }), f.objid = nc, e = (new qx.ui.form.Button).set({
        icon: vn,
        appearance: ht,
        height: 26,
        width: 25,
        toolTipText: s.tr(tp),
        marginRight: 2,
        marginTop: 1
    }), e.objid = hy, r.add(f, {
        flex: 1
    }), r.add(e), u = (new qx.ui.container.Scroll).set({
        scrollbarX: fi,
        height: null,
        minHeight: 40
    }), u.objid = rtt, o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    }), o.objid = uw, u.add(o), i.add(r), i.add(u), i
}

function ll_poipage_item(t) {
    var r = t ? t : new qx.ui.container.Composite,
        u, f, e;
    return r.set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: n
        }),
        paddingBottom: 6,
        paddingRight: 6,
        paddingTop: 6,
        paddingLeft: 6,
        marginLeft: 10,
        marginRight: 10
    }), u = (new qx.ui.basic.Label).set({
        value: fs,
        paddingLeft: 18,
        font: i,
        rich: !0
    }), u.objid = tw, f = (new webfrontend.gui.widgets.CoordinatesLabel).set({
        rich: !0,
        selectable: !0,
        appearance: d,
        cursor: p,
        value: hr
    }), f.objid = bir, e = (new qx.ui.form.Button).set({
        icon: vp,
        appearance: ht,
        height: 26,
        width: 25,
        allowGrowY: !1
    }), e.objid = hri, r.add(u), r.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), r.add(f), r.add(e), r
}

function ll_pup_10yccta(n) {
    var e = qx.core.Init.getApplication(),
        r = n ? n : new qx.ui.container.Composite;
    r.set({
        layout: (new qx.ui.layout.Basic).set({}),
        allowGrowX: !1,
        allowGrowY: !1
    });
    var i = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({})
        }),
        f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignY: b,
                alignX: t
            }),
            textColor: bt
        }),
        o = (new qx.ui.form.Button).set({
            allowGrowX: !1,
            label: e.tr(thi)
        });
    return o.objid = vr, f.add((new qx.ui.basic.Label).set({
        value: e.tr(tli),
        font: ip,
        rich: !0,
        textAlign: t,
        marginBottom: 10,
        maxWidth: 600,
        decorator: sv,
        textColor: u
    })), f.add(o), i.add((new qx.ui.basic.Image).set({
        source: hsr,
        scale: !0,
        allowShrinkX: !0,
        allowShrinkY: !0,
        width: 1061,
        minWidth: 1061,
        maxWidth: 1061,
        minHeight: 528,
        height: 528,
        maxHeight: 528
    }), {
        left: 2,
        top: 2,
        right: 2,
        bottom: 2
    }), i.add((new qx.ui.core.Widget).set({
        decorator: cf
    }), {
        left: 2,
        right: 2,
        top: ih,
        bottom: 2
    }), i.add((new qx.ui.core.Widget).set({
        decorator: er
    }), {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }), i.add(f, {
        top: 20,
        right: 20,
        left: 20,
        bottom: 20
    }), r.add(i), r
}

function ll_pup_20ycnc(n) {
    var e = qx.core.Init.getApplication(),
        r = n ? n : new qx.ui.container.Composite;
    r.set({
        layout: (new qx.ui.layout.Basic).set({}),
        allowGrowX: !1,
        allowGrowY: !1
    });
    var i = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({})
        }),
        f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignY: b,
                alignX: t
            }),
            textColor: bt
        }),
        o = (new qx.ui.form.Button).set({
            allowGrowX: !1,
            label: e.tr(ivi)
        });
    return o.objid = vr, f.add((new qx.ui.basic.Label).set({
        value: e.tr(vai),
        font: ip,
        rich: !0,
        textAlign: t,
        marginBottom: 10,
        maxWidth: 600,
        decorator: sv,
        textColor: u
    })), f.add(o), i.add((new qx.ui.basic.Image).set({
        source: nct,
        scale: !0,
        allowShrinkX: !0,
        allowShrinkY: !0,
        width: 1061,
        minWidth: 1061,
        maxWidth: 1061,
        minHeight: 528,
        height: 528,
        maxHeight: 528
    }), {
        left: 2,
        top: 2,
        right: 2,
        bottom: 2
    }), i.add((new qx.ui.core.Widget).set({
        decorator: cf
    }), {
        left: 2,
        right: 2,
        top: ih,
        bottom: 2
    }), i.add((new qx.ui.core.Widget).set({
        decorator: er
    }), {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }), i.add(f, {
        top: 20,
        right: 20,
        left: 20,
        bottom: 20
    }), r.add(i), r
}

function ll_pup_eventinfo(i) {
    var l = qx.core.Init.getApplication(),
        a = i ? i : new qx.ui.container.Composite,
        u, p, k, d, r, g, nt, tt, s, it, c, e, o, rt;
    a.set({
        layout: (new qx.ui.layout.Basic).set({}),
        allowGrowX: !1,
        allowGrowY: !1
    });
    u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    });
    p = (new qx.ui.basic.Image).set({
        source: hgr,
        scale: !0,
        allowShrinkX: !0,
        allowShrinkY: !0,
        width: 744,
        minWidth: 744,
        maxWidth: 744,
        minHeight: 303,
        height: 303,
        maxHeight: 303
    });
    p.objid = rgr;
    k = (new qx.ui.core.Widget).set({
        decorator: cf
    });
    k.objid = drt;
    d = (new qx.ui.core.Widget).set({
        decorator: er
    });
    d.objid = tkt;
    r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignY: b,
            alignX: t
        }),
        textColor: bt,
        enabled: !0,
        visibility: v
    });
    r.objid = oot;
    g = (new qx.ui.basic.Label).set({
        value: vut,
        font: syi
    });
    g.objid = wbt;
    nt = (new qx.ui.basic.Label).set({
        value: ahi,
        font: ts
    });
    nt.objid = swi;
    tt = (new qx.ui.basic.Label).set({
        value: you,
        marginBottom: 10,
        rich: !0,
        textAlign: t,
        maxWidth: 520
    });
    tt.objid = hgt;
    s = (new qx.ui.basic.Label).set({
        value: lru,
        font: y,
        rich: !0,
        textAlign: t,
        marginBottom: 10
    });
    s.objid = vtr;
    it = (new qx.ui.form.Button).set({
        allowGrowX: !1,
        label: l.tr(nl)
    });
    it.objid = vr;
    r.add(g);
    r.add(nt);
    r.add(tt);
    r.add(s);
    r.add(it);
    c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignY: w,
            alignX: t
        }),
        textColor: bt
    });
    c.objid = uui;
    var ut = (new qx.ui.container.Scroll).set({
            alignX: t,
            alignY: n
        }),
        f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignY: w,
                alignX: t
            })
        }),
        s = (new qx.ui.basic.Label).set({
            value: obr,
            font: utr
        });
    return s.objid = is, e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t,
            alignY: n
        }),
        font: h
    }), e.objid = voi, e.add((new qx.ui.basic.Label).set({
        value: bk
    })), e.add((new qx.ui.basic.Label).set({
        value: ftt
    })), e.add((new qx.ui.basic.Label).set({
        value: cb
    })), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t,
            alignY: n
        }),
        font: h
    }), o.objid = enr, o.add((new qx.ui.basic.Label).set({
        value: bk
    })), o.add((new qx.ui.basic.Label).set({
        value: ftt
    })), o.add((new qx.ui.basic.Label).set({
        value: cb
    })), f.add(s), f.add((new qx.ui.basic.Label).set({
        value: l.tr(nyi),
        textColor: dtt,
        paddingTop: 15
    })), f.add(e), f.add((new qx.ui.basic.Label).set({
        value: l.tr(tst),
        textColor: dtt,
        paddingTop: 15
    })), f.add(o), ut.add(f), rt = (new qx.ui.form.Button).set({
        allowGrowX: !1,
        label: l.tr(nl),
        marginTop: 23
    }), rt.objid = api, c.add(ut), c.add(rt), u.add(p, {
        left: 2,
        top: 2,
        right: 2,
        bottom: 2
    }), u.add(k, {
        left: 2,
        right: 2,
        top: ih,
        bottom: 2
    }), u.add(d, {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }), u.add(r, {
        top: 20,
        right: 20,
        left: 20,
        bottom: 20
    }), u.add(c, {
        left: 300,
        bottom: 15,
        top: 55,
        right: 65
    }), a.add(u), a
}

function ll_raf_send_mail_preview(n) {
    var f = qx.core.Init.getApplication(),
        o = n ? n : new qx.ui.container.Composite,
        e, h, t, l, a;
    o.set({
        layout: (new qx.ui.layout.Canvas).set({})
    });
    var r = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
            decorator: ii
        }),
        s = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 3
            }),
            marginBottom: 3
        }),
        v = (new qx.ui.basic.Label).set({});
    v.objid = vni;
    s.add((new qx.ui.basic.Label).set({
        value: f.tr(nh),
        font: i,
        textColor: c
    }));
    s.add(v);
    e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    h = (new qx.ui.basic.Label).set({});
    h.objid = yvr;
    e.add((new qx.ui.basic.Label).set({
        value: f.tr(kn),
        font: i,
        textColor: c
    }));
    e.add(h);
    var u = (new qx.ui.container.Scroll).set({
            marginTop: 4,
            paddingTop: 4,
            paddingLeft: 4,
            paddingRight: 4,
            paddingBottom: 4,
            height: null,
            marginRight: 8,
            marginBottom: 8
        }),
        t = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        y = (new qx.ui.basic.Label).set({
            rich: !0
        });
    return y.objid = uft, u.add(t), u.add((new qx.ui.basic.Label).set({})), u.add((new qx.ui.basic.Image).set({})), u.add((new qx.ui.basic.Label).set({})), u.add(y), t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10
    }), l = (new qx.ui.form.Button).set({
        label: f.tr(kd),
        width: 120
    }), l.objid = sni, a = (new qx.ui.form.Button).set({
        label: f.tr(yr),
        width: 120
    }), a.objid = tri, t.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), t.add(l), t.add((new qx.ui.core.Spacer).set({}), {
        flex: 2
    }), t.add(a), t.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), r.add((new qx.ui.basic.Label).set({
        value: f.tr(cft),
        marginBottom: 10
    })), r.add(s), r.add(e), r.add(u), r.add((new qx.ui.core.Spacer).set({})), r.add(t), o.add(r), o
}

function ll_random_reward_widget(n) {
    var h = qx.core.Init.getApplication(),
        r = n ? n : new qx.ui.container.Composite,
        f, e, l, a, o, v, y, s, p, w, b;
    return r.set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        minHeight: 300,
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10
    }), f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignX: t,
            spacing: 4
        }),
        marginBottom: 10
    }), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t,
            spacing: 5
        }),
        decorator: wr,
        paddingTop: 1,
        paddingLeft: 4,
        paddingRight: 4,
        paddingBottom: 4
    }), e.objid = ldi, l = (new qx.ui.basic.Label).set({
        textColor: u,
        textAlign: t,
        font: i,
        paddingTop: 1
    }), l.objid = tvi, a = (new qx.ui.basic.Image).set({
        width: 120,
        height: 96,
        scale: !0,
        source: null
    }), a.objid = pru, e.add(l), e.add(a), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t,
            spacing: 5
        }),
        decorator: wr,
        paddingTop: 1,
        paddingLeft: 4,
        paddingBottom: 4,
        paddingRight: 4
    }), o.objid = wyi, v = (new qx.ui.basic.Label).set({
        textColor: u,
        font: i,
        paddingTop: 1
    }), v.objid = pdt, y = (new qx.ui.basic.Image).set({
        width: 120,
        height: 96,
        scale: !0
    }), y.objid = ydr, o.add(v), o.add(y), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t,
            spacing: 5
        }),
        decorator: wr,
        paddingTop: 1,
        paddingLeft: 4,
        paddingBottom: 4,
        paddingRight: 4
    }), s.objid = dhi, p = (new qx.ui.basic.Label).set({
        textColor: u,
        paddingTop: 1,
        font: i
    }), p.objid = fft, w = (new qx.ui.basic.Image).set({
        width: 120,
        height: 96,
        scale: !0
    }), w.objid = hpr, s.add(p), s.add(w), f.add(e), f.add(o), f.add(s), b = (new qx.ui.form.Button).set({
        label: h.tr(tr),
        maxWidth: 100
    }), b.objid = gst, r.add((new qx.ui.basic.Label).set({
        value: h.tr(ear),
        marginBottom: 10,
        textColor: c,
        maxWidth: 390,
        rich: !0,
        textAlign: t
    })), r.add(f), r.add((new qx.ui.basic.Label).set({
        value: h.tr(idt),
        textColor: c,
        maxWidth: 390,
        rich: !0,
        textAlign: t
    })), r.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), r.add(b), r
}

function ll_rankings_overlay(i) {
    var f = qx.core.Init.getApplication(),
        e = i ? i : new qx.ui.container.Composite,
        u, o, s, h, c, r, l, a, v, y;
    return e.set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        decorator: dn,
        paddingBottom: 3
    }), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        width: 704,
        maxWidth: 704,
        paddingLeft: 15,
        paddingRight: 15,
        decorator: hrr
    }), o = (new webfrontend.ui.SoundButton).set({
        label: f.tr(pr),
        font: st,
        allowGrowY: !1,
        minWidth: 150,
        minHeight: 35
    }), o.objid = bv, s = (new webfrontend.ui.SoundButton).set({
        label: f.tr(gr),
        font: st,
        allowGrowY: !1,
        minWidth: 150,
        minHeight: 35
    }), s.objid = ek, u.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), u.add(o), u.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), u.add(s), u.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        paddingTop: 10,
        width: 704,
        maxWidth: 704,
        decorator: hf
    }), c = (new qx.ui.tabview.TabView).set({
        marginLeft: 5,
        marginRight: 5
    }), c.objid = fd, h.add(c, {
        flex: 1
    }), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 3,
        width: 704,
        maxWidth: 704,
        paddingBottom: 8,
        decorator: hf
    }), r.objid = le, l = (new qx.ui.form.TextField).set({
        placeholder: f.tr(wb),
        maxLength: 7,
        width: 150,
        marginLeft: 5,
        marginRight: 30
    }), l.objid = yn, a = (new qx.ui.form.TextField).set({
        placeholder: f.tr(bl),
        maxLength: 20,
        marginLeft: 5,
        width: 150
    }), a.objid = ll, v = (new webfrontend.ui.SoundButton).set({
        label: f.tr(uk),
        allowGrowY: !1
    }), v.objid = il, y = (new webfrontend.ui.SoundButton).set({
        label: f.tr(nsu),
        allowGrowY: !1
    }), y.objid = ost, r.add((new qx.ui.basic.Image).set({
        source: lw
    })), r.add(l), r.add((new qx.ui.basic.Image).set({
        source: ag
    })), r.add(a), r.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), r.add(v), r.add((new qx.ui.core.Spacer).set({
        minWidth: 12
    })), r.add(y), e.add(u), e.add(h, {
        flex: 1
    }), e.add(r), e.add((new qx.ui.core.Widget).set({
        width: 704,
        maxWidth: 704,
        height: 11,
        decorator: kw
    })), e
}

function ll_rankings_overlay_with_hof(i) {
    var f = qx.core.Init.getApplication(),
        e = i ? i : new qx.ui.container.Composite,
        r, o, s, h, c, l, u, a, v, y;
    return e.set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        decorator: dn,
        paddingBottom: 3
    }), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        width: 704,
        maxWidth: 704,
        paddingLeft: 15,
        paddingRight: 15,
        decorator: kht
    }), o = (new webfrontend.ui.SoundButton).set({
        label: f.tr(pr),
        font: st,
        allowGrowY: !1,
        minWidth: 150,
        minHeight: 35
    }), o.objid = bv, s = (new webfrontend.ui.SoundButton).set({
        label: f.tr(gr),
        font: st,
        allowGrowY: !1,
        minWidth: 150,
        minHeight: 35
    }), s.objid = ek, h = (new webfrontend.ui.SoundButton).set({
        label: f.tr(rru),
        font: st,
        allowGrowY: !1,
        minWidth: 150,
        minHeight: 35
    }), h.objid = sbi, r.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), r.add(o), r.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), r.add(s), r.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), r.add(h), r.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        paddingTop: 10,
        width: 704,
        maxWidth: 704,
        decorator: hf
    }), l = (new qx.ui.tabview.TabView).set({
        marginLeft: 5,
        marginRight: 5
    }), l.objid = fd, c.add(l, {
        flex: 1
    }), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 3,
        width: 704,
        maxWidth: 704,
        paddingBottom: 8,
        decorator: hf
    }), u.objid = le, a = (new qx.ui.form.TextField).set({
        placeholder: f.tr(wb),
        maxLength: 7,
        width: 150,
        marginLeft: 5,
        marginRight: 30
    }), a.objid = yn, v = (new qx.ui.form.TextField).set({
        placeholder: f.tr(bl),
        maxLength: 20,
        marginLeft: 5,
        width: 150
    }), v.objid = ll, y = (new webfrontend.ui.SoundButton).set({
        label: f.tr(uk),
        allowGrowY: !1
    }), y.objid = il, u.add((new qx.ui.basic.Image).set({
        source: lw
    })), u.add(a), u.add((new qx.ui.basic.Image).set({
        source: ag
    })), u.add(v), u.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), u.add(y), e.add(r), e.add(c, {
        flex: 1
    }), e.add(u), e.add((new qx.ui.core.Widget).set({
        width: 704,
        maxWidth: 704,
        height: 11,
        decorator: kw
    })), e
}

function ll_region_city_list(n) {
    var s = qx.core.Init.getApplication(),
        r = n ? n : new qx.ui.container.Composite,
        u, e, f, o;
    return r.set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        allowGrowX: !1
    }), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 128,
        height: 96
    }), u.objid = pvr, e = (new qx.ui.core.Widget).set({
        decorator: pcr,
        width: 128,
        height: 96
    }), e.objid = fwi, u.add(e), f = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t,
            spacing: 2
        }),
        width: 130,
        contentPaddingBottom: 6,
        innerDecorator: or,
        contentPaddingRight: 6,
        contentPaddingLeft: 6,
        contentPaddingTop: 4
    }), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t,
            spacing: 2
        }),
        paddingLeft: 3,
        paddingRight: 3
    }), o.objid = htu, f.add((new qx.ui.basic.Label).set({
        value: s.tr(cci),
        textAlign: t,
        font: i,
        textColor: c,
        decorator: sht,
        height: 22,
        paddingTop: 3,
        allowGrowX: !0
    })), f.add(o), r.add(u), r.add((new qx.ui.basic.Image).set({
        source: ggi
    })), r.add(f), r
}

function ll_region_hub_respawn_info(t) {
    var u = qx.core.Init.getApplication(),
        e = t ? t : new qx.ui.container.Composite,
        s, l, a, w, o, b, r, k;
    e.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        }),
        allowShrinkY: !0,
        decorator: or
    });
    s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    });
    l = (new qx.ui.basic.Image).set({});
    l.objid = db;
    a = (new qx.ui.basic.Label).set({
        value: u.tr(aru),
        textColor: nt,
        font: h,
        alignY: n
    });
    a.objid = ui;
    s.add(l);
    s.add(a);
    var v = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        r = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        c = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 2
            })
        }),
        g = (new qx.ui.basic.Label).set({
            value: u.tr(ctu),
            textColor: f,
            rich: !0
        });
    return g.objid = kg, w = (new qx.ui.basic.Label).set({
        rich: !0,
        value: ett,
        textColor: nt,
        font: i
    }), w.objid = wk, c.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), c.add(g), c.add(w), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    }), b = (new webfrontend.gui.widgets.CoordinatesLabel).set({
        rich: !0,
        selectable: !0,
        appearance: d,
        cursor: p,
        textColor: ni,
        x: 250,
        y: 250,
        value: hr
    }), b.objid = cc, o.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), o.add((new qx.ui.basic.Label).set({
        value: u.tr(fu),
        textColor: f
    })), o.add(b), r.add(c), r.add(o), v.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), v.add(r), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    }), r.objid = wl, k = (new qx.ui.basic.Label).set({
        value: u.tr(ipr),
        textColor: f,
        rich: !0,
        wrap: !0,
        maxWidth: 320
    }), k.objid = wy, r.add((new qx.ui.basic.Label).set({
        value: u.tr(veu),
        textColor: nt,
        font: y
    })), r.add(k), e.add(s), e.add(v), e.add(r), e
}

function ll_region_hub_server_info(t) {
    var u = qx.core.Init.getApplication(),
        e = t ? t : new qx.ui.container.Composite,
        c, a, v, b, s, k, r, g, o;
    e.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        }),
        allowShrinkY: !0,
        decorator: or
    });
    c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    });
    a = (new qx.ui.basic.Image).set({});
    a.objid = db;
    v = (new qx.ui.basic.Label).set({
        value: u.tr(wer),
        textColor: nt,
        font: h,
        alignY: n
    });
    v.objid = ui;
    c.add(a);
    c.add(v);
    var w = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        r = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        l = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 2
            })
        }),
        o = (new qx.ui.basic.Label).set({
            value: u.tr(osu),
            textColor: f,
            rich: !0
        });
    return o.objid = kg, b = (new qx.ui.basic.Label).set({
        rich: !0,
        value: ett,
        textColor: nt,
        font: i
    }), b.objid = wk, l.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), l.add(o), l.add(b), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    }), k = (new webfrontend.gui.widgets.CoordinatesLabel).set({
        rich: !0,
        selectable: !0,
        appearance: d,
        cursor: p,
        textColor: ni,
        x: 250,
        y: 250,
        value: hr
    }), k.objid = cc, s.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), s.add((new qx.ui.basic.Label).set({
        value: u.tr(fu),
        textColor: f
    })), s.add(k), r.add(l), r.add(s), w.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), w.add(r), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    }), r.objid = wl, g = (new qx.ui.basic.Label).set({
        value: u.tr(vlt),
        textColor: f,
        rich: !0,
        wrap: !0,
        maxWidth: 320
    }), g.objid = wy, o = (new qx.ui.basic.Label).set({
        value: u.tr(cyi),
        textColor: wt,
        marginTop: 5
    }), o.objid = rui, r.add((new qx.ui.basic.Label).set({
        value: u.tr(gtt),
        textColor: nt,
        font: y
    })), r.add(g), r.add(o), e.add(c), e.add(w), e.add(r), e
}

function ll_region_info_marker(t) {
    var s = qx.core.Init.getApplication(),
        c = t ? t : new qx.ui.container.Composite,
        a, u, v, y, e, w, b, o;
    c.set({
        layout: (new qx.ui.layout.HBox).set({})
    });
    var r = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 4
            }),
            innerDecorator: or,
            contentPaddingTop: 5,
            contentPaddingLeft: 5,
            contentPaddingRight: 7,
            contentPaddingBottom: 7,
            maxWidth: 400
        }),
        l = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 2,
                alignY: n
            })
        }),
        k = (new qx.ui.basic.Image).set({
            source: pet,
            maxWidth: 28,
            maxHeight: 28,
            scale: !0
        });
    return k.objid = ub, a = (new qx.ui.basic.Label).set({
        value: dou,
        rich: !0,
        textColor: nt,
        font: h
    }), a.objid = sci, l.add(k), l.add(a), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2,
            alignY: n
        })
    }), v = (new webfrontend.gui.widgets.PlayerLabel).set({
        playerId: -1,
        value: heu,
        rich: !0
    }), v.objid = yki, y = (new webfrontend.gui.widgets.CoordinatesLabel).set({
        rich: !0,
        selectable: !0,
        appearance: d,
        cursor: p,
        x: 160,
        y: 35
    }), y.objid = cvt, u.add((new qx.ui.basic.Label).set({
        value: s.tr(wri),
        rich: !0,
        textColor: f,
        font: i
    })), u.add(v, {
        flex: 1
    }), u.add((new qx.ui.basic.Label).set({
        value: s.tr(fu),
        rich: !0,
        textColor: f,
        font: i
    })), u.add(y), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2,
            alignY: n
        })
    }), o = (new qx.ui.basic.Label).set({
        value: s.tr(fiu),
        textColor: f
    }), o.objid = ggt, w = (new webfrontend.gui.widgets.PlayerLabel).set({
        playerId: -1,
        value: ctr
    }), w.objid = yiu, b = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        marginRight: 10,
        value: gt
    }), b.objid = bni, e.add(o), e.add(w, {
        flex: 1
    }), e.add((new qx.ui.basic.Label).set({
        value: s.tr(as),
        rich: !0,
        textColor: f,
        alignY: n
    })), e.add(b), o = (new qx.ui.basic.Label).set({
        textColor: f,
        value: dsi,
        rich: !0
    }), o.objid = ye, r.add(l), r.add(u), r.add(e), r.add((new qx.ui.basic.Label).set({
        value: s.tr(dkr),
        textColor: f,
        font: i,
        marginTop: 20
    })), r.add(o, {
        flex: 1
    }), c.add(r), c
}

function ll_region_info_marker_tooltip(n) {
    var r = qx.core.Init.getApplication(),
        u = n ? n : new qx.ui.container.Composite,
        t, e, o, s, h;
    return u.set({
        layout: (new qx.ui.layout.HBox).set({})
    }), t = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 6
        }),
        innerDecorator: or,
        contentPaddingTop: 5,
        contentPaddingLeft: 5,
        contentPaddingRight: 7,
        contentPaddingBottom: 7,
        textColor: f,
        minWidth: 300,
        font: i
    }), e = (new qx.ui.basic.Label).set({
        value: r.tr(tkr),
        rich: !0
    }), e.objid = pci, o = (new qx.ui.basic.Label).set({
        value: r.tr(wnr),
        rich: !0
    }), o.objid = int, s = (new qx.ui.basic.Label).set({
        value: r.tr(ptu),
        rich: !0
    }), s.objid = kur, h = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: wt,
        value: tgr
    }), h.objid = wni, t.add(e), t.add(o), t.add(s), t.add(h), u.add(t), u
}

function ll_regioncitystatusinfo(u) {
    var e = qx.core.Init.getApplication(),
        g = u ? u : new qx.ui.container.Composite,
        ni, ci, li, ui, ai, vi, yi, pi, ct, wi, bi, v, ht, et, w, ki, ii, fi, ri, gi, ei, at, pt, nr, ti, bt, yt, vt, tr, oi, kt, ot, it, ir, rr, ur, fr, a, er, st, hi, sr, c, k, tt, si, dt, cr;
    g.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        }),
        decorator: or,
        minWidth: 320
    });
    ni = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    ni.objid = uht;
    ci = (new qx.ui.basic.Image).set({
        alignY: n,
        source: ab
    });
    ci.objid = vdr;
    li = (new qx.ui.basic.Label).set({
        value: e.tr(yui),
        rich: !0,
        textColor: nt,
        font: h,
        alignY: n,
        marginLeft: 6
    });
    li.objid = bci;
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        marginRight: 2
    });
    v.objid = pw;
    ht = (new qx.ui.basic.Label).set({
        value: ut,
        rich: !0,
        textColor: nt,
        font: h,
        alignY: n
    });
    ht.objid = pbi;
    et = (new qx.ui.basic.Label).set({
        rich: !0,
        font: ft,
        textColor: lt,
        alignY: n,
        value: ut
    });
    et.objid = pa;
    v.add((new qx.ui.basic.Image).set({
        source: nit,
        toolTipText: e.tr(ow),
        alignY: n
    }));
    v.add(ht);
    v.add((new qx.ui.basic.Label).set({
        value: rs,
        rich: !0,
        textColor: f,
        alignY: n,
        marginRight: 4
    }));
    v.add(et);
    w = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 4
        }),
        marginLeft: 8
    });
    w.objid = lai;
    et = (new qx.ui.basic.Label).set({
        value: ut,
        rich: !0,
        textColor: nt,
        font: h,
        alignY: n
    });
    et.objid = niu;
    w.add((new qx.ui.basic.Label).set({
        value: e.tr(nat),
        rich: !0,
        textColor: f,
        alignY: n,
        marginRight: 4
    }));
    w.add((new qx.ui.basic.Image).set({
        source: nit,
        toolTipText: e.tr(ow),
        alignY: n
    }));
    w.add(et);
    ni.add(ci);
    ni.add(li);
    ni.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    });
    ni.add(v);
    ni.add(w);
    ui = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        }),
        marginBottom: 4
    });
    ui.objid = hwt;
    ct = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    ai = (new webfrontend.gui.widgets.BaseLabel).set({
        value: sa,
        rich: !0,
        selectable: !0,
        baseId: -1,
        cursor: rt,
        appearance: ty,
        marginRight: 10
    });
    ai.objid = lri;
    ht = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        marginRight: 10,
        value: ubi
    });
    ht.objid = puu;
    vi = (new webfrontend.gui.widgets.CoordinatesLabel).set({
        rich: !0,
        selectable: !0,
        appearance: d,
        cursor: p,
        marginRight: 10,
        value: hr
    });
    vi.objid = ylr;
    ct.add((new qx.ui.basic.Label).set({
        value: e.tr(fpr),
        rich: !0,
        textColor: f
    }));
    ct.add(ai);
    ct.add(ht);
    ct.add((new qx.ui.basic.Label).set({
        value: e.tr(fu),
        rich: !0,
        textColor: f
    }));
    ct.add(vi);
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2,
            alignY: n
        })
    });
    ht = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        marginRight: 10,
        value: gt
    });
    ht.objid = eki;
    v.add((new qx.ui.basic.Label).set({
        value: e.tr(as),
        rich: !0,
        textColor: f,
        alignY: n
    }));
    v.add(ht);
    w = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2,
            alignY: b
        })
    });
    yi = (new webfrontend.gui.widgets.PlayerLabel).set({
        rich: !0,
        selectable: !0,
        value: lh,
        playerId: -1,
        appearance: d,
        marginRight: 10,
        alignY: b
    });
    yi.objid = kpt;
    pi = (new webfrontend.gui.widgets.AllianceLabel).set({
        value: tf,
        rich: !0,
        selectable: !0,
        alignY: b
    });
    pi.objid = tyt;
    w.add((new qx.ui.basic.Label).set({
        value: e.tr(akt),
        rich: !0,
        textColor: f,
        alignY: b
    }));
    w.add(yi);
    w.add((new qx.ui.basic.Label).set({
        value: e.tr(di),
        rich: !0,
        textColor: f,
        alignY: b
    }));
    w.add(pi);
    ui.add(ct);
    ui.add(v);
    ui.add(w);
    ct = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        }),
        marginBottom: 4
    });
    ct.objid = ysr;
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    wi = (new webfrontend.gui.widgets.AllianceLabel).set({
        value: tf,
        rich: !0,
        selectable: !0
    });
    wi.objid = rbi;
    et = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        marginRight: 10,
        value: vou
    });
    et.objid = bpr;
    bi = (new webfrontend.gui.widgets.CoordinatesLabel).set({
        rich: !0,
        selectable: !0,
        appearance: d,
        cursor: p,
        marginRight: 10,
        value: hr
    });
    bi.objid = rbt;
    v.add((new qx.ui.basic.Label).set({
        value: e.tr(di),
        rich: !0,
        textColor: f
    }));
    v.add(wi);
    v.add(et);
    v.add((new qx.ui.basic.Label).set({
        value: e.tr(fu),
        rich: !0,
        textColor: f
    }));
    v.add(bi);
    w = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2,
            alignY: n
        })
    });
    et = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        marginRight: 10,
        value: gt
    });
    et.objid = kpi;
    w.add((new qx.ui.basic.Label).set({
        value: e.tr(as),
        rich: !0,
        textColor: f,
        alignY: n
    }));
    w.add(et);
    ct.add(v);
    ct.add(w);
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    });
    v.objid = eer;
    ht = (new qx.ui.basic.Label).set({
        value: e.tr(vpr),
        textColor: f,
        rich: !0,
        alignY: n
    });
    ht.objid = ddi;
    et = (new qx.ui.basic.Label).set({
        value: us,
        width: 70,
        height: 17,
        rich: !0,
        textColor: f,
        textAlign: o,
        marginLeft: 5,
        alignY: n
    });
    et.objid = wli;
    v.add((new qx.ui.basic.Image).set({
        source: bhi,
        marginRight: 5
    }));
    v.add(ht);
    v.add(et);
    w = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    });
    w.objid = cbi;
    ki = (new qx.ui.basic.Image).set({
        width: 18,
        height: 17,
        scale: !0,
        allowShrinkX: !0
    });
    ki.objid = fvt;
    fi = (new qx.ui.basic.Label).set({
        textColor: yc,
        alignY: n,
        font: i,
        maxWidth: 320,
        rich: !0,
        wrap: !0
    });
    fi.objid = fdt;
    w.add(ki);
    w.add(fi);
    ii = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    });
    ii.objid = ikt;
    fi = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        font: l,
        alignY: n,
        marginTop: 6,
        wrap: !0,
        value: vfr,
        allowGrowX: !0,
        allowShrinkY: !0,
        allowGrowY: !0
    });
    fi.objid = iei;
    at = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 4
        })
    });
    pt = (new qx.ui.basic.Label).set({
        value: e.tr(cer),
        rich: !0,
        textColor: f,
        alignY: n,
        marginRight: 4
    });
    pt.objid = nsi;
    bt = (new qx.ui.basic.Label).set({
        value: e.tr(ky),
        rich: !0,
        textColor: f
    });
    bt.objid = eri;
    at.add(pt);
    at.add(bt);
    ti = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 4
        })
    });
    bt = (new qx.ui.basic.Label).set({
        value: e.tr(tg),
        rich: !0,
        textColor: f,
        alignY: n,
        marginRight: 4
    });
    bt.objid = iat;
    ei = (new qx.ui.basic.Label).set({
        value: e.tr(ky),
        rich: !0,
        textColor: f
    });
    ei.objid = dor;
    ti.add(bt);
    ti.add(ei);
    ii.add(fi);
    ii.add(at);
    ii.add(ti);
    ii.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 6
    }));
    ri = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    });
    ri.objid = sbt;
    gi = (new qx.ui.basic.Label).set({
        marginTop: 5,
        marginBottom: 5,
        visibility: s,
        textColor: ry,
        font: l,
        rich: !0,
        minWidth: 320
    });
    gi.objid = oou;
    pt = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        wrap: !0,
        maxWidth: 320,
        value: wfi
    });
    pt.objid = asr;
    yt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6
        })
    });
    yt.objid = coi;
    ei = (new qx.ui.basic.Label).set({
        value: e.tr(aui),
        alignY: n,
        rich: !0,
        textColor: nli,
        wrap: !0,
        maxWidth: 320
    });
    ei.objid = rii;
    yt.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 4
    }));
    yt.add((new qx.ui.basic.Image).set({
        source: hfi
    }));
    yt.add(ei);
    ri.add((new qx.ui.basic.Label).set({
        value: e.tr(gtt),
        rich: !0,
        textColor: nt,
        font: y,
        alignY: n
    }));
    ri.add(gi);
    ri.add(pt);
    ri.add(yt);
    at = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    });
    at.objid = gki;
    pt = (new qx.ui.basic.Label).set({
        textColor: nt,
        value: ndr,
        alignY: n
    });
    pt.objid = cuu;
    nr = (new qx.ui.basic.Image).set({
        source: ou,
        paddingLeft: 10
    });
    nr.objid = nyr;
    at.add((new qx.ui.basic.Label).set({
        value: e.tr(lir),
        rich: !0,
        textColor: nt,
        alignX: o,
        alignY: n
    }));
    at.add((new qx.ui.basic.Image).set({
        source: tti,
        paddingLeft: 5,
        paddingRight: 5,
        alignX: t
    }));
    at.add(pt);
    at.add(nr);
    ti = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    });
    ti.objid = ssi;
    bt = (new qx.ui.basic.Label).set({
        textColor: wt,
        rich: !0,
        value: e.tr(vyr)
    });
    bt.objid = ivr;
    ti.add(bt);
    yt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    });
    yt.objid = rdi;
    yt.add((new qx.ui.basic.Label).set({
        value: e.tr(bor),
        textColor: ry,
        font: h
    }));
    vt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        }),
        marginBottom: 4
    });
    vt.objid = hyt;
    ot = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    });
    ot.objid = ryr;
    tr = (new qx.ui.basic.Label).set({
        value: e.tr(siu),
        rich: !0,
        textColor: f
    });
    tr.objid = lut;
    oi = (new qx.ui.basic.Label).set({
        value: e.tr(kuu),
        rich: !0,
        textColor: f,
        allowGrowX: !0
    });
    oi.objid = drr;
    kt = (new qx.ui.basic.Label).set({
        value: e.tr(fci),
        rich: !0,
        textColor: f
    });
    kt.objid = kpr;
    ot.add((new qx.ui.basic.Label).set({
        value: e.tr(war),
        rich: !0,
        textColor: nt,
        font: y,
        marginBottom: 6
    }));
    ot.add(tr);
    ot.add(oi);
    ot.add(kt);
    ot.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 6
    }));
    it = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6
        })
    });
    it.objid = cfr;
    oi = (new qx.ui.basic.Label).set({
        value: e.tr(rpi),
        textColor: wt,
        font: i,
        rich: !0,
        wrap: !0,
        allowGrowX: !0,
        minWidth: 320
    });
    oi.objid = apt;
    kt = (new qx.ui.basic.Label).set({
        value: e.tr(aei),
        textColor: f,
        allowGrowX: !0,
        allowShrinkX: !0
    });
    kt.objid = ogr;
    k = (new qx.ui.basic.Label).set({
        value: us,
        width: 70,
        height: 17,
        rich: !0,
        textColor: f,
        textAlign: r
    });
    k.objid = ofi;
    it.add(oi);
    it.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    });
    it.add(kt);
    it.add(k);
    it.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 6
    }));
    a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6
        })
    });
    a.objid = fpi;
    kt = (new qx.ui.basic.Label).set({
        value: e.tr(wlt),
        textColor: wt,
        font: i,
        allowShrinkX: !0,
        allowGrowX: !0
    });
    kt.objid = ker;
    k = (new qx.ui.basic.Label).set({
        value: e.tr(yyt),
        textColor: f,
        allowShrinkX: !0,
        allowGrowX: !0
    });
    k.objid = irt;
    tt = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        height: 17,
        width: 35,
        value: us
    });
    tt.objid = ngi;
    a.add(kt);
    a.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    });
    a.add(k);
    a.add(tt);
    a.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 6
    }));
    c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    });
    c.objid = kwr;
    k = (new qx.ui.basic.Label).set({
        value: e.tr(kgr),
        rich: !0,
        textColor: f
    });
    k.objid = wei;
    tt = (new qx.ui.basic.Label).set({
        value: e.tr(efr),
        rich: !0,
        textColor: f
    });
    tt.objid = thr;
    si = (new qx.ui.basic.Label).set({
        value: e.tr(ovi),
        textColor: f,
        rich: !0
    });
    si.objid = uwt;
    c.add((new qx.ui.basic.Label).set({
        value: e.tr(gd),
        textColor: wt,
        font: i,
        marginBottom: 6
    }));
    c.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    });
    c.add(k);
    c.add(tt);
    c.add(si);
    c.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 6
    }));
    k = (new qx.ui.basic.Label).set({
        value: e.tr(kst),
        rich: !0,
        textColor: f
    });
    k.objid = twr;
    tt = (new qx.ui.basic.Label).set({
        value: e.tr(ngr),
        rich: !0,
        textColor: iuu,
        wrap: !0,
        maxWidth: 340,
        font: yo
    });
    tt.objid = alr;
    st = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        }),
        marginBottom: 4
    });
    st.objid = diu;
    dt = (new qx.ui.basic.Label).set({
        value: e.tr(lhr),
        rich: !0,
        textColor: f
    });
    dt.objid = ipt;
    hi = (new qx.ui.basic.Label).set({
        value: e.tr(pbt),
        rich: !0,
        textColor: f
    });
    hi.objid = lft;
    st.add((new qx.ui.basic.Label).set({
        value: e.tr(iht),
        rich: !0,
        textColor: nt,
        font: y
    }));
    st.add(dt);
    st.add(hi);
    vt.add((new qx.ui.basic.Label).set({
        value: e.tr(rlt),
        rich: !0,
        textColor: nt,
        font: h
    }));
    vt.add(ot);
    vt.add(it);
    vt.add(a);
    vt.add(c);
    vt.add(k);
    vt.add(tt);
    vt.add(st);
    ot = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        })
    });
    ot.objid = rti;
    var it = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 6
            })
        }),
        a = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({}),
            width: 107,
            height: 12,
            decorator: edr
        }),
        lr = (new webfrontend.gui.widgets.AppointmentProgressBar).set({
            width: 100,
            minWidth: 100,
            maxWidth: 100
        });
    return lr.objid = rei, a.add(lr, {
        left: 3,
        top: 0
    }), it.add((new qx.ui.basic.Label).set({
        value: e.tr(uru),
        rich: !0,
        textColor: f
    })), it.add(a), ot.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 6
    })), ot.add((new qx.ui.basic.Label).set({
        value: e.tr(fgr),
        rich: !0,
        textColor: nt,
        font: y
    })), ot.add(it), it = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 6
        })
    }), it.objid = obt, a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6
        })
    }), ir = (new webfrontend.gui.widgets.PlayerLabel).set({
        rich: !0,
        selectable: !0,
        value: lh,
        playerId: -1,
        appearance: d
    }), ir.objid = vht, k = (new qx.ui.basic.Label).set({
        value: e.tr(di),
        rich: !0,
        textColor: f
    }), k.objid = wir, rr = (new webfrontend.gui.widgets.AllianceLabel).set({
        value: tf,
        rich: !0,
        selectable: !0
    }), rr.objid = pgi, a.add((new qx.ui.basic.Label).set({
        value: e.tr(ttu),
        rich: !0,
        textColor: f
    })), a.add(ir), a.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), a.add(k), a.add(rr), c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6
        })
    }), ur = (new webfrontend.gui.widgets.BaseLabel).set({
        rich: !0,
        selectable: !0,
        value: sa
    }), ur.objid = wou, tt = (new qx.ui.basic.Label).set({
        value: e.tr(lrt),
        rich: !0,
        textColor: f
    }), tt.objid = rer, fr = (new webfrontend.gui.widgets.CoordinatesLabel).set({
        value: hr,
        rich: !0,
        selectable: !0,
        appearance: d,
        cursor: p
    }), fr.objid = vfi, c.add((new qx.ui.basic.Label).set({
        value: e.tr(au),
        rich: !0,
        textColor: f
    })), c.add(ur), c.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), c.add(tt), c.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), c.add((new qx.ui.basic.Label).set({
        value: e.tr(ns),
        rich: !0,
        textColor: f
    })), c.add(fr), it.add((new qx.ui.basic.Label).set({
        value: e.tr(ws),
        rich: !0,
        textColor: nt,
        font: y
    })), it.add(a), it.add(c), a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 6
        })
    }), a.objid = cw, c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6
        })
    }), er = (new qx.ui.basic.Image).set({
        alignY: n,
        source: ab
    }), er.objid = kdr, c.add((new qx.ui.basic.Label).set({
        value: e.tr(wct),
        rich: !0,
        textColor: nt,
        alignY: n
    })), c.add(er), k = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        value: igt
    }), k.objid = ugt, tt = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        value: ihi
    }), tt.objid = lwi, st = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), dt = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        textAlign: o,
        width: 30,
        value: rd
    }), dt.objid = rk, hi = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        textAlign: o,
        width: 30,
        value: an
    }), hi.objid = gk, sr = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        textAlign: o,
        width: 30,
        value: gb
    }), sr.objid = nv, st.add((new qx.ui.basic.Image).set({
        source: cu
    }), {
        left: 0,
        top: 0
    }), st.add(dt, {
        left: 22,
        top: 5
    }), st.add((new qx.ui.basic.Image).set({
        source: su
    }), {
        left: 54,
        top: 0
    }), st.add(hi, {
        left: 78,
        top: 5
    }), st.add((new qx.ui.basic.Image).set({
        source: eu
    }), {
        left: 112,
        top: 0
    }), st.add(sr, {
        left: 140,
        top: 5
    }), a.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 6
    })), a.add(c), a.add(k), a.add(tt), a.add(st), c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 6
        })
    }), c.objid = cli, k = (new qx.ui.basic.Label).set({
        value: e.tr(kru),
        rich: !0,
        textColor: nt,
        alignY: n
    }), k.objid = ali, tt = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        value: pat
    }), tt.objid = nyt, si = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        value: nei
    }), si.objid = tsi, dt = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: f,
        value: dnt
    }), dt.objid = oii, c.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 6
    })), c.add(k), c.add(tt), c.add(si), c.add(dt), cr = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    }), cr.objid = cgi, g.add(ni), g.add(ui), g.add(ct), g.add(v), g.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 6
    })), g.add(w), g.add(ii), g.add(ri), g.add(at), g.add(ti), g.add(yt), g.add(vt), g.add(ot), g.add(it), g.add(a), g.add(c), g.add(cr), g
}

function ll_replay_bottombar(r) {
    var f = qx.core.Init.getApplication(),
        l = r ? r : new qx.ui.container.Composite,
        s, a, u, v, y, p, w, b, k, o, d, nt, c, tt;
    return l.set({
        layout: (new qx.ui.layout.HBox).set({
            alignX: t
        }),
        minWidth: 627,
        height: 129
    }), s = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        innerDecorator: bdi
    }), a = (new qx.ui.basic.Label).set({
        value: f.tr(rrr),
        rich: !0,
        textColor: lt,
        font: h,
        textAlign: t
    }), a.objid = nvt, u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6,
            alignX: t,
            alignY: n
        }),
        allowGrowX: !1
    }), v = (new webfrontend.ui.SoundButton).set({
        appearance: ht,
        toolTipText: f.tr(rcr),
        marginRight: 60,
        icon: cdr
    }), v.objid = yy, y = (new webfrontend.ui.SoundButton).set({
        appearance: ht,
        toolTipText: f.tr(pki),
        icon: nai,
        width: 26,
        maxHeight: 26
    }), y.objid = lui, p = (new webfrontend.ui.SoundButton).set({
        appearance: ht,
        toolTipText: f.tr(byt),
        icon: ae,
        width: 26,
        maxHeight: 26
    }), p.objid = cti, w = (new webfrontend.ui.SoundButton).set({
        appearance: ht,
        toolTipText: f.tr(cru),
        icon: sli,
        width: 26,
        marginLeft: 14,
        maxHeight: 26
    }), w.objid = wfr, b = (new qx.ui.basic.Label).set({
        value: upi,
        rich: !0,
        textColor: e,
        font: i,
        alignY: n
    }), b.objid = sat, k = (new webfrontend.ui.SoundButton).set({
        appearance: ht,
        toolTipText: f.tr(bli),
        icon: skt,
        marginLeft: 14,
        maxHeight: 26
    }), k.objid = tpr, u.add(v), u.add(y), u.add(p), u.add(w), u.add(b), u.add(k), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2,
            alignY: n
        }),
        allowGrowX: !1
    }), d = (new qx.ui.basic.Label).set({
        value: op,
        rich: !0,
        textColor: e,
        font: i
    }), d.objid = dr, nt = (new qx.ui.basic.Label).set({
        value: op,
        rich: !0,
        textColor: g,
        font: i
    }), nt.objid = seu, c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        marginLeft: 20,
        allowGrowY: !1,
        allowGrowX: !1,
        decorator: llr
    }), tt = (new qx.ui.basic.Image).set({
        source: aw,
        height: 6,
        scale: !0,
        width: 70,
        maxWidth: 141
    }), tt.objid = icr, c.add((new qx.ui.basic.Image).set({
        source: aw,
        height: 6,
        scale: !0,
        width: 140,
        visibility: yh
    }), {
        left: 0,
        top: 0
    }), c.add(tt), o.add(d), o.add((new qx.ui.basic.Label).set({
        value: rs,
        rich: !0,
        textColor: g,
        font: i
    })), o.add(nt), o.add(c), s.add(a), s.add(u), s.add(o), l.add(s, {
        flex: 1
    }), l
}

function ll_researchUnit(n) {
    var f = n ? n : new qx.ui.container.Composite,
        s, r, h, c, l, v, y, p, w, o, u;
    return f.set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), s = (new qx.ui.basic.Image).set({
        source: ytr
    }), s.objid = ul, r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), o = (new qx.ui.basic.Image).set({
        source: el
    }), o.objid = iu, u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), h = (new qx.ui.basic.Image).set({
        height: 57,
        marginTop: 4,
        source: yli
    }), h.objid = uu, u.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), u.add(h), u.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), c = (new qx.ui.basic.Label).set({
        rich: !0,
        wrap: !0,
        font: a,
        textColor: e,
        fixedContentSize: !0,
        width: 164,
        height: 40,
        value: dk
    }), c.objid = ki, l = (new qx.ui.basic.Label).set({
        textAlign: t,
        textColor: ti,
        font: i,
        fixedContentSize: !0,
        width: 170,
        height: 17,
        value: ed
    }), l.objid = ui, v = (new qx.ui.basic.Label).set({
        rich: !0,
        fixedContentSize: !0,
        width: 106,
        height: 38
    }), v.objid = hs, y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 80,
        height: 38
    }), p = (new webfrontend.ui.SoundButton).set({
        label: bb,
        appearance: wu,
        width: 80
    }), p.objid = af, y.add(p, {
        bottom: 0,
        right: 0
    }), w = (new qx.ui.basic.Image).set({
        source: vs
    }), w.objid = kh, r.add(o, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), r.add(u, {
        left: 0,
        top: 17,
        right: 0
    }), r.add(c, {
        left: 8,
        top: 80
    }), r.add(l, {
        left: 5,
        top: 5,
        right: 5
    }), r.add(v, {
        left: 4,
        top: 122
    }), r.add(y, {
        left: 98,
        top: 122
    }), r.add(w, {
        bottom: 10,
        right: 8
    }), o = (new qx.ui.basic.Image).set({
        source: pwt
    }), o.objid = hti, u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), u.objid = vti, f.add(s), f.add(r, {
        left: 0,
        top: 0
    }), f.add(o, {
        left: 65,
        top: 172
    }), f.add(u, {
        left: 13,
        top: 192
    }), f
}

function ll_researchUnitSpecial(n) {
    var f = n ? n : new qx.ui.container.Composite,
        o, r, s, u, h, c, l, v, y, p, w;
    return f.set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), o = (new qx.ui.basic.Image).set({
        source: evi
    }), o.objid = ul, r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), s = (new qx.ui.basic.Image).set({
        source: el
    }), s.objid = iu, u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), h = (new qx.ui.basic.Image).set({
        height: 57,
        marginTop: 4,
        source: ai
    }), h.objid = uu, u.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), u.add(h), u.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), c = (new qx.ui.basic.Label).set({
        rich: !0,
        wrap: !0,
        font: a,
        textColor: e,
        fixedContentSize: !0,
        width: 164,
        height: 40,
        value: dk
    }), c.objid = ki, l = (new qx.ui.basic.Label).set({
        textAlign: t,
        textColor: ti,
        font: i,
        fixedContentSize: !0,
        width: 170,
        height: 17,
        value: ed
    }), l.objid = ui, v = (new qx.ui.basic.Label).set({
        rich: !0,
        fixedContentSize: !0,
        width: 106,
        height: 38
    }), v.objid = hs, y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 80,
        height: 38
    }), p = (new webfrontend.ui.SoundButton).set({
        label: bb,
        appearance: wu,
        width: 80
    }), p.objid = af, y.add(p, {
        bottom: 0,
        right: 0
    }), w = (new qx.ui.basic.Image).set({
        source: vs
    }), w.objid = kh, r.add(s, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), r.add(u, {
        left: 0,
        top: 17,
        right: 0
    }), r.add(c, {
        left: 8,
        top: 80
    }), r.add(l, {
        left: 5,
        top: 5,
        right: 5
    }), r.add(v, {
        left: 4,
        top: 122
    }), r.add(y, {
        left: 98,
        top: 122
    }), r.add(w, {
        bottom: 10,
        right: 8
    }), f.add(o), f.add(r, {
        left: 0,
        top: 0
    }), f
}

function ll_researchUpgradeActive(n) {
    var u = n ? n : new qx.ui.container.Composite,
        t, f, s, r, h, c, l, y;
    return u.set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), f = (new qx.ui.basic.Image).set({
        source: lfi,
        visibility: v
    }), f.objid = iu, s = (new qx.ui.basic.Image).set({
        source: evt,
        visibility: v
    }), s.objid = wo, r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), h = (new qx.ui.basic.Image).set({
        height: 57,
        marginTop: 4,
        source: ai
    }), h.objid = uu, r.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), r.add(h), r.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), c = (new qx.ui.basic.Label).set({
        rich: !0,
        wrap: !0,
        font: a,
        textColor: e,
        fixedContentSize: !0,
        width: 164,
        height: 40,
        marginTop: 3,
        value: fg
    }), c.objid = ki, l = (new qx.ui.basic.Label).set({
        textAlign: o,
        textColor: ti,
        font: i,
        fixedContentSize: !0,
        width: 130,
        height: 17,
        marginLeft: 20,
        marginTop: 2,
        maxWidth: 150,
        value: wn
    }), l.objid = ui, y = (new qx.ui.basic.Image).set({
        source: vs
    }), y.objid = kh, t.add(f, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), t.add(s), t.add(r, {
        left: 0,
        top: 21,
        right: 0
    }), t.add(c, {
        left: 8,
        top: 82
    }), t.add(l, {
        left: 5,
        top: 5,
        right: 5
    }), t.add(y, {
        bottom: 10,
        right: 8
    }), u.add(t, {
        left: 0,
        top: 0
    }), u
}

function ll_researchUpgradeDisabled(n) {
    var nt = qx.core.Init.getApplication(),
        c = n ? n : new qx.ui.container.Composite,
        r, l, v, f, y, p, w, s, b, k;
    c.set({
        layout: (new qx.ui.layout.Canvas).set({})
    });
    r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    });
    l = (new qx.ui.basic.Image).set({
        source: yct
    });
    l.objid = iu;
    v = (new qx.ui.basic.Image).set({
        source: bei
    });
    v.objid = wo;
    f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    });
    y = (new qx.ui.basic.Image).set({
        height: 75,
        marginTop: 4,
        source: ai
    });
    y.objid = uu;
    f.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    });
    f.add(y);
    f.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    });
    p = (new qx.ui.basic.Label).set({
        rich: !0,
        wrap: !0,
        font: a,
        textColor: e,
        fixedContentSize: !0,
        width: 164,
        height: 40,
        marginTop: 3,
        value: uni
    });
    p.objid = ki;
    w = (new qx.ui.basic.Label).set({
        textAlign: o,
        textColor: ti,
        font: i,
        fixedContentSize: !0,
        width: 130,
        height: 17,
        marginLeft: 20,
        marginTop: 2,
        maxWidth: 150,
        value: uur
    });
    w.objid = ui;
    s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    });
    b = (new qx.ui.basic.Label).set({
        rich: !0,
        wrap: !0,
        font: i,
        textColor: ic,
        textAlign: t,
        value: wgt
    });
    b.objid = cpt;
    s.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    });
    s.add(b);
    s.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    });
    var u = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        d = (new qx.ui.basic.Image).set({
            source: oiu
        });
    return d.objid = fyi, h.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), h.add(d), h.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), k = (new qx.ui.basic.Label).set({
        value: nt.tr(tlr),
        rich: !0,
        wrap: !0,
        textAlign: t,
        width: 170,
        marginLeft: 5,
        marginTop: -30,
        textColor: g
    }), k.objid = tei, u.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), u.add(h), u.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), u.add(k), u.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), r.add(l, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), r.add(v), r.add(f, {
        left: 0,
        top: 3,
        right: 0
    }), r.add(p, {
        left: 8,
        top: 82
    }), r.add(w, {
        left: 5,
        top: 5,
        right: 5
    }), r.add(s, {
        left: 0,
        top: 122,
        right: 0
    }), r.add(u, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), c.add(r, {
        left: 0,
        top: 0
    }), c
}

function ll_researchUpgradeEnabled(n) {
    var u = n ? n : new qx.ui.container.Composite,
        t, f, s, r, h, c, l, v, y, p;
    return u.set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), f = (new qx.ui.basic.Image).set({
        source: hot
    }), f.objid = iu, s = (new qx.ui.basic.Image).set({
        source: olt
    }), s.objid = wo, r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), h = (new qx.ui.basic.Image).set({
        height: 57,
        marginTop: 4,
        source: ai
    }), h.objid = uu, r.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), r.add(h), r.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), c = (new qx.ui.basic.Label).set({
        rich: !0,
        wrap: !0,
        font: a,
        textColor: e,
        fixedContentSize: !0,
        width: 164,
        height: 40,
        marginTop: 3,
        value: fg
    }), c.objid = ki, l = (new qx.ui.basic.Label).set({
        textAlign: o,
        textColor: ti,
        font: i,
        fixedContentSize: !0,
        width: 130,
        height: 17,
        marginLeft: 20,
        marginTop: 2,
        maxWidth: 150,
        value: wn
    }), l.objid = ui, v = (new qx.ui.basic.Label).set({
        rich: !0,
        fixedContentSize: !0,
        width: 106,
        height: 38
    }), v.objid = hs, y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 80,
        height: 38
    }), p = (new webfrontend.ui.SoundButton).set({
        label: hut,
        appearance: wu,
        width: 80
    }), p.objid = af, y.add(p, {
        bottom: 0,
        right: 0
    }), t.add(f, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), t.add(s), t.add(r, {
        left: 0,
        top: 21,
        right: 0
    }), t.add(c, {
        left: 8,
        top: 82
    }), t.add(l, {
        left: 5,
        top: 5,
        right: 5
    }), t.add(v, {
        left: 4,
        top: 122
    }), t.add(y, {
        left: 101,
        top: 122
    }), u.add(t, {
        left: 0,
        top: 0
    }), u
}

function ll_reward_tooltip(n) {
    var p = qx.core.Init.getApplication(),
        b = n ? n : new qx.ui.container.Composite,
        rt, ut, w, h, f, e, c, k, t, i, a, r, v, u, y, nt, ft, tt, et, l, ot, g, o;
    b.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 6
        }),
        maxWidth: 480
    });
    var it = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 4
            })
        }),
        d = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 6
            })
        }),
        g = (new qx.ui.basic.Label).set({
            value: p.tr(tg),
            height: 19,
            visibility: s
        });
    return g.objid = tou, o = (new qx.ui.basic.Label).set({
        value: p.tr(put),
        height: 19
    }), o.objid = pfu, rt = (new qx.ui.basic.Label).set({
        height: 19,
        visibility: s
    }), rt.objid = hfr, ut = (new qx.ui.basic.Label).set({
        value: p.tr(pou),
        height: 19
    }), ut.objid = vgi, d.add(g), d.add(o), d.add(rt), d.add(ut), w = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 6
        })
    }), o = (new qx.ui.basic.Label).set({
        value: wht,
        height: 19,
        visibility: s
    }), o.objid = ktr, h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 7
        }),
        visibility: s
    }), h.objid = gyt, f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), f.objid = wci, k = (new qx.ui.basic.Label).set({
        value: vt
    }), k.objid = wvt, c = (new qx.ui.basic.Label).set({
        textColor: lst,
        value: rou,
        marginLeft: 1,
        visibility: s
    }), c.objid = ont, f.add((new qx.ui.basic.Image).set({
        source: ny,
        scale: !0,
        width: 21,
        height: 19
    })), f.add(k), f.add(c), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), e.objid = hui, c = (new qx.ui.basic.Label).set({
        value: vt
    }), c.objid = wlr, e.add((new qx.ui.basic.Image).set({
        source: pv,
        scale: !0,
        width: 21,
        height: 19
    })), e.add(c), t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), t.objid = bdt, l = (new qx.ui.basic.Label).set({
        value: vt
    }), l.objid = nbt, t.add((new qx.ui.basic.Image).set({
        source: ttt,
        scale: !0,
        width: 21,
        height: 19
    })), t.add(l), i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), i.objid = ber, a = (new qx.ui.basic.Label).set({
        value: vt
    }), a.objid = ggr, i.add((new qx.ui.basic.Image).set({
        source: fv,
        scale: !0,
        width: 21,
        height: 19
    })), i.add(a), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), r.objid = igi, v = (new qx.ui.basic.Label).set({
        value: vt
    }), v.objid = rci, r.add((new qx.ui.basic.Image).set({
        source: utt,
        scale: !0,
        width: 21,
        height: 19
    })), r.add(v), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), u.objid = dfu, y = (new qx.ui.basic.Label).set({
        value: vt
    }), y.objid = gsr, u.add((new qx.ui.basic.Image).set({
        source: luu,
        scale: !0,
        width: 21,
        height: 19
    })), u.add(y), h.add(f), h.add(e), h.add(t), h.add(i), h.add(r), h.add(u), f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 7
        }),
        visibility: s
    }), f.objid = kfi, e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), e.objid = acr, c = (new qx.ui.basic.Label).set({
        value: hi
    }), c.objid = cbt, e.add((new qx.ui.basic.Image).set({
        source: ib,
        scale: !0,
        width: 21,
        height: 19
    })), e.add(c), t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), t.objid = fvi, l = (new qx.ui.basic.Label).set({
        value: ie
    }), l.objid = far, t.add((new qx.ui.basic.Image).set({
        source: iai,
        scale: !0,
        width: 21,
        height: 19
    })), t.add(l), i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), i.objid = phr, a = (new qx.ui.basic.Label).set({
        value: ie
    }), a.objid = gpt, i.add((new qx.ui.basic.Image).set({
        source: tlt,
        scale: !0,
        width: 21,
        height: 19
    })), i.add(a), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), r.objid = ksi, v = (new qx.ui.basic.Label).set({
        value: ie
    }), v.objid = flr, r.add((new qx.ui.basic.Image).set({
        source: vui,
        scale: !0,
        width: 21,
        height: 19
    })), r.add(v), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), u.objid = wrt, y = (new qx.ui.basic.Label).set({
        value: ie
    }), y.objid = oti, u.add((new qx.ui.basic.Image).set({
        source: tl,
        scale: !0,
        width: 21,
        height: 19
    })), u.add(y), f.add(e), f.add(t), f.add(i), f.add(r), f.add(u), k = (new qx.ui.basic.Label).set({
        value: p.tr(lrr),
        height: 19
    }), k.objid = nhi, t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 7
        }),
        visibility: s
    }), t.objid = hnt, i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), i.objid = asi, a = (new qx.ui.basic.Label).set({
        value: vt
    }), a.objid = fni, i.add((new qx.ui.basic.Image).set({
        source: ny,
        scale: !0,
        width: 21,
        height: 19
    })), i.add(a), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), r.objid = ret, v = (new qx.ui.basic.Label).set({
        value: vt
    }), v.objid = pkr, r.add((new qx.ui.basic.Image).set({
        source: pv,
        scale: !0,
        width: 21,
        height: 19
    })), r.add(v), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), u.objid = ynr, y = (new qx.ui.basic.Label).set({
        value: vt
    }), y.objid = nru, u.add((new qx.ui.basic.Image).set({
        source: ttt,
        scale: !0,
        width: 21,
        height: 19
    })), u.add(y), nt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), nt.objid = lgt, ft = (new qx.ui.basic.Label).set({
        value: vt
    }), ft.objid = vbi, nt.add((new qx.ui.basic.Image).set({
        source: fv,
        scale: !0,
        width: 21,
        height: 19
    })), nt.add(ft), tt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        visibility: s
    }), tt.objid = eor, et = (new qx.ui.basic.Label).set({
        value: vt
    }), et.objid = tft, tt.add((new qx.ui.basic.Image).set({
        source: utt,
        scale: !0,
        width: 21,
        height: 19
    })), tt.add(et), t.add(i), t.add(r), t.add(u), t.add(nt), t.add(tt), l = (new qx.ui.basic.Label).set({
        value: p.tr(pui),
        height: 19
    }), l.objid = ani, w.add(o), w.add(h), w.add(f), w.add(k), w.add(t), w.add(l), it.add(d), it.add(w), ot = (new qx.ui.basic.Label).set({
        value: p.tr(yyr),
        rich: !0
    }), ot.objid = ki, g = (new qx.ui.basic.Label).set({
        rich: !0,
        visibility: s,
        value: p.tr(gui)
    }), g.objid = oct, o = (new qx.ui.basic.Label).set({
        value: p.tr(weu),
        visibility: s,
        rich: !0
    }), o.objid = rgi, b.add(it), b.add(ot), b.add(g), b.add(o), b
}

function ll_rewards(r) {
    var o = qx.core.Init.getApplication(),
        s = r ? r : new qx.ui.container.Composite,
        c, v, y, p, h, f, e, w, g, nt;
    s.set({
        layout: (new qx.ui.layout.VBox).set({})
    });
    c = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        allowGrowX: !0,
        height: 30,
        width: 388,
        innerDecorator: it,
        contentPaddingTop: 5
    });
    c.add((new qx.ui.basic.Label).set({
        value: o.tr(dhr),
        font: ge,
        textColor: u,
        alignX: t,
        alignY: n
    }));
    var a = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            decorator: gf,
            paddingLeft: 1,
            paddingRight: 1,
            paddingTop: 3,
            paddingBottom: 2
        }),
        e = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.HBox).set({}),
            height: 42,
            innerDecorator: it,
            contentPaddingLeft: 14,
            contentPaddingTop: 2,
            contentPaddingRight: 14,
            contentPaddingBottom: 6
        }),
        tt = (new qx.ui.form.Button).set({
            enabled: !1,
            width: 28,
            marginTop: 2,
            gap: 0,
            icon: lk
        });
    tt.objid = rgt;
    f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    });
    v = (new qx.ui.basic.Label).set({
        value: ygt,
        font: l,
        marginBottom: -3
    });
    v.objid = ekt;
    y = (new qx.ui.basic.Label).set({
        value: spr,
        alignX: t,
        font: i
    });
    y.objid = ayi;
    f.add(v);
    f.add(y);
    p = (new qx.ui.form.Button).set({
        width: 28,
        enabled: !1,
        icon: ae,
        center: !0,
        show: aa,
        gap: 0
    });
    p.objid = hc;
    e.add(tt);
    e.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    });
    e.add(f);
    e.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    });
    e.add(p);
    h = (new qx.ui.container.Scroll).set({
        allowGrowX: !0,
        allowGrowY: !0,
        allowShrinkY: !0,
        allowShrinkX: !0
    });
    h.objid = va;
    f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        allowGrowX: !0,
        allowGrowY: !0,
        allowShrinkY: !0,
        allowShrinkX: !0
    });
    f.objid = vv;
    h.add(f);
    a.add(e);
    a.add(h);
    e = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 8
        }),
        allowGrowY: !0,
        height: 100,
        width: 388,
        contentPaddingTop: 6,
        innerDecorator: it
    });
    w = (new qx.ui.basic.Label).set({
        value: o.tr(yfu),
        alignX: t,
        textColor: u,
        font: k
    });
    w.objid = fri;
    var f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                alignY: b
            }),
            width: 388
        }),
        d = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 2
            })
        }),
        rt = (new qx.ui.form.SelectBox).set({
            height: 28,
            enabled: !1,
            minWidth: 96,
            width: 0
        });
    return rt.objid = vst, d.add((new qx.ui.basic.Label).set({
        value: o.tr(wnt),
        marginLeft: 8,
        alignY: b
    })), d.add(rt), g = (new qx.ui.form.Button).set({
        label: o.tr(tr),
        maxHeight: 28,
        minWidth: 96
    }), g.objid = dg, nt = (new qx.ui.form.Button).set({
        label: o.tr(iot),
        maxHeight: 28,
        minWidth: 96
    }), nt.objid = fbr, f.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), f.add(d), f.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), f.add(g), f.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), f.add(nt), f.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), e.add(w), e.add(f), s.add(c), s.add(a), s.add(e), s
}

function ll_seasontermswindow(i) {
    var f = qx.core.Init.getApplication(),
        h = i ? i : new qx.ui.container.Composite,
        a, y, s, p, r, b;
    h.set({
        layout: (new qx.ui.layout.Basic).set({}),
        allowGrowX: !1,
        allowGrowY: !1
    });
    var u = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.VBox).set({
                alignY: w
            }),
            allowGrowX: !0,
            innerDecorator: ii,
            contentPaddingLeft: 2,
            contentPaddingTop: 6,
            contentPaddingRight: 10,
            contentPaddingBottom: 10
        }),
        l = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 8,
                alignY: w
            }),
            paddingLeft: 4
        }),
        k = (new qx.ui.basic.Image).set({
            visibility: v,
            source: vy
        });
    return k.objid = rh, r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        paddingLeft: 2
    }), a = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: c,
        font: st,
        marginBottom: 8,
        visibility: v,
        value: f.tr(iut)
    }), a.objid = dw, y = (new qx.ui.basic.Label).set({
        textColor: e,
        textAlign: o,
        rich: !0,
        visibility: v,
        value: f.tr(twt),
        maxWidth: 400
    }), y.objid = uy, r.add(a), r.add(y), l.add(k), l.add(r, {
        flex: 1
    }), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: n,
            alignX: t
        }),
        paddingLeft: 5
    }), p = (new qx.ui.form.CheckBox).set({}), p.objid = upr, s.add(p), s.add((new qx.ui.basic.Label).set({
        value: f.tr(tht)
    })), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 6
    }), b = (new webfrontend.ui.SoundButton).set({
        label: f.tr(es),
        rich: !0,
        maxHeight: 32,
        minWidth: 100,
        visibility: v
    }), b.objid = ak, r.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), r.add(b), u.add(l), u.add(s), u.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), u.add(r), h.add(u), h
}

function ll_shieldhubs_page(t) {
    var i = t ? t : new qx.ui.container.Composite,
        r, u;
    return i.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 4
        }),
        decorator: kk,
        paddingLeft: 3,
        paddingTop: 3,
        paddingRight: 8,
        paddingBottom: 6,
        marginRight: 0,
        marginTop: 95
    }), r = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        marginTop: 2,
        marginLeft: 2,
        marginBottom: 4,
        contentPaddingRight: 4,
        contentPaddingTop: 4,
        contentPaddingBottom: 6,
        contentPaddingLeft: 6
    }), u = (new qx.ui.basic.Label).set({
        value: co,
        textColor: eir,
        font: l,
        marginRight: 10,
        allowGrowX: !0,
        marginLeft: 3,
        marginBottom: 0,
        rich: !0
    }), u.objid = nc, r.add(u, {
        flex: 1
    }), i.add(r), i
}

function ll_shop_bundle_panel(r) {
    var c = qx.core.Init.getApplication(),
        v = r ? r : new qx.ui.container.Composite,
        o, y, f, p, w, d, nt, tt, h, u, it, a, ot, st, ht, ct, lt;
    v.set({
        layout: (new qx.ui.layout.VBox).set({})
    });
    o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        width: 645,
        height: 160,
        maxWidth: 645
    });
    o.objid = nf;
    y = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({}),
        minHeight: 11,
        innerDecorator: cs
    });
    f = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({}),
        minHeight: 35,
        innerDecorator: re
    });
    f.objid = wii;
    p = (new qx.ui.basic.Image).set({
        source: yu,
        marginTop: 3,
        marginLeft: 6
    });
    p.objid = sru;
    w = (new qx.ui.basic.Label).set({
        font: ft,
        textColor: ti,
        marginLeft: 6,
        marginTop: 3
    });
    w.objid = gpi;
    f.add(p);
    f.add(w);
    y.add(f, {
        flex: 1
    });
    var f = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            minHeight: 160,
            innerDecorator: ff
        }),
        k = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            minHeight: 160,
            paddingBottom: 14
        }),
        at = (new qx.ui.basic.Image).set({
            source: ai,
            allowShrinkX: !1,
            allowShrinkY: !1,
            width: null,
            allowGrowX: !1,
            allowGrowY: !1,
            marginLeft: 12,
            marginTop: 20
        });
    at.objid = fh;
    var e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            minWidth: 470,
            marginLeft: 10
        }),
        l = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        vt = (new qx.ui.basic.Label).set({
            value: po,
            font: et,
            wrap: !1,
            rich: !1,
            maxWidth: 450
        });
    vt.objid = yt;
    d = (new qx.ui.basic.Image).set({
        source: ou
    });
    d.objid = ao;
    l.add(vt);
    l.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    });
    l.add(d);
    nt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Grid).set({}),
        width: 0,
        allowGrowX: !0,
        maxWidth: 450
    });
    nt.objid = oyi;
    tt = (new qx.ui.basic.Label).set({
        value: oh,
        font: i,
        textColor: g,
        visibility: s
    });
    tt.objid = tc;
    h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    });
    u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        minWidth: 128
    });
    u.objid = np;
    it = (new qx.ui.basic.Label).set({
        value: ut,
        marginLeft: 35,
        marginTop: 6,
        visibility: s
    });
    it.objid = vo;
    u.add((new qx.ui.basic.Image).set({
        source: bs,
        marginLeft: 4,
        visibility: s
    }));
    u.add(it);
    h.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    });
    h.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    });
    h.add(u);
    var u = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        rt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        pt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignY: n
            }),
            alignX: t,
            alignY: n
        });
    return pt.add((new qx.ui.basic.Image).set({
        source: vf,
        alignY: n,
        alignX: t,
        toolTipText: c.tr(vh)
    })), a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        minWidth: 130
    }), ot = (new qx.ui.basic.Label).set({
        marginTop: 6,
        marginLeft: 8,
        value: ut,
        rich: !0
    }), ot.objid = rpt, st = (new qx.ui.basic.Label).set({
        value: ut,
        marginLeft: 8,
        marginTop: 6
    }), st.objid = pu, a.add(ot), a.add(st), rt.add(pt), rt.add(a), ht = (new qx.ui.form.Button).set({
        label: c.tr(oo),
        minWidth: 186,
        allowGrowY: !1,
        alignY: b,
        showToolTipWhenDisabled: !0
    }), ht.objid = io, ct = (new qx.ui.form.Button).set({
        label: c.tr(tvt),
        minWidth: 128,
        visibility: s,
        alignY: b,
        allowGrowY: !1
    }), ct.objid = fii, lt = (new qx.ui.form.Button).set({
        label: c.tr(fyr),
        minWidth: 128,
        visibility: s,
        alignY: b,
        allowGrowY: !1
    }), lt.objid = be, u.add(rt), u.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), u.add(ht), u.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), u.add(ct), u.add(lt), e.add(l), e.add(nt, {
        flex: 1
    }), e.add(tt), e.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), e.add(h), e.add(u), k.add(at), k.add(e), f.add(k), f.add((new qx.ui.core.Spacer).set({})), o.add(y), o.add(f, {
        flex: 1
    }), v.add(o), v
}

function ll_shop_capacities_page(n) {
    var r = qx.core.Init.getApplication(),
        u = n ? n : new qx.ui.container.Composite,
        e, s;
    u.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        })
    });
    var f = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.VBox).set({}),
            contentPaddingBottom: 15,
            innerDecorator: de
        }),
        i = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10,
                alignX: t
            }),
            height: 78,
            paddingTop: 10,
            paddingLeft: 12,
            allowGrowY: !1,
            paddingRight: 12
        }),
        h = (new qx.ui.form.RadioButton).set({
            appearance: br,
            width: 215,
            allowShrinkY: !1,
            allowGrowY: !1,
            label: r.tr(pgr),
            font: du,
            rich: !0,
            icon: nlr,
            gap: 5
        });
    h.objid = tur;
    e = (new qx.ui.form.RadioButton).set({
        appearance: br,
        width: 215,
        allowShrinkY: !1,
        allowGrowY: !1,
        label: r.tr(nnt),
        font: du,
        icon: ict,
        gap: 6,
        rich: !0
    });
    e.objid = ybi;
    s = (new qx.ui.form.RadioButton).set({
        appearance: br,
        width: 215,
        allowShrinkY: !1,
        gap: 6,
        icon: ovr,
        label: r.tr(odt),
        font: du,
        rich: !0,
        center: !0,
        alignY: w,
        allowGrowY: !1
    });
    s.objid = wur;
    i.add(h);
    i.add(e);
    i.add(s);
    var c = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            decorator: ps
        }),
        l = (new qx.ui.container.Scroll).set({
            marginRight: 5,
            marginLeft: 4,
            marginTop: 2,
            marginBottom: 2
        }),
        a = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignX: o,
                spacing: 2
            })
        });
    return a.objid = lo, l.add(a, {
        edge: 0,
        flex: 1
    }), c.add(l, {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }), f.add(i), f.add(c, {
        flex: 1
    }), u.add(f, {
        flex: 1
    }), u
}

function ll_shop_overlay(n) {
    var u = qx.core.Init.getApplication(),
        f = n ? n : new qx.ui.container.Composite,
        y, p, w, b, k;
    f.set({
        layout: (new qx.ui.layout.VBox).set({})
    });
    var l = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        a = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            marginLeft: 0,
            paddingLeft: 10,
            paddingTop: 10,
            marginRight: 3,
            allowGrowY: !1
        }),
        v = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.VBox).set({}),
            width: 250,
            contentPaddingLeft: 10,
            contentPaddingTop: 10,
            contentPaddingRight: 10,
            contentPaddingBottom: 10,
            innerDecorator: cv
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            allowGrowX: !0,
            maxWidth: 145,
            alignX: t
        }),
        i = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            toolTip: (new webfrontend.gui.widgets.FundsToolTip).set({
                maxWidth: 320
            })
        });
    i.objid = bgr;
    y = (new qx.ui.basic.Label).set({
        value: hkr,
        font: h,
        textColor: c,
        width: 57,
        height: 18,
        fixedContentSize: !0,
        marginLeft: 6,
        marginTop: 3
    });
    y.objid = pu;
    i.add((new qx.ui.basic.Image).set({
        source: vf
    }));
    i.add(y);
    p = (new qx.ui.form.Button).set({
        allowGrowY: !1,
        appearance: si,
        icon: td,
        toolTipText: u.tr(wg),
        allowGrowX: !0,
        allowShrinkX: !0,
        marginTop: 2
    });
    p.objid = kvt;
    e.add(i);
    e.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    });
    e.add(p);
    w = (new qx.ui.form.Button).set({
        allowGrowY: !1,
        height: 26,
        marginLeft: 5,
        marginTop: 5,
        marginRight: 7,
        appearance: wu,
        label: u.tr(fy),
        maxWidth: 145,
        alignX: t
    });
    w.objid = tnr;
    v.add(e);
    v.add(w);
    var r = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.HBox).set({}),
            marginLeft: 6,
            contentPaddingLeft: 40,
            contentPaddingRight: 40,
            contentPaddingBottom: 12,
            innerDecorator: cv
        }),
        i = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            alignX: o
        }),
        d = (new qx.ui.form.SelectBox).set({
            height: 26,
            width: 145,
            marginTop: 4
        });
    d.objid = dcr;
    i.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    });
    i.add((new qx.ui.basic.Label).set({
        value: u.tr(wst),
        paddingLeft: 6
    }));
    i.add(d);
    var nt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            minWidth: 4,
            decorator: ufu,
            marginTop: 10
        }),
        s = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        g = (new qx.ui.form.SelectBox).set({
            width: 145,
            height: 26,
            marginTop: 4
        });
    return g.objid = swr, s.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), s.add((new qx.ui.basic.Label).set({
        value: u.tr(vri),
        paddingLeft: 6
    })), s.add(g), r.add(i), r.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), r.add(nt), r.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), r.add(s), a.add(v), a.add(r, {
        flex: 1
    }), b = (new qx.ui.tabview.TabView).set({
        marginLeft: 10,
        marginTop: 10
    }), b.objid = dlt, l.add(a, {
        flex: 1
    }), l.add(b, {
        flex: 1
    }), k = (new qx.ui.basic.Image).set({}), k.objid = dti, f.add(l, {
        flex: 1
    }), f.add(k), f
}

function ll_shop_popular_page(n) {
    var e = qx.core.Init.getApplication(),
        i = n ? n : new qx.ui.container.Composite,
        f;
    i.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 0
        })
    });
    var r = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.VBox).set({}),
            innerDecorator: de,
            contentPaddingBottom: 20
        }),
        u = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10,
                alignX: t
            }),
            height: 78,
            alignY: w,
            paddingTop: 10,
            allowGrowY: !1
        }),
        o = (new qx.ui.form.RadioButton).set({
            appearance: br,
            width: 248,
            icon: ywr,
            center: !0,
            gap: 5,
            label: e.tr(nvi),
            allowGrowY: !1,
            allowShrinkY: !1,
            alignY: w
        });
    o.objid = nst;
    f = (new qx.ui.form.RadioButton).set({
        appearance: br,
        width: 248,
        label: e.tr(ckt),
        icon: ohr,
        center: !0,
        gap: 8,
        allowShrinkY: !1,
        allowGrowY: !1,
        alignY: w
    });
    f.objid = afi;
    u.add(o);
    u.add(f);
    var s = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            decorator: ps
        }),
        h = (new qx.ui.container.Scroll).set({
            marginRight: 5,
            marginLeft: 4,
            marginTop: 2,
            marginBottom: 2
        }),
        c = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignX: t,
                spacing: 2
            })
        });
    return c.objid = lo, h.add(c, {
        flex: 1
    }), s.add(h, {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }), r.add(u), r.add(s, {
        flex: 1
    }), i.add(r, {
        flex: 1
    }), i
}

function ll_shop_resources_page(n) {
    var i = n ? n : new qx.ui.container.Composite;
    i.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        })
    });
    var r = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.VBox).set({}),
            innerDecorator: de,
            contentPaddingBottom: 20
        }),
        o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                alignX: t
            }),
            height: 78,
            paddingTop: 10,
            allowGrowY: !1
        }),
        u = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            decorator: ps
        }),
        f = (new qx.ui.container.Scroll).set({
            marginRight: 5,
            marginLeft: 4,
            marginTop: 2,
            marginBottom: 2
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignX: t,
                spacing: 2
            })
        });
    return e.objid = lo, f.add(e), u.add(f, {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }), r.add(o), r.add(u, {
        flex: 1
    }), i.add(r, {
        flex: 1
    }), i
}

function ll_shop_small_panel(t) {
    var e = qx.core.Init.getApplication(),
        c = t ? t : new qx.ui.container.Composite,
        y, p, u, k, f, s, d, a, o, nt, tt, h, it, rt;
    c.set({
        layout: (new qx.ui.layout.VBox).set({}),
        width: 318,
        height: 160,
        allowShrinkX: !1,
        allowGrowX: !1,
        allowShrinkY: !1,
        allowGrowY: !1,
        maxWidth: null
    });
    y = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({}),
        minHeight: 11,
        allowShrinkY: !1,
        allowGrowY: !0,
        allowShrinkX: !0,
        allowGrowX: !0,
        visibility: v,
        innerDecorator: cs
    });
    u = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({}),
        minHeight: 35,
        allowShrinkY: !1,
        allowGrowY: !1,
        visibility: yh,
        innerDecorator: re
    });
    u.objid = stt;
    p = (new qx.ui.basic.Label).set({
        value: dv,
        font: ft,
        textColor: ti,
        marginLeft: 6,
        marginTop: 3
    });
    p.objid = un;
    u.add((new qx.ui.basic.Image).set({
        source: yu,
        marginTop: 3,
        marginLeft: 6
    }));
    u.add(p);
    y.add(u, {
        flex: 1
    });
    u = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        minHeight: 160,
        innerDecorator: ff
    });
    u.objid = nf;
    var b = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        l = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            minWidth: 146,
            paddingLeft: 10
        }),
        r = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({})
        }),
        et = (new qx.ui.basic.Image).set({
            source: ai,
            allowShrinkX: !1,
            allowShrinkY: !1,
            width: null,
            allowGrowX: !1,
            allowGrowY: !1,
            scale: !0,
            maxWidth: 120,
            maxHeight: 95,
            marginLeft: 15
        });
    et.objid = fh;
    k = (new qx.ui.basic.Image).set({
        marginLeft: 105
    });
    k.objid = gv;
    r.add(et);
    r.add(k);
    f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        marginTop: -2,
        marginBottom: 2
    });
    f.objid = edi;
    s = (new qx.ui.basic.Label).set({
        value: ut,
        marginLeft: 8,
        marginTop: 6
    });
    s.objid = pu;
    f.add((new qx.ui.basic.Image).set({
        source: vf,
        marginLeft: 4,
        toolTipText: e.tr(vh)
    }));
    f.add(s);
    d = (new qx.ui.form.Button).set({
        label: e.tr(oo),
        maxWidth: 128,
        showToolTipWhenDisabled: !0,
        toolTipText: e.tr(ec)
    });
    d.objid = io;
    l.add(r);
    l.add(f);
    l.add(d);
    var r = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            minWidth: 172,
            paddingRight: 8,
            paddingLeft: 8
        }),
        f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                alignY: w
            }),
            alignY: n,
            marginBottom: 4
        }),
        s = (new qx.ui.basic.Label).set({
            value: po,
            maxWidth: 135,
            rich: !0,
            maxHeight: 45,
            font: nri
        });
    return s.objid = yt, o = (new qx.ui.basic.Image).set({
        source: ou
    }), o.objid = ao, f.add(s), f.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), f.add(o), a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        })
    }), o = (new qx.ui.basic.Image).set({}), o.objid = vk, nt = (new qx.ui.basic.Label).set({
        value: dl,
        font: i
    }), nt.objid = by, a.add(o), a.add(nt), tt = (new qx.ui.basic.Label).set({
        value: oh,
        textColor: g
    }), tt.objid = tc, h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), h.objid = np, it = (new qx.ui.basic.Label).set({
        value: ut,
        marginLeft: 6,
        marginTop: 6
    }), it.objid = vo, h.add((new qx.ui.basic.Image).set({
        source: bs,
        marginLeft: 10,
        toolTipText: e.tr(fn)
    })), h.add(it), rt = (new qx.ui.form.Button).set({
        label: e.tr(ytt),
        maxWidth: 140,
        marginLeft: 6,
        showToolTipWhenDisabled: !0,
        toolTipText: e.tr(ga)
    }), rt.objid = be, r.add(f), r.add(a), r.add(tt), r.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), r.add(h), r.add(rt), b.add(l), b.add(r), u.add(b), c.add(y), c.add(u, {
        flex: 1
    }), c
}

function ll_shop_small_panel_2(t) {
    var e = qx.core.Init.getApplication(),
        c = t ? t : new qx.ui.container.Composite,
        p, w, f, a, h, b, k, v, o, d, nt, y, s, u, rt, et, ot, st, ht, ct, lt, at, vt, pt, wt, bt;
    c.set({
        layout: (new qx.ui.layout.VBox).set({}),
        width: null,
        height: null,
        maxHeight: 156
    });
    p = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({}),
        minHeight: 11,
        innerDecorator: cs,
        allowShrinkY: !1,
        width: -4,
        height: null,
        maxHeight: 55
    });
    f = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({}),
        minHeight: 35,
        innerDecorator: re,
        allowShrinkY: !1,
        allowGrowY: !1,
        visibility: yh
    });
    f.objid = stt;
    w = (new qx.ui.basic.Label).set({
        marginTop: 3,
        marginLeft: 6,
        font: ft,
        textColor: ti,
        value: dv,
        marginBottom: -2,
        minHeight: 4
    });
    w.objid = un;
    f.add((new qx.ui.basic.Image).set({
        marginTop: 3,
        marginLeft: 6,
        source: yu
    }));
    f.add(w);
    p.add(f, {
        flex: 1
    });
    f = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        minHeight: 145,
        innerDecorator: ff
    });
    f.objid = nf;
    a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 8
        })
    });
    h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        minWidth: 146,
        minHeight: 100
    });
    h.objid = tbt;
    b = (new qx.ui.basic.Image).set({
        maxWidth: 120,
        maxHeight: 95,
        height: null,
        marginLeft: 24,
        source: ai,
        scale: !0,
        marginTop: 4
    });
    b.objid = fh;
    k = (new qx.ui.basic.Image).set({
        marginLeft: 105
    });
    k.objid = gv;
    h.add(b);
    h.add(k);
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        paddingRight: 8
    });
    o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        minWidth: 0,
        alignX: r
    });
    o.objid = nfu;
    d = (new qx.ui.basic.Label).set({
        maxWidth: null,
        maxHeight: 45,
        font: l,
        value: po
    });
    d.objid = yt;
    nt = (new qx.ui.basic.Image).set({
        alignX: r,
        source: ou,
        minWidth: -3
    });
    nt.objid = ao;
    o.add(d, {
        flex: 1
    });
    o.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    });
    o.add(nt);
    var tt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 4
            }),
            width: null
        }),
        it = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Flow).set({})
        }),
        kt = (new qx.ui.basic.Image).set({});
    return kt.objid = vk, s = (new qx.ui.basic.Label).set({
        value: dl,
        font: i
    }), s.objid = by, it.add(kt), it.add(s, {
        lineBreak: ok
    }), y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        paddingTop: 0
    }), s = (new qx.ui.basic.Label).set({
        textColor: g,
        value: oh
    }), s.objid = tc, u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Flow).set({
            spacingX: 4,
            spacingY: 8,
            alignX: r
        }),
        paddingRight: 0,
        paddingTop: 0
    }), rt = (new webfrontend.gui.widgets.SpinnerInt).set({}), rt.objid = kor, et = (new qx.ui.basic.Label).set({
        value: hp,
        font: i,
        height: 34,
        alignY: n,
        paddingTop: 8
    }), et.objid = snr, ot = (new qx.ui.basic.Image).set({
        source: bs,
        toolTipText: e.tr(fn),
        marginTop: 4
    }), ot.objid = pdi, st = (new qx.ui.basic.Label).set({
        value: ut,
        marginTop: 8,
        width: 36
    }), st.objid = vo, ht = (new qx.ui.basic.Label).set({
        value: ltt,
        marginTop: 8,
        width: 36,
        minWidth: 66
    }), ht.objid = pot, ct = (new qx.ui.form.Button).set({
        label: e.tr(ytt),
        toolTipText: e.tr(ga),
        maxWidth: 140,
        width: 140,
        marginTop: 0,
        height: 34,
        showToolTipWhenDisabled: !0
    }), ct.objid = be, lt = (new webfrontend.gui.widgets.SpinnerInt).set({}), lt.objid = sit, at = (new qx.ui.basic.Label).set({
        value: hp,
        font: i,
        height: 34,
        paddingTop: 8
    }), at.objid = bat, vt = (new qx.ui.basic.Image).set({
        source: vf,
        toolTipText: e.tr(vh),
        marginTop: 4
    }), vt.objid = liu, pt = (new qx.ui.basic.Label).set({
        value: cat,
        marginTop: 8,
        width: 36
    }), pt.objid = pu, wt = (new qx.ui.basic.Label).set({
        value: ltt,
        marginTop: 8,
        width: 36,
        minWidth: 66
    }), wt.objid = pyi, bt = (new qx.ui.form.Button).set({
        maxWidth: 140,
        label: e.tr(oo),
        toolTipText: e.tr(ec),
        maxHeight: null,
        width: 140,
        marginTop: 0,
        height: 34,
        showToolTipWhenDisabled: !0
    }), bt.objid = io, u.add(rt), u.add(et), u.add(ot), u.add(st), u.add(ht), u.add(ct, {
        lineBreak: ok
    }), u.add(lt), u.add(at), u.add(vt), u.add(pt), u.add(wt), u.add(bt), y.add(s), y.add(u, {
        flex: 1
    }), tt.add(it), tt.add(y, {
        flex: 1
    }), v.add(o), v.add(tt, {
        flex: 1
    }), a.add(h), a.add(v, {
        flex: 1
    }), f.add(a, {
        edge: 0
    }), c.add(p, {
        flex: 1
    }), c.add(f, {
        flex: 1
    }), c
}

function ll_shop_specialOffer_panel(n) {
    var y = qx.core.Init.getApplication(),
        i = n ? n : new qx.ui.container.Composite,
        r, e, u, s, h, c;
    i.set({
        layout: (new qx.ui.layout.VBox).set({}),
        width: 318,
        height: 160,
        allowShrinkX: !1,
        allowGrowX: !1,
        allowShrinkY: !1,
        allowGrowY: !1,
        maxWidth: null
    });
    r = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({}),
        minHeight: 35,
        innerDecorator: re
    });
    e = (new qx.ui.basic.Label).set({
        value: kai,
        font: ft,
        textColor: ti,
        marginTop: 3,
        marginLeft: 6
    });
    e.objid = ui;
    r.add((new qx.ui.basic.Image).set({
        source: yu,
        marginTop: 3,
        marginLeft: 6
    }));
    r.add(e);
    u = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        minHeight: 160,
        innerDecorator: ff
    });
    u.objid = nf;
    var o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        l = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            minWidth: 146
        }),
        a = (new qx.ui.basic.Image).set({
            source: ai,
            allowShrinkX: !1,
            allowShrinkY: !1,
            width: null,
            allowGrowX: !1,
            allowGrowY: !1,
            scale: !0,
            maxWidth: 120,
            maxHeight: 95,
            marginLeft: 20,
            marginTop: 30
        });
    a.objid = vlr;
    l.add(a);
    var t = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            minWidth: 172,
            width: 172,
            paddingLeft: 8,
            paddingRight: 12,
            height: 150,
            paddingBottom: 4
        }),
        f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({})
        }),
        v = (new qx.ui.basic.Label).set({
            value: fai,
            font: et
        });
    return v.objid = yt, f.add(v), f.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), f.add((new qx.ui.basic.Image).set({
        source: ou
    })), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 160,
        maxWidth: 172,
        height: 82,
        maxHeight: 82
    }), h = (new qx.ui.basic.Label).set({
        value: tor,
        rich: !0,
        wrap: !0,
        minWidth: 160,
        maxHeight: 90,
        paddingTop: 6
    }), h.objid = ki, s.add(h), c = (new qx.ui.form.Button).set({
        label: y.tr(ynt)
    }), c.objid = vhr, t.add(f), t.add(s), t.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), t.add(c), o.add(l), o.add(t), u.add(o), i.add(r), i.add(u), i
}

function ll_sim_report(u) {
    var y = qx.core.Init.getApplication(),
        ct = u ? u : new qx.ui.container.Composite,
        yt, pt, v, ft, wt, bt, kt, d, it, rt, dt, w, tt, ot, e, gt, g, a, ni, p, b, f, ut, c, et, lt, o, ti, nt, ht, st, ii;
    ct.set({
        layout: (new qx.ui.layout.VBox).set({}),
        allowGrowX: !1,
        width: 180
    });
    var at = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.VBox).set({
                alignX: t
            }),
            innerDecorator: hst,
            contentPaddingTop: 12,
            contentPaddingLeft: 6,
            contentPaddingRight: 6,
            contentPaddingBottom: 2
        }),
        vt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                alignY: n,
                alignX: t
            }),
            minHeight: 24
        }),
        ui = (new qx.ui.basic.Image).set({
            source: gpr,
            scale: !0,
            height: 24,
            width: 30
        });
    ui.objid = svt;
    vt.add((new qx.ui.basic.Label).set({
        value: y.tr(oyt),
        rich: !0,
        font: h,
        wrap: !1
    }), {});
    vt.add(ui);
    yt = (new qx.ui.basic.Label).set({
        value: y.tr(vtu),
        rich: !0,
        textAlign: t
    });
    yt.objid = fot;
    pt = (new qx.ui.basic.Label).set({
        value: hlr,
        rich: !0,
        font: ri
    });
    pt.objid = tet;
    at.add(vt);
    at.add(yt);
    at.add(pt);
    var ei = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            innerDecorator: gct
        }),
        oi = (new qx.ui.container.Scroll).set({
            width: null,
            height: null,
            scrollbarX: fi
        }),
        o = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignX: t,
                spacing: 5
            }),
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 5
        });
    o.objid = svi;
    var nt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({})
        }),
        v = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            marginLeft: 12
        }),
        w = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 6,
                alignY: n
            }),
            marginLeft: 3
        });
    w.objid = rit;
    tt = (new qx.ui.basic.Label).set({
        value: av,
        rich: !0,
        font: i
    });
    tt.objid = sgt;
    w.add((new qx.ui.basic.Image).set({
        source: ftr,
        scale: !0
    }));
    w.add(tt);
    b = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6,
            alignY: n
        }),
        marginLeft: 3
    });
    b.objid = git;
    ft = (new qx.ui.basic.Label).set({
        value: vvi,
        rich: !0,
        font: i
    });
    ft.objid = oft;
    b.add((new qx.ui.basic.Image).set({
        source: vrt,
        scale: !0
    }));
    b.add(ft);
    f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6,
            alignY: n
        }),
        marginLeft: 3
    });
    f.objid = ftu;
    ut = (new qx.ui.basic.Label).set({
        value: boi,
        rich: !0,
        font: i
    });
    ut.objid = por;
    f.add((new qx.ui.basic.Image).set({
        source: fk,
        scale: !0
    }));
    f.add(ut);
    c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6,
            alignY: n
        }),
        marginLeft: 3
    });
    c.objid = iui;
    et = (new qx.ui.basic.Label).set({
        value: av,
        rich: !0,
        font: i
    });
    et.objid = uyt;
    c.add((new qx.ui.basic.Image).set({
        source: fkr,
        scale: !0
    }));
    c.add(et);
    e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 6,
            alignY: n
        }),
        marginLeft: 3
    });
    e.objid = wor;
    ot = (new qx.ui.basic.Label).set({
        value: tar,
        rich: !0,
        font: i
    });
    ot.objid = oyr;
    e.add((new qx.ui.basic.Image).set({
        source: eet,
        scale: !0
    }));
    e.add(ot);
    a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 6
        }),
        marginLeft: 3
    });
    a.objid = wuu;
    g = (new qx.ui.basic.Label).set({
        value: cyt,
        rich: !0,
        font: i
    });
    g.objid = uvt;
    a.add((new qx.ui.basic.Image).set({
        source: ib,
        scale: !0,
        width: 20,
        height: 20
    }));
    a.add(g);
    d = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 6
        }),
        marginLeft: 3
    });
    d.objid = tfi;
    p = (new qx.ui.basic.Label).set({
        value: tct,
        rich: !0,
        font: i
    });
    p.objid = gei;
    d.add((new qx.ui.basic.Image).set({
        source: tl,
        scale: !0,
        width: 20,
        height: 20
    }));
    d.add(p);
    it = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 3,
            alignY: n
        })
    });
    it.objid = cdt;
    it.add((new qx.ui.basic.Image).set({
        source: abi,
        scale: !0,
        anonymous: !0
    }));
    it.add((new qx.ui.basic.Label).set({
        value: y.tr(bft),
        rich: !0,
        anonymous: !0,
        font: i
    }));
    v.add(w);
    v.add(b);
    v.add(f);
    v.add(c);
    v.add(e);
    v.add(a);
    v.add(d);
    v.add(it);
    w = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        marginTop: 8
    });
    w.objid = hn;
    var b = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({}),
            marginLeft: 3
        }),
        f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 6,
                alignY: n
            }),
            marginLeft: -1
        }),
        ut = (new qx.ui.basic.Label).set({
            value: y.tr(fo),
            rich: !0,
            font: i,
            marginTop: 4,
            width: 140
        });
    ut.objid = vkr;
    f.add((new qx.ui.basic.Image).set({
        source: tbi,
        scale: !0,
        marginTop: 4,
        minWidth: 18,
        width: 20,
        height: 20
    }));
    f.add(ut);
    b.add(f);
    w.add((new qx.ui.basic.Image).set({
        source: df,
        alignX: t
    }));
    w.add(b);
    nt.add((new qx.ui.basic.Label).set({
        value: y.tr(ofu),
        rich: !0,
        font: h,
        marginLeft: 2
    }));
    nt.add(v);
    nt.add(w);
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    });
    st = (new qx.ui.basic.Label).set({
        value: y.tr(vsr),
        rich: !0,
        font: h,
        marginLeft: 2
    });
    st.objid = gnr;
    tt = (new qx.ui.basic.Label).set({
        value: y.tr(wsi),
        rich: !0,
        font: k,
        allowGrowX: !0,
        marginLeft: 12
    });
    tt.objid = kdi;
    ft = (new qx.ui.basic.Label).set({
        value: y.tr(pdr),
        rich: !0,
        font: k,
        allowGrowX: !0,
        marginLeft: 12
    });
    ft.objid = nci;
    c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    });
    c.objid = rst;
    e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5,
            alignX: t
        })
    });
    wt = (new webfrontend.gui.widgets.ImageProgressWidget).set({
        source: ght,
        width: 80
    });
    wt.objid = wwi;
    g = (new qx.ui.basic.Label).set({
        value: lu,
        rich: !0,
        font: ri,
        minWidth: 50,
        textAlign: r
    });
    g.objid = hcr;
    e.add(wt);
    e.add(g);
    a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5,
            alignX: t
        })
    });
    bt = (new webfrontend.gui.widgets.ImageProgressWidget).set({
        source: ici,
        width: 80
    });
    bt.objid = fei;
    p = (new qx.ui.basic.Label).set({
        value: lu,
        rich: !0,
        font: ri,
        minWidth: 50,
        textAlign: r
    });
    p.objid = khr;
    a.add(bt);
    a.add(p);
    d = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5,
            alignX: t
        })
    });
    kt = (new webfrontend.gui.widgets.ImageProgressWidget).set({
        source: ffr,
        width: 80
    });
    kt.objid = brt;
    rt = (new qx.ui.basic.Label).set({
        value: lu,
        rich: !0,
        font: ri,
        minWidth: 50,
        textAlign: r
    });
    rt.objid = aoi;
    d.add(kt);
    d.add(rt);
    c.add(e);
    c.add(a);
    c.add(d);
    e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        marginLeft: 12,
        marginTop: 8
    });
    e.objid = ppr;
    a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    g = (new qx.ui.basic.Label).set({
        value: ol,
        rich: !0,
        anonymous: !0,
        font: k
    });
    g.objid = ol;
    p = (new qx.ui.basic.Label).set({
        value: hi,
        rich: !0,
        anonymous: !0,
        font: i,
        alignY: n
    });
    p.objid = sfr;
    a.add(g);
    a.add(p);
    d = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    p = (new qx.ui.basic.Label).set({
        value: ott,
        rich: !0,
        anonymous: !0,
        font: k
    });
    p.objid = ott;
    rt = (new qx.ui.basic.Label).set({
        value: hi,
        rich: !0,
        anonymous: !0,
        font: i,
        alignY: n
    });
    rt.objid = grr;
    d.add(p);
    d.add(rt);
    it = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    rt = (new qx.ui.basic.Label).set({
        value: ly,
        rich: !0,
        anonymous: !0,
        font: k
    });
    rt.objid = ly;
    dt = (new qx.ui.basic.Label).set({
        value: hi,
        rich: !0,
        anonymous: !0,
        font: i,
        alignY: n
    });
    dt.objid = lci;
    it.add(rt);
    it.add(dt);
    e.add(a);
    e.add(d);
    e.add(it);
    v.add(st);
    v.add(tt);
    v.add(ft);
    v.add(c);
    v.add(e);
    w = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        marginLeft: 0
    });
    tt = (new qx.ui.basic.Label).set({
        value: y.tr(hii),
        rich: !0,
        font: h,
        marginLeft: 2
    });
    tt.objid = csr;
    var f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                alignY: n
            })
        }),
        c = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignX: t
            })
        }),
        si = (new qx.ui.basic.Image).set({
            scale: !0,
            source: sei
        });
    return si.objid = orr, ot = (new qx.ui.basic.Label).set({
        value: iyt,
        font: l
    }), ot.objid = aot, c.add(si), c.add(ot), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        })
    }), gt = (new qx.ui.basic.Image).set({
        scale: !0,
        source: eut
    }), gt.objid = pht, g = (new qx.ui.basic.Label).set({
        value: gkt,
        font: l
    }), g.objid = got, e.add(gt), e.add(g), a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        })
    }), ni = (new qx.ui.basic.Image).set({
        scale: !0,
        source: slt
    }), ni.objid = pgt, p = (new qx.ui.basic.Label).set({
        value: sut,
        font: l
    }), p.objid = sti, a.add(ni), a.add(p), f.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), f.add(c), f.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), f.add(e), f.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), f.add(a), f.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), w.add(tt), w.add(f), b = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 0
    }), b.objid = kwt, f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: n
        }),
        marginLeft: 12
    }), ut = (new qx.ui.basic.Label).set({
        value: ghr,
        font: i
    }), ut.objid = vwi, f.add((new qx.ui.basic.Image).set({
        scale: !0,
        source: scr,
        width: 20,
        height: 20
    })), f.add(ut, {}), c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5
        }),
        marginLeft: 12
    }), et = (new qx.ui.basic.Label).set({
        value: nkr,
        font: i
    }), et.objid = uor, c.add((new qx.ui.basic.Image).set({
        scale: !0,
        source: fk
    })), c.add(et, {}), b.add((new qx.ui.basic.Label).set({
        value: y.tr(aar),
        rich: !0,
        font: h,
        marginLeft: 2
    })), b.add(f), b.add(c), o.add(nt), o.add((new qx.ui.basic.Image).set({
        source: df
    })), o.add(v), o.add((new qx.ui.basic.Image).set({
        source: df
    })), o.add(w), o.add((new qx.ui.basic.Image).set({
        source: df
    })), o.add(b), o.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), oi.add(o), ei.add(oi, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), lt = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        innerDecorator: hhr,
        contentPaddingLeft: 7,
        contentPaddingRight: 7,
        contentPaddingBottom: 16
    }), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        visibility: s
    }), o.objid = nii, ti = (new qx.ui.basic.Label).set({
        value: hi,
        rich: !0,
        font: ri
    }), ti.objid = yir, ht = (new qx.ui.basic.Label).set({
        value: hi,
        rich: !0,
        font: ri
    }), ht.objid = bct, o.add((new qx.ui.basic.Label).set({
        value: y.tr(rn),
        rich: !0,
        font: h
    })), o.add((new qx.ui.basic.Label).set({
        value: y.tr(hft),
        rich: !0,
        font: k
    })), o.add(ti), o.add((new qx.ui.basic.Label).set({
        value: y.tr(eht),
        rich: !0,
        font: k
    })), o.add(ht), nt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({}),
        marginLeft: 2
    }), nt.objid = tpi, ht = (new qx.ui.basic.Label).set({
        rich: !0,
        font: k,
        value: nir,
        textAlign: t,
        marginLeft: 12
    }), ht.objid = loi, st = (new qx.ui.basic.Label).set({
        value: iiu,
        rich: !0,
        font: k,
        textAlign: t,
        marginLeft: 12
    }), st.objid = nut, nt.add((new qx.ui.basic.Label).set({
        value: y.tr(rn),
        rich: !0,
        font: h
    })), nt.add(ht), nt.add(st), ii = (new qx.ui.form.Button).set({
        height: 27,
        alignX: t,
        label: y.tr(wfu),
        marginTop: 8
    }), ii.objid = rhr, lt.add(o), lt.add(nt), lt.add(ii), ct.add(at), ct.add(ei, {
        flex: 1
    }), ct.add(lt), ct
}

function ll_test_allymarker(t) {
    var u = t ? t : new qx.ui.container.Composite,
        i, f, e, o, s, h, r, c, l, a, v, y;
    return u.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        }),
        decorator: rlr,
        minWidth: 750
    }), i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2,
            alignY: n
        })
    }), f = (new qx.ui.form.TextField).set({
        width: 50
    }), f.objid = eat, e = (new qx.ui.form.TextField).set({
        width: 50
    }), e.objid = yuu, o = (new qx.ui.form.TextField).set({
        width: 50
    }), o.objid = kcr, s = (new qx.ui.form.SelectBox).set({}), s.objid = ohi, h = (new qx.ui.form.TextField).set({}), h.objid = ndt, i.add((new qx.ui.basic.Label).set({
        value: swt
    })), i.add(f), i.add((new qx.ui.basic.Label).set({
        value: bfu
    })), i.add(e), i.add(o), i.add((new qx.ui.basic.Label).set({
        value: kyi
    })), i.add(s), i.add((new qx.ui.basic.Label).set({
        value: gbt
    })), i.add(h, {
        flex: 1
    }), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        })
    }), c = (new qx.ui.form.Button).set({
        label: lgi
    }), c.objid = oit, l = (new qx.ui.form.Button).set({
        label: opt
    }), l.objid = da, a = (new qx.ui.form.Button).set({
        label: opi
    }), a.objid = gni, v = (new qx.ui.basic.Label).set({
        value: gvr
    }), v.objid = our, r.add(c), r.add(l), r.add(a), r.add(v, {
        flex: 1
    }), y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    }), y.objid = frt, u.add(i), u.add(r), u.add(y), u
}

function ll_test1(i) {
    var f = i ? i : new qx.ui.container.Composite,
        r;
    f.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        minHeight: 25,
        minWidth: 400,
        width: 400,
        allowGrowX: !0
    });
    var u = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignY: w
            }),
            allowGrowX: !0,
            paddingLeft: 2,
            paddingTop: 6,
            paddingRight: 10,
            paddingBottom: 10,
            decorator: ii
        }),
        h = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 8,
                alignY: w
            })
        }),
        r = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignX: t
            }),
            paddingLeft: 2
        });
    return r.add((new qx.ui.basic.Label).set({
        rich: !0,
        wrap: !1,
        allowGrowX: !0,
        textColor: e,
        textAlign: o,
        font: pk,
        marginBottom: 10,
        visibility: v,
        value: bfr
    })), r.add((new qx.ui.basic.Label).set({
        rich: !0,
        wrap: !1,
        textColor: c,
        font: st,
        marginBottom: 8,
        visibility: v,
        value: ywt
    })), r.add((new qx.ui.basic.Label).set({
        textColor: e,
        textAlign: o,
        rich: !0,
        visibility: v,
        value: bfi
    })), h.add((new qx.ui.basic.Image).set({
        marginLeft: 4,
        visibility: v,
        source: sdr
    })), h.add(r, {
        flex: 1
    }), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 6
    }), r.add((new qx.ui.basic.Label).set({
        value: yft,
        appearance: d,
        textAlign: o,
        cursor: p,
        toolTipText: chr,
        visibility: v
    })), r.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), r.add((new webfrontend.ui.SoundButton).set({
        label: dni,
        maxHeight: 32,
        minWidth: 100,
        visibility: s
    })), u.add(h), u.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), u.add(r), f.add(u, {
        left: 17,
        top: 4,
        right: 3,
        bottom: 3
    }), f
}

function ll_tutorialwindow(i) {
    var nt = qx.core.Init.getApplication(),
        h = i ? i : new qx.ui.container.Composite,
        y, b, k, u, f, g;
    h.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        minHeight: 25,
        minWidth: 400,
        width: 400,
        allowGrowX: !0
    });
    var s = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.VBox).set({
                alignY: w
            }),
            allowGrowX: !0,
            innerDecorator: ii,
            contentPaddingLeft: 2,
            contentPaddingTop: 6,
            contentPaddingRight: 10,
            contentPaddingBottom: 10
        }),
        l = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 8,
                alignY: w
            }),
            paddingLeft: 4
        }),
        tt = (new qx.ui.basic.Image).set({
            visibility: v,
            source: vy
        });
    return tt.objid = rh, u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        paddingLeft: 2
    }), f = (new qx.ui.basic.Label).set({
        rich: !0,
        wrap: !1,
        allowGrowX: !0,
        textColor: e,
        textAlign: o,
        font: pk,
        marginBottom: 10,
        visibility: v,
        value: ulr
    }), f.objid = vyt, y = (new qx.ui.basic.Label).set({
        rich: !0,
        textColor: c,
        font: st,
        marginBottom: 8,
        visibility: v,
        value: aeu
    }), y.objid = dw, b = (new qx.ui.basic.Label).set({
        textColor: e,
        textAlign: o,
        rich: !0,
        visibility: v,
        value: hbi
    }), b.objid = uy, u.add(f), u.add(y), u.add(b), l.add(tt), l.add(u, {
        flex: 1
    }), k = (new qx.ui.basic.Label).set({
        rich: !0,
        textAlign: r,
        marginTop: 10,
        marginLeft: 5,
        font: a,
        marginBottom: 5,
        allowGrowX: !0,
        value: hyr
    }), k.objid = gkr, u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 6
    }), f = (new qx.ui.basic.Label).set({
        value: nt.tr(yr),
        rich: !0,
        appearance: d,
        textAlign: o,
        cursor: p
    }), f.objid = afr, g = (new webfrontend.ui.SoundButton).set({
        label: nt.tr(es),
        rich: !0,
        maxHeight: 32,
        minWidth: 100,
        visibility: v
    }), g.objid = ak, u.add(f), u.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), u.add(g), s.add(l), s.add(k), s.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), s.add(u), h.add(s, {
        left: 17,
        top: 4,
        right: 3,
        bottom: 3
    }), h
}

function ll_victoryscreenbg(i) {
    var f = i ? i : new qx.ui.container.Composite,
        r, o, s, h;
    f.set({
        layout: (new qx.ui.layout.Canvas).set({})
    });
    var a = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({}),
            backgroundColor: tt,
            opacity: .4
        }),
        c = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignX: t,
                alignY: b
            }),
            allowGrowY: !1
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            allowGrowX: !1,
            allowGrowY: !1
        }),
        u = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Canvas).set({}),
            allowGrowX: !1,
            allowGrowY: !1
        }),
        l = (new qx.ui.basic.Image).set({
            scale: !0
        });
    return l.objid = rh, u.add(l, {
        left: 3,
        bottom: 3,
        right: 3,
        top: 3
    }), u.add((new qx.ui.basic.Image).set({
        source: vur
    }), {
        left: 0,
        top: 0
    }), u.add((new qx.ui.basic.Image).set({
        source: csi
    }), {
        right: 0,
        top: 0
    }), u.add((new qx.ui.core.Widget).set({
        allowGrowX: !0,
        decorator: ffu
    }), {
        left: 325,
        bottom: 0,
        right: 327
    }), u.add((new qx.ui.basic.Image).set({
        source: cbr
    }), {
        left: 0,
        bottom: 0
    }), u.add((new qx.ui.basic.Image).set({
        source: afu
    }), {
        right: 0,
        bottom: 0
    }), u.add((new qx.ui.basic.Image).set({
        source: ve,
        opacity: .3
    }), {
        right: -3,
        top: -3
    }), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), o = (new webfrontend.ui.SoundButton).set({
        icon: sf,
        appearance: uo,
        width: 21,
        height: 21
    }), o.objid = edt, r.add((new qx.ui.basic.Image).set({
        source: hd,
        width: 3,
        height: 1,
        allowGrowY: !0,
        scale: !0
    }), {
        right: 0,
        bottom: 29,
        top: 35
    }), r.add((new qx.ui.basic.Image).set({
        source: oa,
        width: 5,
        height: 28
    }), {
        right: 0,
        bottom: 0
    }), r.add((new qx.ui.basic.Image).set({
        source: yd,
        allowGrowX: !0,
        width: 1,
        height: 3,
        scale: !0
    }), {
        right: 5,
        left: 5,
        bottom: 0
    }), r.add((new qx.ui.basic.Image).set({
        source: ce,
        width: 5,
        height: 29
    }), {
        left: 0,
        bottom: 0
    }), r.add((new qx.ui.basic.Image).set({
        source: ef,
        width: 3,
        height: 1,
        allowGrowY: !0,
        scale: !0
    }), {
        left: 0,
        bottom: 29,
        top: 32
    }), r.add((new qx.ui.basic.Image).set({
        source: vb,
        width: 3,
        height: 32
    }), {
        left: 0,
        top: 0
    }), r.add((new qx.ui.basic.Image).set({
        source: nn,
        width: 1,
        height: 3,
        allowGrowX: !0,
        scale: !0
    }), {
        left: 28,
        right: 34,
        top: 0
    }), r.add((new qx.ui.basic.Image).set({
        source: att,
        width: 25,
        height: 5
    }), {
        left: 3,
        top: 0
    }), r.add((new qx.ui.basic.Image).set({
        source: ve,
        width: 34,
        height: 35
    }), {
        right: 0,
        top: 0
    }), r.add(o, {
        right: 5,
        top: 5
    }), s = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t,
            alignY: n
        })
    }), h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t,
            alignY: w
        }),
        width: 730,
        height: 420,
        allowGrowY: !1,
        allowGrowX: !1
    }), h.objid = lv, s.add(h), e.add(u, {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }), e.add(r, {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }), e.add(s, {
        left: 0,
        right: 0,
        bottom: 30
    }), c.add(e), f.add(a, {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }), f.add(c, {
        bottom: 105,
        left: 0,
        right: 0
    }), f
}

function ll_victoryscreenfg(r) {
    var f = qx.core.Init.getApplication(),
        st = r ? r : new qx.ui.container.Composite,
        it, at, vt, yt, pt, bt, g, kt, k, dt, gt, b, ht, v, d, nt, w, h, ft, ni, ct, ti, y, p, ii, ut, ri, ui;
    st.set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: t
        }),
        height: 420,
        allowGrowY: !1,
        allowGrowX: !1,
        maxWidth: 740
    });
    it = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    });
    it.objid = kv;
    k = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        decorator: sbr
    });
    at = (new qx.ui.basic.Label).set({
        value: ig,
        textColor: avr,
        font: tk,
        textAlign: t,
        marginBottom: 2,
        allowGrowX: !0
    });
    at.objid = pfr;
    vt = (new qx.ui.basic.Label).set({
        value: ig,
        textColor: lt,
        font: tk,
        textAlign: t,
        allowGrowX: !0
    });
    vt.objid = biu;
    yt = (new qx.ui.basic.Label).set({
        value: ouu,
        textColor: tt,
        textAlign: t,
        allowGrowX: !0,
        font: rt,
        visibility: s
    });
    yt.objid = ptr;
    k.add(at, {
        top: 2,
        left: 2,
        right: 0
    });
    k.add(vt, {
        top: 0,
        left: 0,
        right: 0
    });
    k.add(yt);
    p = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    pt = (new qx.ui.basic.Image).set({
        source: gir
    });
    pt.objid = bkr;
    var ut = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 6
            })
        }),
        b = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 2
            })
        }),
        ht = (new qx.ui.basic.Label).set({
            value: f.tr(ws),
            font: rt,
            textColor: e,
            width: 80
        });
    ht.objid = sfi;
    d = (new qx.ui.basic.Label).set({
        value: ah,
        font: i,
        textColor: c
    });
    d.objid = hwr;
    b.add(ht);
    b.add(d);
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    v.objid = ifr;
    d = (new qx.ui.basic.Label).set({
        value: nbr,
        font: i,
        textColor: c,
        rich: !1,
        maxWidth: 200
    });
    d.objid = rkr;
    v.add((new qx.ui.basic.Label).set({
        value: f.tr(di),
        font: rt,
        textColor: e,
        width: 80
    }));
    v.add(d);
    y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    g = (new qx.ui.basic.Label).set({
        value: yfi,
        font: i,
        textColor: c,
        wrap: !1
    });
    g.objid = yfr;
    y.add((new qx.ui.basic.Label).set({
        value: f.tr(au),
        font: rt,
        textColor: e,
        width: 80
    }));
    y.add(g);
    ut.add(b);
    ut.add(v);
    ut.add(y);
    p.add(pt);
    p.add(ut);
    nt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    bt = (new qx.ui.basic.Image).set({
        source: yni
    });
    bt.objid = doi;
    var b = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 6
            })
        }),
        v = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 2
            })
        }),
        d = (new qx.ui.basic.Label).set({
            value: f.tr(ln),
            font: rt,
            textColor: e,
            width: 80
        });
    d.objid = sou;
    g = (new qx.ui.basic.Label).set({
        value: nsr,
        font: i,
        textColor: c,
        wrap: !1
    });
    g.objid = hyi;
    v.add(d);
    v.add(g);
    y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    y.objid = vdi;
    g = (new qx.ui.basic.Label).set({
        value: akr,
        font: i,
        textColor: c,
        wrap: !1
    });
    g.objid = uri;
    y.add((new qx.ui.basic.Label).set({
        value: f.tr(di),
        font: rt,
        textColor: e,
        width: 80
    }));
    y.add(g);
    ft = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 2
        })
    });
    kt = (new qx.ui.basic.Label).set({
        value: sft,
        font: i,
        textColor: c,
        wrap: !1
    });
    kt.objid = frr;
    ft.add((new qx.ui.basic.Label).set({
        value: f.tr(au),
        font: rt,
        textColor: e,
        width: 80
    }));
    ft.add(kt);
    b.add(v);
    b.add(y);
    b.add(ft);
    nt.add(bt);
    nt.add(b);
    it.add((new qx.ui.basic.Image).set({
        source: sdi
    }), {
        top: 70,
        left: 0,
        right: 0
    });
    it.add(k, {
        top: 0,
        left: 0,
        right: 0
    });
    it.add(p, {
        top: 86,
        left: 20
    });
    it.add(nt, {
        top: 86,
        left: 460
    });
    it.add((new qx.ui.basic.Label).set({
        value: f.tr(vw),
        textColor: lt,
        font: bp,
        maxWidth: 60,
        width: 60,
        textAlign: t
    }), {
        top: 100,
        left: 342
    });
    it.add((new qx.ui.basic.Label).set({
        value: f.tr(vw),
        textColor: tt,
        font: bp,
        maxWidth: 60,
        width: 60,
        textAlign: t
    }), {
        top: 98,
        left: 340
    });
    k = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 740,
        decorator: aii
    });
    k.objid = lv;
    var p = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 2
            })
        }),
        nt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({}),
            marginBottom: 2,
            width: 346
        }),
        w = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 0
            }),
            toolTip: (new qx.ui.tooltip.ToolTip).set({
                label: ror,
                allowGrowX: !0,
                rich: !0
            }),
            innerDecorator: gl,
            contentPaddingTop: 2,
            contentPaddingBottom: 4,
            contentPaddingLeft: 6,
            height: 88,
            contentPaddingRight: 6
        });
    w.objid = ctt;
    b = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Flow).set({
            spacingX: 10,
            alignY: n
        }),
        allowShrinkY: !1,
        minHeight: 18
    });
    b.objid = wut;
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Flow).set({
            spacingX: 10,
            alignY: n
        }),
        allowShrinkY: !1,
        marginTop: 4,
        minHeight: 19
    });
    v.objid = opr;
    w.add((new qx.ui.basic.Label).set({
        value: f.tr(pp),
        alignX: o,
        marginTop: 4,
        marginBottom: 6,
        font: l,
        textColor: u
    }));
    w.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    });
    w.add(b);
    w.add(v);
    w.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    });
    h = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        minHeight: 88,
        maxHeight: 88,
        width: 124,
        marginLeft: 2,
        innerDecorator: gl
    });
    h.objid = per;
    dt = (new qx.ui.basic.Image).set({
        source: pn,
        width: 63,
        height: 50,
        scale: !0
    });
    dt.objid = dvr;
    gt = (new qx.ui.basic.Image).set({
        source: bd,
        width: 18,
        height: 18,
        scale: !0
    });
    gt.objid = itu;
    h.add((new qx.ui.basic.Label).set({
        value: f.tr(uv),
        textAlign: o,
        width: 118,
        font: l,
        textColor: u
    }), {
        left: 6,
        top: 6
    });
    h.add((new qx.ui.basic.Image).set({
        source: sb
    }), {
        left: 3,
        top: 32
    });
    h.add(dt, {
        left: 29,
        top: 31
    });
    h.add(gt, {
        left: 5,
        top: 62
    });
    nt.add(w, {
        flex: 1
    });
    nt.add(h);
    w = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 4
        }),
        contentPaddingLeft: 6,
        innerDecorator: kp
    });
    w.objid = epr;
    b = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 4
        })
    });
    b.objid = gdi;
    ht = (new qx.ui.basic.Label).set({
        value: f.tr(hg),
        textColor: e,
        textAlign: t,
        allowGrowX: !0
    });
    ht.objid = yti;
    b.add(ht, {
        flex: 1
    });
    w.add((new qx.ui.basic.Label).set({
        value: f.tr(eur),
        alignX: o,
        marginTop: 4,
        marginBottom: 6,
        font: l,
        textColor: u
    }));
    w.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 4
    }));
    w.add(b);
    w.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    });
    h = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 4
        }),
        contentPaddingLeft: 6,
        innerDecorator: kp
    });
    h.objid = wyr;
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 4
        })
    });
    v.objid = hn;
    d = (new qx.ui.basic.Label).set({
        value: f.tr(fo),
        textColor: e,
        textAlign: o,
        allowGrowX: !0,
        rich: !0,
        width: 300,
        maxWidth: 330,
        alignX: t,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5
    });
    d.objid = lar;
    v.add(d, {
        flex: 1
    });
    h.add((new qx.ui.basic.Label).set({
        value: f.tr(tfr),
        alignX: o,
        marginTop: 4,
        marginBottom: 6,
        font: l,
        textColor: u
    }));
    h.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 4
    }));
    h.add(v);
    p.add(nt);
    p.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }));
    p.add(w);
    p.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }));
    p.add(h);
    nt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        })
    });
    w = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({}),
        width: 346,
        height: 88,
        contentPaddingTop: 4,
        contentPaddingBottom: 6,
        innerDecorator: vli
    });
    w.objid = vgr;
    h = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        }),
        width: 346,
        toolTipText: awr,
        contentPaddingLeft: 6,
        contentPaddingBottom: 8,
        innerDecorator: dai
    });
    h.objid = kni;
    var v = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                alignY: n
            }),
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 4,
            paddingBottom: 5
        }),
        y = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 2
            })
        }),
        g = (new qx.ui.basic.Label).set({
            value: gtu,
            font: et,
            width: 70,
            textAlign: t,
            marginTop: 2,
            textColor: c
        });
    return g.objid = tyr, y.add((new qx.ui.basic.Label).set({
        value: f.tr(kf),
        font: a,
        rich: !0,
        wrap: !0,
        width: 70,
        textAlign: t,
        textColor: e
    })), y.add(g), ft = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Basic).set({}),
        width: 175,
        height: 30,
        paddingTop: 4,
        decorator: wpt
    }), ni = (new webfrontend.gui.widgets.ColouredHPBar).set({
        width: 145
    }), ni.objid = vnr, ft.add(ni, {
        left: 16,
        top: -10
    }), ct = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        })
    }), ti = (new qx.ui.basic.Label).set({
        value: wui,
        font: et,
        width: 70,
        textAlign: t,
        marginTop: 2,
        textColor: wt
    }), ti.objid = igr, ct.add((new qx.ui.basic.Label).set({
        value: f.tr(cr),
        font: a,
        rich: !0,
        wrap: !0,
        width: 70,
        textAlign: t,
        textColor: e
    })), ct.add(ti), v.add(y), v.add(ft), v.add(ct), y = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Flow).set({
            spacingX: 5
        }),
        allowShrinkY: !1
    }), y.add((new qx.ui.basic.Atom).set({
        label: f.tr(kf),
        icon: wh,
        height: 15,
        gap: 2,
        font: a,
        textColor: e,
        iconPosition: ot,
        rich: !0
    })), y.add((new qx.ui.basic.Atom).set({
        label: f.tr(dh),
        icon: ko,
        height: 15,
        gap: 2,
        font: a,
        textColor: e,
        iconPosition: ot,
        rich: !0
    })), y.add((new qx.ui.basic.Atom).set({
        label: f.tr(cr),
        icon: ks,
        height: 15,
        gap: 2,
        font: a,
        textColor: e,
        iconPosition: ot,
        rich: !0
    })), y.add((new qx.ui.basic.Atom).set({
        label: f.tr(ch),
        icon: ds,
        height: 15,
        gap: 2,
        font: a,
        textColor: e,
        iconPosition: ot,
        rich: !0
    })), h.add((new qx.ui.basic.Label).set({
        value: f.tr(uiu),
        alignX: o,
        marginTop: 4,
        marginBottom: 6,
        font: l,
        textColor: u
    })), h.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 4
    })), h.add(v), h.add((new qx.ui.basic.Image).set({
        source: pfi,
        marginTop: 2,
        marginBottom: 6,
        alignX: t
    })), h.add(y), nt.add(w), nt.add(h), k.add((new qx.ui.basic.Image).set({
        source: lwr,
        width: 12,
        scale: !0
    }), {
        left: 364,
        top: 0,
        bottom: 0
    }), k.add(p, {
        left: 12,
        top: 0
    }), k.add(nt, {
        left: 381,
        top: 0
    }), p = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        height: 62,
        paddingTop: 2,
        decorator: pyt
    }), p.objid = le, ii = (new webfrontend.ui.SoundButton).set({
        label: f.tr(kyr),
        height: 32,
        allowGrowY: !1
    }), ii.objid = rg, ut = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 20,
            alignY: n
        }),
        marginRight: 10
    }), ri = (new webfrontend.ui.SoundButton).set({
        label: f.tr(err),
        height: 32,
        allowGrowY: !1
    }), ri.objid = ewr, ui = (new webfrontend.ui.SoundButton).set({
        label: f.tr(es),
        height: 32,
        allowGrowY: !1
    }), ui.objid = cou, ut.add(ri), ut.add(ui), p.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), p.add(ii), p.add((new qx.ui.core.Spacer).set({
        width: 0,
        height: 0
    }), {
        flex: 1
    }), p.add(ut), st.add(it), st.add(k), st.add(p), st
}

function ll_wdg_bbcontainer(n) {
    var i = qx.core.Init.getApplication(),
        u = n ? n : new qx.ui.container.Composite,
        t, f, e, o, s, h, c, l, a, v, r;
    return u.set({
        layout: (new qx.ui.layout.HBox).set({})
    }), t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Flow).set({})
    }), t.objid = ilt, r = (new webfrontend.ui.SoundButton).set({
        label: ycr,
        rich: !0
    }), r.objid = sai, f = (new webfrontend.ui.SoundButton).set({
        label: tgi,
        rich: !0
    }), f.objid = yoi, e = (new webfrontend.ui.SoundButton).set({
        label: kwi,
        rich: !0
    }), e.objid = vbt, o = (new webfrontend.ui.SoundButton).set({
        label: prr,
        rich: !0
    }), o.objid = kvi, s = (new webfrontend.ui.SoundButton).set({
        label: i.tr(pr),
        rich: !0
    }), s.objid = dct, h = (new webfrontend.ui.SoundButton).set({
        label: i.tr(gr),
        rich: !0
    }), h.objid = awi, c = (new webfrontend.ui.SoundButton).set({
        label: i.tr(utu),
        rich: !0
    }), c.objid = wat, l = (new webfrontend.ui.SoundButton).set({
        label: i.tr(fru),
        rich: !0
    }), l.objid = ier, a = (new webfrontend.ui.SoundButton).set({
        label: i.tr(lni),
        rich: !0
    }), a.objid = vei, v = (new webfrontend.ui.SoundButton).set({
        label: i.tr(wgr),
        rich: !0
    }), v.objid = rhi, t.add(r), t.add(f), t.add(e), t.add(o), t.add(s), t.add(h), t.add((new qx.ui.core.Spacer).set({})), t.add(c), t.add((new qx.ui.core.Spacer).set({})), t.add(l), t.add(a), t.add(v), r = (new webfrontend.ui.SoundButton).set({
        label: i.tr(fbi),
        width: 90,
        allowGrowY: !1
    }), r.objid = upt, u.add(t), u.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), u.add(r), u
}

function ll_wdg_confirm_marker(i) {
    var c = qx.core.Init.getApplication(),
        r = i ? i : new qx.ui.container.Composite,
        u, e, o, f, s, h;
    return r.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 5,
            alignX: t
        }),
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    }), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        }),
        decorator: ii
    }), e = (new qx.ui.basic.Image).set({
        source: rht,
        marginTop: 5
    }), e.objid = ub, o = (new qx.ui.basic.Label).set({
        rich: !0,
        value: syt,
        font: k
    }), o.objid = kbr, u.add(e), u.add(o, {
        flex: 1
    }), f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 5,
            alignX: t
        })
    }), s = (new webfrontend.ui.SoundButton).set({
        label: c.tr(tr),
        minWidth: 50
    }), s.objid = vr, h = (new webfrontend.ui.SoundButton).set({
        label: c.tr(yr),
        minWidth: 50
    }), h.objid = oy, f.add(s), f.add(h), r.add(u), r.add(f), r
}

function ll_wdg_confirm_reloadlanguage(n) {
    var r = qx.core.Init.getApplication(),
        i = n ? n : new qx.ui.container.Composite,
        u, t, f, e;
    return i.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 10
        }),
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10,
        width: 350
    }), u = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.VBox).set({}),
        contentPaddingLeft: 12,
        contentPaddingRight: 12,
        contentPaddingTop: 8,
        contentPaddingBottom: 12,
        innerDecorator: ii
    }), u.add((new qx.ui.basic.Label).set({
        value: r.tr(oeu),
        allowGrowX: !0,
        rich: !0,
        wrap: !0,
        textColor: c
    })), t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5
        })
    }), f = (new webfrontend.ui.SoundButton).set({
        width: 120,
        label: r.tr(kir)
    }), f.objid = ikr, e = (new webfrontend.ui.SoundButton).set({
        width: 120,
        label: r.tr(tsu)
    }), e.objid = unr, t.add(f), t.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), t.add(e), i.add(u), i.add(t), i
}

function ll_wdg_eventinfo(t) {
    var o = qx.core.Init.getApplication(),
        w = t ? t : new qx.ui.container.Composite,
        u, nt, v, k, rt, e, d, c, ut, b, tt, f, a, p, ot, g, st, it, ht, i, ct;
    w.set({
        layout: (new qx.ui.layout.Canvas).set({})
    });
    u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        decorator: lg
    });
    u.objid = id;
    u.add((new qx.ui.basic.Image).set({
        source: ef,
        scale: !0,
        allowShrinkY: !0,
        allowGrowY: !0
    }), {
        left: 0,
        top: 0,
        bottom: 29
    });
    u.add((new qx.ui.basic.Image).set({
        source: ce
    }), {
        left: 0,
        bottom: 0
    });
    u.add((new qx.ui.basic.Image).set({
        source: iit,
        scale: !0,
        allowGrowX: !0,
        allowShrinkX: !0
    }), {
        left: 5,
        bottom: 0,
        right: 5
    });
    u.add((new qx.ui.basic.Image).set({
        source: gc
    }), {
        bottom: 0,
        right: 0
    });
    u.add((new qx.ui.basic.Image).set({
        source: iw,
        scale: !0,
        allowShrinkY: !0,
        allowGrowY: !0
    }), {
        top: 0,
        right: 0,
        bottom: 29
    });
    nt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    });
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        minHeight: 40
    });
    v.objid = yb;
    var c = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({}),
            decorator: ho
        }),
        vt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({}),
            decorator: hv
        }),
        b = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 1
            }),
            contentPaddingTop: 3,
            contentPaddingLeft: 5,
            contentPaddingRight: 5,
            contentPaddingBottom: 5,
            innerDecorator: er
        }),
        lt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 2
            })
        }),
        f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                alignY: n,
                spacing: 10
            }),
            textColor: bt,
            marginLeft: 10,
            marginRight: 35
        }),
        at = (new qx.ui.basic.Label).set({
            value: o.tr(fw),
            font: ri,
            minWidth: 98,
            textAlign: r
        });
    at.objid = dc;
    p = (new qx.ui.basic.Label).set({
        value: cn,
        font: y,
        rich: !0,
        allowGrowX: !0
    });
    p.objid = vor;
    k = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignY: n
        })
    });
    k.objid = ufr;
    i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: n,
            alignX: r
        })
    });
    rt = (new qx.ui.basic.Label).set({
        value: oi,
        font: ft
    });
    rt.objid = lyr;
    i.add((new qx.ui.basic.Label).set({
        value: o.tr(ru),
        font: l
    }));
    i.add(rt);
    e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            alignX: r,
            spacing: 5
        })
    });
    e.objid = fvr;
    d = (new qx.ui.basic.Label).set({
        value: oi,
        font: h,
        textColor: hu
    });
    d.objid = eai;
    e.add((new qx.ui.basic.Label).set({
        value: o.tr(kr),
        font: h
    }));
    e.add(d);
    k.add(i);
    k.add(e);
    f.add(at);
    f.add(p, {
        flex: 1
    });
    f.add(k);
    lt.add(f, {
        flex: 1
    });
    b.add(lt, {
        flex: 1
    });
    v.add(c, {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    });
    v.add(vt, {
        left: 3,
        right: 3,
        top: 0,
        bottom: 3
    });
    v.add(b, {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    });
    c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        minHeight: 40
    });
    c.objid = ld;
    ut = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.Basic).set({}),
        innerDecorator: ho,
        visibility: s
    });
    ut.objid = gtr;
    b = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.Basic).set({}),
        innerDecorator: cf
    });
    b.objid = bii;
    tt = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 1
        }),
        innerDecorator: er,
        contentPaddingLeft: 5,
        contentPaddingTop: 3,
        contentPaddingRight: 5,
        contentPaddingBottom: 5
    });
    tt.objid = ls;
    f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        })
    });
    a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 10
        }),
        textColor: bt,
        marginLeft: 10,
        marginRight: 35,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            label: o.tr(ca),
            maxWidth: 300,
            rich: !0
        })
    });
    a.objid = gp;
    p = (new qx.ui.basic.Label).set({
        value: wtt,
        font: et,
        minWidth: 98,
        textAlign: r,
        rich: !0
    });
    p.objid = on;
    ot = (new qx.ui.basic.Label).set({
        value: cn,
        font: y,
        rich: !0,
        allowGrowX: !0
    });
    ot.objid = gru;
    var i = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignY: n
            })
        }),
        e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 5,
                alignY: n,
                alignX: r
            })
        }),
        d = (new qx.ui.basic.Label).set({
            value: oi,
            font: ft
        });
    return d.objid = ss, e.add((new qx.ui.basic.Label).set({
        value: o.tr(ru),
        font: l
    })), e.add(d), g = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            alignX: r,
            spacing: 5
        })
    }), g.objid = oc, st = (new qx.ui.basic.Label).set({
        value: oi,
        font: h,
        textColor: hu
    }), st.objid = hh, g.add((new qx.ui.basic.Label).set({
        value: o.tr(kr),
        font: h
    })), g.add(st), i.add(e), i.add(g), a.add(p), a.add(ot, {
        flex: 1
    }), a.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), a.add(i), it = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        marginBottom: 8
    }), it.objid = nb, ht = (new qx.ui.container.Scroll).set({
        height: null
    }), i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 8
        })
    }), i.objid = ob, ht.add(i), it.add(ht, {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }), f.add(a, {
        flex: 1
    }), f.add(it), tt.add(f, {
        flex: 1
    }), c.add(ut, {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }), c.add(b, {
        left: 3,
        right: 3,
        top: 0,
        bottom: 3
    }), c.add(tt, {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }), nt.add(v), nt.add(c), ct = (new qx.ui.form.ToggleButton).set({
        appearance: ys,
        toolTipText: o.tr(ke),
        marginTop: 4,
        minHeight: 25,
        marginRight: 2
    }), ct.objid = hk, w.add(u, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), w.add(nt, {
        top: 3,
        right: 10,
        bottom: 10,
        left: 10
    }), w.add(ct, {
        top: 5,
        right: 13
    }), w
}

function ll_wdg_eventinfo_item(t) {
    var e = qx.core.Init.getApplication(),
        d = t ? t : new qx.ui.container.Composite,
        c, nt, a, b, v, i, u, tt, it, f, rt, o, s, k, p, ut, ot, st;
    d.set({
        layout: (new qx.ui.layout.VBox).set({}),
        textColor: bt
    });
    c = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: n
        }),
        contentPaddingTop: 8,
        contentPaddingLeft: 8,
        contentPaddingBottom: 8,
        contentPaddingRight: 8
    });
    c.objid = hb;
    var g = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 4
            })
        }),
        w = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                alignY: n,
                spacing: 10
            }),
            marginRight: 27
        }),
        i = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 10,
                alignY: n
            })
        });
    return i.objid = ydt, nt = (new qx.ui.basic.Label).set({
        value: bwi,
        font: et,
        minWidth: 100,
        textAlign: r,
        rich: !0
    }), nt.objid = sui, a = (new qx.ui.basic.Label).set({
        value: rwt,
        font: y,
        rich: !0
    }), a.objid = aht, i.add(nt), i.add(a), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 2
        })
    }), u.objid = cg, a = (new qx.ui.basic.Label).set({
        value: e.tr(uh),
        font: et,
        textColor: vu,
        marginRight: 20
    }), a.objid = is, u.add((new qx.ui.basic.Image).set({
        source: ph,
        width: 35,
        height: 35,
        scale: !0
    })), u.add(a), f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    }), f.objid = nou, o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignX: r,
            alignY: n
        })
    }), s = (new qx.ui.basic.Label).set({
        value: e.tr(ru),
        font: l
    }), s.objid = dht, v = (new qx.ui.basic.Label).set({
        value: oi,
        font: ft
    }), v.objid = ss, o.add(s), o.add(v), b = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: n,
            alignX: r
        })
    }), b.objid = tai, v = (new qx.ui.basic.Label).set({
        value: e.tr(kr),
        font: h
    }), v.objid = ehr, p = (new qx.ui.basic.Label).set({
        value: oi,
        font: h,
        textColor: hu
    }), p.objid = hh, b.add(v), b.add(p), f.add(o), f.add(b), w.add(i), w.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), w.add(u), w.add(f), i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 4
        }),
        decorator: ybr,
        minHeight: 140
    }), i.objid = yw, u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10,
            alignY: n
        })
    }), u.objid = ptt, tt = (new qx.ui.form.Button).set({
        label: e.tr(gr),
        minWidth: 100
    }), tt.objid = lb, it = (new qx.ui.basic.Label).set({
        value: isi,
        font: y,
        rich: !0
    }), it.objid = uet, u.add(tt), u.add(it), f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10,
            alignY: n
        })
    }), f.objid = vd, rt = (new qx.ui.form.Button).set({
        label: e.tr(pr),
        minWidth: 100
    }), rt.objid = ep, s = (new qx.ui.basic.Label).set({
        value: srr,
        font: y,
        rich: !0
    }), s.objid = etr, f.add(rt), f.add(s), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 10
        })
    }), o.objid = npi, s = (new qx.ui.basic.Label).set({
        value: e.tr(kbt),
        font: h,
        minWidth: 100,
        textAlign: r
    }), s.objid = ast, k = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 3
        }),
        paddingTop: 1
    }), k.objid = dut, p = (new qx.ui.basic.Label).set({
        value: e.tr(bit),
        font: y
    }), p.objid = bsr, ut = (new qx.ui.basic.Label).set({
        rich: !0,
        value: wsr,
        font: y
    }), ut.objid = pvi, k.add(p), k.add(ut), o.add(s), o.add(k), i.add(u), i.add(f), i.add(o), g.add(w), g.add(i), ot = (new qx.ui.basic.Label).set({
        value: e.tr(dit),
        font: h,
        textColor: vu
    }), ot.objid = rfr, st = (new qx.ui.basic.Label).set({
        value: e.tr(sfu),
        font: h,
        textColor: rfu
    }), st.objid = rrt, c.add(g, {
        flex: 1
    }), c.add(ot), c.add(st), d.add(c), d
}

function ll_wdg_maintenance(n) {
    var o = qx.core.Init.getApplication(),
        r = n ? n : new qx.ui.container.Composite,
        f, e;
    r.set({
        layout: (new qx.ui.layout.VBox).set({})
    });
    var i = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 10,
                alignX: t
            }),
            contentPaddingLeft: 12,
            contentPaddingRight: 12,
            contentPaddingBottom: 12,
            contentPaddingTop: 8,
            innerDecorator: ii
        }),
        s = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 10
            }),
            contentPaddingTop: 8,
            contentPaddingLeft: 12,
            contentPaddingBottom: 12,
            contentPaddingRight: 12,
            innerDecorator: it
        }),
        h = (new qx.ui.basic.Label).set({
            font: k,
            value: uti,
            textColor: u,
            rich: !0,
            allowGrowY: !0,
            allowGrowX: !0
        });
    return h.objid = dbt, s.add(h), f = (new qx.ui.form.CheckBox).set({
        label: o.tr(ubt),
        textColor: u
    }), f.objid = gli, e = (new webfrontend.ui.SoundButton).set({
        label: o.tr(tr),
        allowGrowX: !1,
        width: 120
    }), e.objid = vr, i.add(s), i.add(f), i.add(e), r.add(i), r
}

function ll_wdg_menuoverlay(n) {
    var s = qx.core.Init.getApplication(),
        i = n ? n : new qx.ui.container.Composite,
        r, u, f, e, o;
    return i.set({
        layout: (new qx.ui.layout.Canvas).set({}),
        width: 760,
        zIndex: 10
    }), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        decorator: lbr
    }), r.objid = dfr, u = (new qx.ui.basic.Image).set({
        source: fdi
    }), u.objid = oet, f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        minHeight: 125
    }), f.objid = rwr, e = (new webfrontend.ui.SoundButton).set({
        icon: sf,
        appearance: uo,
        width: 23,
        height: 23,
        toolTipText: s.tr(gw),
        zIndex: 1e3
    }), e.objid = ap, o = (new qx.ui.basic.Label).set({
        value: s.tr(lur),
        textAlign: t,
        appearance: rr,
        width: 700
    }), o.objid = lf, i.add(r, {
        top: 3,
        left: 3,
        right: 3,
        bottom: 3
    }), i.add((new qx.ui.basic.Image).set({
        source: ve,
        width: 34,
        height: 35
    }), {
        right: 0,
        top: 0,
        bottom: 28
    }), i.add((new qx.ui.basic.Image).set({
        source: hd,
        width: 3,
        height: 1,
        allowGrowY: !0,
        scale: !0
    }), {
        right: 0,
        top: 35,
        bottom: 29
    }), i.add((new qx.ui.basic.Image).set({
        source: oa,
        width: 5,
        height: 28,
        allowGrowY: !0,
        scale: !0
    }), {
        right: 0,
        bottom: 0
    }), i.add((new qx.ui.basic.Image).set({
        source: yd,
        width: 1,
        height: 3,
        allowGrowX: !0,
        scale: !0
    }), {
        right: 5,
        bottom: 0,
        left: 5
    }), i.add((new qx.ui.basic.Image).set({
        source: ce,
        width: 5,
        height: 29
    }), {
        left: 0,
        bottom: 0
    }), i.add((new qx.ui.basic.Image).set({
        source: ef,
        width: 3,
        height: 1,
        allowGrowY: !0,
        scale: !0
    }), {
        left: 0,
        bottom: 29,
        top: 32
    }), i.add((new qx.ui.basic.Image).set({
        source: vb,
        width: 3,
        height: 32
    }), {
        left: 0,
        top: 0
    }), i.add((new qx.ui.basic.Image).set({
        source: att,
        width: 25,
        height: 5
    }), {
        left: 3,
        top: 0
    }), i.add((new qx.ui.basic.Image).set({
        source: nn,
        width: 1,
        height: 3,
        allowGrowX: !0,
        scale: !0
    }), {
        left: 28,
        right: 34,
        top: 0
    }), i.add(u, {
        left: 3,
        top: 2
    }), i.add(f, {
        top: 36,
        bottom: 11,
        right: 13,
        left: 13
    }), i.add(e, {
        top: 6,
        right: 5
    }), i.add(o, {
        left: 30,
        top: 8,
        right: 30
    }), i
}

function ll_wdg_seasoninfo(i) {
    var s = qx.core.Init.getApplication(),
        p = i ? i : new qx.ui.container.Composite,
        v, tt, b, g, it, nt, ut, ot, c, st, e, w, ht, u, k, f, d, a, ct, lt, at;
    p.set({
        layout: (new qx.ui.layout.Canvas).set({})
    });
    v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        decorator: lg
    });
    v.objid = id;
    v.add((new qx.ui.basic.Image).set({
        source: ef,
        scale: !0,
        allowShrinkY: !0,
        allowGrowY: !0
    }), {
        left: 0,
        top: 0,
        bottom: 29
    });
    v.add((new qx.ui.basic.Image).set({
        source: ce
    }), {
        left: 0,
        bottom: 0
    });
    v.add((new qx.ui.basic.Image).set({
        source: iit,
        scale: !0,
        allowGrowX: !0,
        allowShrinkX: !0
    }), {
        left: 5,
        bottom: 0,
        right: 5
    });
    v.add((new qx.ui.basic.Image).set({
        source: gc
    }), {
        bottom: 0,
        right: 0
    });
    v.add((new qx.ui.basic.Image).set({
        source: iw,
        scale: !0,
        allowShrinkY: !0,
        allowGrowY: !0
    }), {
        top: 0,
        right: 0,
        bottom: 29
    });
    tt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    });
    b = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        minHeight: 40
    });
    b.objid = yb;
    var e = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({}),
            decorator: ho
        }),
        w = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.Basic).set({}),
            decorator: hv
        }),
        vt = (new qx.phe.Decontainer).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 1
            }),
            contentPaddingTop: 3,
            contentPaddingLeft: 5,
            contentPaddingRight: 5,
            contentPaddingBottom: 5,
            innerDecorator: er
        }),
        u = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                spacing: 2
            })
        }),
        f = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                alignY: n,
                spacing: 10,
                alignX: o
            }),
            textColor: bt,
            marginLeft: 10,
            marginRight: 35
        }),
        d = (new qx.ui.basic.Label).set({
            value: s.tr(fw),
            font: ri,
            minWidth: 98,
            textAlign: r
        });
    d.objid = dc;
    c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 2,
            alignX: r
        }),
        alignX: r,
        paddingLeft: 160
    });
    g = (new qx.ui.basic.Label).set({
        value: s.tr(uh),
        font: et,
        textColor: vu,
        marginRight: 20
    });
    g.objid = is;
    c.add((new qx.ui.basic.Image).set({
        source: ph,
        width: 35,
        height: 35,
        scale: !0
    }));
    c.add(g);
    f.add(d);
    f.add(c);
    u.add(f, {
        flex: 1
    });
    vt.add(u, {
        flex: 1
    });
    b.add(e, {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    });
    b.add(w, {
        left: 3,
        right: 3,
        top: 0,
        bottom: 3
    });
    b.add(vt, {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    });
    e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        minHeight: 40,
        marginTop: 40
    });
    e.objid = ld;
    it = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 1
        }),
        innerDecorator: vat,
        contentPaddingLeft: 5,
        contentPaddingTop: 3,
        contentPaddingRight: 5,
        contentPaddingBottom: 5
    });
    it.objid = ls;
    a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 2
        })
    });
    u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 10
        }),
        textColor: bt,
        marginLeft: 10,
        marginRight: 35,
        toolTip: (new qx.ui.tooltip.ToolTip).set({
            label: s.tr(ca),
            maxWidth: 300,
            rich: !0
        })
    });
    u.objid = gp;
    k = (new qx.ui.basic.Label).set({
        value: wtt,
        font: et,
        minWidth: 98,
        textAlign: r,
        rich: !0
    });
    k.objid = on;
    var rt = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.VBox).set({
                alignY: n
            })
        }),
        c = (new qx.ui.container.Composite).set({
            layout: (new qx.ui.layout.HBox).set({
                spacing: 5,
                alignY: n,
                alignX: r
            })
        }),
        g = (new qx.ui.basic.Label).set({
            value: oi,
            font: ft
        });
    return g.objid = ss, c.add((new qx.ui.basic.Label).set({
        value: s.tr(ru),
        font: l
    })), c.add(g), nt = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            alignX: r,
            spacing: 5
        })
    }), nt.objid = oc, ut = (new qx.ui.basic.Label).set({
        value: oi,
        font: h,
        textColor: hu
    }), ut.objid = hh, nt.add((new qx.ui.basic.Label).set({
        value: s.tr(kr),
        font: h
    })), nt.add(ut), rt.add(c), rt.add(nt), u.add(k), u.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), u.add(rt), f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({}),
        marginBottom: 8
    }), f.objid = nb, ot = (new qx.ui.container.Scroll).set({
        height: null
    }), c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 8
        })
    }), c.objid = ob, ot.add(c), f.add(ot, {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }), a.add(u, {
        flex: 1
    }), a.add(f), it.add(a, {
        flex: 1
    }), e.add(it, {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }), tt.add(b), tt.add(e), st = (new qx.ui.form.ToggleButton).set({
        appearance: ys,
        toolTipText: s.tr(ke),
        marginTop: 4,
        minHeight: 25,
        marginRight: 2
    }), st.objid = hk, e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignX: r
        }),
        minHeight: 80,
        alignX: t,
        decorator: dpr,
        zIndex: 11,
        minWidth: 724,
        marginTop: 19,
        marginLeft: 10
    }), e.objid = kv, w = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignX: r,
            alignY: n
        })
    }), w.objid = stu, ht = (new qx.ui.basic.Label).set({
        value: aur,
        font: ri,
        textColor: kt,
        alignX: r
    }), ht.objid = bvi, u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignX: r
        }),
        alignX: r
    }), k = (new qx.ui.basic.Label).set({
        value: sw,
        font: h,
        textColor: kt
    }), k.objid = uou, u.add((new qx.ui.basic.Label).set({
        value: s.tr(ru),
        font: y,
        textColor: kt,
        paddingRight: 5
    })), u.add(k), f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignX: r
        }),
        alignX: r
    }), f.objid = hiu, d = (new qx.ui.basic.Label).set({
        value: sw,
        font: h,
        textColor: hu,
        alignX: r
    }), d.objid = oni, f.add((new qx.ui.basic.Label).set({
        value: s.tr(kr),
        font: y,
        textColor: kt,
        paddingRight: 5,
        alignX: r
    })), f.add(d), w.add(ht), w.add(u), w.add(f), a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n,
            spacing: 2
        })
    }), a.objid = cg, ct = (new qx.ui.basic.Label).set({
        value: s.tr(uh),
        font: et,
        textColor: vu,
        marginRight: 20
    }), ct.objid = bvt, a.add((new qx.ui.basic.Image).set({
        source: ph,
        width: 35,
        height: 35,
        scale: !0
    })), a.add(ct), lt = (new qx.ui.form.ToggleButton).set({
        appearance: ys,
        toolTipText: s.tr(ke),
        marginTop: 0,
        minHeight: 25,
        marginRight: 12,
        alignX: o,
        alignY: n,
        marginLeft: 18
    }), lt.objid = ect, e.add(w), e.add(a), e.add(lt), at = (new qx.ui.basic.Image).set({
        source: bcr,
        enabled: !0,
        zIndex: 11,
        marginLeft: 9,
        marginTop: 4
    }), at.objid = ubr, p.add(v, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }), p.add(tt, {
        top: 3,
        right: 10,
        bottom: 10,
        left: 10
    }), p.add(st, {
        top: 5,
        right: 13
    }), p.add(e), p.add(at), p
}

function ll_wdg_seasoninfo_item(i) {
    var e = qx.core.Init.getApplication(),
        b = i ? i : new qx.ui.container.Composite,
        p, k, v, u, s, r, d, f, c, l, a;
    return b.set({
        layout: (new qx.ui.layout.VBox).set({}),
        textColor: bt
    }), p = (new qx.phe.Decontainer).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: n
        }),
        contentPaddingTop: 8,
        contentPaddingLeft: 8,
        contentPaddingRight: 8
    }), p.objid = hb, k = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 4
        }),
        marginTop: 55
    }), v = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 70,
            alignX: t
        }),
        minHeight: 140
    }), v.objid = yw, u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 5,
            alignY: n
        }),
        minWidth: 294
    }), u.objid = ptt, r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 0
        }),
        minWidth: 294,
        minHeight: 34,
        decorator: rb,
        alignX: o,
        alignY: w,
        paddingTop: -8,
        paddingBottom: -8
    }), s = (new qx.ui.basic.Label).set({
        alignX: t,
        alignY: n,
        value: e.tr(pei),
        textAlign: t,
        font: ud,
        minWidth: 284
    }), s.objid = nti, r.add(s), s = (new qx.ui.basic.Label).set({
        value: e.tr(yk),
        font: y,
        rich: !0,
        textColor: kt,
        alignX: t
    }), s.objid = iet, f = (new qx.ui.basic.Label).set({
        textColor: kt,
        font: ts,
        alignX: t,
        value: ut,
        marginTop: -7
    }), f.objid = dsr, c = (new qx.ui.basic.Label).set({
        alignX: t,
        value: btu,
        font: y,
        textColor: wv,
        marginTop: -3,
        marginBottom: 0,
        paddingBottom: 10
    }), c.objid = dnr, l = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignY: n,
            spacing: 3
        }),
        textColor: ac,
        alignX: t,
        alignY: w,
        font: y,
        paddingBottom: 8
    }), l.objid = eli, a = (new qx.ui.form.Button).set({
        label: e.tr(gr),
        alignX: t,
        maxWidth: 140
    }), a.objid = lb, u.add(r), u.add(s), u.add(f), u.add(c), u.add((new qx.ui.basic.Label).set({
        alignX: t,
        value: e.tr(vir),
        font: h,
        textColor: kt
    })), u.add(l), u.add(a), r = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 5,
            alignY: n
        })
    }), r.objid = vd, d = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({}),
        minWidth: 294,
        minHeight: 34,
        decorator: rb,
        paddingTop: -8,
        paddingBottom: -8
    }), f = (new qx.ui.basic.Label).set({
        alignX: t,
        alignY: n,
        value: e.tr(ogt),
        textAlign: t,
        font: ud,
        minWidth: 284
    }), f.objid = uai, d.add(f), f = (new qx.ui.basic.Label).set({
        alignX: t,
        value: ut,
        textColor: kt,
        font: ts,
        marginTop: -7
    }), f.objid = lor, c = (new qx.ui.basic.Label).set({
        alignX: t,
        value: okr,
        font: y,
        textColor: wv,
        paddingBottom: 10,
        marginTop: -3
    }), c.objid = vpt, l = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({
            alignY: n,
            spacing: 3
        }),
        textColor: ac,
        alignX: t,
        alignY: w,
        font: y,
        paddingBottom: 8
    }), l.objid = euu, a = (new qx.ui.form.Button).set({
        label: e.tr(pr),
        maxWidth: 140,
        alignX: t
    }), a.objid = ep, r.add(d), r.add((new qx.ui.basic.Label).set({
        value: e.tr(yk),
        font: y,
        rich: !0,
        textColor: kt,
        alignX: t
    })), r.add(f), r.add(c), r.add((new qx.ui.basic.Label).set({
        alignX: t,
        value: e.tr(yur),
        font: h,
        textColor: kt
    })), r.add(l), r.add(a), v.add(u), v.add(r), k.add(v), p.add(k, {
        flex: 1
    }), b.add(p), b
}

function ll_wdg_textarea(n) {
    var r = qx.core.Init.getApplication(),
        h = n ? n : new qx.ui.container.Composite,
        u, o, c, i, s, l, f, a, t, v, e, y, p;
    return h.set({
        layout: (new qx.ui.layout.VBox).set({})
    }), u = (new qx.ui.groupbox.GroupBox).set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 4
        }),
        legend: cfu,
        minHeight: 260
    }), u.objid = ls, o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.VBox).set({})
    }), o.objid = wvr, i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), i.objid = ler, t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            spacing: 5,
            alignY: b
        })
    }), c = (new qx.ui.basic.Label).set({
        value: r.tr(oar),
        textColor: g
    }), c.objid = wpr, f = (new qx.ui.basic.Label).set({
        value: eh
    }), f.objid = bpt, t.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), t.add(c), t.add(f), o.add(i), o.add(t), i = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), s = (new qx.ui.container.Scroll).set({
        scrollbarX: fi,
        height: null
    }), s.objid = ayr, l = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.Canvas).set({})
    }), f = (new qx.ui.basic.Label).set({
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        paddingRight: 5,
        rich: !0,
        selectable: !0,
        allowGrowX: !0,
        cursor: fe,
        value: fct
    }), f.objid = oor, l.add(f, {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }), s.add(l), a = (new qx.ui.form.TextArea).set({}), a.objid = pri, e = (new webfrontend.ui.SoundButton).set({
        label: r.tr(iy)
    }), e.objid = da, i.add(s, {
        left: 0,
        right: 0,
        bottom: 25,
        top: 28
    }), i.add(a, {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }), i.add(e, {
        top: 0,
        right: 0
    }), t = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({})
    }), t.objid = ept, v = (new webfrontend.ui.SoundButton).set({
        label: r.tr(tr)
    }), v.objid = vr, e = (new webfrontend.ui.SoundButton).set({
        label: r.tr(kri)
    }), e.objid = cnr, y = (new webfrontend.ui.SoundButton).set({
        label: r.tr(yr)
    }), y.objid = oy, p = (new webfrontend.ui.SoundButton).set({
        label: r.tr(nd)
    }), p.objid = yy, t.add(v), t.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), t.add(e), t.add((new qx.ui.core.Spacer).set({}), {
        flex: 1
    }), t.add(y), t.add(p), u.add(o), u.add(i, {
        flex: 1
    }), u.add(t), h.add(u), h
}

function ll_worldmap_options(t) {
    var r = qx.core.Init.getApplication(),
        i = t ? t : new qx.ui.container.Composite,
        u, v, f, y, e, p, o, w, h, b, c, k, l, d, a, g;
    return i.set({
        layout: (new qx.ui.layout.VBox).set({
            spacing: 3
        }),
        decorator: it,
        allowGrowX: !1
    }), u = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        })
    }), v = (new qx.ui.form.CheckBox).set({
        label: r.tr(fur),
        rich: !0
    }), v.objid = krr, u.add(v, {}), u.add((new qx.ui.core.Spacer).set({
        width: 5
    }), {
        flex: 1
    }), u.add((new webfrontend.phe.desktop.ui.SvgImage).set({
        width: 17,
        height: 17,
        source: rtu
    })), f = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        visibility: s
    }), y = (new qx.ui.form.CheckBox).set({
        label: r.tr(fhr),
        rich: !0
    }), y.objid = giu, f.add(y, {}), f.add((new qx.ui.core.Spacer).set({
        width: 5
    }), {
        flex: 1
    }), f.add((new webfrontend.phe.desktop.ui.SvgImage).set({
        width: 17,
        height: 17,
        source: udr
    })), e = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        visibility: s
    }), p = (new qx.ui.form.CheckBox).set({
        label: r.tr(hdi),
        rich: !0
    }), p.objid = ntr, e.add(p, {}), e.add((new qx.ui.core.Spacer).set({
        width: 5
    }), {
        flex: 1
    }), e.add((new webfrontend.phe.desktop.ui.SvgImage).set({
        width: 17,
        height: 17,
        source: tir
    })), o = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        visibility: s
    }), w = (new qx.ui.form.CheckBox).set({
        label: r.tr(ewi),
        rich: !0
    }), w.objid = blr, o.add(w, {}), o.add((new qx.ui.core.Spacer).set({
        width: 5
    }), {
        flex: 1
    }), o.add((new webfrontend.phe.desktop.ui.SvgImage).set({
        width: 17,
        height: 17,
        source: vwr
    })), h = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        visibility: s
    }), b = (new qx.ui.form.CheckBox).set({
        label: r.tr(rsr),
        rich: !0
    }), b.objid = ydi, h.add(b, {}), h.add((new qx.ui.core.Spacer).set({
        width: 5
    }), {
        flex: 1
    }), h.add((new webfrontend.phe.desktop.ui.SvgImage).set({
        width: 17,
        height: 17,
        source: dci
    })), c = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        })
    }), k = (new qx.ui.form.CheckBox).set({
        label: r.tr(hai),
        rich: !0
    }), k.objid = skr, c.add(k, {}), c.add((new qx.ui.core.Spacer).set({
        width: 5
    }), {
        flex: 1
    }), c.add((new webfrontend.phe.desktop.ui.SvgImage).set({
        width: 16,
        height: 16,
        source: bnt
    })), l = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        }),
        visibility: s
    }), d = (new qx.ui.form.CheckBox).set({
        label: r.tr(vsi),
        rich: !0
    }), d.objid = bpi, l.add(d, {}), l.add((new qx.ui.core.Spacer).set({
        width: 5
    }), {
        flex: 1
    }), l.add((new webfrontend.phe.desktop.ui.SvgImage).set({
        width: 16,
        height: 16,
        source: ngt
    })), a = (new qx.ui.container.Composite).set({
        layout: (new qx.ui.layout.HBox).set({
            alignY: n
        })
    }), g = (new qx.ui.form.CheckBox).set({
        label: r.tr(fst),
        rich: !0
    }), g.objid = tpt, a.add(g, {}), a.add((new qx.ui.core.Spacer).set({
        width: 5
    }), {
        flex: 1
    }), a.add((new webfrontend.phe.desktop.ui.SvgImage).set({
        width: 16,
        height: 16,
        source: uer
    })), i.add(u), i.add(f), i.add(e), i.add(o), i.add(h), i.add(c), i.add(l), i.add(a), i
}