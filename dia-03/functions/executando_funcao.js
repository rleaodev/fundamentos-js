const soma = function (a = 0, b = 0) {
  return a + b;
};

const somaEnquantoDerRestParam = function(msg = '', ...numeros) {
  let total = 0;

  for (const numero of numeros) {
    total += numero;
  }

  return `${msg}: ${total}`;
};

const somaEnquantoDerArguments = function() {
  let total = 0;

  for (const argument in arguments) {
    total += arguments[argument];
  }

  return total;
};

// console.log(soma(1,1));
// console.log(somaEnquantoDerRestParam(1,2,3,4,5,6,7,8,9,10));
// console.log(somaEnquantoDerArguments(1,2,3,4,5,6,7,8,9,10));

// console.log(somaEnquantoDerRestParam('daora', 1, 2, 3))
console.log(somaEnquantoDerArguments(1, 2, 3))
