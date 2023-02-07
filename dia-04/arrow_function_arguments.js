const somaEnquantoDerArguments = (...numeros) => {
  let total = 0;

  for (const argument in numeros) {
    total += numeros[argument];
  }

  return total;
};

console.log(somaEnquantoDerArguments(1,2))