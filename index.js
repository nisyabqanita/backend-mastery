const message = (name) => {
    console.log(`Hello ${name}`);
}
// const myMessage = message('JavaScript');

// NPM chapter
const moment = require('moment');
 
const date = moment().format("MMM Do YY");
console.log(date);