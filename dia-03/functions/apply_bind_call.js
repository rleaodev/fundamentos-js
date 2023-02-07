const saudacao = function(inicio = '', x = '') {
  return `${inicio}! Me chamo ${this.nome} ${this.sobrenome}`;
};

const pessoa = {
  nome: 'Fulano',
  sobrenome: 'da Silva',
};

const pessoa2 = {
  nome: 'Beltrano',
  sobrenome: 'Neto',
};

const minhaSaudacaoComBind = saudacao.bind(pessoa2);

console.log(saudacao.call(pessoa, 'qualquer coisa'));
console.log(saudacao.apply(pessoa, ['qualquer coisa']));

// console.log(saudacao.call(pessoa, 'Oi'));
// console.log(saudacao.apply(pessoa2, ['Salve!']));
console.log(minhaSaudacaoComBind('Falae'));