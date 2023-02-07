const criaPessoa = function (nome, sobrenome, anoDeNascimento) {
  return {
    nome,
    sobrenome,
    anoDeNascimento,
    get idade() {
      return (new Date()).getFullYear() - this.anoDeNascimento;  
    }
  }
}

const pessoa = criaPessoa('Fulano', 'da Silva', 1950);
const pessoa2 = criaPessoa('Beltrano', 'Neto', 1950);

console.log(pessoa);
console.log(pessoa.idade);

console.log(pessoa2);
console.log(pessoa2.idade);