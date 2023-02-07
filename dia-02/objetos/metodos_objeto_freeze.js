const pessoa = {
  nome: 'Fulano',
  sobrenome: 'da Silva',
  idade: 20,
};

Object.freeze(pessoa);

pessoa.nome = 'Doido';
pessoa.sobrenome = 'Maluco';
pessoa.altura = 190;

delete pessoa.idade;

console.log(pessoa);
console.log(Object.isExtensible(pessoa));
console.log(Object.isSealed(pessoa));
console.log(Object.isFrozen(pessoa));