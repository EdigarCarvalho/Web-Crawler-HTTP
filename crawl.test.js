const { normalizeUrl } = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeUrl test', () =>{
    const input = 'https://mylenna/muitolinda'
    const actual = normalizeUrl(input)
    const expected = 'mylenna/muitolinda'
    expect(actual).toEqual(expected)
})

