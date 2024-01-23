const sum = require('../src/sum')
const upperCase = require('../src/upperCase')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('string that given must be UpperCase', () => {
  expect(upperCase('Aghaei-Dev')).toBe('AGHAEI-DEV')
})
