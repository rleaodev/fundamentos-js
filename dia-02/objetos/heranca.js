const contasDaAgencia0001 = {
  ag: '0001',
}

const conta1 = {
  ag: '0001',
  numero: '12345',
};

const conta2 = {
  ag: '0001',
  numero: '123212',
};

console.log(conta1)
console.log(conta2);
console.log(contasDaAgencia0001);

const conta3 = {
  numero: '1222134',
  __proto__: contasDaAgencia0001,
};

console.log(conta3);
console.log(conta3.ag);