const { PI, pow } = require('./math');

class Circle {
  constructor(raio) {
    this.raio = raio;
  }

  get area() {
    return PI * pow(this.raio, 2);
  }
}

module.exports = {
  foobar: () => console.log('foobar'),
  nome: 'Doido',
  Circle
}