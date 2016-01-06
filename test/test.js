var mround = require('../index');
var assert = require('assert');

suite('mround', function() {
  test('more than half of multiple- round up', function() {
    var actual = mround(49, 50);
    assert.equal(actual, 50);
  });

  test('less than half of multiple- round down', function() {
    var actual = mround(49, 100);
    assert.equal(actual, 0);
  });

  test('exactly half of multiple- round up', function() {
    var actual = mround(50, 100);
    assert.equal(actual, 100);
  });

  test('multiple is zero- return NaN', function() {
    var actual = mround(49, 0);
    assert.ok(isNaN(actual));
  });

  test('number and multiple have different signs- return NaN', function() {
    var actual = mround(49, -50);
    assert.ok(isNaN(actual));
  });
});