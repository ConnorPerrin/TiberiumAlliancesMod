function _scheduleChildrenUpdate() {
    this.__iB || (this.__iB = !0, qx.html.Element._modified[this.toHashCode()] = this, qx.html.Element._scheduleFlush(n))
}

function _createDomElement() {
    return qx.dom.Element.create(this.__ie)
}

function connectWidget(n) {
    this.__io = n;
    this.__in && (this.__in.$$widget = n.toHashCode(), this.__in.$$widgetObject = n);
    qx.core.Environment.get(r) && this.updateObjectId()
}

function disconnectWidget() {
    delete this.__io;
    this.__in && (this.__in.$$widget = t, delete this.__in.$$widgetObject);
    qx.core.Environment.get(r) && this.updateObjectId()
}

function _insertChildren() {
    var r = this.__iA,
        u = r.length,
        n, i, t;
    if (u > 2) {
        for (i = document.createDocumentFragment(), t = 0; t < u; t++) n = r[t], n.__in && n.__ip && i.appendChild(n.__in);
        this.__in.appendChild(i)
    } else
        for (i = this.__in, t = 0; t < u; t++) n = r[t], n.__in && n.__ip && i.appendChild(n.__in)
}

function _syncChildren() {
    for (var e = this.__iA, s = e.length, u, n, r = this.__in, f = r.childNodes, o = 0, t, i = f.length - 1; i >= 0; i--) t = f[i], n = qx.html.Element.fromDomElement(t), n && n.__ip && n.__iC === this || r.removeChild(t);
    for (i = 0; i < s; i++)
        if (u = e[i], u.__ip) {
            if (n = u.__in, t = f[o], !n) continue;
            n != t && (t ? r.insertBefore(n, t) : r.appendChild(n));
            o++
        }
}

function updateObjectId() {
    if (qx.core.Environment.get(r)) {
        var n = null;
        this.__io && this.__io.getQxObjectId() && (n = qx.core.Id.getAbsoluteIdOf(this.__io, !0) || null);
        this.setAttribute(b, n, !0)
    }
}

function _copyData(n) {
    var r = this.__in,
        t = this.__ig,
        f, u, i;
    if (t) {
        f = qx.bom.element.Attribute;
        for (i in t) f.set(r, i, t[i])
    }
    if (t = this.__if, t && (u = qx.bom.element.Style, n ? u.setStyles(r, t) : u.setCss(r, u.compile(t))), t = this.__iy, t)
        for (i in t) this._applyProperty(i, t[i]);
    t = this.__iz;
    t && (qx.event.Registration.getManager(r).importListeners(r, t), delete this.__iz)
}

function _syncData() {
    var r = this.__in,
        e = qx.bom.element.Attribute,
        o = qx.bom.element.Style,
        i = this.__iw,
        f, t, u, n;
    if (i) {
        if (t = this.__ig, t)
            for (n in i) u = t[n], u !== undefined ? e.set(r, n, u) : e.reset(r, n);
        this.__iw = null
    }
    if (i = this.__iv, i) {
        if (t = this.__if, t) {
            f = {};
            for (n in i) f[n] = t[n];
            o.setStyles(r, f)
        }
        this.__iv = null
    }
    if (i = this.__ix, i) {
        if (t = this.__iy, t)
            for (n in i) this._applyProperty(n, t[n]);
        this.__ix = null
    }
}

function getChild(n) {
    var t = this.__iA;
    return t && t[n] || null
}

function hasChild(n) {
    var t = this.__iA;
    return t && t.indexOf(n) !== -1
}

function add(n) {
    if (arguments[1]) {
        for (var t = 0, i = arguments.length; t < i; t++) this.__iG(arguments[t]);
        this.__iA.push.apply(this.__iA, arguments)
    } else this.__iG(n), this.__iA.push(n);
    return this
}

function addAt(n, t) {
    return this.__iG(n), qx.lang.Array.insertAt(this.__iA, n, t), this
}

function remove(n) {
    var i = this.__iA,
        r, t, u;
    if (!i) return this;
    if (arguments[1])
        for (t = 0, u = arguments.length; t < u; t++) r = arguments[t], this.__iH(r), qx.lang.Array.remove(i, r);
    else this.__iH(n), qx.lang.Array.remove(i, n);
    return this
}

