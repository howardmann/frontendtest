let chai = require('chai')
let expect = chai.expect
let util = require('../util')

describe('#util', () => {
  it('should exist', () => expect(util).to.not.be.undefined)
  describe('.getColor', () => {
    it('should fetch a random color', () => {
      let colors = ['red', 'orange', 'blue', 'purple']
      let input = util.getColor()
      expect(colors).to.include(input)
    })
  })
})
