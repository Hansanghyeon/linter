// JavaScript test file
const utils = {
  formatString: (str) => {
    if (!str || typeof str !== 'string') {
      return ''
    }
    return str.trim().toLowerCase()
  },

  calculateSum: (numbers) => {
    if (!Array.isArray(numbers)) {
      return 0
    }
    return numbers.reduce((sum, num) => sum + (typeof num === 'number' ? num : 0), 0)
  },

  debounce: (func, wait) => {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  },
}

class DataProcessor {
  constructor(data = []) {
    this.data = data
  }

  process() {
    return this.data.filter((item) => item != null).map((item) => utils.formatString(item.toString()))
  }

  addItem(item) {
    this.data.push(item)
    return this
  }
}

module.exports = { utils, DataProcessor }
