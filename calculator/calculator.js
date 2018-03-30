const expect = require('chai').expect

const calculator = {
  sum: function(a, b) {
    return a + b
  },
  difference: function(a, b) {
    return a - b
  },
  product: function(a, b) {
    return a * b
  },
  quotient: function(a, b) {
    return a / b
  },
  square: function(a) {
    return a * a
  }
}

describe('calculator', function() {
  describe('sum', function() {
    it('returns the sum of two numbers', function() {
      expect(calculator.sum(5, 6)).to.eq(11)
    })
  })

  describe('difference', function() {
    it('returns the difference of two numbers', function() {
      expect(calculator.difference(10, 2)).to.eq(8)
    })
  })

  describe('product', function() {
    it('returns the product of two numbers', function() {
      expect(calculator.product(5, 5)).to.eq(25)
    })
  })

  describe('quotient', function() {
    it('returns the quotient of two numbers', function() {
      expect(calculator.quotient(10, 2)).to.eq(5)
    })
  })

  describe('square', function() {
    it('returns the square of a given number', function() {
      expect(calculator.square(6)).to.eq(36)
    })
  })
})
