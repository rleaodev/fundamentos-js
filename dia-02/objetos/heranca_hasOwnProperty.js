const contasDaAgencia0001 = {
  ag: '0001',
};

const conta = {
  numero: '1222134',
  __proto__: contasDaAgencia0001,
};

for (let key in conta) {
  console.log(key, conta.hasOwnProperty(key))
}

console.log(conta.hasOwnProperty('ag'));
console.log(contasDaAgencia0001.hasOwnProperty('ag'));