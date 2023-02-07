const wm = new WeakMap();
// // wm.set('chave', 'valor');
// const obj1 = {a: 1};
// const obj2 = {};
// wm.set(obj1, 'valorObj1');
// wm.set(obj2, 'valorObj2');
// console.log(wm);
// console.log(wm.has(obj1))
// console.log(wm.get(obj1))
// console.log(wm.delete(obj1))
// console.log(wm.has(obj1))
// console.log(wm.get(obj1))


// const areas = new WeakMap();
// const retangulo1 = {
//   x: 10,
//   y: 5,
// };

// const retangulo2 = {
//   x: 15,
//   y: 3,
// };

// function calculaArea(retangulo) {
//   const area = retangulo.x * retangulo.y;

//   if (areas.has(retangulo)) {
//     console.log('Do cache maroto');
//     return areas.get(retangulo);
//   }

//   areas.set(retangulo, area);
//   return area;
// }

// console.log(calculaArea(retangulo1));
// console.log(calculaArea(retangulo2));
// console.log(calculaArea(retangulo1));
// console.log(calculaArea(retangulo1));
// console.log(calculaArea(retangulo2));
// console.log(calculaArea({
//   x: 5,
//   y: 1
// }));