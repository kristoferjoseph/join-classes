var assert = require('assert')
var joinClasses = require('./')

function fail(msg) {
  console.error('  ✘ ' + msg)
}

function pass(msg) {
  console.info('  ✔︎ ' + msg)
}

function test(label, func) {
  var f = false
  console.info(label || '')
  try {
    msg = func()
  }
  catch(e) {
    f = e.message
    fail(f)
  }
  finally {
    if (!f) {
      pass('passed')
    }
  }
}

test('should exist', function () {
  assert.ok(joinClasses)
})

test('should combine classes', function () {
  var nope
  var maybe = `fwee`
  assert.equal(joinClasses('a', 'b', 'c', maybe, nope, 1, 5, -1, 0, function foo () {}), 'a b c fwee')
})
