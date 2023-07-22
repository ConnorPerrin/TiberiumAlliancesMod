function populateData(n) {
    var f = webfrontend.phe.cnc.config.Config.getInstance(),
        i, r;
    n ? (i = this.__bHV(n), r = f.getWorldMergeShown(), this.__bHU = r.indexOf(i) >= 0, this.__bHW(i)) : this.__bHU = !1;
    this.__bHI.setValue(this.tr(b));
    this.__bCt.set({
        label: this.tr(g),
        enabled: !0
    });
    this.__bHK.setValue(this.tr(u));
    this.__bHJ.setValue(t);
    this.__yY.setValue(this.tr(v));
    this.__bHH.setValue(t);
    this.__bHG.setSource(s)
}

function show() {
    this.__bHU || (this.__bBE(), webfrontend.gui.OverlayWindow.prototype.show.call(this))
}

function getUIItem(n) {
    switch (n) {
        case ClientLib.Data.Missions.PATH.WDG_CONTINUE:
            return this.__bCt
    }
    return null
}

function fadeIn() {
    this.getContentElement().setStyle(qx.bom.Style.getPropertyName(n), d)
}

function fadeOut() {
    this.getContentElement().setStyle(qx.bom.Style.getPropertyName(n), o)
}

function initVisibility anonymous(value) {
    var equ = function(a, b) {
        return a === b;
    };
    var prop = qx.core.Property;
    var old;
    if (this.$$runtime_visibility !== undefined) {
        old = this.$$runtime_visibility;
    } else if (this.$$user_visibility !== undefined) {
        old = this.$$user_visibility;
    } else if (this.$$useinit_visibility) {
        old = this.$$init_visibility;
    }
    var computed;
    if (this.$$runtime_visibility !== undefined) {
        computed = this.$$runtime_visibility;
    } else if (this.$$user_visibility !== undefined) {
        computed = this.$$user_visibility;
    } else if (this.$$useinit_visibility) {
        computed = this.$$init_visibility;
    } else {
        computed = this.$$init_visibility;
        this.$$useinit_visibility = true;
    }
    if (computed === undefined) computed = null;
    if (equ.call(this, old, computed)) return value;
    if (old === undefined) old = null;
    var self = this;
    var promise;
    promise = this._applyVisibility(computed, old, "visibility", "init");

    function fire() {
        var tracker = {};
        var reg = qx.event.Registration;
        if (reg.hasListener(self, 'changeVisibility')) qx.event.Utils.track(tracker, reg.fireEvent(self, 'changeVisibility', qx.event.type.Data, [computed, old]));
        if (reg.hasListener(self, 'changeVisibilityAsync')) qx.event.Utils.then(tracker, function() {
            return reg.fireEventAsync(self, 'changeVisibilityAsync', qx.event.type.Data, [qx.Promise.resolve(computed), old]);
        });
        if (tracker.promise)
            return tracker.promise.then(function() {
                return computed;
            });
        return computed;
    }
    if (promise instanceof qx.Promise || promise instanceof Promise) return promise.then(fire);
    return fire();
}
qx.ui.ba titlesic.Label[20534 - 0] qx.ui.ba _imgTitleUpgradeIconsic.Image[20536 - 0] qx.ui.co clientAreantainer.Composite[20539 - 0]