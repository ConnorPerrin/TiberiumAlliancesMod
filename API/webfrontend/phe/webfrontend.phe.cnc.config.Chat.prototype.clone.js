function getFontSize anonymous() {
    this.getFontSize.$$install && this.getFontSize.$$install();
    return this.getFontSize.apply(this, arguments);
}

function setFontSize anonymous() {
    this.setFontSize.$$install && this.setFontSize.$$install.call(this);
    return this.setFontSize.apply(this, arguments);
}

function resetFontSize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeFontSize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeFontSize() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getMaxLines anonymous() {
    this.getMaxLines.$$install && this.getMaxLines.$$install();
    return this.getMaxLines.apply(this, arguments);
}

function setMaxLines anonymous() {
    this.setMaxLines.$$install && this.setMaxLines.$$install.call(this);
    return this.setMaxLines.apply(this, arguments);
}

function resetMaxLines() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeMaxLines() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeMaxLines() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getFadeTime anonymous() {
    this.getFadeTime.$$install && this.getFadeTime.$$install();
    return this.getFadeTime.apply(this, arguments);
}

function setFadeTime anonymous() {
    this.setFadeTime.$$install && this.setFadeTime.$$install.call(this);
    return this.setFadeTime.apply(this, arguments);
}

function resetFadeTime() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeFadeTime() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeFadeTime() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getTimeStamp anonymous() {
    this.getTimeStamp.$$install && this.getTimeStamp.$$install();
    return this.getTimeStamp.apply(this, arguments);
}

function setTimeStamp anonymous() {
    this.setTimeStamp.$$install && this.setTimeStamp.$$install.call(this);
    return this.setTimeStamp.apply(this, arguments);
}

function resetTimeStamp() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeTimeStamp() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTimeStamp() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
}

function getTimeStampColor anonymous() {
    this.getTimeStampColor.$$install && this.getTimeStampColor.$$install();
    return this.getTimeStampColor.apply(this, arguments);
}

function setTimeStampColor anonymous() {
    this.setTimeStampColor.$$install && this.setTimeStampColor.$$install.call(this);
    return this.setTimeStampColor.apply(this, arguments);
}

function resetTimeStampColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, b)
}

function setRuntimeTimeStampColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, o, arguments)
}

function resetRuntimeTimeStampColor() {
    return qx.core.Property.executeOptimizedSetter(this, n, i, g)
} [object channelColorsObject]
function getChannelColor(n) {
    return this.channelColors.hasOwnProperty(n) ? this.channelColors[n] : this.channelColors.global
}

function setOptions(n) {
    n.hasOwnProperty(o) && this.setTimeStamp(n.ts);
    n.hasOwnProperty(i) && this.setTimeStampColor(n.tsc)
}

function getOptions() {
    return {
        ts: this.getTimeStamp(),
        tsc: this.getTimeStampColor()
    }
} [object channelColorsObject]