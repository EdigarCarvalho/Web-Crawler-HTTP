const {JSDOM} = require('jsdom')

function getUrlsfromHtml(htmlBody, baseURL){
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')
    for(const linkElement of linkElements){
        urls.push(linkElement.href)
    }
    return urls
}

function normalizeUrl(urlstring){
    const objectUrl = new URL(urlstring)
    const urlnormalized = (`${objectUrl.hostname}${objectUrl.pathname}`)
    if((urlnormalized.length > 0) && urlnormalized.slice(-1) === '/') return urlnormalized.slice(0, -1)
    return urlnormalized
}

module.exports = {
    normalizeUrl,
    getUrlsfromHtml
}