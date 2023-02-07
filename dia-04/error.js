const Pessoa = function(nome, sobrenome, anoDeNascimento) {
  this.nome = nome,
  this.sobrenome = sobrenome,
  this.anoDeNascimento = anoDeNascimento
};

Pessoa.prototype.getIdade = function() {
  if (this.anoDeNascimento < 1970) {
    throw "Muito velho";
  }

  return (new Date()).getFullYear() - this.anoDeNascimento;  
};

const pessoa = new Pessoa('Foo', 'Bar', 1969);

try {
  pessoa.getIdade();
} catch(e) {
  console.error(e);
}


const fn = function(p) {
  try {
    p.getIdade()
  } catch(e) {
   console.log("Ferrou");
  }
};

const fn2 = function() {
  try {
    fn();
  } catch (e) {
    console.error(e);
  }
};

fn2();