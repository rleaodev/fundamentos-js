const pessoa = {
  nome: 'Fulano',
  sobrenome: 'de tal',
  anoDeNascimento: 1980,
  empresa: {
    nome: 'Loucura Loucura'
  }
};

const { nome, sobrenome, anoDeNascimento, empresa } = pessoa;

console.log({
  nome, 
  sobrenome,
  anoDeNascimento,
  empresa: empresa.nome
});

const { a: numeroUm ,b: numeroDois } = { a: 1, b:2 };
console.log({
  numeroUm,
  numeroDois
});

function fn({ nome: nomeDaPessoa, sobrenome, anoDeNascimento, empresa }, nome) {

console.log({
    nome: nomeDaPessoa, 
    sobrenome,
    anoDeNascimento,
    empresa: empresa.nome
  });
}

fn(pessoa, 'doido');