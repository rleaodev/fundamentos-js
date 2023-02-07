import { PI, pow } from './math.mjs';
// import { PI as meuPI, pow as meuPow } from './math.mjs';
// import * as math from './math.mjs';

export default class Circle {
  constructor(raio) {
    this.raio = raio;
  }

  get area() {
    return PI * pow(this.raio, 2);
  }
}

export function foobar() {
  console.log('foobar');
}

export const nome = 'Doido';