function removeAt(n) {
    var i = this.__iA,
        t;
    if (!i) throw new Error(tt);
    if (t = i[n], !t) throw new Error(ht);
    return this.__iH(t), qx.lang.Array.removeAt(this.__iA, n), this
}

function getParent() {
    return this.__iC || null
}

function insertInto(n, t) {
    return n.__iG(this), t == null ? n.__iA.push(this) : qx.lang.Array.insertAt(this.__iA, this, t), this
}

function insertBefore(n) {
    var t = n.__iC;
    return t.__iG(this), qx.lang.Array.insertBefore(t.__iA, this, n), this
}

function insertAfter(n) {
    var t = n.__iC;
    return t.__iG(this), qx.lang.Array.insertAfter(t.__iA, this, n), this
}

function moveTo(n) {
    var t = this.__iC,
        i;
    if (t.__iI(this), i = t.__iA.indexOf(this), i === n) throw new Error(et);
    else i < n && n--;
    return qx.lang.Array.removeAt(t.__iA, i), qx.lang.Array.insertAt(t.__iA, this, n), this
}

function moveBefore(n) {
    var t = this.__iC;
    return this.moveTo(t.__iA.indexOf(n))
}

function moveAfter(n) {
    var t = this.__iC;
    return this.moveTo(t.__iA.indexOf(n) + 1)
}

function free() {
    var n = this.__iC;
    if (!n) throw new Error(at);
    return n.__iA ? (n.__iH(this), qx.lang.Array.remove(n.__iA, this), this) : this
}

function getDomElement() {
    return this.__in || null
}

function getNodeName() {
    return this.__ie
}

function setNodeName(n) {
    this.__ie = n
}

function setRoot(n) {
    this.__et = n
}

function useMarkup(n) {
    var t;
    if (this.__in) throw new Error(c);
    return t = qx.core.Environment.get(o) == e ? document.createElement(u) : qx.dom.Element.getHelperElement(), t.innerHTML = n, this.useElement(t.firstChild), this.__in
}

function useElement(n) {
    if (this.__in) throw new Error(c);
    this.__iD(n);
    this._copyData(!0)
}

function isFocusable() {
    var n = this.getAttribute(st),
        t;
    return n >= 1 ? !0 : (t = qx.event.handler.Focus.FOCUSABLE_ELEMENTS, n >= 0 && t[this.__ie]) ? !0 : !1
}

function setSelectable(n) {
    this.setAttribute(ot, n ? wt : it);
    var t = qx.core.Environment.get(k);
    t && this.setStyle(t, n ? a : qx.core.Environment.get(bt))
}

function isNativelyFocusable() {
    return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__ie]
}

function include() {
    return this.__ip ? this : (delete this.__ip, this.__iC && this.__iC._scheduleChildrenUpdate(), this)
}

function exclude() {
    return this.__ip ? (this.__ip = !1, this.__iC && this.__iC._scheduleChildrenUpdate(), this) : this
}

function isIncluded() {
    return this.__ip === !0
}

function fadeIn(n) {
    var t = qxWeb(this.__in);
    if (t.isPlaying() && t.stop(), this.__in || (this.__iE(), t.push(this.__in)), this.__in) {
        t.fadeIn(n).once(f, function() {
            this.show();
            qx.html.Element.flush()
        }, this);
        return t.getAnimationHandles()[0]
    }
}

function fadeOut(n) {
    var t = qxWeb(this.__in);
    if (t.isPlaying() && t.stop(), this.__in) {
        t.fadeOut(n).once(f, function() {
            this.hide();
            qx.html.Element.flush()
        }, this);
        return t.getAnimationHandles()[0]
    }
}

function show() {
    return this.__iq ? this : (this.__in && (qx.html.Element._visibility[this.toHashCode()] = this, qx.html.Element._scheduleFlush(n)), this.__iC && this.__iC._scheduleChildrenUpdate(), delete this.__iq, this)
}

function hide() {
    return this.__iq ? (this.__in && (qx.html.Element._visibility[this.toHashCode()] = this, qx.html.Element._scheduleFlush(n)), this.__iq = !1, this) : this
}

function isVisible() {
    return this.__iq === !0
}

