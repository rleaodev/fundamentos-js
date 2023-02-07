const pessoa = Object.create({});
const kNome = Symbol('nome');

pessoa.nome = "Fulano";
pessoa.sobrenome = "da Silva";
pessoa["nome-da-mae"] = "Mother";
pessoa[kNome] = 'valor';

console.log(pessoa);