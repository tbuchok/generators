// Install nvm: https://github.com/creationix/nvm
// `$ nvm use 0.11`
// `$ node --harmony generator.js

var Iterator = require('./iterator');

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function *evens(array) {
  for (var i = 0; i < array.length; i++)
    if (array[i] % 2 === 0) yield array[i];
};

// === EACH

var iterator = new Iterator(evens(list));

iterator.forEach(function(i){
  console.log(i); // 2, 4, 6, 8, 10
});

// === MAP

iterator = new Iterator(evens(list));

var map = iterator.map(function(i) {
  return i;
});

console.log(map); // [2, 4, 6, 8, 10]

// === REDUCE

iterator = new Iterator(evens(list));

var reduce = iterator.reduce(function(prev, current) {
  return (prev || 0) + current;
});

console.log(reduce); // 30