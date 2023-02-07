const pessoaPrototype = {
  get idade() {
    return (new Date()).getFullYear() - this.anoDeNascimento;  
  }
};

const criaPessoa = function (nome, sobrenome, anoDeNascimento) {
  const pessoa = {
    nome,
    sobrenome,
    anoDeNascimento,    
  };

  Object.setPrototypeOf(pessoa, pessoaPrototype);

  return pessoa;
}

const pessoa = criaPessoa('Fulano', 'da Silva', 1950);
const pessoa2 = criaPessoa('Beltrano', 'Neto', 1950);

console.log(pessoa);
console.log(pessoa.idade);

console.log(pessoa2);
console.log(pessoa2.idade);