const { normalizeUrl, getUrlsfromHtml} = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeUrl simple test', () =>{
    const input = 'https://vp/muitoburro'
    const actual = normalizeUrl(input)
    const expected = 'vp/muitoburro'
    expect(actual).toEqual(expected)
})

test('normalizeUrl PathSlash test', () =>{
    const input = 'https://vp/muitoburro/'
    const actual = normalizeUrl(input)
    const expected = 'vp/muitoburro'
    expect(actual).toEqual(expected)
})

test('normalizeUrl UpperCase test', () =>{
    const input = 'https://VP/muitoburro'
    const actual = normalizeUrl(input)
    const expected = 'vp/muitoburro'
    expect(actual).toEqual(expected)
})

test('normalizeUrl http test', () =>{
    const input = 'http://VP/muitoburro'
    const actual = normalizeUrl(input)
    const expected = 'vp/muitoburro'
    expect(actual).toEqual(expected)
})

test('getsUrlsfromHtml test', () =>{
    const inputHtmlBody = `
    <html>
        <body>
            <a href="https://blog.boot.dev/">
                Boot.dev blog
            </a>
        </body>
    </html>`
    const inputBaseUrl = "https://blog.boot.dev"   
    const actual = getUrlsfromHtml(inputHtmlBody, inputBaseUrl)
    const expected = ["https://blog.boot.dev/"]
    expect(actual).toEqual(expected)
})
