const soma = function (a, b) {
  return a + b;
};

function somaNomeada(a, b) {
  return a + b;
}

const somaConstructor = Function('a', 'b', 'return a + b');

console.log(soma(1,1));
console.log(somaNomeada(2,2));
console.log(somaConstructor(3,3));

console.log(new soma(1,2));