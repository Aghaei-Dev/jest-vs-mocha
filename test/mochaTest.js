const assert = require('assert')
const expect = require('chai').expect

const sum = require('../src/sum')
const upperCase = require('../src/upperCase')

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1)
    })
    it('should return the index when present', () => {
      assert.equal([1, 2, 3].indexOf(2), 1)
    })
  })
})

describe('#capitalize', () => {
  it('capitalizes the first word in a string', () => {
    expect(upperCase('hello')).to.equal('HELLO')
  })
})

describe('#sum', () => {
  it('sum of 2+4 must be 6', () => {
    expect(sum(2, 4)).to.equal(6)
  })
})
