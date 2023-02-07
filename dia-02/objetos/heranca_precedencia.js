const contasDaAgencia0001 = {
  ag: '0001',
};

const conta = {
  numero: '1222134',
  __proto__: contasDaAgencia0001,
};

const conta2 = Object.create(contasDaAgencia0001);
conta2.numero = '009209';
conta2.ag = '010101'

console.log(conta.ag);
console.log(conta2.ag);