function scrollChildIntoViewX(t, i, r) {
    var u = this.__in,
        f = t.getDomElement();
    r !== !1 && u && u.offsetWidth && f && f.offsetWidth ? qx.bom.element.Scroll.intoViewX(f, u, i) : (this.__ir = {
        element: t,
        align: i
    }, qx.html.Element._scroll[this.toHashCode()] = this, qx.html.Element._scheduleFlush(n));
    delete this.__it
}

function scrollChildIntoViewY(t, i, r) {
    var u = this.__in,
        f = t.getDomElement();
    r !== !1 && u && u.offsetWidth && f && f.offsetWidth ? qx.bom.element.Scroll.intoViewY(f, u, i) : (this.__is = {
        element: t,
        align: i
    }, qx.html.Element._scroll[this.toHashCode()] = this, qx.html.Element._scheduleFlush(n));
    delete this.__iu
}

function scrollToX(t, i) {
    var r = this.__in;
    i !== !0 && r && r.offsetWidth ? (r.scrollLeft = t, delete this.__it) : (this.__it = t, qx.html.Element._scroll[this.toHashCode()] = this, qx.html.Element._scheduleFlush(n));
    delete this.__ir
}

function getScrollX() {
    var n = this.__in;
    return n ? n.scrollLeft : this.__it || 0
}

function scrollToY(t, i) {
    var r = this.__in;
    i !== !0 && r && r.offsetWidth ? (r.scrollTop = t, delete this.__iu) : (this.__iu = t, qx.html.Element._scroll[this.toHashCode()] = this, qx.html.Element._scheduleFlush(n));
    delete this.__is
}

function getScrollY() {
    var n = this.__in;
    return n ? n.scrollTop : this.__iu || 0
}

function disableScrolling() {
    this.enableScrolling();
    this.scrollToX(0);
    this.scrollToY(0);
    this.addListener(h, this.__iK, this)
}

function enableScrolling() {
    this.removeListener(h, this.__iK, this)
}

function getTextSelection() {
    var n = this.__in;
    return n ? qx.bom.Selection.get(n) : null
}

function getTextSelectionLength() {
    var n = this.__in;
    return n ? qx.bom.Selection.getLength(n) : null
}

function getTextSelectionStart() {
    var n = this.__in;
    return n ? qx.bom.Selection.getStart(n) : null
}

function getTextSelectionEnd() {
    var n = this.__in;
    return n ? qx.bom.Selection.getEnd(n) : null
}

function setTextSelection(t, i) {
    var r = this.__in;
    if (r) {
        qx.bom.Selection.set(r, t, i);
        return
    }
    qx.html.Element.__ih[this.toHashCode()] = {
        element: this,
        start: t,
        end: i
    };
    qx.html.Element._scheduleFlush(n)
}

function clearTextSelection() {
    var n = this.__in;
    n && qx.bom.Selection.clear(n);
    delete qx.html.Element.__ih[this.toHashCode()]
}

function focus() {
    this.__iL(y)
}

function blur() {
    this.__iL(p)
}

function activate() {
    this.__iL(lt)
}

function deactivate() {
    this.__iL(w)
}

function capture(n) {
    this.__iL(d, [n !== !1])
}

function releaseCapture() {
    this.__iL(ft)
}

function setStyle(t, i, r) {
    if (this.__if || (this.__if = {}), this.__if[t] == i) return this;
    if (i == null ? delete this.__if[t] : this.__if[t] = i, this.__in) {
        if (r) return qx.bom.element.Style.set(this.__in, t, i), this;
        this.__iv || (this.__iv = {});
        this.__iv[t] = !0;
        qx.html.Element._modified[this.toHashCode()] = this;
        qx.html.Element._scheduleFlush(n)
    }
    return this
}

function setStyles(t, i) {
    var f = qx.bom.element.Style,
        r, u;
    if (this.__if || (this.__if = {}), this.__in) {
        this.__iv || (this.__iv = {});
        for (r in t)
            if (u = t[r], this.__if[r] != u) {
                if (u == null ? delete this.__if[r] : this.__if[r] = u, i) {
                    f.set(this.__in, r, u);
                    continue
                }
                this.__iv[r] = !0
            } qx.html.Element._modified[this.toHashCode()] = this;
        qx.html.Element._scheduleFlush(n)
    } else
        for (r in t)(u = t[r], this.__if[r] != u) && (u == null ? delete this.__if[r] : this.__if[r] = u);
    return this
}

