const _ = require('lodash')// TODO
 
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2); // it checks if the number is odd or even
 
console.log(myOddEvenArray);