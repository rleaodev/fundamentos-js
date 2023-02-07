const criaPessoa = (nome, sobrenome, anoDeNascimento) => (
  {
    nome,
    sobrenome,
    anoDeNascimento,
    get idade() {
      return (new Date()).getFullYear() - this.anoDeNascimento;  
    }
  })

const pessoa = criaPessoa('Fulano', 'de tal', 1990);

console.log(pessoa);