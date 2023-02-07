const pessoa = {
  nome: "Fulano",
  sobrenome: "da Silva",
};

const pessoa2 = {
  nome: "Fulano",
  sobrenome: "da Silva",
};

console.log(pessoa == pessoa2);
console.log(pessoa === pessoa2);

let tudoIgual = true;

for (let key in pessoa) {
  if (!tudoIgual) {
    return;
  }
  
  if (pessoa[key] !== pessoa2[key]) {
    tudoIgual = false
  }
}

console.log(JSON.stringify(pessoa) === JSON.stringify(pessoa2));