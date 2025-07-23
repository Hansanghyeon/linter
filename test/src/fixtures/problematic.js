// Problematic JavaScript file
const utils = {
  badFormat: function (str) {
    if (!str) return ''
    return str.trim().toLowerCase()
  },

  unusedFunction: function () {
    return 'never used'
  },
}

// Missing semicolons, bad formatting
function badFunction(param1, param2, unusedParam) {
  console.log(param1, param2)
  const result = param1 + param2
  return result
}

// Global variables not defined
setTimeout(() => {
  console.log('test')
}, 1000)

clearTimeout(123)

module.exports = utils
