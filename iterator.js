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
      try { 
        callback(result.value);
      } catch (e) {
        if (e.message === Iterator.StopIteration) break;
        else throw e;
      }
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

Iterator.StopIteration = 'StopIteration';


module.exports = Iterator;