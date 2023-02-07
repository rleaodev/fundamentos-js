const PI = 3.141592;
const pow = function(base, exp) {
  if (exp === 0) return 1;
  return base * pow(base, exp - 1);
}

module.exports = {
  PI,
  pow
}