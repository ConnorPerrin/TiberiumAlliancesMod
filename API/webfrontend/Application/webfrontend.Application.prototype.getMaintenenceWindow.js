function open() {
    webfrontend.gui.CustomWindow.prototype.open.call(this);
    this.centerPosition()
}

function showDowntimeAnnouncement() {
    var o = ClientLib.Data.MainData.GetInstance().get_Time(),
        s = ClientLib.Data.MainData.GetInstance().get_Server(),
        r = o.GetServerStep(),
        f = s.get_ShutdownScheduledStep(),
        t, i, e;
    r == 0 || f == 0 || r > f || (t = o.GetTimeSpan(f - r), t > 18e3) || (i = n, t > 60 ? i = this.tr(u, Math.ceil(t / 60)) : (e = this.__bBI, i = this.tr(v, e != 0 ? e : t)), ClientLib.Data.MainData.GetInstance().get_Chat().GenerateInfoMessage(i))
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