const {JSDOM} = require('jsdom')

async function crawlPage(currentUrl){
    console.log(`actively crawling: ${currentUrl}`)

    const res = await fetch(currentUrl)
    console.log(res.text())
}

function getUrlsfromHtml(htmlBody, baseURL){
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')

    for(const linkElement of linkElements){
        if(linkElement.href.slice(0,1)==='/'){
            try {
                const urlObj = new URL(`${baseURL}${linkElement.href}`)
                urls.push(urlObj.href)                    
            } catch (error) {
                console.log(`error with the relative url:${error.message}`)
            }
        }
        else{
            try {
                const urlObj = new URL(linkElement.href)
                urls.push(urlObj.href)                    
            } catch (error) {
                console.log(`error with the absolute url:${error.message}`)
            }        
        }
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
    getUrlsfromHtml,
    crawlPage
}