const pessoa = {
  set nome(nome) {
    if (nome.length < 2) {
      console.error('Nome muito pequeno');
    }
    this._nome = nome;
  },
  set sobrenome(sobrenome) {
    this._sobrenome = sobrenome;
  },

  get saudacao() {
    return `Olá! Me chamo ${this._nome} ${this._sobrenome}`;
  }
};

const pessoa_sem_setEGet =  {
  nome: undefined,
  sobrenome: undefined,
  saudacao() {
    return `Olá! Me chamo ${this.nome} ${this.sobrenome}`;
  }
};


pessoa.nome = 'John';
pessoa.sobrenome = 'Snow'
console.log(pessoa.saudacao);

pessoa_sem_setEGet.nome = 'BLa bla';
pessoa_sem_setEGet.sobrenome = 'sBLa sbla';
console.log(pessoa_sem_setEGet.saudacao());
