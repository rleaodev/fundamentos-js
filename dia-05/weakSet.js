// const ws = new WeakSet();
// const obj1 = {};
// const obj2 = {};
// ws.add(obj1);
// ws.add(obj2);
// console.log(ws)
// console.log(ws.has(obj1))
// console.log(ws.has(obj2))
// console.log(ws.delete(obj1))
// console.log(ws.has(obj1));

// const retangulos = new WeakSet();

// function Retangulo(x, y) {
//   retangulos.add(this);
//   this.x = x;
//   this.y = y;
// };

// Retangulo.prototype.calculaArea = function() {
//   if (!retangulos.has(this)) throw "Tá louco maluco!?";
//   return this.x * this.y;
// };

// const retanguloDoCapeta = {
//   x: 25,
//   y: 2
// };

// const retangulo1 = new Retangulo(5, 3);
// const retangulo2 = new Retangulo(10, 2);

// console.log(retangulo1.calculaArea());
// console.log(retangulo2.calculaArea());

// console.log(retangulo1.calculaArea.call(retanguloDoCapeta));

