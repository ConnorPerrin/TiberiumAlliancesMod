function useElement(n) {
    qx.html.Element.prototype.useElement.call(this, n);
    this.setRoot(!0);
    qx.html.Element._modified[this.toHashCode()] = this
}