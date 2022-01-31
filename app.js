// JS modules varijantai
// ES6 Modules import/export
// import sum from './helper'
// CommonJS - Node default
// importuojam
const helper = require('./helper');

console.log('Does node work???!');

const rez = helper.sum(10, 500);
const rez1 = helper.minus(10, 500);

console.log('rez ===', rez, rez1);
