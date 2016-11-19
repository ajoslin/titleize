'use strict';
module.exports = function titleize (str) {
  str = String(str || '')

  return str.split(/\s+/)
    .map(mapWord)
    .join(' ')
}

function mapWord (word) {
  if (word.length <= 3) return word

  var hasSymbol = /[^a-zA-Z0-9]/.test(word)
  if (hasSymbol) return word

  return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
}
