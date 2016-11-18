'use strict';
module.exports = function titleize (str) {
  str = String(str || '')

  return str.split(/\s+/)
    .map((value) => {
      if (value.length <= 3) return value

      const hasSymbol = /[^a-zA-Z0-9]/.test(value)
      if (hasSymbol) return value

      return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
    })
    .join(' ')
}
