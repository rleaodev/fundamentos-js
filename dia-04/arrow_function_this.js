
// this.nome = 'Foobar';
// this.sobrenome = 'Barfoo';

const pessoa = {
  nome: 'Fulano',
  sobrenome: 'da Silva',  
  saudacao: () => {
    return `Olá! Me chamo ${this.nome} ${this.sobrenome}`;
  }
};

console.log(pessoa.saudacao())