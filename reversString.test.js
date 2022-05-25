const reverseString = require('./reversString')

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined()
})

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh')
})
