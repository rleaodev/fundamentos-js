const soma =  (a, b) =>  a + b;

const subtracao =  (a, b) => a - b;

const calculadora = fn => {
  return (p1, p2) => {
    return fn(p1*2, p2*2);
  }  
};

const fn = () => {
  console.log('minha fn');
}


console.log(soma(1,2))
console.log(subtracao(1,2))
console.log(calculadora(soma)(10,2));
console.log(calculadora(subtracao)(1,2));
fn();