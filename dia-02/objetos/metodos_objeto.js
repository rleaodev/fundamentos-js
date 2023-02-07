const banco = {
  nome: 'Banco maluco',
};

const contasDaAgencia0001 = Object.create(banco);
contasDaAgencia0001.ag = '0001';

const conta = {
  numero: '1222134',
  __proto__: contasDaAgencia0001,
};

const conta2 = {
  numero: '2020202',
}

Object.setPrototypeOf(conta2, contasDaAgencia0001);
console.log(Object.getPrototypeOf(conta2));

console.log(conta2.hasOwnProperty('ag'))
console.log(contasDaAgencia0001.hasOwnProperty('ag'));

const conta3 = {
  numero: 1,
  coisa: 'aquilo',
};

Object.assign(conta3, {
  foo: 'bar',
}, {
  foobar: 'barfoo',
});

const conta4 = {
  ...conta3,
  minhaPropDaConta4: 'foobarlaldfskljadlkjç',
  numero: 10,
}

console.log(conta3);
console.log(conta4);


console.log(Object.keys(conta3));
console.log(Object.values(conta3));
console.log(Object.entries(conta3));
