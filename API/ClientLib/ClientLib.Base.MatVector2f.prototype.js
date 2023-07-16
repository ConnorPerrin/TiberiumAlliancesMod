function Equals(n) {
    return $I.NZIFZB.HYSGNS(n.X, this.X) && $I.NZIFZB.HYSGNS(n.Y, this.Y)
}

function Dot(n) {
    return this.X * n.X + this.Y * n.Y
}

function GetLengthSquared() {
    return this.RQLAIY(this)
}

function Subtract(n) {
    return (new $I.VXTCCA).BNRGRM(this.X - n.X, this.Y - n.Y)
}

function Normalize() {
    var n = 1 / Math.sqrt(this.LZWLMY());
    this.X *= n;
    this.Y *= n
}