console.log('helper.js');
function sum(x, y) {
  return x + y;
}
function minus(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}

// Exportuojam
module.exports = {
  sum,
  minus,
  multiply,
};
