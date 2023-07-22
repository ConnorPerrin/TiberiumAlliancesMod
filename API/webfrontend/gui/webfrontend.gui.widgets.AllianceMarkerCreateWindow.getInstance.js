function showFor(r, u, f, e) {
    this.__Se(r);
    this.__Rl.set({
        MaxTextLength: ClientLib.Data.Marker.MAXLEN_DESCRIPTION,
        Text: this.tr(e) || n
    });
    this.__Rm.set({
        x: u,
        y: f
    });
    this.__Rs.setModelSelection([r]);
    ClientLib.Data.MainData.GetInstance().get_Alliance().HasReserveMarker() ? this.__Sc.setVisibility(i) : this.__Sc.setVisibility(t);
    this.show()
}

function show() {
    webfrontend.gui.CustomWindow.prototype.show.call(this);
    this.__AV || (this.__AV = !0, webfrontend.data.AllianceEvents.getInstance().addListener(u, this.__Rv, this));
    this.__Rv()
}

function _onClose() {
    this.__AV && (webfrontend.data.AllianceEvents.getInstance().removeListener(u, this.__Rv, this), this.__AV = !1);
    webfrontend.gui.CustomWindow.prototype._onClose.call(this)
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