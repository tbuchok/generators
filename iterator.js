/*

USAGE:

var generator = function *(...args) {
  ...
}
var iterator = new Iterator(g);

iterator.each(function(i) {
  ...
});

*/

function Iterator(generator) {
  this.g = generator;
  this.forEach = function(callback) {
    while (true) {
      var result = this.g.next();
      if (result.done) break;
      callback(result.value);
    }
  };
  this.map = function(callback) {
    var result = [];
    this.forEach(function(i) {
      result.push(callback(i));
    });
    return result;
  };
  this.reduce = function(callback, value) {
    this.forEach(function(i) {
      return value = callback(value, i);
    });
    return value;
  };
}


module.exports = Iterator;