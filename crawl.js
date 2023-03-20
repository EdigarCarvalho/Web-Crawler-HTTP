function normalizeUrl(urlstring){
    const objectUrl = new URL(urlstring)
    const urlnormalized = (`${objectUrl.hostname}${objectUrl.pathname}`)
    if((urlnormalized.length > 0) && urlnormalized.slice(-1) === '/') return urlnormalized.slice(0, -1)
    return urlnormalized
}

module.exports = {
    normalizeUrl
}