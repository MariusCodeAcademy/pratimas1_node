// import
const casual = require('casual');
const dayjs = require('dayjs');

const city = casual.city;
// console.log('city ===', city);

const name = casual.first_name;
// console.log('name ===', name);

// console.log(casual.integer((from = -50), (to = 50)));

// npm script
// start = npm start
// visi kiti su npm run ""

const rez = dayjs().subtract(15, 'minutes').add(2, 'years');
const now = dayjs();
console.log('In 2 years and minus 15min ===', rez.toString());
