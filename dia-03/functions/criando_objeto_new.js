const Pessoa = function(nome, sobrenome, anoDeNascimento) {
  this.nome = nome,
  this.sobrenome = sobrenome,
  this.anoDeNascimento = anoDeNascimento
};

Pessoa.prototype.getIdade = function() {
  return (new Date()).getFullYear() - this.anoDeNascimento;  
};

String.prototype.transformToWordPascalCase = function() {
  const v = this.toString();

  return v.split(' ').map(word => word[0].toLocaleUpperCase() + word.substring(1)).join(' ');
}

console.log('abc dbc'.transformToWordPascalCase());

// Object.defineProperty(Pessoa.prototype, 'idade', {
//   get() {
//     return (new Date()).getFullYear() - this.anoDeNascimento;  
//   }
// });

const pessoa = new Pessoa('Fulano', 'da Silva', 1950);
const pessoa2 = new Pessoa('Beltrano', 'Neto', 1985);

console.log(pessoa);
console.log(pessoa.getIdade());

console.log(pessoa2);
console.log(pessoa2.getIdade());

console.log(pessoa instanceof Pessoa);
console.log(pessoa instanceof Object);

const pessoa3 = new Pessoa('nome', 'sobrenome', 1029);
console.log(pessoa);
console.log(pessoa.__proto__);
console.log(pessoa.prototype);