var chai = require('chai')
var zombiedChai = require('zombied-chai')
chai.use(zombiedChai)
var expect = chai.expect
let app = require('../app')
const Browser = require('zombie');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('example.com', 3000);
const browser = new Browser();

describe('User visits signup page', function () {
  before(function () {
    return browser.visit('/');
  });

  after(function(){
    process.exit()
  })

  describe('main page', function () {
    it('should have a click me button on the page', function () {
      let input = browser.evaluate("$('button').text()")
      let actual = "Click me"
      expect(input).to.equal(actual)
    });
    describe('clicking the button', function(){
      beforeEach(function(){
        browser.click('button')
      })
      it('should change background color to red', function () {
        let input = browser.evaluate("$('body').css('background-color')")
        let actual = 'red'
        expect(input).to.equal(actual)
      })
      it('should change button text', function () {
        let input = browser.evaluate("$('button').text()")
        let actual = 'PHWOAR'
        expect(input).to.equal(actual)
      })
    })
  });

});