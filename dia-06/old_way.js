const Animal = function(nome, cor) {
  let _nome = nome;
  let _cor = cor;

  this.getNome = function() {
    return _nome;
  }

  this.getCor = function() {
    return _cor;
  }
}

Animal.prototype.come = function() {
  console.log(`${this.getNome()} tá comendo`);
}

const Gato = function(nome, cor) {
  Animal.call(this, nome, cor);
} 

const Cachorro = function(nome, cor) {
  Animal.call(this, nome, cor);
}

Gato.prototype = Animal.prototype;
Gato.prototype.mia = function() {
  console.log('miau');
}
Gato.criaGato = function(nome, cor) {
  return new Gato(nome, cor);
}

Cachorro.prototype = Animal.prototype;
Cachorro.prototype.late = function() {
  console.log('au au');
}
Cachorro.criaCachorro = function(nome, cor) {
  return new Cachorro(nome, cor);
}


const bichano = new Gato('bichano', 'branco');
const toto = new Cachorro('totó', 'preto');
const garfield = Gato.criaGato('Garfield', 'Caramelo');
const beethoven = Cachorro.criaCachorro('Beethoven', 'Branco e Caramelo');

bichano.come();
toto.come();
garfield.come();
beethoven.come();
bichano.mia();