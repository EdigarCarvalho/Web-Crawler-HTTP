function normalizeUrl(urlstring){
    const objectUrl = new URL(urlstring)
    return (`${objectUrl.hostname}${objectUrl.pathname}`)
}

module.exports = {
    normalizeUrl
}