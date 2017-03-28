var filter = Array.prototype.filter
module.exports = function joinClasses () {
  return filter.call(arguments, function (s) {
    return s && 'string' === typeof s
  }).join(' ').trim()
}
