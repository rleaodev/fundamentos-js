class Animal {
  #nome;
  #cor;
  constructor (nome, cor) {
    this.#nome = nome;
    this.#cor = cor;
  }

  come() {
    console.log(`${this.#nome} tá comendo`);
  }

  static criaObjeto(nome, cor) {
    return new this(nome, cor);
  }
}

class Gato extends Animal {
  constructor(nome, cor) {
    super(nome, cor)
  }

  mia() {
    console.log('miau');
  }
}

class Cachorro extends Animal {
  #idade;

  constructor(nome, cor, idade = 0) {
    super(nome, cor);

    this.idade = idade;
  }

  get idade() {
    return this.#idade;
  }

  set idade(idade) {
    this.#idade = idade * 7;
  }

  late() {
    console.log('au au');
  }
}

const gato = new Gato('bichano', 'caramelo');
const cachorro = new Cachorro('totó', 'branco');
const garfield = Gato.criaObjeto('Garfield', 'Caramelo e preto');
const beethoven = Cachorro.criaObjeto('Beethoven', 'Branco e Caramelo');

console.log(gato) 
gato.come();
gato.mia();

console.log(garfield) 
garfield.come();
garfield.mia();

console.log(cachorro) 
cachorro.come();
cachorro.late();

console.log(beethoven) 
beethoven.come();
beethoven.late();
console.log(beethoven.idade);