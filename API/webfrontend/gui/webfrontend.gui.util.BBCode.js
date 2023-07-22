function stringIsVisible(n) {
    return qx.lang.String.clean(qx.lang.String.stripTags(webfrontend.gui.util.BBCode.convertBBCode(n))).length != 0
}

function insertBBCode(n, t, i) {
    var r = n.getValue(),
        s, u;
    if (r = r ? r : ni, qx.core.Environment.get(v) === vi) n.setValue(r + t + i), n.focus();
    else {
        var c = n.getTextSelectionStart(),
            l = n.getTextSelectionEnd(),
            e = n.getTextSelection(),
            o = r.substr(0, c),
            h = r.substr(l, r.length),
            f;
        e != null && e.length > 0 ? (n.setValue(o + t + e + i + h), n.clearTextSelection(), r = n.getValue(), f = r.length) : (n.setValue(o + t + i + h), f = o.length + t.length);
        n.setTextSelection(f, f);
        n.focus();
        qx.core.Environment.get(v) === lr && (s = n.getContentElement().getDomElement(), u = document.createEvent(nt), u.initKeyEvent(st, !0, !0, null, !1, !1, !1, !1, 0, 32), s.dispatchEvent(u), u = document.createEvent(nt), u.initKeyEvent(st, !0, !0, null, !1, !1, !1, !1, 8, 0), s.dispatchEvent(u))
    }
}

function convertBBCode(n, t, i) {
    var u = qx.core.Init.getApplication(),
        r = ni;
    if (i = i || webfrontend.gui.util.BBCode.clrLink, i != null && (r = ki + i + er), n = qx.bom.String.escape(n), t || (n = n.replace(/(\[hr\])/gi, nu), n = n.replace(/(\[wb\])/gi, cu)), n = n.replace(/\n/g, ir), n = n.replace(/\[b\](.*?)\[\/b\]/gi, tu), n = n.replace(/\[i\](.*?)\[\/i\]/gi, wu), n = n.replace(/\[u\](.*?)\[\/u\]/gi, ur), n = n.replace(/\[s\](.*?)\[\/s\]/gi, yu), n = n.replace(/\[coords\]([0-9]*[0-9])\:([0-9]*[0-9])\[\/coords\]/gi, s + r + si), n = n.replace(/\[coords\]([0-9]*[0-9])\:([0-9]*[0-9])\:(.*?)\[\/coords\]/gi, s + r + nf), n = n.replace(/\[player\](.*?)\[\/player\]/gi, webfrontend.gui.util.BBCode.createPlayerLinkText(o)), n = n.replace(/\[base\]([0-9]*[0-9])\:([0-9]*[0-9])\[\/base\]/gi, s + r + ar), n = n.replace(/\[alliance\](.*?)\[\/alliance\]/gi, webfrontend.gui.util.BBCode.createAllianceLinkText(o)), n = n.replace(/\[spieler\](.*?)\[\/spieler\]/gi, webfrontend.gui.util.BBCode.createPlayerLinkText(o)), n = n.replace(/\[stadt\]([0-9]*[0-9])\:([0-9]*[0-9])\[\/stadt\]/gi, s + r + yr), n = n.replace(/\[allianz\](.*?)\[\/allianz\]/gi, webfrontend.gui.util.BBCode.createAllianceLinkText(o)), n = n.replace(/\[url\](.*?)\[\/url\]/gi, rr + r + rf), !t) {
        while (n != (n = n.replace(/\[quote\](?!.*\[quote\])(.*?)\[\/quote\]/gi, du)));
        while (n != (n = n.replace(/\[quote=([A-Za-z0-9]*?)\](?![.*\[quote=[A-Za-z0-9]*?\]])(.*?)\[\/quote\]/gi, gr + u.tr(uf) + ou)));
    }
    return n = n.replace(/\uffff/g, ef), t || (n = n.replace(/(\r|\n)/gi, hu)), n
}

function generateBBCode(n) {
    return n ? (n = n.replace(/(^|[^\]])(\b\d\d\d+)\:(\d\d\d+(?![\w\:]))(?=[^\[]|$)/gi, ai), n = n.replace(/(^|[^\]])(\b[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4})\:(\w+\b)(?=[^\[]|$)/gi, cr), n.replace(/(^|[^\]])(\b[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}\b)(?=[^\[]|$)/gi, au)) : n
}

