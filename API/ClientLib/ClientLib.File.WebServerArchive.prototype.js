function ContainFile(n) {
    return this.UOFHSN.hasOwnProperty(n)
}

function GetMetaData(n) {
    return this.UOFHSN.hasOwnProperty(n) ? this.UOFHSN[n].m : null
}

function GetPhysicalPath(n) {
    return this.UOFHSN.hasOwnProperty(n) ? this.VUUJAJ + n : null
}

function GetPhysicalHash(n) {
    return this.UOFHSN.hasOwnProperty(n) ? this.UOFHSN[n].h : null
}

function GetAtlasInfo(n) {
    return this.UOFHSN.hasOwnProperty(n) ? this.UOFHSN[n].a : null
}