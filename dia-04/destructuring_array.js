const pessoa = 'Fulano;de tal;1990'.split(';');
const [nome, , anoDeNascimento = ''] = pessoa;
// const nome = pessoa[0];
// const sobrenome = pessoa[1];
// const anoDeNascimento = pessoa[2];

console.log({
  nome,
  anoDeNascimento
});

function fn([nome, , anoDeNascimento]) {
  console.log({
    nome,
    anoDeNascimento
  });
}

fn(pessoa)