function getBBCodeHBox(f, e, o) {
    var s = qx.core.Init.getApplication(),
        vi = new webfrontend.ui.SoundButton(br).set({
            minHeight: 1,
            rich: !0
        }),
        b, d, nt, st, ni, ti, oi, si, ai, h, v, y;
    return vi.addListener(r, function() {
        webfrontend.gui.util.BBCode.insertBBCode(f, tf, eu);
        f.fireDataEvent(u)
    }, e), b = new webfrontend.ui.SoundButton(ku).set({
        rich: !0
    }), b.addListener(r, function() {
        webfrontend.gui.util.BBCode.insertBBCode(f, gi, li);
        f.fireDataEvent(u)
    }, e), d = new webfrontend.ui.SoundButton(di).set({
        rich: !0
    }), d.addListener(r, function() {
        webfrontend.gui.util.BBCode.insertBBCode(f, vu, hi);
        f.fireDataEvent(u)
    }, e), nt = new webfrontend.ui.SoundButton(cf).set({
        rich: !0
    }), nt.addListener(r, function() {
        webfrontend.gui.util.BBCode.insertBBCode(f, tr, su);
        f.fireDataEvent(u)
    }, e), st = new webfrontend.ui.SoundButton(s.tr(fr)).set({
        rich: !0
    }), st.addListener(r, function() {
        webfrontend.gui.util.BBCode.insertBBCode(f, iu, wr);
        f.fireDataEvent(u)
    }, e), ni = new webfrontend.ui.SoundButton(s.tr(sf)).set({
        rich: !0
    }), ni.addListener(r, function() {
        qx.locale.Manager.getInstance().getLocale() == ot ? webfrontend.gui.util.BBCode.insertBBCode(f, af, sr) : webfrontend.gui.util.BBCode.insertBBCode(f, hr, nr);
        f.fireDataEvent(u)
    }, e), ti = new webfrontend.ui.SoundButton(s.tr(uu)).set({
        rich: !0
    }), ti.addListener(r, function() {
        qx.locale.Manager.getInstance().getLocale() == ot ? webfrontend.gui.util.BBCode.insertBBCode(f, gu, ci) : webfrontend.gui.util.BBCode.insertBBCode(f, yi, ff);
        f.fireDataEvent(u)
    }, e), oi = new webfrontend.ui.SoundButton(s.tr(pr)).set({
        rich: !0
    }), oi.addListener(r, function() {
        webfrontend.gui.util.BBCode.insertBBCode(f, pi, pu);
        f.fireDataEvent(u)
    }, e), si = new webfrontend.ui.SoundButton(s.tr(or)).set({
        rich: !0
    }), si.addListener(r, function() {
        webfrontend.gui.util.BBCode.insertBBCode(f, dr, vr);
        f.fireDataEvent(u)
    }, e), ai = new webfrontend.ui.SoundButton(s.tr(wi)).set({
        rich: !0
    }), ai.addListener(r, function() {
        webfrontend.gui.util.BBCode.insertBBCode(f, bi, ru);
        f.fireDataEvent(u)
    }, e), h = new qx.ui.container.Composite(new qx.ui.layout.Flow), o != null && h.setWidth(o), h.add(vi), h.add(b), h.add(d), h.add(nt), h.add(st), h.add(ni), h.add(new qx.ui.core.Spacer), h.add(ti), h.add(new qx.ui.core.Spacer), h.add(oi), h.add(si), h.add(ai), v = new webfrontend.ui.SoundButton(s.tr(c)).set({
        width: 90,
        allowGrowY: !1
    }), v.addListener(r, function() {
        var r = s.tr(ut),
            u = s.tr(ft),
            f = s.tr(ui),
            e = s.tr(ct),
            o = s.tr(it),
            h = s.tr(tt),
            y = s.tr(l),
            b = s.tr(a),
            d = s.tr(ht),
            nt = s.tr(bt),
            ot = s.tr(gt),
            st = s.tr(lt),
            ni = s.tr(k),
            ti = s.tr(ei),
            oi = s.tr(wt),
            si = s.tr(g),
            hi = s.tr(p),
            ci = s.tr(et);
        s.bbcodeWndOpen || (v.setEnabled(!1), webfrontend.gui.MessageBox.messageBox({
            title: s.tr(c),
            text: s.tr(ii) + w + r + kt + r + rt + u + at + u + yt + f + fi + f + dt + e + vt + e + ri + n + o + t + h + i + n + y + t + b + i + n + ot + t + st + i + n + d + t + nt + i + n + ni + t + ti + i + n + oi + t + si + i + n + hi + t + ci + i + pt,
            textRich: !0,
            modal: !1,
            buttons: 1,
            showClose: !0,
            resizable: !0,
            scrollable: !0,
            minWidth: 460,
            minHeight: 400,
            height: 500,
            executeClose: function() {
                v.setEnabled(!0);
                s.bbcodeWndOpen = !1
            }
        }), s.bbcodeWndOpen = !0)
    }), y = new qx.ui.container.Composite(new qx.ui.layout.HBox), y.add(h), y.add(new qx.ui.core.Spacer, {
        flex: 1
    }), y.add(v), y
}

