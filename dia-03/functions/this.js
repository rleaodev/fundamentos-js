function that() {
  return this;
}

const pessoaProto = {
  saudacao() {
    return `Olá! Me chamo ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = {
  nome: 'Fulano',
  sobrenome: 'da Silva',  
  __proto__: pessoaProto
};



const pessoa2 = {
  nome: 'Fulano 2',
  sobrenome: 'da Silva 2',  
  __proto__: pessoaProto
};

console.log(that());
console.log(pessoa.saudacao())
console.log(pessoa2.saudacao())
console.log(pessoaProto.saudacao())