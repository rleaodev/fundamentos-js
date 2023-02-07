const soma = function (a, b) {
  return a + b;
};

const subtracao = function (a, b) {
  return a - b;
};

const calculadora = function(fn) {
  return function(p1, p2) {
    return fn(p1*2, p2*2);
  }
  
};

console.log(soma(1,2))
console.log(subtracao(1,2))
console.log(calculadora(soma)(10,2));
console.log(calculadora(subtracao)(1,2));
