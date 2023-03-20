const { normalizeUrl } = require('./crawl.js')
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
