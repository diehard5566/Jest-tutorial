const functions = require('./functions')
const axios = require('axios')

// beforeEach(() => initDataBase())
// afterEach(() => closeDataBase())
// beforeAll(() => initDataBase())
// afterAll(() => closeDataBase())

// const initDataBase = () => console.log('Database Initialized...')
// const closeDataBase = () => console.log('Database Closed...')
const nameCheck = () => console.log('Checking Name...')

describe('Checking Name', () => {
    beforeEach(() => nameCheck())

    test('User is Jeff', () => {
        const user = 'Jeff'
        expect(user).toBe('Jeff')
    })

    test('User is Karen', () => {
        const user = 'Karen'
        expect(user).toBe('Karen')
    })
})

//toBe
test('Adds 2+2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2+2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

// check for truthy & falsy values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

//toEqual
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Brad', lastName: 'Traversy' })
})

//Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800
    const load2 = 700
    expect(load1 + load2).toBeLessThan(1600)
})

//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/)
})

//Arrays
test('Admin should be in username', () => {
    usernames = ['john', 'karen', 'admin']
    expect(usernames).toContain('admin')
})

//Working with async data

//Promise
test('User fetch name should be Leanne Graham', () => {
    expect.assertions(1)
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham')
    })
})

//Async Await
test('User fetch name should be Leanne Graham', async () => {
    expect.assertions(1)
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})