function showBBCodeInfo(r) {
    var u = qx.core.Init.getApplication(),
        f = typeof r != hf ? r.getTarget() : null,
        e = u.tr(ut),
        o = u.tr(ft),
        s = u.tr(ui),
        h = u.tr(ct),
        v = u.tr(it),
        y = u.tr(tt),
        b = u.tr(l),
        d = u.tr(a),
        nt = u.tr(ht),
        ot = u.tr(bt),
        st = u.tr(gt),
        ni = u.tr(lt),
        ti = u.tr(k),
        oi = u.tr(ei),
        si = u.tr(wt),
        hi = u.tr(g),
        ci = u.tr(p),
        li = u.tr(et);
    u.bbcodeWndOpen || (f && f.setEnabled(!1), webfrontend.gui.MessageBox.messageBox({
        title: u.tr(c),
        text: u.tr(ii) + w + e + kt + e + rt + o + at + o + yt + s + fi + s + dt + h + vt + h + ri + n + v + t + y + i + n + b + t + d + i + n + st + t + ni + i + n + nt + t + ot + i + n + ti + t + oi + i + n + si + t + hi + i + n + ci + t + li + i + pt,
        textRich: !0,
        modal: !1,
        buttons: 1,
        showClose: !0,
        resizable: !0,
        scrollable: !0,
        minWidth: 460,
        minHeight: 400,
        height: 500,
        executeClose: function() {
            f && f.setEnabled(!0);
            u.bbcodeWndOpen = !1
        }
    }), u.bbcodeWndOpen = !0)
}

function createPlayerLinkText(n, t) {
    return t > 0 ? ti + n + b + t + h + webfrontend.gui.util.BBCode.clrLink + f + n + e : ti + n + d + webfrontend.gui.util.BBCode.clrLink + f + n + e
}

function createAllianceLinkText(n, t) {
    return t > 0 ? y + n + b + t + h + webfrontend.gui.util.BBCode.clrLink + f + n + e : y + n + d + webfrontend.gui.util.BBCode.clrLink + f + n + e
}

function createBaseLinkText(n, t) {
    return fu + t + h + webfrontend.gui.util.BBCode.clrLink + f + n + e
}

function createCoordsLinkText(n, t, i) {
    return kr + t + bu + i + lu + webfrontend.gui.util.BBCode.clrLink + f + n + e
}

function openPlayerProfile(n) {
    webfrontend.gui.info.PlayerInfoWindow.getInstance().openWithPlayerName(n)
}

function openCityProfile(n, t) {
    var i = t << 16 | n;
    webfrontend.gui.info.BaseInfoWindow.getInstance().openWithBaseCoordsId(i)
}

function openAllianceProfile(n) {
    webfrontend.gui.info.AllianceInfoWindow.getInstance().openWithAllianceNameOrAbbreviation(n)
}

function openLinkFromInnerHtml(n) {
    webfrontend.gui.Util.openLink(n.innerHTML)
}

function formatIngameText(n, t) {
    return t ? webfrontend.gui.util.BBCode.convertBBCode(webfrontend.gui.util.BBCode.generateBBCode(webfrontend.phe.cnc.Util.convertSpecialChars(n))) : lf + webfrontend.gui.util.BBCode.convertBBCode(webfrontend.gui.util.BBCode.generateBBCode(webfrontend.phe.cnc.Util.convertSpecialChars(n))) + oi
}