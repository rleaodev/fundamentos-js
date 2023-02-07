const pessoa = {
  nome: 'Fulano',
  sobrenome: 'da Silva',
  anoDeNascimento: 1950,
  get idade() {
    return (new Date()).getFullYear() - this.anoDeNascimento;
  }
};

const pessoa2 = {
  nome: 'Beltrano',
  sobrenome: 'Neto',
  anoDeNascimento: 1985,
  get idade() {
    return (new Date()).getFullYear() - this.anoDeNascimento;
  }
};

console.log(pessoa);
console.log(pessoa.idade);

console.log(pessoa2);
console.log(pessoa2.idade);