const chaveComputada = "minhaChaveBolada";
const kNome = Symbol('nome');

const pessoa = {
  nome: "Fulano",
  sobrenome: "da Silva",
  "nome-da-mae": "Mother",
  [chaveComputada]: "foobar",
  1: 'um'
};

pessoa[kNome] = 'valor';

console.log(pessoa);