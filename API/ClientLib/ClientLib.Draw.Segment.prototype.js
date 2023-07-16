function get_Width() {
    return Math.max(1, Math.max(this.x2 - this.x1, this.x1 - this.x2))
}

function get_Height() {
    return Math.max(1, Math.max(this.y2 - this.y1, this.y1 - this.y2))
}