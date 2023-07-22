webfront prototypeend.phe.cnc.res.Language[14934 - 0]
function getInstance() {
    if (this.$$instance === null) throw new Error(lt + this + w);
    return this.$$instance || (this.$$allowconstruct = !0, this.$$instance = null, this.$$instance = new this, delete this.$$allowconstruct), this.$$instance
}

function tryExtractJsonCodedMessage(i) {
    var f = null,
        e = null,
        o = null,
        u, s, r;
    if (!!i && i.toString().charAt(0) === it) try {
        if (u = qx.lang.Json.parse(i), s = (ct + qx.locale.Manager.getInstance().getLocale()).toLowerCase(), u.hasOwnProperty(n))
            for (r in u[n])
                if (!!r)
                    if (r.toLowerCase() == s.toLowerCase()) {
                        f = u[n][r];
                        break
                    } else r.toLowerCase() == si ? e = u[n][r] : (r.toLowerCase() == t || r.toLowerCase() == ui) && (o = u[n][r])
    } catch (c) {
        console.log(h + c);
        throw c;
    }
    return f || e || o || (i ? i.toString() : i)
}