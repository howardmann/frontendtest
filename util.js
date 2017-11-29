let util = module.exports = {}

// Dependencies
let _ = require('lodash')

util.getColor = () => {
  let colors = ['red', 'orange', 'blue', 'purple']
  return _.sample(colors)
}
