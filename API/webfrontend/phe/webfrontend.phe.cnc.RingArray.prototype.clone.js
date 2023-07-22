function resize(n) {
    var r, i;
    if (typeof n == t && (n = Math.max(n, 0), n != this.__btA)) {
        if (r = this.__dL, this.__dL = new Array(n), r)
            if (n > this.__btB)
                for (i = 0; i < this.__btB; ++i) this.__dL[i] = r[(i + this.__btC) % this.__btB];
            else {
                for (i = 0; i < n; ++i) this.__dL[i] = r[(i + this.__btC + this.__btB - n) % this.__btB];
                for (i = n; i < this.__btB; ++i) r[(i + this.__btC + this.__btB - n) % this.__btB].dispose();
                this.__btB = n
            } this.__btC = 0;
        this.__btA = n
    }
}