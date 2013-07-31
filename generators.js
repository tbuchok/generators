// Install nvm: https://github.com/creationix/nvm
// `$ nvm use 0.11`
// `$ node --harmony <this code>


var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evens = function *evens(array) {
  for (var i = 0; i < array.length; i++)
    if (array[i] % 2 === 0) yield array[i];
};

var g = evens(list);

while (true) {
  var result = g.next();
  if (result.done) break;
  console.log(result.value); // 2,4,6,8,10
}