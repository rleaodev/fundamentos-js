const soma =  (a, b) => a + b;
const subtracao =  (a, b) => a - b;
const calculadora = (fn) => (p1, p2) => fn(p1*2, p2*2);

console.log(soma(1,2))
console.log(subtracao(1,2))
console.log(calculadora(soma)(10,2));
console.log(calculadora(subtracao)(1,2));

const fn = () => ({
  nome: 'Doido',
  idade: 20,
});

console.log(fn());