function removeStyle(n, t) {
    return this.setStyle(n, null, t), this
}

function getStyle(n) {
    return this.__if ? this.__if[n] : null
}

function getAllStyles() {
    return this.__if || null
}

function setAttribute(t, i, r) {
    if (this.__ig || (this.__ig = {}), this.__ig[t] == i) return this;
    if (i == null ? delete this.__ig[t] : this.__ig[t] = i, this.__in) {
        if (r) return qx.bom.element.Attribute.set(this.__in, t, i), this;
        this.__iw || (this.__iw = {});
        this.__iw[t] = !0;
        qx.html.Element._modified[this.toHashCode()] = this;
        qx.html.Element._scheduleFlush(n)
    }
    return this
}

function setAttributes(n, t) {
    for (var i in n) this.setAttribute(i, n[i], t);
    return this
}

function removeAttribute(n, t) {
    return this.setAttribute(n, null, t)
}

function getAttribute(n) {
    return this.__ig ? this.__ig[n] : null
}

function addClass(n) {
    var r = ((this.getAttribute(i) || t) + yt + n).trim();
    this.setAttribute(i, r)
}

function removeClass(n) {
    var r = this.getAttribute(i);
    r && this.setAttribute(i, r.replace(n, t).trim())
}

function _applyProperty() {}

function _setProperty(t, i, r) {
    if (this.__iy || (this.__iy = {}), this.__iy[t] == i) return this;
    if (i == null ? delete this.__iy[t] : this.__iy[t] = i, this.__in) {
        if (r) return this._applyProperty(t, i), this;
        this.__ix || (this.__ix = {});
        this.__ix[t] = !0;
        qx.html.Element._modified[this.toHashCode()] = this;
        qx.html.Element._scheduleFlush(n)
    }
    return this
}

function _removeProperty(n, t) {
    return this._setProperty(n, null, t)
}

function _getProperty(n) {
    var i = this.__iy,
        t;
    return i ? (t = i[n], t == null ? null : t) : null
}

function addListener(n, t, i, r) {
    var u, f;
    return this.$$disposed ? null : this.__in ? qx.event.Registration.addListener(this.__in, n, t, i, r) : (this.__iz || (this.__iz = {}), r == null && (r = !1), u = qx.event.Manager.getNextUniqueId(), f = n + (r ? v : rt) + u, this.__iz[f] = {
        type: n,
        listener: t,
        self: i,
        capture: r,
        unique: u
    }, f)
}

function removeListener(n, t, i, r) {
    var o, f, u, e;
    if (this.$$disposed) return null;
    if (this.__in) t.$$wrapped_callback && t.$$wrapped_callback[n + this.toHashCode()] && (o = t.$$wrapped_callback[n + this.toHashCode()], delete t.$$wrapped_callback[n + this.toHashCode()], t = o), qx.event.Registration.removeListener(this.__in, n, t, i, r);
    else {
        f = this.__iz;
        r == null && (r = !1);
        for (e in f)
            if (u = f[e], u.listener === t && u.self === i && u.capture === r && u.type === n) {
                delete f[e];
                break
            }
    }
    return this
}

function removeListenerById(n) {
    return this.$$disposed ? null : (this.__in ? qx.event.Registration.removeListenerById(this.__in, n) : delete this.__iz[n], this)
}

function hasListener(n, t) {
    var i, r, u;
    if (this.$$disposed) return !1;
    if (this.__in) return qx.event.Registration.hasListener(this.__in, n, t);
    i = this.__iz;
    t == null && (t = !1);
    for (u in i)
        if (r = i[u], r.capture === t && r.type === n) return !0;
    return !1
}

function getListeners() {
    var t, i, n;
    if (this.$$disposed) return null;
    if (this.__in) return qx.event.Registration.getManager(this.__in).serializeListeners(this.__in);
    t = [];
    for (i in this.__iz) n = this.__iz[i], t.push({
        type: n.type,
        handler: n.listener,
        self: n.self,
        capture: n.capture
    });
    return t
}